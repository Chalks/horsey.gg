<script setup>
import {GOSH, SHUCKS, DANG, DARN, HECK, FRICK} from 'assets/js/constants.js';
import difficultyName from 'assets/js/difficultyName.js';

defineProps({
    difficulty: {type: Number, default: GOSH},
    canGosh: {type: Boolean, default: false},
    canShucks: {type: Boolean, default: false},
    canDang: {type: Boolean, default: false},
    canDarn: {type: Boolean, default: false},
    canHeck: {type: Boolean, default: false},
    canFrick: {type: Boolean, default: false},
});

const emit = defineEmits(['change']);

const setGosh = () => { emit('change', GOSH); };
const setShucks = () => { emit('change', SHUCKS); };
const setDang = () => { emit('change', DANG); };
const setDarn = () => { emit('change', DARN); };
const setHeck = () => { emit('change', HECK); };
const setFrick = () => { emit('change', FRICK); };
</script>
<template>
    <div class="relative flex flex-col gap-1.5 overflow-clip w-8 h-full">
        <DifficultyRibbon :on="difficulty === GOSH" :disabled="!canGosh" gosh @click="setGosh" />
        <DifficultyRibbon :on="difficulty === SHUCKS" :disabled="!canShucks" shucks @click="setShucks" />
        <DifficultyRibbon :on="difficulty === DANG" :disabled="!canDang" dang @click="setDang" />
        <DifficultyRibbon :on="difficulty === DARN" :disabled="!canDarn" darn @click="setDarn" />
        <DifficultyRibbon :on="difficulty === HECK" :disabled="!canHeck" heck @click="setHeck" />
        <DifficultyRibbon :on="difficulty === FRICK" :disabled="!canFrick" frick @click="setFrick" />

        <div
            class="flex flex-col justify-end items-center grow bg-gradient-to-t ml-1 pb-1"
            :class="{
                'from-gosh': difficulty === GOSH,
                'from-shucks': difficulty === SHUCKS,
                'from-dang': difficulty === DANG,
                'from-darn': difficulty === DARN,
                'from-heck': difficulty === HECK,
                'from-frick': difficulty === FRICK,

                'text-gosh': difficulty === GOSH,
                'text-shucks': difficulty === SHUCKS,
                'text-dang': difficulty === DANG,
                'text-darn': difficulty === DARN,
                'text-heck': difficulty === HECK,
                'text-frick': difficulty === FRICK,
            }"
        >
            <div
                v-for="(char, index) in difficultyName(difficulty)"
                :key="`letter-${char}-${index}`"
                class="text-sm md:text-lg lg:text-xl xl:text-2xl mix-blend-color-dodge"
            >
                {{ char }}
            </div>
        </div>
    </div>
</template>

