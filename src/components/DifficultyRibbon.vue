<script setup>
import {useUserStore} from 'store/user.js';

const props = defineProps({
    disabled: {type: Boolean, default: false},
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

const emit = defineEmits(['click']);

const handleClick = () => {
    if (!props.disabled) {
        emit('click');
    }
};
</script>

<template>
    <div
        class="select-none cursor-pointer transition-all"
        :class="{
            '-translate-x-[0rem]': on,
            '-translate-x-[1rem]': !on,
            'hover:-translate-x-[0.5rem]': !on && !disabled,
            'cursor-not-allowed': disabled,
            'opacity-30': disabled,
        }"
        @click="handleClick"
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
