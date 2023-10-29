<script setup>
import {useBaseKnightStore} from 'store/baseKnight.js';
import getRandomSquare from '~/assets/js/getRandomSquare.js';

const piece = ref(null);
const start = ref(null);
const end = ref(null);
const stats = ref(null);

const reset = () => {
    piece.value = ['bn', 'wn'][Math.floor(Math.random() * 2)];
    start.value = getRandomSquare();

    let tmp = getRandomSquare();
    while (tmp === start.value) {
        tmp = getRandomSquare();
    }
    end.value = tmp;
};

const handleWin = (e) => {
    stats.value = e;
    useBaseKnightStore().applyStats(e);
    reset();
};

const handleMove = (e) => {
    // eslint-disable-next-line
    console.log('move: ', e);
};

const handleInvalidMove = (e) => {
    // eslint-disable-next-line
    console.log('invalid move: ', e);
};

const handleStart = () => {
    // eslint-disable-next-line
    console.log('started');
};


onMounted(() => {
    reset();
});
</script>

<template>
    <h1>Horsey.gg</h1>
    <ChessBoard
        show-legal-moves
        :piece="piece"
        :start="start"
        :end="end"
        @start="handleStart"
        @win="handleWin"
        @move="handleMove"
        @invalid-move="handleInvalidMove"
    >
        <template #default>
            <StatsDisplay v-if="stats" :stats="stats" />
        </template>
    </ChessBoard>
</template>
