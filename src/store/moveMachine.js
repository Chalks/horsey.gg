import {defineStore} from 'pinia';
import {useUserStore} from 'store/user.js';
import {
    GOSH,
    SHUCKS,
    DANG,
    DARN,
    HECK,
    FRICK,
} from 'assets/js/constants.js';

// const ROLLING = 100;

// eslint-disable-next-line import/prefer-default-export
export const useMoveMachineStore = defineStore('moveMachineStore', () => {
    const userStore = useUserStore();

    const currentDifficulty = computed(() => userStore
        .saveFile?.selectedDifficulties?.moveMachine ?? GOSH);

    const rawGames = computed(() => Object.values(userStore.saveFile?.moveMachineStats ?? []));

    const goshGames = computed(() => rawGames.value
        .filter(({difficulty}) => difficulty === GOSH));

    const shucksGames = computed(() => rawGames.value
        .filter(({difficulty}) => difficulty === SHUCKS));

    const dangGames = computed(() => rawGames.value
        .filter(({difficulty}) => difficulty === DANG));

    const darnGames = computed(() => rawGames.value
        .filter(({difficulty}) => difficulty === DARN));

    const heckGames = computed(() => rawGames.value
        .filter(({difficulty}) => difficulty === HECK));

    const frickGames = computed(() => rawGames.value
        .filter(({difficulty}) => difficulty === FRICK));


    const games = computed(() => {
        const moveMachineStats = Object.values(userStore.saveFile?.moveMachineStats ?? []);
        return moveMachineStats.filter(({difficulty}) => difficulty === currentDifficulty.value);
    });

    const allGames = computed(() => games.value.length);

    const allGamesSortedByTime = computed(() => games.value
        .sort(({ms: a}, {ms: b}) => a - b));

    const allMoves = computed(() => games.value
        .reduce((acc, {moves}) => acc + moves, 0));

    const allInvalidMoves = computed(() => games.value
        .reduce((acc, {invalidMoves}) => acc + invalidMoves, 0));

    const allOptimalMoves = computed(() => games.value
        .reduce((acc, {optimalMoves}) => acc + optimalMoves, 0));

    const allTime = computed(() => games.value
        .reduce((acc, {ms}) => acc + ms, 0));

    /*
    const rollingMoves = ref([]);
    const rollingInvalidMoves = ref([]);
    const rollingTime = ref([]);
    const rollingOptimalMoves = ref([]);
    */

    // eslint-disable-next-line arrow-body-style
    const stats = computed(() => {
        /*
        const rollingGames = rollingMoves.value.length; // calculated by count of stats stored
        const rm = rollingMoves.value.reduce((acc, val) => acc + val, 0);
        const rim = rollingInvalidMoves.value.reduce((acc, val) => acc + val, 0);
        const rom = rollingOptimalMoves.value.reduce((acc, val) => acc + val, 0);
        const rt = rollingTime.value.reduce((acc, val) => acc + val, 0);
        */

        // calculate top/bottom/avg time per move
        const tenPercent = Math.floor(allGamesSortedByTime.value.length * 0.1);

        const slowestTenPercent = allGamesSortedByTime.value
            .slice(-1 * tenPercent)
            .reduce((acc, {ms, moves}) => {
                acc.time += ms;
                acc.moves += moves;
                return acc;
            }, {time: 0, moves: 0});

        const fastestTenPercent = allGamesSortedByTime.value
            .slice(0, tenPercent)
            .reduce((acc, {ms, moves}) => {
                acc.time += ms;
                acc.moves += moves;
                return acc;
            }, {time: 0, moves: 0});

        return {
            // global stats
            allGames: allGames.value,
            allMoves: allMoves.value,
            allInvalidMoves: allInvalidMoves.value,
            allOptimalMoves: allOptimalMoves.value,
            allTime: allTime.value,

            // currently used in stats display
            allBestMoveRatio: allOptimalMoves.value / allMoves.value,
            allAverageTimePerMove: allTime.value / allMoves.value,
            allAverageSlowestTimePerMove: slowestTenPercent.time / slowestTenPercent.moves,
            allAverageFastestTimePerMove: fastestTenPercent.time / fastestTenPercent.moves,

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
        currentDifficulty,
        rawGames,
        goshGames,
        shucksGames,
        dangGames,
        darnGames,
        heckGames,
        frickGames,
        stats,
    };
});

