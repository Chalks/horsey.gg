import {save as sjwtSave} from 'sjwt';
import getKnightDistance from '../getKnightDistance.js';

export default class BaseStat {
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
    }) {
        if (start === undefined
            || end === undefined
            || moves === undefined
            || invalidMoves === undefined
            || ms === undefined
            || date === undefined
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
    }

    serialize() {
        return {
            [this.date]: [
                this.start,
                this.end,
                this.moves,
                this.invalidMoves,
                this.ms,
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
        ] = data[date];

        return new BaseStat({
            start,
            end,
            moves,
            invalidMoves,
            ms,
            date: Number(date),
        });
    }
}

