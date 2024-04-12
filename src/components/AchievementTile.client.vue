<script setup>
import {Icon} from '@iconify/vue';

const props = defineProps({
    id: {type: String, required: true},
    icon: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    selected: {type: Boolean, default: false},

    gosh: {type: Boolean, default: false},
    shucks: {type: Boolean, default: false},
    dang: {type: Boolean, default: false},
    darn: {type: Boolean, default: false},
    heck: {type: Boolean, default: false},
    frick: {type: Boolean, default: false},
});

const achieved = computed(() => props.gosh
    && props.shucks
    && props.dang
    && props.darn
    && props.heck
    && props.frick);

const emit = defineEmits(['click']);

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
        class="relative h-[15.5ch] w-[15.5ch] border overflow-hidden cursor-pointer not-prose p-2"
        :class="{
            'shadow': selected,
        }"
        @click="handleClick"
    >
        <p class="font-light uppercase tracking-widest">{{ title }}</p>
        <p class="font-light text-sm">{{ description }}</p>


        <div v-if="achieved" class="absolute bg-horse w-12 h-12 right-0 top-0 -rotate-45 translate-x-1/2 -translate-y-1/2">
            <Icon
                icon="game-icons:check-mark"
                height="12"
                class="text-white absolute top-1/2 left-1 -translate-y-1/2 rotate-45"
            />
        </div>

        <div class="absolute flex bottom-0 right-2 flex gap-1 z-[-1]">
            <DifficultyRibbon small on default-cursor direction="t" gosh :disabled="!gosh" />
            <DifficultyRibbon small on default-cursor direction="t" shucks :disabled="!shucks" />
            <DifficultyRibbon small on default-cursor direction="t" dang :disabled="!dang" />
            <DifficultyRibbon small on default-cursor direction="t" darn :disabled="!darn" />
            <DifficultyRibbon small on default-cursor direction="t" heck :disabled="!heck" />
            <DifficultyRibbon small on default-cursor direction="t" frick :disabled="!frick" />
        </div>
    </div>
</template>

