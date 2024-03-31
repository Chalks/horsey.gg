<script setup>
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

const isGosh = computed(() => props.gosh && userStore.isGosh);
const isShucks = computed(() => props.shucks && userStore.isShucks);
const isDang = computed(() => props.dang && userStore.isDang);
const isDarn = computed(() => props.darn && userStore.isDarn);
const isHeck = computed(() => props.heck && userStore.isHeck);
const isFrick = computed(() => props.frick && userStore.isFrick);

const on = computed(() => isGosh.value
    || isShucks.value
    || isDang.value
    || isDarn.value
    || isHeck.value
    || isFrick.value);

const className = computed(() => {
    if (on.value) {
        return '-translate-x-[0rem]';
    }

    return '-translate-x-[1rem] hover:-translate-x-[0.5rem]';
});

const emit = defineEmits(['click']);
</script>

<template>
    <div
        class="select-none cursor-pointer transition-all"
        :class="className"
        @click="emit('click')"
    >
        <div
            class="border-y border-gray-700 inline-block relative text-center overflow-hidden w-8 h-4"
            :class="{
                'bg-gosh': gosh,
                'bg-shucks': shucks,
                'bg-dang': dang,
                'bg-darn': darn,
                'bg-heck': heck,
                'bg-frick': frick,
            }"
        >
            <div class="absolute border border-gray-700 bg-white w-[0.707106rem] h-[0.707106rem] top-1/2 right-0 rotate-45 translate-x-1/2 -translate-y-1/2" />
        </div>
    </div>
</template>
