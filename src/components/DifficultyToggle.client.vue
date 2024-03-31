<script setup>
import {useUserStore} from 'store/user.js';
import {GOSH, SHUCKS, DANG, DARN, HECK, FRICK} from 'assets/js/constants.js';

const userStore = useUserStore();

defineProps({
    gosh: {type: Boolean, default: false},
    shucks: {type: Boolean, default: false},
    dang: {type: Boolean, default: false},
    darn: {type: Boolean, default: false},
    heck: {type: Boolean, default: false},
    frick: {type: Boolean, default: false},
});

const setGosh = () => { userStore.setDifficulty(GOSH); };
const setShucks = () => { userStore.setDifficulty(SHUCKS); };
const setDang = () => { userStore.setDifficulty(DANG); };
const setDarn = () => { userStore.setDifficulty(DARN); };
const setHeck = () => { userStore.setDifficulty(HECK); };
const setFrick = () => { userStore.setDifficulty(FRICK); };
</script>
<template>
    <div class="relative max-w-prose mx-auto w-full flex flex-col gap-1">
        <DifficultyRibbon gosh @click="setGosh" />
        <DifficultyRibbon shucks @click="setShucks" />
        <DifficultyRibbon dang @click="setDang" />
        <DifficultyRibbon darn @click="setDarn" />
        <DifficultyRibbon heck @click="setHeck" />
        <DifficultyRibbon frick @click="setFrick" />
    </div>

    <div class="relative max-w-prose mx-auto w-full mt-20" />
</template>

