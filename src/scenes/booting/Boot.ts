class Boot extends Phaser.Scene {

    constructor() {
        super("boot");
    }

    create() {
        this.scene.start("mainMenu")
    }
}

export { Boot }