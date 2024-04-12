<script setup>
seo({
    pageTitle: 'achievements - horsey.gg',
});

const currentAchievementId = ref(null);

const handleAchievementClick = ({id}) => {
    currentAchievementId.value = id;
};
</script>

<template>
    <h1>Achievements</h1>
    <p class="italic">Please note that this is very much under development. Working on making it look pretty!</p>
    <h3 class="text-center">MOVE MACHINE</h3>

    <div class="flex gap-[1ch] flex-wrap items-start justify-center w-full">
        <MoveMachineAchievements
            :selected-id="currentAchievementId"
            @click="handleAchievementClick"
        />
    </div>
</template>


