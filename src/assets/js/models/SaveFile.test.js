import {
    beforeEach,
    describe,
    expect,
    it,
} from 'vitest';

import SaveFile from './SaveFile.js';
import BaseStat from './BaseStat.js';

describe('SaveFile', () => {
    let validSerialized;
    let validDeserialized;

    const expectEqual = (a, b) => {
        expect(a.baseStats).toEqual(b.baseStats);

        Object.entries(a).forEach(([key, value]) => {
            expect(value).toEqual(b[key]);
            expect(value.baseStats).toEqual(b[key].baseStats);
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

        validDeserialized = {
            baseStats: {
                [date]: new BaseStat({
                    start: 'a1',
                    end: 'h8',
                    moves: 10,
                    invalidMoves: 0,
                    ms: 4000,
                    date,
                }),
                [date2]: new BaseStat({
                    start: 'b1',
                    end: 'g8',
                    moves: 20,
                    invalidMoves: 1,
                    ms: 8000,
                    date: date2,
                }),
            },
        };

        validSerialized = {
            baseStats: {
                [validDeserialized.baseStats[date].date]: [
                    validDeserialized.baseStats[date].start,
                    validDeserialized.baseStats[date].end,
                    validDeserialized.baseStats[date].moves,
                    validDeserialized.baseStats[date].invalidMoves,
                    validDeserialized.baseStats[date].ms,
                ],
                [validDeserialized.baseStats[date2].date]: [
                    validDeserialized.baseStats[date2].start,
                    validDeserialized.baseStats[date2].end,
                    validDeserialized.baseStats[date2].moves,
                    validDeserialized.baseStats[date2].invalidMoves,
                    validDeserialized.baseStats[date2].ms,
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

