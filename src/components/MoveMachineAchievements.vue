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
        title="Winner"
        description="Complete ten Move Machine games."
        :selected="selectedId === 'mm-win-10'"
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
        title="Winner++"
        description="Complete one hundred Move Machine games."
        :selected="selectedId === 'mm-win-100'"
        :gosh="achievementStore.mmAchievements.gosh100"
        :shucks="achievementStore.mmAchievements.shucks100"
        :dang="achievementStore.mmAchievements.dang100"
        :darn="achievementStore.mmAchievements.darn100"
        :heck="achievementStore.mmAchievements.heck100"
        :frick="achievementStore.mmAchievements.frick100"
        @click="handleAchievementClick"
    />

    <AchievementTile
        id="mm-greased"
        icon="game-icons:pawn"
        title="Greased"
        description="Have an average game speed of ten seconds or faster"
        :selected="selectedId === 'mm-win-10'"
        :gosh="achievementStore.mmAchievements.goshGreased"
        :shucks="achievementStore.mmAchievements.shucksGreased"
        :dang="achievementStore.mmAchievements.dangGreased"
        :darn="achievementStore.mmAchievements.darnGreased"
        :heck="achievementStore.mmAchievements.heckGreased"
        :frick="achievementStore.mmAchievements.frickGreased"
        @click="handleAchievementClick"
    />

    <AchievementTile
        id="mm-lightning"
        icon="game-icons:pawn"
        title="Lightning"
        description="Have an average game speed of seven seconds or faster"
        :selected="selectedId === 'mm-win-10'"
        :gosh="achievementStore.mmAchievements.goshLightning"
        :shucks="achievementStore.mmAchievements.shucksLightning"
        :dang="achievementStore.mmAchievements.dangLightning"
        :darn="achievementStore.mmAchievements.darnLightning"
        :heck="achievementStore.mmAchievements.heckLightning"
        :frick="achievementStore.mmAchievements.frickLightning"
        @click="handleAchievementClick"
    />
</template>

