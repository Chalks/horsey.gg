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
    const mmAchievements = computed(() => ({
        gosh10: moveMachineStore.goshGames.length >= 10,
        gosh100: moveMachineStore.goshGames.length >= HUNDO,
        shucks10: moveMachineStore.shucksGames.length >= 10,
        shucks100: moveMachineStore.shucksGames.length >= HUNDO,
        dang10: moveMachineStore.dangGames.length >= 10,
        dang100: moveMachineStore.dangGames.length >= HUNDO,
        darn10: moveMachineStore.darnGames.length >= 10,
        darn100: moveMachineStore.darnGames.length >= HUNDO,
        heck10: moveMachineStore.heckGames.length >= 10,
        heck100: moveMachineStore.heckGames.length >= HUNDO,
        frick10: moveMachineStore.frickGames.length >= 10,
        frick100: moveMachineStore.frickGames.length >= HUNDO,
    }));

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


