<script setup>
import {useAchievementsStore} from 'store/achievements.js';

const achievementStore = useAchievementsStore();

seo({
    pageTitle: 'achievements - horsey.gg',
});
</script>

<template>
    <h1>Achievements</h1>
    <h3>MOVE MACHINE</h3>

    <div class="flex gap-4 justify-start items-start w-full">
        <div class="flex max-w-[60%] gap-4 flex-wrap flex-shrink-0">
            <AchievementTile :achieved="achievementStore.mmWinGosh10" />
            <AchievementTile />
            <AchievementTile />
            <AchievementTile />
        </div>
        <div class="flex-grow bg-gray-200 p-2">
            I'm baby scenester forage blue bottle blackbird spyplane, hammock live-edge street art tbh hot chicken art party solarpunk 90's cray. Wolf tofu solarpunk, humblebrag tote bag hella vaporware yes plz gochujang etsy poutine roof party everyday carry. Lumbersexual affogato shaman marxism tumblr. Pickled gochujang bodega boys sus schlitz, umami health goth.
        </div>
    </div>
</template>


