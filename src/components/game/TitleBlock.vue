<script setup>
import {useUserStore} from 'store/user.js';

defineProps({
    title: {type: String, required: true},
});

const userStore = useUserStore();
</script>

<template>
    <div class="flex items-center justify-between not-prose gap-4">
        <h1 class="font-bold uppercase text-lg">{{ title }}</h1>
        <div class="tracking-widest text-lg font-thin">
            {{ userStore.difficultyName }} EDITION
        </div>
    </div>
</template>
