<script setup>
import getRandomSquare from '~/assets/js/getRandomSquare.js';

const piece = ref(null);
const start = ref(null);
const end = ref(null);
const ready = computed(() => piece.value !== null
    && start.value !== null
    && end.value !== null);

const handleWin = (e) => {
    console.log('win', e);
    piece.value = null;
    start.value = null;
    end.value = null;
};

const handleMove = (e) => {
    console.log('move: ', e);
};

const handleInvalidMove = (e) => {
    console.log('invalid move: ', e);
};

const reset = () => {
    piece.value = ['bn', 'wn'][Math.floor(Math.random() * 2)];
    start.value = getRandomSquare();

    let tmp = getRandomSquare();
    while (tmp === start.value) {
        tmp = getRandomSquare();
    }
    end.value = tmp;
};
</script>

<template>
    <h1>Horsey.gg</h1>
    <ChessBoard
        v-if="ready"
        show-legal-moves
        :piece="piece"
        :start="start"
        :end="end"
        @win="handleWin"
        @move="handleMove"
        @invalid-move="handleInvalidMove"
    />
    <div
        v-else
        class="pb-[100%] bg-gray-300 relative"
        @click="reset"
    >
        <div class="absolute inset-0 flex items-center justify-center select-none">
            <span>Click to play</span>
        </div>
    </div>
</template>
