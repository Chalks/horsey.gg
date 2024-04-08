import {
    beforeEach,
    describe,
    expect,
    it,
} from 'vitest';

import {GOSH, SHUCKS} from 'assets/js/constants.js';

import MoveMachineStat from './MoveMachineStat.js';

describe('MoveMachineStat', () => {
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
        validDeserialized = new MoveMachineStat({
            start: 'a1',
            end: 'h8',
            moves: 10,
            invalidMoves: 0,
            ms: 4000,
            date: Date.now(),
            difficulty: GOSH,
        });

        validSerialized = {
            [validDeserialized.date]: [
                validDeserialized.start,
                validDeserialized.end,
                validDeserialized.moves,
                validDeserialized.invalidMoves,
                validDeserialized.ms,
                validDeserialized.difficulty,
            ],
        };
    });

    it('Can NOT construct with nothing defined', () => {
        expect(() => new MoveMachineStat()).toThrowError();
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

        expect(() => new MoveMachineStat(validDeserialized)).toThrowError();
    });

    it('Can construct if everything other than difficulty is defined', () => {
        delete validDeserialized.difficulty;
        expect(() => new MoveMachineStat(validDeserialized)).not.toThrowError();
    });

    it('fills in a default GOSH difficulty if difficulty is undefined', () => {
        delete validDeserialized.difficulty;
        const result = new MoveMachineStat(validDeserialized);
        expect(result.difficulty).toBe(GOSH);
    });

    it('Uses difficulty if provided', () => {
        validDeserialized.difficulty = SHUCKS;
        const result = new MoveMachineStat(validDeserialized);
        expect(result.difficulty).toBe(SHUCKS);
    });

    it('Can construct from itself', () => {
        const og = new MoveMachineStat(validDeserialized);
        expect(() => new MoveMachineStat(og)).not.toThrowError();

        const copy = new MoveMachineStat(og);
        expectEqual(og, copy);
    });

    it('Can construct from the output of deserialize', () => {
        const output = MoveMachineStat.deserialize(validSerialized);

        expect(output).toEqual(validDeserialized);
        expect(() => new MoveMachineStat(output)).not.toThrowError();
    });

    it('Deserializing creates the expected shape', () => {
        const output = MoveMachineStat.deserialize(validSerialized);
        expect(output).toEqual(validDeserialized);
    });

    it('Serializing creates the expected shape', () => {
        const og = new MoveMachineStat(validDeserialized);
        expect(og.serialize()).toEqual(validSerialized);
    });

    // eslint-disable-next-line vitest/expect-expect
    it('Is idempotent when serialized -> deserialized', () => {
        const og = new MoveMachineStat(validDeserialized);
        const transformed = MoveMachineStat.deserialize(og.serialize());
        expectEqual(og, transformed);
    });

    it('Is idempotent when deserialized -> serialized', () => {
        const og = MoveMachineStat.deserialize(validSerialized);
        expect(og.serialize()).toEqual(validSerialized);
    });
});
