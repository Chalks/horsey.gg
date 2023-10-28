import {PIECE} from 'cm-chessboard';

const keys = Object.keys(PIECE);

export default () => PIECE[keys[Math.floor(Math.random() * keys.length)]];
