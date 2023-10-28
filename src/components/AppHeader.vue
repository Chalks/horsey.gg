<script setup>
import {Icon} from '@iconify/vue';
</script>

<template>
    <div class="bg-blue-700 shadow-md shadow-blue-900 sticky top-0 text-white">
        <NuxtLink href="/" class="flex items-center gap-2 hover:text-yellow-300 transition-colors">
            <Icon icon="tabler:horse" />
            <span>horsey.gg</span>
        </NuxtLink>
    </div>
</template>
