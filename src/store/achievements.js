import {defineStore} from 'pinia';
// import {useUserStore} from 'store/user.js';
import {useBaseStatsStore} from 'store/baseStats.js';
import {GOSH} from 'assets/js/constants.js';

// eslint-disable-next-line import/prefer-default-export
export const useAchievementsStore = defineStore('achievementsStore', () => {
    // const userStore = useUserStore();
    const baseStatsStore = useBaseStatsStore();

    const mmWinGosh10 = computed(() => baseStatsStore.rawGames.filter(({difficulty}) => difficulty === GOSH).length >= 10);
    const mmWinGosh100 = computed(() => baseStatsStore.rawGames.filter(({difficulty}) => difficulty === GOSH).length >= 100);

    return {
        mmWinGosh10,
        mmWinGosh100,
    };
});


