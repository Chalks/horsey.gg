import {defineStore} from 'pinia';
// import {useUserStore} from 'store/user.js';
import {useBaseStatsStore} from 'store/baseStats.js';

const HUNDO = 11;

// eslint-disable-next-line import/prefer-default-export
export const useAchievementsStore = defineStore('achievementsStore', () => {
    // const userStore = useUserStore();
    const baseStatsStore = useBaseStatsStore();

    // Global unlock
    const unlocked = ref(false);

    // MOVE MACHINE achievements
    const mmWinGosh10 = computed(() => baseStatsStore.goshGames.length >= 10);
    const mmWinGosh100 = computed(() => baseStatsStore.goshGames.length >= HUNDO);
    const mmWinShucks10 = computed(() => baseStatsStore.shucksGames.length >= 10);
    const mmWinShucks100 = computed(() => baseStatsStore.Games.length >= HUNDO);
    const mmWinDang10 = computed(() => baseStatsStore.dangGames.length >= 10);
    const mmWinDang100 = computed(() => baseStatsStore.dangGames.length >= HUNDO);
    const mmWinDarn10 = computed(() => baseStatsStore.darnGames.length >= 10);
    const mmWinDarn100 = computed(() => baseStatsStore.darnGames.length >= HUNDO);
    const mmWinHeck10 = computed(() => baseStatsStore.heckGames.length >= 10);
    const mmWinHeck100 = computed(() => baseStatsStore.heckGames.length >= HUNDO);
    const mmWinFrick10 = computed(() => baseStatsStore.frickGames.length >= 10);
    const mmWinFrick100 = computed(() => baseStatsStore.frickGames.length >= HUNDO);

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


