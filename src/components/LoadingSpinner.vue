<script setup>
import {Icon} from '@iconify/vue';
</script>

<template>
    <Icon icon="mingcute:toy-horse-line" class="rock" />
</template>

<style scoped>
    .rock {
        animation: rocking 1.4s infinite linear;
        transform-origin: bottom center;
    }

    @keyframes rocking {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(-25deg);
        }
        75% {
            transform: rotate(25deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
</style>
