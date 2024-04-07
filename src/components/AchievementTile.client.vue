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
const selected = computed(() => props.id === props.selectedId);

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
*/
</script>

<template>
    <div
        ref="container"
        class="relative flex items-center justify-center h-12 w-12 border rounded overflow-hidden cursor-pointer"
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
        @click="handleClick"
    >
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
</style>
