<script setup>
import difficultyName from 'assets/js/difficultyName.js';

defineProps({
    difficulty: {type: Number, required: true},
    title: {type: String, required: true},
    description: {type: String, default: null},
});
</script>

<template>
    <div class="flex items-end justify-between not-prose gap-4">
        <div>
            <h1 class="font-bold uppercase text-4xl">{{ title }}</h1>
            <p v-if="description" class="text-xs">{{ description }}</p>
        </div>
        <div class="tracking-widest text-lg font-thin text-right">
            {{ difficultyName(difficulty) }} EDITION
        </div>
    </div>
</template>
