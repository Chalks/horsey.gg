<script setup>
import {GOSH, SHUCKS, DANG, DARN, HECK, FRICK} from 'assets/js/constants.js';

import {useUserStore} from 'store/user.js';

defineProps({
    title: {type: String, required: true},
});

const userStore = useUserStore();

const edition = computed(() => {
    switch (userStore.selectedDifficulty) {
        case FRICK:
            return 'FRICK';
        case HECK:
            return 'HECK';
        case DARN:
            return 'DARN';
        case DANG:
            return 'DANG';
        case SHUCKS:
            return 'SHUCKS';
        case GOSH:
        default:
            return 'GOSH';
    }
});
</script>

<template>
    <div class="flex items-center justify-between not-prose gap-4">
        <h1 class="font-bold uppercase text-lg">{{ title }}</h1>
        <div class="tracking-widest text-lg font-thin">
            {{ edition }} EDITION
        </div>
    </div>
</template>
