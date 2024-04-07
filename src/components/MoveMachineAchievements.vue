<script setup>
defineProps({
    selectedId: {type: String, default: null},
});

const emit = defineEmits(['click']);

const handleAchievementClick = (e) => emit('click', e);
</script>

<template>
    <AchievementTile
        id="mmWinGosh10"
        icon="game-icons:pawn"
        :selected-id="selectedId"
        gosh
        @click="handleAchievementClick"
    />

    <AchievementTile
        id="mmWinGosh100"
        icon="game-icons:pawn"
        :selected-id="selectedId"
        gosh
        @click="handleAchievementClick"
    />
</template>

