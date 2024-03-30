<script setup>
import {GOSH, SHUCKS, DANG, DARN, HECK, FRICK} from 'assets/js/constants.js';

import {useUserStore} from 'store/user.js';

const props = defineProps({
    gosh: {type: Boolean, default: false},
    shucks: {type: Boolean, default: false},
    dang: {type: Boolean, default: false},
    darn: {type: Boolean, default: false},
    heck: {type: Boolean, default: false},
    frick: {type: Boolean, default: false},
});

const userStore = useUserStore();

const isGosh = computed(() => props.gosh && userStore.selectedDifficulty === GOSH);
const isShucks = computed(() => props.shucks && userStore.selectedDifficulty === SHUCKS);
const isDang = computed(() => props.dang && userStore.selectedDifficulty === DANG);
const isDarn = computed(() => props.darn && userStore.selectedDifficulty === DARN);
const isHeck = computed(() => props.heck && userStore.selectedDifficulty === HECK);
const isFrick = computed(() => props.frick && userStore.selectedDifficulty === FRICK);

const show = computed(() => isGosh.value
    || isShucks.value
    || isDang.value
    || isDarn.value
    || isHeck.value
    || isFrick.value);
</script>

<template>
    <div
        v-if="show"
        class="text-xs font-bold text-gray-700 px-1 pt-1 last:pb-1"
        :class="{
            'bg-gosh': isGosh,
            'bg-shucks': isShucks,
            'bg-dang': isDang,
            'bg-darn': isDarn,
            'bg-heck': isHeck,
            'bg-frick': isFrick,
        }"
    >
        <slot />
    </div>
</template>
