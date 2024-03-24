<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true,
    },

    value: {
        type: Array,
        required: true,
    },

    ratio: {
        type: Boolean,
        default: false,
    },

    speed: {
        type: Boolean,
        default: false,
    },

    count: {
        type: Boolean,
        default: false,
    },

    higherIsBetter: {
        type: Boolean,
        default: false,
    },

    lowerIsBetter: {
        type: Boolean,
        default: false,
    },
});

const offset = computed(() => {
    if (props.ratio) {
        return (1 - props.value) * 100;
    }

    if (props.speed) {
        const [fastest, actual, slowest] = props.value;
        return ((actual - fastest) / (slowest - fastest)) * 100;
    }

    if (props.count) {
        return 0;
    }

    return 50; // default to 50%
});

const formattedValue = computed(() => {
    if (props.ratio) {
        return `${(100 * props.value[0]).toPrecision(4)}% optimal moves`;
    }

    if (props.speed) {
        const [fastest, actual, slowest] = props.value;
        return `${(actual).toFixed(2)} ms / game (${(slowest).toFixed(2)} avg slowest, ${(fastest).toFixed(2)} avg fastest)`;
    }

    if (props.count) {
        return props.value.join(' ');
    }

    return props.value;
});
</script>

<template>
    <div class="rounded-b-lg overflow-hidden w-full origin-bottom-left not-prose">
        <div class="relative px-4 bg-white">
            <div class="absolute top-1/2 left-0 right-0 bottom-0 bg-black" />
            <div class="stat text-3xl text-white mix-blend-difference translate-y-[10%] z-10">{{ label }}</div>
        </div>
        <div class="bg-green-900 h-4 w-full relative">
            <div
                class="absolute top-0 bottom-0 left-0 bg-green-700 flex items-center px-4 transition-all"
                :class="{
                    'rounded-r-full': offset > 0,
                }"
                :style="{
                    right: `${offset}%`,
                }"
            >
                <p class="text-white font-bold text-xs whitespace-nowrap">{{ formattedValue }}</p>
            </div>
        </div>
    </div>
</template>
