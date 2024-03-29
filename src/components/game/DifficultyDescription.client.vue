<script setup>
import {
    EASY,
    DANG,
    DAMN,
    FUCK,
    EVIL,
} from 'assets/js/constants.js';

import {useUserStore} from 'store/user.js';

const props = defineProps({
    easy: {type: Boolean, default: false},
    dang: {type: Boolean, default: false},
    damn: {type: Boolean, default: false},
    fuck: {type: Boolean, default: false},
    evil: {type: Boolean, default: false},
});

const userStore = useUserStore();

const isEasy = computed(() => props.easy && userStore.selectedDifficulty === EASY);
const isDang = computed(() => props.dang && userStore.selectedDifficulty === DANG);
const isDamn = computed(() => props.damn && userStore.selectedDifficulty === DAMN);
const isFuck = computed(() => props.fuck && userStore.selectedDifficulty === FUCK);
const isEvil = computed(() => props.evil && userStore.selectedDifficulty === EVIL);

const show = computed(() => isEasy.value
    || isDang.value
    || isDamn.value
    || isFuck.value
    || isEvil.value);
</script>

<template>
    <div
        v-if="show"
        class="text-xs font-bold text-gray-700 px-1 pt-1 last:pb-1"
        :class="{
            'bg-easy': isEasy,
            'bg-dang': isDang,
            'bg-damn': isDamn,
            'bg-fuck': isFuck,
            'bg-evil': isEvil,
        }"
    >
        <slot />
    </div>
</template>
