import {defineStore} from 'pinia';

const ROLLING = 100;

// eslint-disable-next-line import/prefer-default-export
export const useBaseKnightStore = defineStore('baseKnightStore', () => {
    const allGames = ref(0);
    const allMoves = ref(0);
    const allInvalidMoves = ref(0);
    const allOptimalMoves = ref(0);
    const allTime = ref(0);

    const rollingMoves = ref([]);
    const rollingInvalidMoves = ref([]);
    const rollingTime = ref([]);
    const rollingOptimalMoves = ref([]);

    const baseStats = computed(() => {
        const rollingGames = rollingMoves.value.length; // calculated by count of stats stored
        const rm = rollingMoves.value.reduce((acc, val) => acc + val, 0);
        const rim = rollingInvalidMoves.value.reduce((acc, val) => acc + val, 0);
        const rom = rollingOptimalMoves.value.reduce((acc, val) => acc + val, 0);
        const rt = rollingTime.value.reduce((acc, val) => acc + val, 0);

        return {
            // global stats
            allGames: allGames.value,
            allMoves: allMoves.value,
            allInvalidMoves: allInvalidMoves.value,
            allOptimalMoves: allOptimalMoves.value,
            allTime: allTime.value,

            // calculated global stats
            allAverageTimePerTotalMoves: allTime.value / (allMoves.value + allInvalidMoves.value),
            allAverageTimePerValidMoves: allTime.value / allMoves.value,
            allAverageTimePerGame: allTime.value / allGames.value,

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
        };
    });

    function applyStats(stats) {
        // handle global stats
        allMoves.value += stats.moves ?? 0;
        allInvalidMoves.value += stats.invalidMoves ?? 0;
        allTime.value += stats.ms ?? 0;
        allOptimalMoves.value += stats.optimalMoves ?? 0;

        // handle rolling stats
        if (rollingMoves.value.length < ROLLING) {
            // if we haven't reached our rolling stats limit, e.g. last X games,
            // then just push the value in
            rollingMoves.value.push(stats.moves ?? 0);
            rollingInvalidMoves.value.push(stats.invalidMoves ?? 0);
            rollingTime.value.push(stats.ms ?? 0);
            rollingOptimalMoves.value.push(stats.optimalMoves ?? 0);
        } else {
            // if we have reached our X games, then overwrite the oldest game
            // stat that we have recorded in our rolling stats.
            const loc = allGames.value % ROLLING;
            rollingMoves.value[loc] = stats.moves ?? 0;
            rollingInvalidMoves.value[loc] = stats.invalidMoves ?? 0;
            rollingTime.value[loc] = stats.ms ?? 0;
            rollingOptimalMoves.value[loc] = stats.optimalMoves ?? 0;
        }

        // these happen last for off by one errors
        allGames.value += 1;
    }

    return {
        baseStats,
        applyStats,
    };
});


