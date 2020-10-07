class Player extends Phaser.GameObjects.Text {

    constructor(scene: Phaser.Scene, x, y, score, fill) {
        super(scene, x, y, score, fill);
    }

    update() {
        console.log(123);
    }
}

export { Player };