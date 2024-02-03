<script setup>
import BaseStat from 'assets/js/models/BaseStat.js';
import {useUserStore} from 'store/user.js';
import getRandomSquare from 'assets/js/getRandomSquare.js';

const userStore = useUserStore();

const piece = ref(null);
const start = ref(null);
const end = ref(null);

const reset = () => {
    piece.value = ['bn', 'wn'][Math.floor(Math.random() * 2)];
    start.value = getRandomSquare();

    let tmp = getRandomSquare();
    while (tmp === start.value) {
        tmp = getRandomSquare();
    }
    end.value = tmp;
};

const handleWin = (winData) => {
    userStore.saveFile.addBaseStat(new BaseStat({
        start: start.value,
        end: end.value,
        moves: winData.moves,
        invalidMoves: winData.invalidMoves,
        ms: winData.ms,
        date: Date.now(),
    }));
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

const resetStats = () => {
    userStore.saveFile.resetBaseStats();
};

onMounted(() => {
    reset();
});
</script>

<template>
    <h1>Base Knight</h1>
    <ChessBoard
        show-legal-moves
        :piece="piece"
        :start="start"
        :end="end"
        @start="handleStart"
        @win="handleWin"
        @move="handleMove"
        @invalid-move="handleInvalidMove"
    />

    <div class="mt-4">
        <StatsDisplay />
    </div>

    <p>
        Reset stats, test mode only:
        <button type="button" @click="resetStats">Reset stats</button>
    </p>

    <p>The Base Knight game trains you on the basic knight moves.</p>
    <h3>fork knight</h3>
    <p>coming soon - find the square that forks two pieces</p>
    <h3>defense knight</h3>
    <p>coming soon - find a square that defends a piece</p>
    <h3>defended knight</h3>
    <p>coming soon - find a square that defends the knight</p>
    <h3>dodge knight</h3>
    <p>coming soon - get to a square while dodging all no-no squares</p>
    <h3>predict knight</h3>
    <p>coming soon - find a square X moves away from the knight</p>
</template>
