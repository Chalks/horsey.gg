import getRandomSquare from './getRandomSquare.js';

export default (count) => {
    const squares = [];
    while (squares.length < count) {
        const square = getRandomSquare();
        if (!squares.includes(square)) {
            squares.push(square);
        }
    }

    return squares;
};
