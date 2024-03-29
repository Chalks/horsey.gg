<script setup>
import getRandomSquare from 'assets/js/getRandomSquare.js';
import getValidSquares from 'assets/js/getValidSquares.js';

import {
    HOVER_MARKER,
    MOVE_MARKER,
    GOAL_MARKER,
    DISABLED_MARKER,
} from 'assets/js/constants.js';

import {Chessboard} from 'cm-chessboard';
import {Markers} from 'cm-chessboard/src/extensions/markers/Markers.js';
import 'cm-chessboard/assets/chessboard.css';
import 'cm-chessboard/assets/extensions/markers/markers.css';

const props = defineProps({
    start: {type: String, default: null},
    goalSquares: {type: Array, default: () => []},
    disableLegalMoves: {type: Number, default: 0},
    // pieces: {type: Array, default: []},
    showLegalMoves: {type: Boolean, default: false},
});

const emit = defineEmits(['start', 'move', 'invalidMove']);

let board = null;
const boardEl = ref(null);
const horsey = ref(null);
const horseyLoc = ref(null);

const validSquares = computed(() => getValidSquares(horsey.value, horseyLoc.value));

const disabledSquares = computed(() => {
    const validNonGoalSquares = validSquares.value.filter((square) => !props.goalSquares.includes(square));
    const maxAllowedToRemove = Math.min(validSquares.value.length - 1, validNonGoalSquares.length);
    const shuffled = validNonGoalSquares.sort(() => 0.5 - Math.random());
    const n = Math.min(props.disableLegalMoves, maxAllowedToRemove);
    return shuffled.slice(0, n);
});

const movementSquares = computed(() => validSquares.value
    .filter((square) => !disabledSquares.value.includes(square)));

const playing = ref(false);
// let friendlyColor = null;

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
    while (props.goalSquares.includes(loc)) {
        loc = getRandomSquare();
    }
    horseyLoc.value = loc;
    board.setPiece(horseyLoc.value, horsey.value, true);
};

const drawGoalMarkers = () => {
    if (!board) return;

    board.removeMarkers(GOAL_MARKER);

    props.goalSquares.forEach((square) => {
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

const drawDisabledMoves = () => {
    if (!board) return;

    board.removeMarkers(DISABLED_MARKER);

    disabledSquares.value.forEach((square) => {
        board.addMarker(DISABLED_MARKER, square);
    });
};

watch(horseyLoc, () => {
    drawLegalMoves();
    drawDisabledMoves();
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
    drawDisabledMoves();
};

const stop = () => {
    board?.removeMarkers();
    destroyBoard();
    createBoard();
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
