import {save as sjwtSave} from 'sjwt';
import BaseStat from './BaseStat.js';

export default class SaveFile {
    baseStats;

    constructor({
        baseStats = {},
    } = {}) {
        this.baseStats = baseStats;
    }

    resetBaseStats() {
        this.baseStats = {};
        sjwtSave({
            overwrite: true,
            privateData: {
                saveFile: {
                    baseStats: this.baseStats,
                    // this.somethingStats,
                    // this.fooStats,
                    // etc
                },
            },
        });
    }

    addBaseStat(baseStat) {
        this.baseStats[baseStat.date] = baseStat;
        this.save();
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
            baseStats: Object.keys(this.baseStats)
                .reduce((acc, date) => ({
                    ...acc,
                    ...this.baseStats[date].serialize(),
                }), {}),
        };
    }

    static deserialize({
        baseStats = {},
    } = {}) {
        return new SaveFile({
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

