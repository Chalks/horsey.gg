/* eslint no-bitwise: 0 */
// https://www.chessprogramming.org/Knight-Distance#By_Absolute_Rank-File_Distance

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];

const squareToIndex = (square) => {
    const file = files.indexOf(square[0]);
    const rank = ranks.indexOf(square[1]);
    return rank * 8 + file;
};

const distance = [
    0, 3, 2, 3, 2, 3, 4, 5,
    3, 2, 1, 2, 3, 4, 3, 4,
    2, 1, 4, 3, 2, 3, 4, 5,
    3, 2, 3, 2, 3, 4, 3, 4,
    2, 3, 2, 3, 4, 3, 4, 5,
    3, 4, 3, 4, 3, 4, 5, 4,
    4, 3, 4, 3, 4, 5, 4, 5,
    5, 4, 5, 4, 5, 4, 5, 6,
];

const corner = [
    1, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 1,
];

const absoluteRankFileDiff = (a, b) => {
    const rankDiff = (a | 7) - (b | 7);
    const fileDiff = (a & 7) - (b & 7);
    return Math.abs(rankDiff) + Math.abs(fileDiff);
};

export default (sq1, sq2) => {
    const aIndex = squareToIndex(sq1);
    const bIndex = squareToIndex(sq2);


    const c = absoluteRankFileDiff(aIndex, bIndex);
    let d = distance[c];
    if (c === 9) {
        d += 2 * (corner[aIndex] ^ corner[bIndex]);
    }

    return d;
};
