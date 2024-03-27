import {save as sjwtSave} from 'sjwt';
import {EASY} from 'assets/js/constants.js';
import BaseStat from './BaseStat.js';

export default class SaveFile {
    selectedDifficulty;
    baseStats;

    constructor({
        selectedDifficulty = EASY,
        baseStats = {},
    } = {}) {
        this.selectedDifficulty = selectedDifficulty;
        this.baseStats = baseStats;
    }

    resetBaseStats() {
        this.selectedDifficulty = EASY;
        this.baseStats = {};

        sjwtSave({
            overwrite: true,
            privateData: {
                saveFile: {
                    selectedDifficulty: EASY,
                    baseStats: this.baseStats,
                    // this.somethingStats,
                    // this.fooStats,
                    // etc
                },
            },
        });
    }

    setDifficulty(difficulty) {
        this.selectedDifficulty = difficulty;
    }

    addBaseStat(baseStat) {
        this.baseStats[baseStat.date] = baseStat;

        // save just a single game;
        sjwtSave({
            privateData: {
                saveFile: {
                    baseStats: {
                        ...baseStat.serialize(),
                    },
                },
            },
        });
    }

    save() {
        sjwtSave({
            privateData: {
                saveFile: this.serialize(),
            },
        });
    }

    serialize() {
        return {
            selectedDifficulty: this.selectedDifficulty,
            baseStats: Object.keys(this.baseStats)
                .reduce((acc, date) => ({
                    ...acc,
                    ...this.baseStats[date].serialize(),
                }), {}),
        };
    }

    static deserialize({
        selectedDifficulty = EASY,
        baseStats = {},
    } = {}) {
        return new SaveFile({
            selectedDifficulty,
            baseStats: Object.keys(baseStats)
                .reduce((acc, date) => {
                    acc[date] = BaseStat.deserialize({
                        [date]: baseStats[date],
                    });
                    return acc;
                }, {}),
        });
    }
}

