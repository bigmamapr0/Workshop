import { Player } from "../../actors/Player";
import { KeyboardInput } from "../../util/KeyboardInput";

class SinglePlayer extends Phaser.Scene {

    player: Player;

    _count: number = 0;

    rect1: Phaser.GameObjects.Rectangle;

    restart: Phaser.GameObjects.Text;
    exit: Phaser.GameObjects.Text;
    
    rectangleWidth: number = 400;
    rectangleHeight: number = 400;

    keyboard: KeyboardInput;

    constructor() {
        super("singlePlayer");
    }
    
    create() {
        this.keyboard = new KeyboardInput(this);

        let screenCenterX = window.innerWidth / 2;        
        let screenCenterY = window.innerHeight / 2;        

        this.rect1 = this.add.rectangle(screenCenterX, screenCenterY, this.rectangleWidth, this.rectangleHeight, 0xeba657, 1);

        this.restart = this.add.text(screenCenterX, screenCenterY - 250, "RESTART GAME", { fontSize: "60px", fill: "0x000000" });
        this.restart.setOrigin(0.5);
        this.restart.setInteractive({ useHandCursor: true });
        this.restart.setVisible(false);

        this.exit = this.add.text(150, 50, "<- MAIN MENU", { fontSize: "30px", fill: "0x000000" });
        this.exit.setOrigin(0.5);
        this.exit.setInteractive({ useHandCursor: true });

        this.player = new Player(this, screenCenterX, screenCenterY, this._count, { fill: "0xffffff", fontSize: "60px" });
        this.player.setOrigin(0.5);
        this.add.existing(this.player);

        this.keyboard.w.on('down', () => {
            this.increaseScore();
        });

        this.keyboard.s.on('down', () => {
            this.increaseScore();
        });

        this.keyboard.a.on('down', () => {
            this.increaseScore();
        });

        this.keyboard.d.on('down', () => {
            this.increaseScore();
        });

        this.exit.on('pointerdown', () => {
            this.scene.start("mainMenu");
        });
    }

    increaseScore() {
        if (this._count < 100) {
            this._count += 1;
            this.player.text = this._count.toString();        
        
        } else {
            this._count = 100;         
            this.restartGame();
        }
    }
    
    restartGame() {
        this.restart.setVisible(true);   
            
        this.restart.on('pointerdown', () => {
            this._count = 0;
            this.player.text = this._count.toString();
            this.restart.setVisible(false);
        });
    }
}

export { SinglePlayer }