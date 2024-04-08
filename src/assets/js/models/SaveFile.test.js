import {
    beforeEach,
    describe,
    expect,
    it,
} from 'vitest';

import {GOSH, SHUCKS} from 'assets/js/constants.js';

import SaveFile from './SaveFile.js';
import MoveMachineStat from './MoveMachineStat.js';

describe('SaveFile', () => {
    let validSerialized;
    let validDeserialized;

    const expectEqual = (a, b) => {
        expect(a.moveMachineStats).toEqual(b.moveMachineStats);

        Object.entries(a).forEach(([key, value]) => {
            expect(value).toEqual(b[key]);
            expect(value.moveMachineStats).toEqual(b[key].moveMachineStats);
            expect(value.end).toEqual(b[key].end);
            expect(value.moves).toEqual(b[key].moves);
            expect(value.invalidMoves).toEqual(b[key].invalidMoves);
            expect(value.ms).toEqual(b[key].ms);
            expect(value.date).toEqual(b[key].date);
            expect(value.optimalMoves).toEqual(b[key].optimalMoves);
        });
    };

    beforeEach(() => {
        const date = Date.now();
        const date2 = date - 10000;

        validDeserialized = new SaveFile({
            selectedDifficulties: {
                moveMachine: SHUCKS,
            },
            moveMachineStats: {
                [date]: new MoveMachineStat({
                    start: 'a1',
                    end: 'h8',
                    moves: 10,
                    invalidMoves: 0,
                    ms: 4000,
                    date,
                    difficulty: GOSH,
                }),
                [date2]: new MoveMachineStat({
                    start: 'b1',
                    end: 'g8',
                    moves: 20,
                    invalidMoves: 1,
                    ms: 8000,
                    date: date2,
                    difficulty: GOSH,
                }),
            },
        });

        validSerialized = {
            selectedDifficulties: {
                moveMachine: SHUCKS,
            },
            moveMachineStats: {
                [validDeserialized.moveMachineStats[date].date]: [
                    validDeserialized.moveMachineStats[date].start,
                    validDeserialized.moveMachineStats[date].end,
                    validDeserialized.moveMachineStats[date].moves,
                    validDeserialized.moveMachineStats[date].invalidMoves,
                    validDeserialized.moveMachineStats[date].ms,
                    validDeserialized.moveMachineStats[date].difficulty,
                ],
                [validDeserialized.moveMachineStats[date2].date]: [
                    validDeserialized.moveMachineStats[date2].start,
                    validDeserialized.moveMachineStats[date2].end,
                    validDeserialized.moveMachineStats[date2].moves,
                    validDeserialized.moveMachineStats[date2].invalidMoves,
                    validDeserialized.moveMachineStats[date2].ms,
                    validDeserialized.moveMachineStats[date2].difficulty,
                ],
            },
        };
    });

    it('Can construct with nothing defined', () => {
        expect(() => new SaveFile()).not.toThrowError();
    });

    it('Can construct if everything is defined', () => {
        expect(() => new SaveFile(validDeserialized)).not.toThrowError();
    });

    it('Can construct from itself', () => {
        const og = new SaveFile(validDeserialized);
        expect(() => new SaveFile(og)).not.toThrowError();

        const copy = new SaveFile(og);
        expectEqual(og, copy);
    });

    it('Can construct from the output of deserialize', () => {
        const output = SaveFile.deserialize(validSerialized);

        expect(output).toEqual(validDeserialized);
        expect(() => new SaveFile(output)).not.toThrowError();
    });

    it('Deserializing creates the expected shape', () => {
        const output = SaveFile.deserialize(validSerialized);
        expect(output).toEqual(validDeserialized);
    });

    it('Serializing creates the expected shape', () => {
        const og = new SaveFile(validDeserialized);
        expect(og.serialize()).toEqual(validSerialized);
    });

    // eslint-disable-next-line vitest/expect-expect
    it('Is idempotent when serialized -> deserialized', () => {
        const og = new SaveFile(validDeserialized);
        const transformed = SaveFile.deserialize(og.serialize());
        expectEqual(og, transformed);
    });

    it('Is idempotent when deserialized -> serialized', () => {
        const og = SaveFile.deserialize(validSerialized);
        expect(og.serialize()).toEqual(validSerialized);
    });
});

