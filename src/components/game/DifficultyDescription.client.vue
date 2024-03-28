<script setup>
import {EASY, DANG, DAMN} from 'assets/js/constants.js';
import {useUserStore} from 'store/user.js';

const props = defineProps({
    easy: {type: Boolean, default: false},
    dang: {type: Boolean, default: false},
    damn: {type: Boolean, default: false},
});

const userStore = useUserStore();

const isEasy = computed(() => props.easy && userStore.selectedDifficulty === EASY);
const isDang = computed(() => props.dang && userStore.selectedDifficulty === DANG);
const isDamn = computed(() => props.damn && userStore.selectedDifficulty === DAMN);

const show = computed(() => isEasy.value
    || isDang.value
    || isDamn.value);
</script>

<template>
    <div
        v-if="show"
        class="text-xs font-bold text-gray-700 px-1 pt-1 last:pb-1"
        :class="{
            'bg-easy': isEasy,
            'bg-dang': isDang,
            'bg-damn': isDamn,
        }"
    >
        <slot />
    </div>
</template>
