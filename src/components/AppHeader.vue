<script setup>
import {Icon} from '@iconify/vue';
import {useUserStore} from 'store/user.js';

const userStore = useUserStore();
</script>

<template>
    <div class="bg-blue-700 sticky top-0 shadow-md text-white p-4 z-50">
        <div class="max-w-prose mx-auto flex items-center gap-4">
            <NuxtLink
                href="/"
                class="flex items-center gap-2 hover:text-yellow-300 transition-colors"
            >
                <Icon icon="tabler:horse" />
                <span>horsey.gg</span>
            </NuxtLink>

            <NuxtLink
                v-if="userStore.isAuthenticated"
                href="/logout"
                class="flex items-center gap-2 hover:text-yellow-300 transition-colors"
            >
                <Icon icon="tabler:horse" />
                <span>logout</span>
            </NuxtLink>

            <NuxtLink
                v-if="!userStore.isAuthenticated"
                href="/register"
                class="flex items-center gap-2 hover:text-yellow-300 transition-colors"
            >
                <Icon icon="tabler:horse" />
                <span>register</span>
            </NuxtLink>

            <NuxtLink
                v-if="!userStore.isAuthenticated"
                href="/login"
                class="flex items-center gap-2 hover:text-yellow-300 transition-colors"
            >
                <Icon icon="tabler:horse" />
                <span>login</span>
            </NuxtLink>
        </div>
    </div>
</template>
