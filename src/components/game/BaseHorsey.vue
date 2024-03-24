<script setup>
import BaseStat from 'assets/js/models/BaseStat.js';
import {useUserStore} from 'store/user.js';
import getRandomSquare from 'assets/js/getRandomSquare.js';

const board = ref(null);
const showLegalMoves = ref(false);
const goalMarkers = ref([]);
const userStore = useUserStore();
let stats;

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

        userStore.saveFile.addBaseStat(new BaseStat({
            ...stats,
            date: Date.now(),
        }));

        resetStats();
        board.value.stop();
    }
};

const handleInvalidMove = () => {
    stats.invalidMoves += 1;
};
</script>

<template>
    <ChessBoard
        ref="board"
        :show-legal-moves="showLegalMoves"
        :goal-markers="goalMarkers"
        @start="handleStart"
        @move="handleMove"
        @invalid-move="handleInvalidMove"
    />
</template>
