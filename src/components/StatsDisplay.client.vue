<script setup>
import {storeToRefs} from 'pinia';
import {useMoveMachineStore} from 'store/moveMachine.js';

const moveMachineStore = useMoveMachineStore();

const {stats} = storeToRefs(moveMachineStore);

const LIFETIME_MINIMUM = 10;
const ROLLING_MINIMUM = 100;

const showRollingTitle = computed(() => stats.value.allGames >= (LIFETIME_MINIMUM + 10));
const showRollingTeaser = computed(() => stats.value.allGames >= (LIFETIME_MINIMUM + 10)
    && stats.value.allGames < ROLLING_MINIMUM);
const showRollingStats = computed(() => stats.value.allGames >= ROLLING_MINIMUM);

const showLifetimeTitle = computed(() => stats.value.allGames >= 0);
const showLifetimeTeaser = computed(() => stats.value.allGames >= 0
    && stats.value.allGames < LIFETIME_MINIMUM);
const showLifetimeStats = computed(() => stats.value.allGames >= LIFETIME_MINIMUM);
</script>

<template>
    <div class="not-prose">
        <h3 v-if="showRollingTitle" class="mb-2">Rolling {{ ROLLING_MINIMUM }} Statistics</h3>
        <div v-if="showRollingTeaser" class="mb-4">
            Play at least {{ ROLLING_MINIMUM - stats.allGames }} more games to see your rolling {{ ROLLING_MINIMUM }} statistics! These statistics are based on your {{ ROLLING_MINIMUM }} most recent games only.
        </div>
        <div v-if="showRollingStats">
            rolling stats coming soon
        </div>

        <h3 v-if="showLifetimeTitle" class="mb-2">Lifetime Statistics</h3>
        <div v-if="showLifetimeTeaser">
            Play at least {{ LIFETIME_MINIMUM - stats.allGames }} more games to see statistics!
        </div>

        <div v-if="showLifetimeStats" class="flex flex-col gap-4">
            <StatItem
                label="GAMES"
                :value="[
                    'You have played',
                    stats.allGames,
                    'games. Wow.',
                ]"
                count
                lower-is-better
            />

            <StatItem
                label="SPEED"
                :value="[
                    stats.allAverageFastestTimePerMove,
                    stats.allAverageTimePerMove,
                    stats.allAverageSlowestTimePerMove,
                ]"
                speed
                lower-is-better
            />

            <StatItem
                label="ACCURACY"
                :value="[stats.allBestMoveRatio]"
                ratio
                higher-is-better
            />
            <!--
            <StatItem label="MOVES" :value="stats.allMoves" />
            <StatItem label="INVALID MOVES" :value="stats.allInvalidMoves" />
            <StatItem label="OPTIMAL MOVES" :value="stats.allOptimalMoves" />
            <StatItem label="Average Time Per Move" :value="stats.allAverageTimePerValidMove" />
            <StatItem label="Average Time Per Game" :value="stats.allAverageTimePerGame" />
            -->
        </div>
    </div>
    <!-- <pre class="mb-0">{{ stats }}</pre> -->
</template>
