<script setup>
import {Icon} from '@iconify/vue';
</script>

<template>
    <div class="bg-blue-700 sticky top-0 shadow-md text-white p-4 z-50">
        <div class="max-w-prose mx-auto">
            <NuxtLink href="/" class="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <Icon icon="tabler:horse" />
                <span>horsey.gg</span>
            </NuxtLink>
        </div>
    </div>
</template>
