<script setup>
import {Icon} from '@iconify/vue';
import {useAchievementsStore} from 'store/achievements.js';

const achievementStore = useAchievementsStore();

const props = defineProps({
    id: {type: String, required: true},
    icon: {type: String, required: true},
    selectedId: {type: String, default: null},

    gosh: {type: Boolean, default: false},
    shucks: {type: Boolean, default: false},
    dang: {type: Boolean, default: false},
    darn: {type: Boolean, default: false},
    heck: {type: Boolean, default: false},
    frick: {type: Boolean, default: false},
});

const achieved = computed(() => achievementStore[props.id]);
const emit = defineEmits(['click']);
// const selected = computed(() => props.id === props.selectedId);

const handleClick = () => {
    emit('click', {id: props.id, achieved: achieved.value});
};

/*
 * TODO this could be a cool skew/scale/rotate effect on mouseover
const container = ref(null);
const boundingBox = ref(null);
const posX = ref('0.5px');

const handleMouseover = (e) => {
    if (boundingBox.value === null) {
        boundingBox.value = container.value.getBoundingClientRect();
    }

    const {x, width} = boundingBox.value;
    const {clientX} = e;
    posX.value = `${2 * ((clientX - x) / width)}px`;
};

const handleMouseout = () => {
    posX.value = '0.5px';
};

        for the element itself:
        :style="{
            '--pos-x': posX,
            'transform': 'translate3d(var(--pos-x), 0, 0.1px)',
            'perspective': '400px',
        }"
        @mouseover="handleMouseover"
        @mouseout="handleMouseout"
        :class="{
            'bg-gosh': gosh,
            'bg-shucks': shucks,
            'bg-dang': dang,
            'bg-darn': darn,
            'bg-heck': heck,
            'bg-frick': frick,
            'shadow-lg': selected,
            'border-horse': selected,
        }"
*/
</script>

<template>
    <div
        ref="container"
        class="relative h-[15.5ch] w-[15.5ch] border rounded overflow-hidden cursor-pointer"
        @click="handleClick"
    >
        <div class="flex flex-col gap-2">
            <DifficultyRibbon gosh />

            <div class="ribbon-r w-8 h-4 bg-black">
                <div class="ribbon-r-as-border border-black bg-gosh" />
            </div>
            <div class="ribbon-t w-8 h-4 bg-black">
                <div class="ribbon-t-as-border border-black bg-white" />
            </div>
            <div class="ribbon-l w-8 h-4 bg-black">
                <div class="ribbon-l-as-border border-black bg-white" />
            </div>
            <div class="ribbon-b w-8 h-4 bg-black">
                <div class="ribbon-b-as-border border-black bg-white" />
            </div>

            <div class="ribbon-l w-8 h-4 bg-gosh" />
        </div>

        <div class="w-full border-b bg-red-300 h-2" />
        <Icon :icon="icon" />
        <div v-if="achieved" class="absolute bg-white w-12 h-12 right-0 bottom-0 rotate-45 translate-x-1/2 translate-y-1/2">
            <Icon
                icon="game-icons:check-mark"
                height="12"
                class="text-green-800 absolute top-1/2 left-1 -translate-y-1/2 -rotate-45"
            />
        </div>
    </div>
</template>

<style scoped>
    .ribbon {
        @apply ribbon-r bg-black;
    }

    .ribbon::after {
        @apply ribbon-r-as-border bg-blue-100 border-black;
        content: '';
    }
</style>
