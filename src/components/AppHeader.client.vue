<script setup>
import {useUserStore} from 'store/user.js';

const userStore = useUserStore();
</script>

<template>
    <div class="sticky border-b border-gray-700 top-0 text-green-900 shadow bg-white px-4 py-2 z-50">
        <div class="max-w-prose mx-auto flex items-center gap-4">
            <NuxtLink
                href="/"
                class="flex items-center gap-2 hover:text-horse transition-colors"
            >
                horsey.gg
            </NuxtLink>

            <div class="grow" />

            <NuxtLink
                v-if="userStore.isAuthenticated"
                href="/logout"
                class="flex items-center gap-2 hover:text-horse transition-colors"
            >
                <span>logout</span>
            </NuxtLink>

            <NuxtLink
                v-if="!userStore.isAuthenticated"
                href="/register"
                class="flex items-center gap-2 hover:text-horse transition-colors"
            >
                <span>register</span>
            </NuxtLink>

            <NuxtLink
                v-if="!userStore.isAuthenticated"
                href="/login"
                class="flex items-center gap-2 hover:text-horse transition-colors"
            >
                <span>login</span>
            </NuxtLink>
        </div>
    </div>
</template>
