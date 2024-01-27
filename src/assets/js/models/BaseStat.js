import getKnightDistance from '~/assets/js/getKnightDistance.js';

export default class BaseStat {
    start;

    end;

    moves;

    invalidMoves;

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
        this.start = start;
        this.end = end;
        this.moves = moves;
        this.invalidMoves = invalidMoves;
        this.ms = ms;
        this.date = date;
    }

    get optimalMoves() {
        return getKnightDistance(this.start, this.end);
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
    static deserialize(date, [
        start,
        end,
        moves,
        invalidMoves,
        ms,
    ] = []) {
        return new BaseStat({
            start,
            end,
            moves,
            invalidMoves,
            ms,
            date,
        });
    }
}

