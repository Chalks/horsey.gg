import {defineStore} from 'pinia';

const ROLLING = 3;

// eslint-disable-next-line import/prefer-default-export
export const useBaseKnightStore = defineStore('baseKnightStore', () => {
    const allGames = ref(0);
    const allMoves = ref(0);
    const allInvalidMoves = ref(0);
    const allTime = ref(0);
    // TODO
    // const allOptimalMoves = ref(0);

    const rollingMoves = ref([]);
    const rollingInvalidMoves = ref([]);
    const rollingTime = ref([]);
    // TODO
    // const rollingAllOptimalMoves = ref([]);

    const baseStats = computed(() => {
        const rg = rollingMoves.value.length;
        const rm = rollingMoves.value.reduce((acc, val) => acc + val, 0);
        const rim = rollingInvalidMoves.value.reduce((acc, val) => acc + val, 0);
        const rt = rollingTime.value.reduce((acc, val) => acc + val, 0);

        return {
            allGames: allGames.value,
            allMoves: allMoves.value,
            allInvalidMoves: allInvalidMoves.value,
            allTime: allTime.value,
            allAverageTimePerTotalMoves: allTime.value / (allMoves.value + allInvalidMoves.value),
            allAverageTimePerValidMoves: allTime.value / allMoves.value,
            allAverageTimePerGame: allTime.value / allGames.value,
            rollingGames: rg,
            rollingMoves: rm,
            rollingInvalidMoves: rim,
            rollingTime: rt,
            rollingAverageTimePerTotalMoves: rt / (rm + rim),
            rollingAverageTimePerValidMoves: rt / rm,
            rollingAverageTimePerGame: rt / rg,
        };
    });

    function applyStats(stats) {
        allMoves.value += stats.moves ?? 0;
        allInvalidMoves.value += stats.invalidMoves ?? 0;
        allTime.value += stats.ms ?? 0;

        if (rollingMoves.value.length < ROLLING) {
            rollingMoves.value.push(stats.moves ?? 0);
            rollingInvalidMoves.value.push(stats.invalidMoves ?? 0);
            rollingTime.value.push(stats.ms ?? 0);
        } else {
            const loc = allGames.value % ROLLING;
            rollingMoves.value[loc] = stats.moves ?? 0;
            rollingInvalidMoves.value[loc] = stats.invalidMoves ?? 0;
            rollingTime.value[loc] = stats.ms ?? 0;
        }

        // these happen last for off by one errors
        allGames.value += 1;
    }

    return {
        baseStats,
        applyStats,
    };
});


