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
    <h3>MOVE MACHINE</h3>

    <div class="flex gap-[1ch] flex-wrap justify-start items-start w-full">
        <MoveMachineAchievements
            :selected-id="currentAchievementId"
            @click="handleAchievementClick"
        />
    </div>
</template>


