<script setup>
import {Icon} from '@iconify/vue';
import {useUserStore} from 'store/user.js';
import {useAchievementStore} from 'store/achievement.js';

const userStore = useUserStore();
const achievementStore = useAchievementStore();
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

            <NuxtLink
                v-if="achievementStore.achievementCount > 0"
                href="/achievements"
                class="relative group flex items-center gap-2 hover:text-horse transition-colors"
                :class="{
                    'animate-fall-rotate-in': achievementStore.achievementCount > 0,
                }"
            >
                <span class="absolute flex items-center px-2 right-0 top-0 bottom-0 translate-x-full invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity">
                    achievements
                </span>
                <Icon icon="pepicons-pencil:trophy-circle-filled" />
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
