<script setup>
import {storeToRefs} from 'pinia';
import {useBaseStatsStore} from 'store/baseStats.js';

const baseStatsStore = useBaseStatsStore();

const {baseStats} = storeToRefs(baseStatsStore);
</script>

<template>
    <h3>Lifetime Statistics</h3>
    <div v-if="baseStats.allGames < 10">
        Play at least {{ 10 - baseStats.allGames }} more games to see statistics!
    </div>

    <div v-else class="flex flex-col gap-4">
        <StatItem
            label="SPEED"
            :value="[
                baseStats.averageFastestTime,
                baseStats.allAverageTimePerGame,
                baseStats.averageSlowestTime,
            ]"
            speed
            lower-is-better
        />

        <StatItem
            label="ACCURACY"
            :value="baseStats.bestMoveRatio"
            ratio
            higher-is-better
        />
        <!--
        <StatItem label="MOVES" :value="baseStats.allMoves" />
        <StatItem label="INVALID MOVES" :value="baseStats.allInvalidMoves" />
        <StatItem label="OPTIMAL MOVES" :value="baseStats.allOptimalMoves" />
        <StatItem label="Average Time Per Move" :value="baseStats.allAverageTimePerValidMove" />
        <StatItem label="Average Time Per Game" :value="baseStats.allAverageTimePerGame" />
        -->
    </div>
    <pre>{{ baseStats }}</pre>
</template>
