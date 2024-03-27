<script setup>
import {useUserStore} from 'store/user.js';
import {EASY, DANG, DAMN} from 'assets/js/constants.js';

const userStore = useUserStore();

defineProps({
    easy: {type: Boolean, default: false},
    dang: {type: Boolean, default: false},
    damn: {type: Boolean, default: false},
});

const setEasy = () => { userStore.setDifficulty(EASY); };
const setDang = () => { userStore.setDifficulty(DANG); };
const setDamn = () => { userStore.setDifficulty(DAMN); };
</script>
<template>
    <div>
        <label class="text-xs uppercase tracking-widest">Difficulty</label>
        <div class="flex border rounded overflow-hidden">
            <div
                v-if="easy"
                class="cursor-pointer px-2 grow text-center select-none border-l first:border-none"
                :class="{'bg-green-300': userStore.selectedDifficulty === EASY}"
                @click="setEasy"
            >
                EASY
            </div>

            <div
                v-if="dang"
                class="cursor-pointer px-2 grow text-center select-none border-l first:border-none"
                :class="{'bg-yellow-300': userStore.selectedDifficulty === DANG}"
                @click="setDang"
            >
                DANG
            </div>

            <div
                v-if="damn"
                class="cursor-pointer px-2 grow text-center select-none border-l first:border-none"
                :class="{'bg-red-300': userStore.selectedDifficulty === DAMN}"
                @click="setDamn"
            >
                DAMN
            </div>
        </div>
    </div>
</template>
