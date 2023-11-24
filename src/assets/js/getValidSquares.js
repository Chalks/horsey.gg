import {PIECE} from 'cm-chessboard';

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];

export default (piece, square) => {
    if (!square) return [];
    if (!piece) return [];

    // only works for knights right now
    if (piece !== PIECE.bn && piece !== PIECE.wn) return [];

    const file = files.indexOf(square[0]);
    const rank = ranks.indexOf(square[1]);

    return [
        [file - 2, rank - 1],
        [file - 2, rank + 1],
        [file - 1, rank - 2],
        [file - 1, rank + 2],
        [file + 1, rank - 2],
        [file + 1, rank + 2],
        [file + 2, rank - 1],
        [file + 2, rank + 1],
    ].filter(([potentialCol, potentialRow]) => {
        const validCol = potentialCol >= 0 && potentialCol <= 7;
        const validRow = potentialRow >= 0 && potentialRow <= 7;
        return validCol && validRow;
    }).map(([potentialCol, potentialRow]) => `${files[potentialCol]}${ranks[potentialRow]}`);
};

