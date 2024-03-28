<script setup>
import BaseStat from 'assets/js/models/BaseStat.js';
import {EASY} from 'assets/js/constants.js';
import {useUserStore} from 'store/user.js';
import getRandomSquare from 'assets/js/getRandomSquare.js';

const board = ref(null);
const goalMarkers = ref([]);
const userStore = useUserStore();
let stats;

// difficulty modifiers
const showLegalMoves = computed(() => userStore.selectedDifficulty <= EASY);

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
    goalMarkers.value = [getRandomSquare()];

    // record initial stats
    stats.end = goalMarkers.value[0];
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

    if (goalMarkers.value[0] === to) {
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
        <GameDifficultyToggle easy dang />

        <GameDifficultyDescription easy>
            Show legal moves
        </GameDifficultyDescription>

        <GameDifficultyDescription dang>
            Hide legal moves
        </GameDifficultyDescription>
    </div>

    <ChessBoard
        ref="board"
        :show-legal-moves="showLegalMoves"
        :goal-markers="goalMarkers"
        class="mt-2"
        @start="handleStart"
        @move="handleMove"
        @invalid-move="handleInvalidMove"
    />
</template>
