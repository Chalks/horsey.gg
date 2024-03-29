<script setup>
import BaseStat from 'assets/js/models/BaseStat.js';
import {
    EASY,
    DAMN,
    FUCK,
    EVIL,
} from 'assets/js/constants.js';
import {useUserStore} from 'store/user.js';
import getRandomSquare from 'assets/js/getRandomSquare.js';

const board = ref(null);
const goalSquares = ref([]);
const userStore = useUserStore();
let stats;

// difficulty modifiers
const showLegalMoves = computed(() => userStore.selectedDifficulty <= EASY);
const disableLegalMoves = computed(() => {
    if (userStore.selectedDifficulty === DAMN) {
        return 1;
    }

    if (userStore.selectedDifficulty === FUCK) {
        return 2;
    }

    if (userStore.selectedDifficulty === EVIL) {
        return 3;
    }

    return 0;
});

const resetStats = () => {
    stats = {
        start: null,
        end: null,
        moves: 0,
        invalidMoves: 0,
        startPerformance: 0,
        endPerformance: 0,
        ms: 0,
    };
};

const handleWin = () => {
    userStore.saveFile.addBaseStat(new BaseStat({
        ...stats,
        difficulty: userStore.selectedDifficulty,
        date: Date.now(),
    }));

    resetStats();
    board.value.stop();
};

const handleStart = async () => {
    resetStats();

    // create goal
    goalSquares.value = [getRandomSquare()];

    // record initial stats
    stats.end = goalSquares.value[0];
    stats.startPerformance = performance.now();

    // draw the board
    await nextTick();
    board.value.ready();
};

const handleMove = ({from, to}) => {
    if (stats.moves === 0) {
        // on the first move we can find the starting position
        stats.start = from;
    }

    stats.moves += 1;

    if (goalSquares.value[0] === to) {
        // on the last move we can calculate timing
        stats.endPerformance = performance.now();
        stats.ms = stats.endPerformance - stats.startPerformance;

        handleWin();
    }
};

const handleInvalidMove = () => {
    stats.invalidMoves += 1;
};
</script>

<template>
    <div>
        <GameDifficultyToggle
            easy
            dang
            damn
            fuck
            evil
        />

        <GameDifficultyDescription easy>
            Show legal moves
        </GameDifficultyDescription>

        <GameDifficultyDescription dang damn fuck evil>
            Hide legal moves
        </GameDifficultyDescription>

        <GameDifficultyDescription damn fuck evil>
            Disable one legal move
        </GameDifficultyDescription>

        <GameDifficultyDescription fuck evil>
            Disable one more legal move
        </GameDifficultyDescription>

        <GameDifficultyDescription evil>
            Disable one more legal move
        </GameDifficultyDescription>
    </div>

    <ChessBoard
        ref="board"
        :show-legal-moves="showLegalMoves"
        :disable-legal-moves="disableLegalMoves"
        :goal-squares="goalSquares"
        class="mt-2"
        @start="handleStart"
        @move="handleMove"
        @invalid-move="handleInvalidMove"
    />
</template>
