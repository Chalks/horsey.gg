import {save as sjwtSave} from 'sjwt';
import {GOSH} from 'assets/js/constants.js';
import MoveMachineStat from './MoveMachineStat.js';

export default class SaveFile {
    selectedDifficulty;
    moveMachineStats;

    constructor({
        selectedDifficulty = GOSH,
        moveMachineStats = {},
    } = {}) {
        this.selectedDifficulty = selectedDifficulty;
        this.moveMachineStats = moveMachineStats;
    }

    reset() {
        this.selectedDifficulty = GOSH;
        this.moveMachineStats = {};

        sjwtSave({
            overwrite: true,
            privateData: {
                saveFile: {
                    selectedDifficulty: GOSH,
                    moveMachineStats: this.moveMachineStats,
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

    addMoveMachineStat(moveMachineStat) {
        this.moveMachineStats[moveMachineStat.date] = moveMachineStat;

        // save just a single game;
        sjwtSave({
            privateData: {
                saveFile: {
                    moveMachineStats: {
                        ...moveMachineStat.serialize(),
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
            moveMachineStats: Object.keys(this.moveMachineStats)
                .reduce((acc, date) => ({
                    ...acc,
                    ...this.moveMachineStats[date].serialize(),
                }), {}),
        };
    }

    static deserialize({
        selectedDifficulty = GOSH,
        moveMachineStats = {},
    } = {}) {
        return new SaveFile({
            selectedDifficulty,
            moveMachineStats: Object.keys(moveMachineStats)
                .reduce((acc, date) => {
                    acc[date] = MoveMachineStat.deserialize({
                        [date]: moveMachineStats[date],
                    });
                    return acc;
                }, {}),
        });
    }
}

