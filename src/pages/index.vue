<script setup>
import {useUserStore} from 'store/user.js';

seo({
    pageTitle: 'horsey.gg',
});

const userStore = useUserStore();

const resetStats = () => {
    userStore.saveFile.reset();
};
</script>

<template>
    <GameMoveMachine />

    <div class="mt-4">
        <StatsDisplay />
    </div>

    <p>
        Reset stats, test mode only:
        <button type="button" @click="resetStats">Reset stats</button>
    </p>

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
