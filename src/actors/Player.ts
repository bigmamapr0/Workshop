class Player extends Phaser.GameObjects.Text {

    constructor(scene: Phaser.Scene, x, y, text, {}) {
        super(scene, x, y, text, {});
    }

    update() {
        console.log(123);
    }
}

export { Player };