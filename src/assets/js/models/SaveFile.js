import {save as sjwtSave} from 'sjwt';
import BaseStat from './BaseStat.js';

export default class SaveFile {
    baseStats;

    constructor({
        baseStats = [],
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
                .reduce((acc, date) => {
                    acc[date] = this.baseStats[date].serialize();
                    return acc;
                }, {}),
        };
    }

    static deserialize({
        baseStats = {},
    } = {}) {
        return {
            baseStats: Object.keys(baseStats)
                .sort()
                .map((date) => BaseStat
                    .deserialize(date, baseStats[date])),
        };
    }
}

