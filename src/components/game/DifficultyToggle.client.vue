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
    <div>
        <label class="text-xs uppercase tracking-widest">Difficulty</label>
        <div class="flex">
            <div
                v-if="gosh"
                class="cursor-pointer text-sm font-bold p-1 grow text-center select-none"
                :class="{'bg-gosh': userStore.selectedDifficulty === GOSH}"
                @click="setGosh"
            >
                GOSH
            </div>

            <div
                v-if="shucks"
                class="cursor-pointer text-sm font-bold p-1 grow text-center select-none"
                :class="{'bg-shucks': userStore.selectedDifficulty === SHUCKS}"
                @click="setShucks"
            >
                SHUCKS
            </div>

            <div
                v-if="dang"
                class="cursor-pointer text-sm font-bold p-1 grow text-center select-none"
                :class="{'bg-dang': userStore.selectedDifficulty === DANG}"
                @click="setDang"
            >
                DANG
            </div>

            <div
                v-if="darn"
                class="cursor-pointer text-sm font-bold p-1 grow text-center select-none"
                :class="{'bg-darn': userStore.selectedDifficulty === DARN}"
                @click="setDarn"
            >
                DARN
            </div>

            <div
                v-if="heck"
                class="cursor-pointer text-sm font-bold p-1 grow text-center select-none"
                :class="{'bg-heck': userStore.selectedDifficulty === HECK}"
                @click="setHeck"
            >
                HECK
            </div>

            <div
                v-if="frick"
                class="cursor-pointer text-sm font-bold p-1 grow text-center select-none"
                :class="{'bg-frick': userStore.selectedDifficulty === FRICK}"
                @click="setFrick"
            >
                FRICK
            </div>
        </div>
    </div>
</template>
