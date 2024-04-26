<script setup>
import MoveMachineStat from 'assets/js/models/MoveMachineStat.js';
import {GOSH, DANG, DARN, HECK, FRICK} from 'assets/js/constants.js';
import {useUserStore} from 'store/user.js';
import {useMoveMachineStore} from 'store/moveMachine.js';
import {useAchievementStore} from 'store/achievement.js';
import getRandomSquares from 'assets/js/getRandomSquares.js';

const board = ref(null);
const goalSquares = ref([]);
const goalVisited = ref([]);
const userStore = useUserStore();
const moveMachineStore = useMoveMachineStore();
const achievementStore = useAchievementStore();
let stats;

// achievement unlocks
const canGosh = true;
const canShucks = true;
const canDang = computed(() => achievementStore.unlocked || achievementStore.mmAchievements.shucks10);
const canDarn = computed(() => achievementStore.unlocked || achievementStore.mmAchievements.dang10);
const canHeck = computed(() => achievementStore.unlocked || achievementStore.mmAchievements.darn10);
const canFrick = computed(() => achievementStore.unlocked || achievementStore.mmAchievements.heck10);

// difficulty modifiers
const showLegalMoves = computed(() => moveMachineStore.currentDifficulty === GOSH);
const disableLegalMoves = computed(() => {
    switch (moveMachineStore.currentDifficulty) {
        case DANG:
            return 1;
        case DARN:
            return 2;
        case HECK:
            return 3;
        case FRICK:
            return 4;
        default:
            return 0;
    }
});
const goalCount = computed(() => {
    if (moveMachineStore.currentDifficulty === HECK) {
        return 2;
    }

    return 1;
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

const reset = () => {
    resetStats();
    goalVisited.value = [];
    board.value.stop();
};

const handleWin = () => {
    userStore.saveFile.addMoveMachineStat(new MoveMachineStat({
        ...stats,
        difficulty: moveMachineStore.currentDifficulty,
        date: Date.now(),
    }));

    reset();
};

const handleStart = async () => {
    resetStats();

    // create goal
    goalSquares.value = getRandomSquares(goalCount.value);

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

    if (goalSquares.value.includes(to) && !goalVisited.value.includes(to)) {
        goalVisited.value.push(to);
    }

    if (goalSquares.value.length === goalVisited.value.length) {
        // on the last move we can calculate timing
        stats.endPerformance = performance.now();
        stats.ms = stats.endPerformance - stats.startPerformance;

        handleWin();
    }
};

const handleInvalidMove = () => {
    stats.invalidMoves += 1;
};

const handleDifficultyChange = (difficulty) => {
    if (difficulty !== moveMachineStore.currentDifficulty) {
        reset();
    }
    moveMachineStore.setDifficulty(difficulty);
};
</script>

<template>
    <GameTitleBlock
        :difficulty="moveMachineStore.currentDifficulty"
        title="Move Machine"
        class="mb-4"
        description="Move the horsey to the indicated square"
    />

    <div class="relative pr-8">
        <ChessBoard
            ref="board"
            :show-legal-moves="showLegalMoves"
            :disable-legal-moves="disableLegalMoves"
            :goal-squares="goalSquares"
            :goal-visited="goalVisited"
            class="flex-grow border border-gray-700"
            @start="handleStart"
            @move="handleMove"
            @invalid-move="handleInvalidMove"
        />
        <div class="absolute top-0 right-0 bottom-0">
            <GameDifficultyToggle
                :difficulty="moveMachineStore.currentDifficulty"
                :can-gosh="canGosh"
                :can-shucks="canShucks"
                :can-dang="canDang"
                :can-darn="canDarn"
                :can-heck="canHeck"
                :can-frick="canFrick"
                @change="handleDifficultyChange"
            />
        </div>
    </div>


    <div class="mt-1">
        <GameDifficultyDescription :difficulty="moveMachineStore.currentDifficulty" gosh>
            Show legal moves
        </GameDifficultyDescription>

        <GameDifficultyDescription :difficulty="moveMachineStore.currentDifficulty" shucks dang darn heck frick>
            Hide legal moves
        </GameDifficultyDescription>

        <GameDifficultyDescription :difficulty="moveMachineStore.currentDifficulty" dang darn heck frick>
            Disable one legal move
        </GameDifficultyDescription>

        <GameDifficultyDescription :difficulty="moveMachineStore.currentDifficulty" darn heck frick>
            Disable one more legal move
        </GameDifficultyDescription>

        <GameDifficultyDescription :difficulty="moveMachineStore.currentDifficulty" heck frick>
            Disable one more legal move
        </GameDifficultyDescription>

        <GameDifficultyDescription :difficulty="moveMachineStore.currentDifficulty" frick>
            Disable one more legal move
        </GameDifficultyDescription>
    </div>
</template>
