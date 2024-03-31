<script setup>
import {useUserStore} from 'store/user.js';
import {GOSH, SHUCKS, DANG, DARN, HECK, FRICK} from 'assets/js/constants.js';

const userStore = useUserStore();

const setGosh = () => { userStore.setDifficulty(GOSH); };
const setShucks = () => { userStore.setDifficulty(SHUCKS); };
const setDang = () => { userStore.setDifficulty(DANG); };
const setDarn = () => { userStore.setDifficulty(DARN); };
const setHeck = () => { userStore.setDifficulty(HECK); };
const setFrick = () => { userStore.setDifficulty(FRICK); };
</script>
<template>
    <div class="relative flex flex-col gap-1 overflow-clip w-8 h-full">
        <DifficultyRibbon gosh @click="setGosh" />
        <DifficultyRibbon shucks @click="setShucks" />
        <DifficultyRibbon dang @click="setDang" />
        <DifficultyRibbon darn @click="setDarn" />
        <DifficultyRibbon heck @click="setHeck" />
        <DifficultyRibbon frick @click="setFrick" />

        <div
            class="flex flex-col justify-end items-center grow bg-gradient-to-t ml-1 pb-1"
            :class="{
                'from-gosh': userStore.isGosh,
                'from-shucks': userStore.isShucks,
                'from-dang': userStore.isDang,
                'from-darn': userStore.isDarn,
                'from-heck': userStore.isHeck,
                'from-frick': userStore.isFrick,

                'text-gosh': userStore.isGosh,
                'text-shucks': userStore.isShucks,
                'text-dang': userStore.isDang,
                'text-darn': userStore.isDarn,
                'text-heck': userStore.isHeck,
                'text-frick': userStore.isFrick,
            }"
        >
            <div
                v-for="(char, index) in userStore.difficultyName"
                :key="`letter-${char}-${index}`"
                class="text-sm md:text-lg lg:text-xl xl:text-2xl mix-blend-color-dodge"
            >
                {{ char }}
            </div>
        </div>
    </div>
</template>

