import {defineStore} from 'pinia';
// import {useUserStore} from 'store/user.js';
import {useBaseStatsStore} from 'store/baseStats.js';

// eslint-disable-next-line import/prefer-default-export
export const useAchievementsStore = defineStore('achievementsStore', () => {
    // const userStore = useUserStore();
    const baseStatsStore = useBaseStatsStore();

    // MOVE MACHINE achievements
    const mmWinGosh10 = computed(() => baseStatsStore.goshGames.length >= 10);
    const mmWinGosh100 = computed(() => baseStatsStore.goshGames.length >= 100);
    const mmWinShucks10 = computed(() => baseStatsStore.shucksGames.length >= 10);
    const mmWinShucks100 = computed(() => baseStatsStore.Games.length >= 100);
    const mmWinDang10 = computed(() => baseStatsStore.dangGames.length >= 10);
    const mmWinDang100 = computed(() => baseStatsStore.dangGames.length >= 100);
    const mmWinDarn10 = computed(() => baseStatsStore.darnGames.length >= 10);
    const mmWinDarn100 = computed(() => baseStatsStore.darnGames.length >= 100);
    const mmWinHeck10 = computed(() => baseStatsStore.heckGames.length >= 10);
    const mmWinHeck100 = computed(() => baseStatsStore.heckGames.length >= 100);
    const mmWinFrick10 = computed(() => baseStatsStore.frickGames.length >= 10);
    const mmWinFrick100 = computed(() => baseStatsStore.frickGames.length >= 100);

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
    };
});


