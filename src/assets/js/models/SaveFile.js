import {save as sjwtSave} from 'sjwt';
import {GOSH} from 'assets/js/constants.js';
import BaseStat from './BaseStat.js';

export default class SaveFile {
    selectedDifficulty;
    baseStats;

    constructor({
        selectedDifficulty = GOSH,
        baseStats = {},
    } = {}) {
        this.selectedDifficulty = selectedDifficulty;
        this.baseStats = baseStats;
    }

    resetBaseStats() {
        this.selectedDifficulty = GOSH;
        this.baseStats = {};

        sjwtSave({
            overwrite: true,
            privateData: {
                saveFile: {
                    selectedDifficulty: GOSH,
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
        selectedDifficulty = GOSH,
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

