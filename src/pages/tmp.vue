<script setup>
import {Chessboard, PIECE} from 'cm-chessboard';
import {MARKER_TYPE, Markers} from 'cm-chessboard/src/extensions/markers/Markers.js';
import 'cm-chessboard/assets/chessboard.css';
import 'cm-chessboard/assets/extensions/markers/markers.css';

const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const rows = ['1', '2', '3', '4', '5', '6', '7', '8'];

const getRandomSquare = () => `${cols[Math.floor(Math.random() * 8)]}${rows[Math.floor(Math.random() * 8)]}`;

const getValidSquares = (square) => {
    if (!square) {
        return [];
    }

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

const HOVER_MARKER = MARKER_TYPE.frame;
const MOVE_MARKER = MARKER_TYPE.dot;
const GOAL_MARKER = MARKER_TYPE.circlePrimary;

const NOT_STARTED = -1;

let board = null;
let goal = null;
const moves = ref(0);
const time = ref(0);
const loc = ref(null);
const minimumMoves = ref(null);
const validSquares = computed(() => getValidSquares(loc.value));
const win = computed(() => loc.value === goal);

let showLegalMoves = true;

const boardEl = ref(null);

const createBoard = () => {
    if (board) {
        board.destroy();
        boardEl.value.replaceChildren();
    }

    board = new Chessboard(boardEl.value, {
        assetsUrl: '/chess/',
        extensions: [
            {class: Markers},
        ],
    });
};

const createKnight = () => {
    loc.value = getRandomSquare(); // 'a1';
    board.setPiece(loc.value, PIECE.bn, true);
};

const createGoal = () => {
    let tmp = getRandomSquare();
    while (tmp === loc.value) {
        tmp = getRandomSquare();
    }

    goal = tmp; // 'b2';
    board.removeMarkers(GOAL_MARKER);
    board.addMarker(GOAL_MARKER, goal);
};

const drawLegalMoves = () => {
    board.removeMarkers(MOVE_MARKER);

    if (showLegalMoves) {
        validSquares.value.forEach((square) => {
            board.addMarker(MOVE_MARKER, square);
        });
    }
};

const calculateMinimumMoves = () => {
    const fCol = cols.indexOf(loc.value[0]);
    const fRow = rows.indexOf(loc.value[1]);

    const tCol = cols.indexOf(goal[0]);
    const tRow = rows.indexOf(goal[1]);

    // axes symmetry
    let x = Math.abs(fCol - tCol);
    let y = Math.abs(fRow - tRow);

    // diagonal symmetry
    if (x < y) {
        const tmp = x;
        x = y;
        y = tmp;
    }

    // 2 corner cases
    if (x === 1 && y === 0) return 3;
    if (x === 2 && y === 2) return 4;

    // main formula
    const delta = x - y;
    if (y > delta) {
        return delta - 2 * Math.floor((delta - y) / 3);
    }

    return delta - 2 * Math.floor((delta - y) / 4);
};

const toggleLegalMoves = () => {
    showLegalMoves = !showLegalMoves;
    drawLegalMoves();
};

const reset = () => {
    moves.value = 0;
    time.value = NOT_STARTED;
    createBoard();
    createKnight();
    createGoal();
    minimumMoves.value = calculateMinimumMoves(loc, goal);
    drawLegalMoves();
};

const handleMouseover = (event) => {
    if (win.value) return;

    const square = event.target.getAttribute('data-square');
    if (!square) return;

    const markersOnSquare = board.getMarkers(HOVER_MARKER, square);
    if (markersOnSquare?.length === 0) {
        board.removeMarkers(HOVER_MARKER);
        board.addMarker(HOVER_MARKER, square);
    }
};

const handleMousedown = (event) => {
    if (win.value) {
        reset();
        return;
    }
    if (time.value === NOT_STARTED) {
        time.value = performance.now();
    }

    const to = event.target.getAttribute('data-square');
    if (validSquares.value.includes(to)) {
        moves.value += 1;
        board.movePiece(loc.value, to);
        loc.value = to;
        drawLegalMoves();
    }
};

const handleWin = () => {
    board.removeMarkers(HOVER_MARKER);
    board.removeMarkers(MOVE_MARKER);
    time.value = performance.now() - time.value;
};

onMounted(() => {
    reset();
    board.context.addEventListener('mouseover', handleMouseover);
    board.context.addEventListener('mousedown', handleMousedown);
});

watch(win, (val) => {
    if (val) {
        handleWin();
    }
});
</script>
<template>
    <div class="prose prose-red container mx-auto my-12 text-justify">
        <h1>KnightSight</h1>

        <div class="">
            <p>Minimum: {{ minimumMoves }}</p>
            <p>Moves: {{ moves }}</p>
            <p>Time: {{ time }}</p>
        </div>

        <div ref="boardEl" />

        <p>
            KnightSight is a chess knight move trainer. Your goal is to get the
            knight from a randomly generated position to another as quickly as
            possible. Your score is accuracy vs time spent.
        </p>

        <p>Mode ideas:</p>
        <p>attack the pawn (get into a position that attacks the pawn)</p>
        <p>threaten the attack (get into a position that's one move away from attacking the pawn</p>
        <p>defend the knight (get into a position defended by the other piece on the board)</p>

        <button @click="reset">reset</button>
        <button @click="toggleLegalMoves">Toggle legal moves</button>
    </div>
</template>
