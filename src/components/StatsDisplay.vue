<script setup>
import {storeToRefs} from 'pinia';
import {useBaseStatsStore} from 'store/baseStats.js';

const baseStatsStore = useBaseStatsStore();

const {baseStats} = storeToRefs(baseStatsStore);

const LIFETIME_MINIMUM = 10;
const ROLLING_MINIMUM = 100;

const showRollingTitle = computed(() => baseStats.value.allGames >= (LIFETIME_MINIMUM + 10));
const showRollingTeaser = computed(() => baseStats.value.allGames >= (LIFETIME_MINIMUM + 10)
    && baseStats.value.allGames < ROLLING_MINIMUM);
const showRollingStats = computed(() => baseStats.value.allGames >= ROLLING_MINIMUM);

const showLifetimeTitle = computed(() => baseStats.value.allGames >= 0);
const showLifetimeTeaser = computed(() => baseStats.value.allGames >= 0
    && baseStats.value.allGames < LIFETIME_MINIMUM);
const showLifetimeStats = computed(() => baseStats.value.allGames >= LIFETIME_MINIMUM);
</script>

<template>
    <div class="not-prose">
        <h3 v-if="showRollingTitle" class="mb-2">Rolling {{ ROLLING_MINIMUM }} Statistics</h3>
        <div v-if="showRollingTeaser" class="mb-4">
            Play at least {{ ROLLING_MINIMUM - baseStats.allGames }} more games to see your rolling {{ ROLLING_MINIMUM }} statistics! These statistics are based on your {{ ROLLING_MINIMUM }} most recent games only.
        </div>
        <div v-if="showRollingStats">
            rolling stats coming soon
        </div>

        <h3 v-if="showLifetimeTitle" class="mb-2">Lifetime Statistics</h3>
        <div v-if="showLifetimeTeaser">
            Play at least {{ LIFETIME_MINIMUM - baseStats.allGames }} more games to see statistics!
        </div>

        <div v-if="showLifetimeStats" class="flex flex-col gap-4">
            <StatItem
                label="SPEED"
                :value="[
                    baseStats.allAverageFastestTimePerMove,
                    baseStats.allAverageTimePerMove,
                    baseStats.allAverageSlowestTimePerMove,
                ]"
                speed
                lower-is-better
            />

            <StatItem
                label="ACCURACY"
                :value="baseStats.allBestMoveRatio"
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
    </div>

    <pre class="mb-0">{{ baseStats }}</pre>
</template>
