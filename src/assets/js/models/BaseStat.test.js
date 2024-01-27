import {
    beforeEach,
    describe,
    expect,
    it,
} from 'vitest';

import BaseStat from './BaseStat.js';

describe('BaseStat', () => {
    let validSerialized;
    let validDeserialized;

    const expectEqual = (a, b) => {
        expect(a.start).toEqual(b.start);
        expect(a.end).toEqual(b.end);
        expect(a.moves).toEqual(b.moves);
        expect(a.invalidMoves).toEqual(b.invalidMoves);
        expect(a.ms).toEqual(b.ms);
        expect(a.date).toEqual(b.date);
        expect(a.optimalMoves).toEqual(b.optimalMoves);
    };

    beforeEach(() => {
        validDeserialized = {
            start: 'a1',
            end: 'h8',
            moves: 10,
            invalidMoves: 0,
            ms: 4000,
            date: Date.now(),
        };

        validSerialized = {
            [validDeserialized.date]: [
                validDeserialized.start,
                validDeserialized.end,
                validDeserialized.moves,
                validDeserialized.invalidMoves,
                validDeserialized.ms,
            ],
        };
    });

    it('Can NOT construct with nothing defined', () => {
        expect(() => new BaseStat()).toThrowError();
    });

    it.each([
        ['start'],
        ['end'],
        ['moves'],
        ['invalidMoves'],
        ['ms'],
        ['date'],
    ])('Can NOT construct if `%s` is not defined', (arg) => {
        delete validDeserialized[arg];

        expect(() => new BaseStat(validDeserialized)).toThrowError();
    });

    it('Can construct if everything is defined', () => {
        expect(() => new BaseStat(validDeserialized)).not.toThrowError();
    });

    it('Can construct from itself', () => {
        const og = new BaseStat(validDeserialized);
        expect(() => new BaseStat(og)).not.toThrowError();

        const copy = new BaseStat(og);
        expectEqual(og, copy);
    });

    it('Can construct from the output of deserialize', () => {
        const output = BaseStat.deserialize(validSerialized);

        expect(output).toEqual(validDeserialized);
        expect(() => new BaseStat(output)).not.toThrowError();
    });

    it('Deserializing creates the expected shape', () => {
        const output = BaseStat.deserialize(validSerialized);
        expect(output).toEqual(validDeserialized);
    });

    it('Serializing creates the expected shape', () => {
        const og = new BaseStat(validDeserialized);
        expect(og.serialize()).toEqual(validSerialized);
    });

    // eslint-disable-next-line vitest/expect-expect
    it('Is idempotent when serialized -> deserialized', () => {
        const og = new BaseStat(validDeserialized);
        const transformed = BaseStat.deserialize(og.serialize());
        expectEqual(og, transformed);
    });

    it('Is idempotent when deserialized -> serialized', () => {
        const og = BaseStat.deserialize(validSerialized);
        expect(og.serialize()).toEqual(validSerialized);
    });
});
