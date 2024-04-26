import {
    describe,
    expect,
    it,
} from 'vitest';

import getRandomSquare from './getRandomSquare.js';

describe('getRandomSquare', () => {
    it('generates a valid chess square', () => {
        const square = getRandomSquare();
        expect(square.length).toBe(2);
        expect(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].includes(square.charAt(0))).toBe(true);
        expect(['1', '2', '3', '4', '5', '6', '7', '8'].includes(square.charAt(1))).toBe(true);
    });
});

