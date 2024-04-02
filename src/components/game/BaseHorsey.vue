<script setup>
import BaseStat from 'assets/js/models/BaseStat.js';
import {GOSH, DANG, DARN, HECK, FRICK} from 'assets/js/constants.js';
import {useUserStore} from 'store/user.js';
import {useAchievementsStore} from 'store/achievements.js';
import getRandomSquare from 'assets/js/getRandomSquare.js';

const board = ref(null);
const goalSquares = ref([]);
const userStore = useUserStore();
const achievementsStore = useAchievementsStore();
let stats;

// achievement unlocks
const canGosh = true;
const canShucks = true;
const canDang = computed(() => achievementsStore.mmWinShucks10);
const canDarn = computed(() => achievementsStore.mmWinDang10);
const canHeck = computed(() => achievementsStore.mmWinDarn10);
const canFrick = computed(() => achievementsStore.mmWinHeck10);

// difficulty modifiers
const showLegalMoves = computed(() => userStore.selectedDifficulty === GOSH);
const disableLegalMoves = computed(() => {
    if (userStore.selectedDifficulty === DANG) {
        return 1;
    }

    if (userStore.selectedDifficulty === DARN) {
        return 2;
    }

    if (userStore.selectedDifficulty === HECK) {
        return 3;
    }

    if (userStore.selectedDifficulty === FRICK) {
        return 4;
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
    <GameTitleBlock title="Move Machine" class="mb-4" />

    <div class="relative pr-8">
        <ChessBoard
            ref="board"
            :show-legal-moves="showLegalMoves"
            :disable-legal-moves="disableLegalMoves"
            :goal-squares="goalSquares"
            class="flex-grow"
            @start="handleStart"
            @move="handleMove"
            @invalid-move="handleInvalidMove"
        />
        <div class="absolute top-0 right-0 bottom-0">
            <DifficultyToggle
                :gosh="canGosh"
                :shucks="canShucks"
                :dang="canDang"
                :darn="canDarn"
                :heck="canHeck"
                :frick="canFrick"
            />
        </div>
    </div>


    <div class="mt-1">
        <GameDifficultyDescription gosh>
            Show legal moves
        </GameDifficultyDescription>

        <GameDifficultyDescription shucks dang darn heck frick>
            Hide legal moves
        </GameDifficultyDescription>

        <GameDifficultyDescription dang darn heck frick>
            Disable one legal move
        </GameDifficultyDescription>

        <GameDifficultyDescription darn heck frick>
            Disable one more legal move
        </GameDifficultyDescription>

        <GameDifficultyDescription heck frick>
            Disable one more legal move
        </GameDifficultyDescription>

        <GameDifficultyDescription frick>
            Disable one more legal move
        </GameDifficultyDescription>
    </div>
</template>
