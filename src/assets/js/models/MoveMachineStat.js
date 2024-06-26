import {GOSH} from 'assets/js/constants.js';
import getKnightDistance from '../getKnightDistance.js';

export default class MoveMachineStat {
    difficulty;

    start;

    end;

    moves;

    invalidMoves;

    optimalMoves;

    ms;

    date;

    constructor({
        start,
        end,
        moves,
        invalidMoves,
        ms,
        date,
        difficulty = GOSH,
    }) {
        if (start === undefined
            || end === undefined
            || moves === undefined
            || invalidMoves === undefined
            || ms === undefined
            || date === undefined
            || difficulty === undefined
        ) {
            throw new Error('invalid arguments');
        }
        this.start = start;
        this.end = end;
        this.moves = moves;
        this.invalidMoves = invalidMoves;
        this.ms = ms;
        this.date = date;
        this.optimalMoves = getKnightDistance(start, end);
        this.difficulty = difficulty;
    }

    serialize() {
        return {
            [this.date]: [
                this.start,
                this.end,
                this.moves,
                this.invalidMoves,
                this.ms,
                this.difficulty,
            ],
        };
    }

    /**
     * saved format:
     * {
     *     [timestamp]: [start,end,moves,invalidMoves,optimalMoves,ms]
     * }
     */
    static deserialize(data = {}) {
        const date = Object.keys(data)[0];
        const [
            start,
            end,
            moves,
            invalidMoves,
            ms,
            difficulty,
        ] = data[date];

        return new MoveMachineStat({
            start,
            end,
            moves,
            invalidMoves,
            ms,
            date: Number(date),
            difficulty,
        });
    }
}

