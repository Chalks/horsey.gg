import {defineStore} from 'pinia';
// import {useUserStore} from 'store/user.js';
import {useMoveMachineStore} from 'store/moveMachine.js';

const HUNDO = 100;

// eslint-disable-next-line import/prefer-default-export
export const useAchievementsStore = defineStore('achievementsStore', () => {
    // const userStore = useUserStore();
    const moveMachineStore = useMoveMachineStore();

    // Global unlock
    const unlocked = ref(false);

    // MOVE MACHINE achievements
    const mmWinGosh10 = computed(() => moveMachineStore.goshGames.length >= 10);
    const mmWinGosh100 = computed(() => moveMachineStore.goshGames.length >= HUNDO);
    const mmWinShucks10 = computed(() => moveMachineStore.shucksGames.length >= 10);
    const mmWinShucks100 = computed(() => moveMachineStore.Games.length >= HUNDO);
    const mmWinDang10 = computed(() => moveMachineStore.dangGames.length >= 10);
    const mmWinDang100 = computed(() => moveMachineStore.dangGames.length >= HUNDO);
    const mmWinDarn10 = computed(() => moveMachineStore.darnGames.length >= 10);
    const mmWinDarn100 = computed(() => moveMachineStore.darnGames.length >= HUNDO);
    const mmWinHeck10 = computed(() => moveMachineStore.heckGames.length >= 10);
    const mmWinHeck100 = computed(() => moveMachineStore.heckGames.length >= HUNDO);
    const mmWinFrick10 = computed(() => moveMachineStore.frickGames.length >= 10);
    const mmWinFrick100 = computed(() => moveMachineStore.frickGames.length >= HUNDO);

    const toggleGlobalLock = () => {
        unlocked.value = !unlocked.value;
    };

    return {
        mmWinGosh10,
        mmWinGosh100,
        mmWinShucks10,
        mmWinShucks100,
        mmWinDang10,
        mmWinDang100,
        mmWinDarn10,
        mmWinDarn100,
        mmWinHeck10,
        mmWinHeck100,
        mmWinFrick10,
        mmWinFrick100,
        unlocked,
        toggleGlobalLock,
    };
});


