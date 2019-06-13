export class GameState {
    constructor(size) {
        this.size = size;
        this.count = size * size;

        this.data = new Array(size * size);

        for (let i = 0; i < size * size; i++) {
            this.data[i] = -1;
        }
    }

    init() {

        let count = this.count

        let indices = Array.iota(0, count - 1);

        for (let i = 0; i < this.size / 2; i++) {
            let idx = indices.fish();
            this.data[idx] = 1;
        }

        this.computeNext();
    }

    computeNext() {
        let r = Math.random();
        for(let i = this.getHighestPower(); i >= 1; i--) {
            if(r < Math.pow(1/i, 3.0)) {
                this.next = i;
                return;
            }
        }
        throw "This shouldn't be thrown";
    }

    clone() {
        let s = new GameState(this.size);
        s.data = this.data.map(x => x);
        return s;
    }

    randomFreeSpot() {
        return this.data.map((v, i) => [v, i]).filter(x => x[0] === -1).fish()[1];
    }

    get(x, y) {
        if (x < 0 || x >= this.size || y < 0 || y >= this.size)
            return null;
        return this.data[y * this.size + x];
    }

    set(x, y, v) {
        this.data[y * this.size + x] = v;
    }

    getScore(base) {
        let score = 0;
        for (let v of this.data) {
            if (v > 1)
                score += Math.pow(3, v - 1);
        }
        return score;
    }

    canMove() {
        if (this.data.find(v => v == -1)) {
            return true;
        } else {
            for (let x = 0; x < this.size; x++) {
                for (let y = 0; y < this.size; y++) {
                    let v = this.get(x, y);
                    if (v === this.get(x + 1, y) || v === this.get(x, y + 1))
                        return true;
                }
            }
        }
        return false;
    }

    move(dir) {
        let moves = [];
        let forward = dir === "left" || dir === "up";
        let horizontal = dir === "left" || dir === "right";
        let newState = this.clone();

        let indices = forward ? Array.iota(0, this.size - 2) : Array.iota(this.size - 1, 1);
        let dk = forward ? 1 : -1;

        for (let i0 of indices) {
            for (let i1 = 0; i1 < this.size; i1++) {
                let x0 = horizontal ? i0 : i1;
                let y0 = horizontal ? i1 : i0;
                let x1 = horizontal ? x0 + dk : x0;
                let y1 = horizontal ? y0 : y0 + dk;

                let v0 = newState.get(x0, y0);
                let v1 = newState.get(x1, y1);

                if (v0 === -1) {
                    newState.set(x0, y0, v1);
                    newState.set(x1, y1, -1);
                    if (v1 !== -1)
                        moves.push([x0, y0, x1, y1]);
                } else {
                    if (v0 === v1) {
                        newState.set(x0, y0, v0 + 1);
                        newState.set(x1, y1, -1);
                        moves.push([x0, y0, x1, y1]);
                    }
                }
            }
        }

        if (moves.length > 0) {
            newState.data[newState.randomFreeSpot()] = this.next;
        }

        newState.computeNext();

        return {
            moves: moves,
            state: newState
        }
    }

    getHighestPower() {
        let power = -1;
        this.data.forEach(v => power = Math.max(power, v));
        return power;
    }

}