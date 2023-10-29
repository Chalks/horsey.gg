<script setup>
import {Chessboard} from 'cm-chessboard';
import {MARKER_TYPE, Markers} from 'cm-chessboard/src/extensions/markers/Markers.js';
import 'cm-chessboard/assets/chessboard.css';
import 'cm-chessboard/assets/extensions/markers/markers.css';

import getValidSquares from '~/assets/js/getValidSquares.js';

const props = defineProps({
    piece: {type: String, default: null},
    start: {type: String, default: null},
    end: {type: String, default: null},
    showLegalMoves: {type: Boolean, default: false},
});

const emit = defineEmits(['start', 'win', 'move', 'invalidMove']);

let board = null;
const boardEl = ref(null);
const boardLoc = ref(null);
const boardGoal = ref(null);
const boardPiece = ref(null);
const playing = ref(false);
const validSquares = computed(() => getValidSquares(boardPiece.value, boardLoc.value));
const win = computed(() => boardLoc.value !== null
    && boardGoal.value !== null
    && boardLoc.value === boardGoal.value);

const stats = {
    moves: 0,
    invalidMoves: 0,
    startPerformance: 0,
    endPerformance: 0,
    ms: 0,
};

const HOVER_MARKER = MARKER_TYPE.frame;
const MOVE_MARKER = MARKER_TYPE.dot;
const GOAL_MARKER = MARKER_TYPE.circlePrimary;

// START mouse handlers
const handleMouseover = (event) => {
    if (!board) return;
    if (win.value) return;

    const square = event.target.getAttribute('data-square');
    if (!square) return;

    const markersOnSquare = board.getMarkers(HOVER_MARKER, square);
    if (markersOnSquare?.length === 0) {
        board.removeMarkers(HOVER_MARKER);
        board.addMarker(HOVER_MARKER, square);
    }
};

const handleMouseleave = () => {
    if (!board) return;

    board.removeMarkers(HOVER_MARKER);
};

const handleMousedown = (event) => {
    if (!board) return;
    if (win.value) return;

    const to = event.target.getAttribute('data-square');
    if (validSquares.value.includes(to)) {
        stats.moves += 1;
        emit('move', {from: boardLoc.value, to});
        board.movePiece(boardLoc.value, to);
        boardLoc.value = to;
    } else {
        stats.invalidMoves += 1;
        emit('invalidMove', {from: boardLoc.value, to});
    }
};
// END mouse handlers

// START reset functions
const destroyBoard = () => {
    if (board) {
        board.destroy();
        boardEl.value.replaceChildren();
    }
};

const createBoard = () => {
    board = new Chessboard(boardEl.value, {
        assetsUrl: '/chess/',
        extensions: [
            {class: Markers},
        ],
    });

    board.context.addEventListener('mousedown', handleMousedown);
    board.context.addEventListener('mouseover', handleMouseover);
    board.context.addEventListener('mouseleave', handleMouseleave);
};

const createPiece = () => {
    if (!board) return;
    if (!props.piece || !props.start) return;

    boardPiece.value = props.piece;
    boardLoc.value = props.start;
    board.setPiece(boardLoc.value, boardPiece.value, true);
};

const createGoal = () => {
    if (!board) return;
    if (!props.end) return;

    boardGoal.value = props.end;
    board.removeMarkers(GOAL_MARKER);
    board.addMarker(GOAL_MARKER, boardGoal.value);
};

const initStats = () => {
    stats.moves = 0;
    stats.invalidMoves = 0;
    stats.startPerformance = performance.now();
    stats.endPerformance = -1;
    stats.ms = 0;
};

const reset = () => {
    console.log('reset');
    destroyBoard();
    initStats();
    createBoard();
    createPiece();
    createGoal();
};
// END reset functions

// START watchers
watch(boardLoc, () => {
    // draw legal moves when the location of the piece changes
    if (!board) return;

    board.removeMarkers(MOVE_MARKER);

    if (props.showLegalMoves && !win.value) {
        validSquares.value.forEach((square) => {
            board.addMarker(MOVE_MARKER, square);
        });
    }
});

watch(win, (val) => {
    if (val) {
        if (board) {
            board.removeMarkers(HOVER_MARKER);
            board.removeMarkers(MOVE_MARKER);
        }
        stats.endPerformance = performance.now();
        stats.ms = stats.endPerformance - stats.startPerformance;
        playing.value = false;
        emit('win', stats);
    }
});

onMounted(() => {
    reset();
});
// END watchers

const startGame = () => {
    playing.value = true;
    emit('start');
    reset();
};
</script>

<template>
    <div class="relative">
        <div
            ref="boardEl"
        />
        <div
            v-if="!playing"
            class="cursor-pointer bg-gray-300/80 absolute inset-0 flex flex-col items-center justify-center select-none gap-2"
            @click="startGame"
        >
            <span>Click to play</span>
            <slot name="default" />
        </div>
    </div>
</template>
