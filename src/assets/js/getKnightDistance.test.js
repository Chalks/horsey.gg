import getKnightDistance from './getKnightDistance.js';

describe('getKnightDistance', () => {
    it.each([
        ['a1', 'a1', 0],
        ['a1', 'b1', 3],
        ['a1', 'c1', 2],
        ['a1', 'd1', 3],
        ['a1', 'e1', 2],
        ['a1', 'f1', 3],
        ['a1', 'g1', 4],
        ['a1', 'h1', 5],
        ['a1', 'a2', 3],
        ['a1', 'b2', 4],
        ['a1', 'c2', 1],
        ['a1', 'd2', 2],
        ['a1', 'e2', 3],
        ['a1', 'f2', 4],
        ['a1', 'g2', 3],
        ['a1', 'h2', 4],
        ['a1', 'a3', 2],
        ['a1', 'b3', 1],
        ['a1', 'c3', 4],
        ['a1', 'd3', 3],
        ['a1', 'e3', 2],
        ['a1', 'f3', 3],
        ['a1', 'g3', 4],
        ['a1', 'h3', 5],
        ['a1', 'a4', 3],
        ['a1', 'b4', 2],
        ['a1', 'c4', 3],
        ['a1', 'd4', 2],
        ['a1', 'e4', 3],
        ['a1', 'f4', 4],
        ['a1', 'g4', 3],
        ['a1', 'h4', 4],
        ['a1', 'a5', 2],
        ['a1', 'b5', 3],
        ['a1', 'c5', 2],
        ['a1', 'd5', 3],
        ['a1', 'e5', 4],
        ['a1', 'f5', 3],
        ['a1', 'g5', 4],
        ['a1', 'h5', 5],
        ['a1', 'a6', 3],
        ['a1', 'b6', 4],
        ['a1', 'c6', 3],
        ['a1', 'd6', 4],
        ['a1', 'e6', 3],
        ['a1', 'f6', 4],
        ['a1', 'g6', 5],
        ['a1', 'h6', 4],
        ['a1', 'a7', 4],
        ['a1', 'b7', 3],
        ['a1', 'c7', 4],
        ['a1', 'd7', 3],
        ['a1', 'e7', 4],
        ['a1', 'f7', 5],
        ['a1', 'g7', 4],
        ['a1', 'h7', 5],
        ['a1', 'a8', 5],
        ['a1', 'b8', 4],
        ['a1', 'c8', 5],
        ['a1', 'd8', 4],
        ['a1', 'e8', 5],
        ['a1', 'f8', 4],
        ['a1', 'g8', 5],
        ['a1', 'h8', 6],
    ])('Calculates %s -> %s to be %s moves apart', (sq1, sq2, distance) => {
        expect(getKnightDistance(sq1, sq2)).toEqual(distance);
    });
});
