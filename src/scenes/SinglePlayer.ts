import { Player } from "../actors/Player";

class SinglePlayer extends Phaser.Scene {

    player: Player;

    rect1: Phaser.GameObjects.Rectangle
    
    rectangleWidth: number = 400;
    rectangleHeight: number = 400;

    _count: number = 0;

    constructor() {
        super("singlePlayer");
    }

    create() {
        let screenCenterX = window.innerWidth / 2;        
        let screenCenterY = window.innerHeight / 2;        

        this.rect1 = this.add.rectangle(screenCenterX, screenCenterY, this.rectangleWidth, this.rectangleHeight, 0xffffff, 1).setInteractive();

        this.player = new Player(this, screenCenterX, screenCenterY, this._count, { fill: "0x000000", fontSize: "60px" }).setOrigin(0.5, 0.5);
        this.add.existing(this.player);

        this.rect1.on('pointerup', () => {
            this._count++;

            this.player.text = this._count.toString();
        });
    }

    update() {

    }
}

export { SinglePlayer }