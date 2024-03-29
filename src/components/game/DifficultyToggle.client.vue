<script setup>
import {useUserStore} from 'store/user.js';
import {
    EASY,
    DANG,
    DAMN,
    FUCK,
    EVIL,
} from 'assets/js/constants.js';

const userStore = useUserStore();

defineProps({
    easy: {type: Boolean, default: false},
    dang: {type: Boolean, default: false},
    damn: {type: Boolean, default: false},
    fuck: {type: Boolean, default: false},
    evil: {type: Boolean, default: false},
});

const setEasy = () => { userStore.setDifficulty(EASY); };
const setDang = () => { userStore.setDifficulty(DANG); };
const setDamn = () => { userStore.setDifficulty(DAMN); };
const setFuck = () => { userStore.setDifficulty(FUCK); };
const setEvil = () => { userStore.setDifficulty(EVIL); };
</script>
<template>
    <div>
        <label class="text-xs uppercase tracking-widest">Difficulty</label>
        <div class="flex">
            <div
                v-if="easy"
                class="cursor-pointer text-sm font-bold p-1 grow text-center select-none"
                :class="{'bg-easy': userStore.selectedDifficulty === EASY}"
                @click="setEasy"
            >
                EASY
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
                v-if="damn"
                class="cursor-pointer text-sm font-bold p-1 grow text-center select-none"
                :class="{'bg-damn': userStore.selectedDifficulty === DAMN}"
                @click="setDamn"
            >
                DAMN
            </div>

            <div
                v-if="fuck"
                class="cursor-pointer text-sm font-bold p-1 grow text-center select-none"
                :class="{'bg-fuck': userStore.selectedDifficulty === FUCK}"
                @click="setFuck"
            >
                FUCK
            </div>

            <div
                v-if="evil"
                class="cursor-pointer text-sm font-bold p-1 grow text-center select-none"
                :class="{'bg-evil': userStore.selectedDifficulty === EVIL}"
                @click="setEvil"
            >
                EVIL
            </div>
        </div>
    </div>
</template>
