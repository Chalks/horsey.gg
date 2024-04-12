import {defineStore} from 'pinia';
// import {useUserStore} from 'store/user.js';
import {useMoveMachineStore} from 'store/moveMachine.js';

const HUNDO = 100;

// eslint-disable-next-line import/prefer-default-export
export const useAchievementStore = defineStore('achievementStore', () => {
    // const userStore = useUserStore();
    const moveMachineStore = useMoveMachineStore();

    // Global unlock
    const unlocked = ref(false);

    // Global achievements
    const globalAchievements = computed(() => ({
        game1: moveMachineStore.games.length > 0,
    }));

    // MOVE MACHINE achievements
    const mmAchievements = computed(() => {
        const {
            goshGames,
            shucksGames,
            dangGames,
            darnGames,
            heckGames,
            frickGames,
        } = moveMachineStore;

        const goshSpeed = goshGames.reduce((acc, {ms}) => acc + ms, 0) / goshGames.length;
        const shucksSpeed = shucksGames.reduce((acc, {ms}) => acc + ms, 0) / shucksGames.length;
        const dangSpeed = dangGames.reduce((acc, {ms}) => acc + ms, 0) / dangGames.length;
        const darnSpeed = darnGames.reduce((acc, {ms}) => acc + ms, 0) / darnGames.length;
        const heckSpeed = heckGames.reduce((acc, {ms}) => acc + ms, 0) / heckGames.length;
        const frickSpeed = frickGames.reduce((acc, {ms}) => acc + ms, 0) / frickGames.length;

        return {
            gosh10: goshGames.length >= 10,
            shucks10: shucksGames.length >= 10,
            dang10: dangGames.length >= 10,
            darn10: darnGames.length >= 10,
            heck10: heckGames.length >= 10,
            frick10: frickGames.length >= 10,

            gosh100: goshGames.length >= HUNDO,
            shucks100: shucksGames.length >= HUNDO,
            dang100: dangGames.length >= HUNDO,
            darn100: darnGames.length >= HUNDO,
            heck100: heckGames.length >= HUNDO,
            frick100: frickGames.length >= HUNDO,

            goshGreased: goshGames.length ? goshSpeed <= 10000 : false,
            shucksGreased: shucksGames.length ? shucksSpeed <= 10000 : false,
            dangGreased: dangGames.length ? dangSpeed <= 10000 : false,
            darnGreased: darnGames.length ? darnSpeed <= 10000 : false,
            heckGreased: heckGames.length ? heckSpeed <= 10000 : false,
            frickGreased: frickGames.length ? frickSpeed <= 10000 : false,

            goshLightning: goshGames.length ? goshSpeed <= 7000 : false,
            shucksLightning: shucksGames.length ? shucksSpeed <= 7000 : false,
            dangLightning: dangGames.length ? dangSpeed <= 7000 : false,
            darnLightning: darnGames.length ? darnSpeed <= 7000 : false,
            heckLightning: heckGames.length ? heckSpeed <= 7000 : false,
            frickLightning: frickGames.length ? frickSpeed <= 7000 : false,
        };
    });

    // helper stats
    const achievementCount = computed(() => {
        const globalCount = Object.values(globalAchievements.value).filter((achieved) => achieved).length;
        const mmCount = Object.values(mmAchievements.value).filter((achieved) => achieved).length;

        return globalCount + mmCount;
    });

    const toggleGlobalLock = () => {
        unlocked.value = !unlocked.value;
    };

    return {
        achievementCount,
        globalAchievements,
        mmAchievements,
        unlocked,
        toggleGlobalLock,
    };
});


