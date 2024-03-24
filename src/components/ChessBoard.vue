<script setup>
import getRandomSquare from 'assets/js/getRandomSquare.js';
import {Chessboard} from 'cm-chessboard';
import {MARKER_TYPE, Markers} from 'cm-chessboard/src/extensions/markers/Markers.js';
import 'cm-chessboard/assets/chessboard.css';
import 'cm-chessboard/assets/extensions/markers/markers.css';

import getValidSquares from '~/assets/js/getValidSquares.js';

const props = defineProps({
    start: {type: String, default: null},
    goalMarkers: {type: Array, default: () => []},
    // pieces: {type: Array, default: []},
    showLegalMoves: {type: Boolean, default: false},
});

const emit = defineEmits(['start', 'move', 'invalidMove']);

let board = null;
const boardEl = ref(null);
const horsey = ref(null);
const horseyLoc = ref(null);
const movementSquares = computed(() => getValidSquares(horsey.value, horseyLoc.value));
const playing = ref(false);
// let friendlyColor = null;

const HOVER_MARKER = MARKER_TYPE.frame;
const MOVE_MARKER = MARKER_TYPE.dot;
const GOAL_MARKER = MARKER_TYPE.circlePrimary;

const handleMouseover = (event) => {
    if (!board) return;

    const square = event.target.getAttribute('data-square');
    if (!square) return;

    const hoverMarkersOnSquare = board.getMarkers(HOVER_MARKER, square);
    if (hoverMarkersOnSquare?.length === 0) {
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

    const to = event.target.getAttribute('data-square');
    if (movementSquares.value.includes(to)) {
        board.movePiece(horseyLoc.value, to);
        emit('move', {from: horseyLoc.value, to});
        horseyLoc.value = to;
    } else {
        emit('invalidMove', {from: horseyLoc.value, to});
    }
};

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

const createHorsey = () => {
    if (!board) return;

    horsey.value = ['bn', 'wn'][Math.floor(Math.random() * 2)];
    // friendlyColor = horsey.value === 'bn' ? 'b' : 'w';

    let loc = props.start || getRandomSquare();
    while (props.goalMarkers.includes(loc)) {
        loc = getRandomSquare();
    }
    horseyLoc.value = loc;
    board.setPiece(horseyLoc.value, horsey.value, true);
};

const drawGoalMarkers = () => {
    if (!board) return;

    board.removeMarkers(GOAL_MARKER);

    props.goalMarkers.forEach((square) => {
        board.addMarker(GOAL_MARKER, square);
    });
};

const drawLegalMoves = () => {
    if (!board) return;

    board.removeMarkers(MOVE_MARKER);

    if (props.showLegalMoves) {
        movementSquares.value.forEach((square) => {
            board.addMarker(MOVE_MARKER, square);
        });
    }
};

watch(horseyLoc, () => {
    drawLegalMoves();
});

onMounted(() => {
    createBoard();
});

const startGame = () => {
    playing.value = true;
    emit('start');
};

// public functions
const ready = () => {
    destroyBoard();
    createBoard();
    createHorsey();
    drawGoalMarkers();
    drawLegalMoves();
};

const stop = () => {
    destroyBoard();
    createBoard();
    horseyLoc.value = null;
    playing.value = false;
};

defineExpose({
    ready,
    stop,
});
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
