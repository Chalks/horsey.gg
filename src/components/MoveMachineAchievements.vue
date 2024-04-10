<script setup>
import {useAchievementStore} from 'store/achievement.js';

const achievementStore = useAchievementStore();

defineProps({
    selectedId: {type: String, default: null},
});

const emit = defineEmits(['click']);

const handleAchievementClick = (e) => emit('click', e);
</script>

<template>
    <AchievementTile
        id="mm-win-10"
        icon="game-icons:pawn"
        :selected="selectedId === 'mm-win-10'"
        title="Win 10"
        :gosh="achievementStore.mmAchievements.gosh10"
        :shucks="achievementStore.mmAchievements.shucks10"
        :dang="achievementStore.mmAchievements.dang10"
        :darn="achievementStore.mmAchievements.darn10"
        :heck="achievementStore.mmAchievements.heck10"
        :frick="achievementStore.mmAchievements.frick10"
        @click="handleAchievementClick"
    />

    <AchievementTile
        id="mm-win-100"
        icon="game-icons:pawn"
        :selected="selectedId === 'mm-win-100'"
        title="Win 100"
        @click="handleAchievementClick"
    />
</template>

