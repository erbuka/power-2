import { GameState } from './game-state.js';
import mp3Swipe from '../sound/swipe.mp3';

const AppState = {
    Loading: 0,
    Playing: 1,
    MainMenu: 2,
    Score: 3
}

const Constants = {
    GameTitle: "Power 2",
    NewGame: "Press ENTER to Start"
}

export class Application {

    constructor() {

        this.colors = [];
        this.animatedSquares = [];
        this.highScore = parseInt(localStorage.getItem("highscore")) || 0;

        for (let hue = 0; hue < 360 * 4; hue += 75) {
            this.colors.push(`hsl(${hue % 360}, 50%, 50%)`);
        }
    }


    start() {

        this.state = AppState.MainMenu;
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");

        window.addEventListener("resize", this.resize.bind(this));
        window.addEventListener("keyup", this.keyup.bind(this));

        document.body.appendChild(this.canvas);

        this.resize();

        this.startTime = this.prevTime = Date.now();
        window.requestAnimationFrame(this.update.bind(this));
    }

    keyup(evt) {
        if (this.state === AppState.MainMenu && evt.keyCode == 13) {
            this.newGame();
        }

        if (this.state === AppState.Score && evt.keyCode == 13) {
            this.state = AppState.MainMenu;
        }

        if (this.state === AppState.Playing) {

            if (this.animatedSquares.length > 0)
                return;

            let moveResult = null;
            switch (evt.keyCode) {
                case 37: // Left
                    moveResult = this.game.move("left");
                    break;
                case 39: // Right
                    moveResult = this.game.move("right");
                    break;
                case 38: // Up
                    moveResult = this.game.move("up");
                    break;
                case 40: // Down
                    moveResult = this.game.move("down");
                    break;
            }

            if (moveResult && moveResult.moves.length > 0) {

                this.nextGame = moveResult.state;

                this.animatedSquares.push(...moveResult.moves.map(v => {
                    return {
                        type: "move",
                        value: this.nextGame.get(v[0], v[1]),
                        fromX: v[2],
                        fromY: v[3],
                        toX: v[0],
                        toY: v[1],
                        delta: 0,
                        speed: 10
                    }
                }));

                new Audio(mp3Swipe).play();

                if (!this.nextGame.canMove()) {
                    this.currentGameScore = this.nextGame.getScore();
                    this.highScore = Math.max(this.highScore, this.currentGameScore);
                    localStorage.setItem("highscore", this.highScore);
                    this.state = AppState.Score;
                }
            }

        }
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;

        this.fontSize = {
            normal: Math.round(this.height / 20),
            big: Math.round(this.height / 5)
        };
    }

    drawCenteredText(text, y, fill, stroke) {
        let ctx = this.ctx;
        let m = ctx.measureText(text);

        if (fill)
            ctx.fillText(text, (this.width - m.width) / 2, y);

        if (stroke)
            ctx.strokeText(text, (this.width - m.width) / 2, y);


    }

    update() {
        window.requestAnimationFrame(this.update.bind(this));
        let now = Date.now();
        let dt = (now - this.prevTime) / 1000.0;
        let elapsed = (now - this.startTime) / 1000.0;
        this.prevTime = now;

        let cv = this.canvas;
        let w = cv.width;
        let h = cv.height;
        let ctx = this.ctx;

        let fsBig = this.fontSize.big;
        let fsNormal = this.fontSize.normal;

        ctx.fillStyle = "#F6F9EC";
        ctx.fillRect(0, 0, w, h);

        if (this.state === AppState.Playing) {
            this.drawGame(dt);
        }

        if (this.state === AppState.MainMenu) {

            ctx.save();
            {
                this.setFont(fsBig);
                this.setShadow();
                ctx.fillStyle = "#fff";
                this.drawCenteredText(Constants.GameTitle, this.height / 3, true);
            }
            ctx.restore();

            ctx.save();
            {
                this.setFont(fsNormal);
                this.setShadow();

                ctx.fillStyle = `rgba(255,255,255,${(Math.sin(elapsed * 10) + 1) / 2}`;
                this.drawCenteredText(Constants.NewGame, this.height / 1.5, true);

                ctx.fillStyle = "#fff";
                this.drawCenteredText(`Highscore: ${this.highScore}`, this.height / 1.5 + fsNormal * 1.5, true);
            }
            ctx.restore();

        }

        if (this.state === AppState.Score) {
            let y = (this.height + fsBig) / 2;

            ctx.save();
            {
                this.setShadow();
                ctx.fillStyle = "#fff";

                this.setFont(fsBig);
                this.drawCenteredText("Game Over!", y, true);

                this.setFont(fsNormal);
                this.drawCenteredText(`Your score is ${this.currentGameScore}`, y + fsNormal * 1.5, true);

            }
            ctx.restore();

        }

    }

    setFont(size) {
        this.ctx.font = `700 ${size}px Kanit`;
    }

    setShadow() {
        let ctx = this.ctx;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        ctx.shadowBlur = 4;
        ctx.shadowColor = "rgba(0,0,0,0.25)";
    }


    roundedRect(x, y, width, height, radius) {
        let ctx = this.ctx;
        ctx.beginPath();
        ctx.moveTo(x, y + radius);
        ctx.lineTo(x, y + height - radius);
        ctx.arcTo(x, y + height, x + radius, y + height, radius);
        ctx.lineTo(x + width - radius, y + height);
        ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
        ctx.lineTo(x + width, y + radius);
        ctx.arcTo(x + width, y, x + width - radius, y, radius);
        ctx.lineTo(x + radius, y);
        ctx.arcTo(x, y, x, y + radius, radius);
    }

    drawGame(dt) {
        let w = this.width;
        let h = this.height;

        let game = this.game;
        let ctx = this.ctx;

        let sqSize = this.height / (this.game.size * 1.25);
        let sqSpacing = sqSize / 10;
        let sqRadius = sqSize / 10;
        let fontSize = Math.round(sqSize / 4);

        let boardSize = sqSize * game.size + sqSpacing * (game.size + 1);

        let squareStartX = (x) => {
            return -boardSize / 2 + x * sqSize + (x + 1) * sqSpacing;
        }

        let squareStartY = (y) => {
            return -boardSize / 2 + y * sqSize + (y + 1) * sqSpacing;
        }

        let drawSquare = (x, y, val) => {
            if (val !== -1) {
                let power = Math.pow(2, val);
                let m = ctx.measureText(power);

                let color = this.colors[val % this.colors.length];

                ctx.save();
                ctx.translate(x + sqSize / 2, y + sqSize / 2);
                {
                    this.setShadow();

                    ctx.fillStyle = color;
                    this.roundedRect(-sqSize / 2, -sqSize / 2, sqSize, sqSize, sqRadius);
                    ctx.fill();

                    ctx.fillStyle = "#fff";
                    ctx.fillText(power, -m.width / 2, fontSize / 2);

                }
                ctx.restore();
            }
        }

        // Draw board
        this.setFont(fontSize);

        ctx.save();
        ctx.translate(w / 2, h / 2);
        {
            ctx.save();
            {
                this.setShadow();
                ctx.fillStyle = "#d3e59e";
                this.roundedRect(-boardSize / 2, -boardSize / 2, boardSize, boardSize, sqRadius);
                ctx.fill();
            }
            ctx.restore();


            for (let x = 0; x < game.size; x++) {
                for (let y = 0; y < game.size; y++) {

                    ctx.fillStyle = "rgba(255,255,255,0.5)";
                    this.roundedRect(squareStartX(x), squareStartY(y), sqSize, sqSize, sqRadius);
                    ctx.fill();

                    if (this.nextGame && this.animatedSquares.find(v => v.fromX === x && v.fromY === y))
                        continue;

                    let val = game.get(x, y);
                    drawSquare(squareStartX(x), squareStartY(y), val);
                }
            }

            if (this.nextGame) {
                for (let sq of this.animatedSquares) {
                    if (sq.type === "move") {
                        let x = squareStartX(sq.fromX) * (1 - sq.delta) + squareStartX(sq.toX) * sq.delta;
                        let y = squareStartY(sq.fromY) * (1 - sq.delta) + squareStartY(sq.toY) * sq.delta;
                        drawSquare(x, y, sq.value);
                    }
                    sq.delta = Math.min(1, sq.delta + sq.speed * dt);
                }

                this.animatedSquares = this.animatedSquares.filter(v => v.delta < 1);

                if (this.animatedSquares.length === 0) {
                    this.game = this.nextGame;
                    this.nextGame = null;
                }
            }

        }
        ctx.restore();
        ctx.save();
        {
            let k = this.fontSize.normal
            this.setShadow();
            this.setFont(k);

            ctx.fillStyle = "#fff";
            ctx.fillText("Score", this.height / 10, this.height / 10);

            ctx.fillStyle = this.colors[this.game.getHighestPower() % this.colors.length];
            ctx.fillText(this.game.getScore(), this.height / 10, this.height / 10 + k * 1.25);

            ctx.fillStyle = "#fff";
            ctx.fillText("Next", this.height / 10, this.height / 10 + k * 3.75);

            drawSquare(this.height / 10, this.height / 10 + k * 4.5, this.game.next);
        }
    }


    newGame() {
        this.animatedSquares = [];
        this.nextGame = null;
        this.game = new GameState(4);
        this.game.init();
        this.state = AppState.Playing;
    }
}

