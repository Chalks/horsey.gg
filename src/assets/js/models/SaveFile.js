import {save as sjwtSave} from 'sjwt';
import {GOSH, MOVE_MACHINE} from 'assets/js/constants.js';
import MoveMachineStat from './MoveMachineStat.js';

export default class SaveFile {
    selectedDifficulties;
    moveMachineStats;

    constructor({
        selectedDifficulties = {},
        moveMachineStats = {},
    } = {}) {
        this.selectedDifficulties = {
            moveMachine: selectedDifficulties.moveMachine ?? GOSH,
        };
        this.moveMachineStats = moveMachineStats;
    }

    reset() {
        this.selectedDifficulties = {
            moveMachine: GOSH,
        };
        this.moveMachineStats = {};

        sjwtSave({
            overwrite: true,
            privateData: {
                saveFile: {
                    selectedDifficulties: this.selectedDifficulties,
                    moveMachineStats: this.moveMachineStats,
                },
            },
        });
    }

    setMoveMachineDifficulty(difficulty) {
        this.setDifficulty(MOVE_MACHINE, difficulty);
    }

    setDifficulty(game, difficulty) {
        switch (game) {
            case MOVE_MACHINE:
            default:
                this.selectedDifficulties.moveMachine = difficulty;
        }

        // save just the difficulties
        sjwtSave({
            privateData: {
                saveFile: {
                    selectedDifficulties: {
                        ...this.selectedDifficulties,
                    },
                },
            },
        });
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
            selectedDifficulties: {
                moveMachine: this.selectedDifficulties?.moveMachine ?? GOSH,
            },
            moveMachineStats: Object.keys(this.moveMachineStats)
                .reduce((acc, date) => ({
                    ...acc,
                    ...this.moveMachineStats[date].serialize(),
                }), {}),
        };
    }

    static deserialize({
        selectedDifficulties = {},
        moveMachineStats = {},
    } = {}) {
        return new SaveFile({
            selectedDifficulties: {
                moveMachine: selectedDifficulties.moveMachine ?? GOSH,
            },
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

