import { Player } from "../../actors/Player";
import { KeyboardInput } from "../../util/KeyboardInput";

class MultiPlayer extends Phaser.Scene {

    player1: Player;
    player2: Player;

    _count1: number = 0;
    _count2: number = 0;
    
    rect1: Phaser.GameObjects.Rectangle;
    rect2: Phaser.GameObjects.Rectangle;

    restart: Phaser.GameObjects.Text;
    exit: Phaser.GameObjects.Text;
    
    rectangleWidth: number = 400;
    rectangleHeight: number = 400;

    keyboard: KeyboardInput;

    constructor() {
        super("multiPlayer");
    }

    create() {
        this.keyboard = new KeyboardInput(this);

        let screenCenterX = window.innerWidth / 2;        
        let screenCenterY = window.innerHeight / 2;        

        this.rect1 = this.add.rectangle(screenCenterX - 300, screenCenterY, this.rectangleWidth, this.rectangleHeight, 0xeba657, 1);
        this.rect2 = this.add.rectangle(screenCenterX + 300, screenCenterY, this.rectangleWidth, this.rectangleHeight, 0xeba657, 1);

        this.player1 = new Player(this, screenCenterX - 300, screenCenterY, this._count1, { fill: "0xffffff", fontSize: "60px" });
        this.player1.setOrigin(0.5);
        this.add.existing(this.player1);

        this.player2 = new Player(this, screenCenterX + 300, screenCenterY, this._count2, { fill: "0xffffff", fontSize: "60px" });
        this.player2.setOrigin(0.5);
        this.add.existing(this.player2);

        this.restart = this.add.text(screenCenterX, screenCenterY - 250, "RESTART GAME", { fontSize: "60px", fill: "0x000000" });
        this.restart.setOrigin(0.5);
        this.restart.setInteractive({ useHandCursor: true });
        this.restart.setVisible(false);

        this.exit = this.add.text(150, 50, "<- MAIN MENU", { fontSize: "30px", fill: "0x000000" });
        this.exit.setOrigin(0.5);
        this.exit.setInteractive({ useHandCursor: true });

        this.keyboard.w.on('down', () => {
            this.increaseScoreForPlayer1();
        });

        this.keyboard.s.on('down', () => {
            this.increaseScoreForPlayer1();
        });

        this.keyboard.a.on('down', () => {
            this.increaseScoreForPlayer1();
        });

        this.keyboard.d.on('down', () => {
            this.increaseScoreForPlayer1();
        });

        this.keyboard.arrUp.on('down', () => {
            this.increaseScoreForPlayer2();
        });

        this.keyboard.arrDown.on('down', () => {
            this.increaseScoreForPlayer2();
        });

        this.keyboard.arrLeft.on('down', () => {
            this.increaseScoreForPlayer2();
        });

        this.keyboard.arrRight.on('down', () => {
            this.increaseScoreForPlayer2();
        });

        this.exit.on('pointerdown', () => {
            this.scene.start("mainMenu");
        });
    }

    increaseScoreForPlayer1() {
        if (this._count1 <= 99) {
            this._count1 += 1;
            this.player1.text = this._count1.toString();
            
        } else {
            this.checkForWinner();
            this.restartGame();
        }
    }

    increaseScoreForPlayer2() {
        if (this._count2 <= 99) {
            this._count2 += 1;
            this.player2.text = this._count2.toString();
        } else {
            this.checkForWinner();
            this.restartGame();
        }
    }

    checkForWinner() {
        if (this._count1 > this._count2) {
            this.player1.text = "YOU WIN!";
            this._count1 = 100;
        } else {
            this.player2.text = "YOU WIN!";
            this._count2 = 100;
        }
    }
    
    restartGame() {
        this.restart.setVisible(true);   
            
        this.restart.on('pointerdown', () => {
            this._count1 = 0;
            this._count2 = 0;
            this.player1.text = this._count1.toString();
            this.player2.text = this._count2.toString();
            this.restart.setVisible(false);
        });
    }
}

export { MultiPlayer }