<script setup>
import {GOSH, SHUCKS, DANG, DARN, HECK, FRICK} from 'assets/js/constants.js';

const props = defineProps({
    difficulty: {type: Number, required: true},
    gosh: {type: Boolean, default: false},
    shucks: {type: Boolean, default: false},
    dang: {type: Boolean, default: false},
    darn: {type: Boolean, default: false},
    heck: {type: Boolean, default: false},
    frick: {type: Boolean, default: false},
});

const isGosh = computed(() => props.gosh && props.difficulty === GOSH);
const isShucks = computed(() => props.shucks && props.difficulty === SHUCKS);
const isDang = computed(() => props.dang && props.difficulty === DANG);
const isDarn = computed(() => props.darn && props.difficulty === DARN);
const isHeck = computed(() => props.heck && props.difficulty === HECK);
const isFrick = computed(() => props.frick && props.difficulty === FRICK);

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
        class="text-xs font-bold text-gray-700 p-1 mb-1 last:mb-0"
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
