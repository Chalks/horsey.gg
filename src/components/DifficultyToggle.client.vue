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
    <div class="relative max-w-prose mx-auto w-full flex gap-12">
        <div>
            <DifficultyRibbon gosh @click="setGosh" />
        </div>

        <div>
            <DifficultyRibbon shucks @click="setShucks" />
        </div>

        <div>
            <DifficultyRibbon dang @click="setDang" />
        </div>

        <div>
            <DifficultyRibbon darn @click="setDarn" />
        </div>

        <div>
            <DifficultyRibbon heck @click="setHeck" />
        </div>

        <div>
            <DifficultyRibbon frick @click="setFrick" />
        </div>
    </div>

    <div class="relative max-w-prose mx-auto w-full mt-20" />
</template>

