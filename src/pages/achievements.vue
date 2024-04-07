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

    <div class="flex gap-4 justify-start items-start w-full">
        <div class="flex max-w-[60%] gap-4 flex-wrap flex-shrink-0">
            <MoveMachineAchievements
                :selected-id="currentAchievementId"
                @click="handleAchievementClick"
            />
        </div>
        <div class="flex-grow bg-gray-200 p-2">
            Win 10 games of Move Machine at GOSH difficulty
        </div>
    </div>
</template>


