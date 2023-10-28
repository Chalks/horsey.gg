import {PIECE} from 'cm-chessboard';

const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const rows = ['1', '2', '3', '4', '5', '6', '7', '8'];

export default (piece, square) => {
    if (!square) return [];
    if (!piece) return [];

    // only works for knights right now
    if (piece !== PIECE.bn && piece !== PIECE.wn) return [];

    const col = cols.indexOf(square[0]);
    const row = rows.indexOf(square[1]);

    return [
        [col - 2, row - 1],
        [col - 2, row + 1],
        [col - 1, row - 2],
        [col - 1, row + 2],
        [col + 1, row - 2],
        [col + 1, row + 2],
        [col + 2, row - 1],
        [col + 2, row + 1],
    ].filter(([potentialCol, potentialRow]) => {
        const validCol = potentialCol >= 0 && potentialCol <= 7;
        const validRow = potentialRow >= 0 && potentialRow <= 7;
        return validCol && validRow;
    }).map(([potentialCol, potentialRow]) => `${cols[potentialCol]}${rows[potentialRow]}`);
};

