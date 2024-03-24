<script setup>
import {useUserStore} from 'store/user.js';

seo({
    pageTitle: 'horsey.gg',
});

const userStore = useUserStore();

const resetStats = () => {
    userStore.saveFile.resetBaseStats();
};
</script>

<template>
    <h1>Base Horsey</h1>
    <GameBaseHorsey />

    <div class="xl:fixed xl:right-0 xl:top-0 xl:bottom-0 xl:w-full xl:max-w-side xl:overflow-auto z-50">
        <div class="xl:mx-4 xl:mt-[10.5rem]">
            <StatsDisplay />
        </div>
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
