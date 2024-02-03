import {defineStore} from 'pinia';
import {useUserStore} from 'store/user.js';

// const ROLLING = 100;

// eslint-disable-next-line import/prefer-default-export
export const useBaseStatsStore = defineStore('baseStatsStore', () => {
    const userStore = useUserStore();

    const games = computed(() => Object.values(userStore.saveFile?.baseStats ?? {}));

    const allGames = computed(() => games.value.length);

    const allMoves = computed(() => games.value
        .reduce((acc, {moves}) => acc + moves, 0));

    const allInvalidMoves = computed(() => games.value
        .reduce((acc, {invalidMoves}) => acc + invalidMoves, 0));

    const allOptimalMoves = computed(() => games.value
        .reduce((acc, {optimalMoves}) => acc + optimalMoves, 0));

    const allTime = computed(() => games.value
        .reduce((acc, {ms}) => acc + ms, 0));

    const allTimesSorted = computed(() => games.value
        .map(({ms}) => ms)
        .sort((a, b) => a - b));

    /*
    const rollingMoves = ref([]);
    const rollingInvalidMoves = ref([]);
    const rollingTime = ref([]);
    const rollingOptimalMoves = ref([]);
    */

    // eslint-disable-next-line arrow-body-style
    const baseStats = computed(() => {
        /*
        const rollingGames = rollingMoves.value.length; // calculated by count of stats stored
        const rm = rollingMoves.value.reduce((acc, val) => acc + val, 0);
        const rim = rollingInvalidMoves.value.reduce((acc, val) => acc + val, 0);
        const rom = rollingOptimalMoves.value.reduce((acc, val) => acc + val, 0);
        const rt = rollingTime.value.reduce((acc, val) => acc + val, 0);
        */

        const timePercentage = Math.floor(allTimesSorted.value.length * 0.1);
        const averageFastestTime = allTimesSorted.value
            .slice(0, timePercentage)
            .reduce((acc, time) => acc + time, 0) / timePercentage;

        const averageSlowestTime = allTimesSorted.value
            .slice(-1 * timePercentage)
            .reduce((acc, time) => acc + time, 0) / timePercentage;

        return {
            // global stats
            allGames: allGames.value,
            allMoves: allMoves.value,
            allInvalidMoves: allInvalidMoves.value,
            allOptimalMoves: allOptimalMoves.value,
            allTime: allTime.value,

            bestMoveRatio: allOptimalMoves.value / allMoves.value,

            // calculated global stats
            allAverageTimePerTotalMove: allTime.value / (allMoves.value + allInvalidMoves.value),
            allAverageTimePerValidMove: allTime.value / allMoves.value,
            allAverageTimePerGame: allTime.value / allGames.value,
            averageFastestTime,
            averageSlowestTime,

            /*
            // rolling stats
            rollingGames,
            rollingMoves: rm,
            rollingInvalidMoves: rim,
            rollingOptimalMoves: rom,
            rollingTime: rt,

            // calculated rolling stats
            rollingAverageTimePerTotalMoves: rt / (rm + rim),
            rollingAverageTimePerValidMoves: rt / rm,
            rollingAverageTimePerGame: rt / rollingGames,
            */
        };
    });

    return {
        baseStats,
    };
});

