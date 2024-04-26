import {
    describe,
    expect,
    it,
} from 'vitest';

import getRandomSquares from './getRandomSquares.js';

describe('getRandomSquares', () => {
    it.each([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
    ])('generates the %s unique squares', (count) => {
        const squares = getRandomSquares(count);
        const squareSet = new Set(squares);
        expect(squares.length).toBe(count);
        expect(squareSet.size).toBe(count);
    });
});

