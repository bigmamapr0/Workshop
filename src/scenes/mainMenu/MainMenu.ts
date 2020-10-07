class MainMenu extends Phaser.Scene {

    singlePlayer: Phaser.GameObjects.Text;
    multiPlayer: Phaser.GameObjects.Text;
    exit: Phaser.GameObjects.Text;

    constructor() {
        super("mainMenu");
    }

    create() {
        let screenCenterX = window.innerWidth / 2;        
        let screenCenterY = window.innerHeight / 2; 

        this.singlePlayer = this.add.text(screenCenterX, screenCenterY - 150, "SINGLE PLAYER", { fontSize: "40px", fill: "0x000000" }).setOrigin(0.5).setInteractive({ useHandCursor: true });
        this.multiPlayer = this.add.text(screenCenterX, screenCenterY, "MULTI PLAYER", { fontSize: "40px", fill: "0x000000" }).setOrigin(0.5).setInteractive({ useHandCursor: true });
        this.exit = this.add.text(screenCenterX, screenCenterY + 150, "EXIT", { fontSize: "40px", fill: "0x000000" }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        this.singlePlayer.on('pointerdown', () => {
            this.scene.start("singlePlayer");
        })

        this.multiPlayer.on('pointerdown', () => {
            this.scene.start("multiPlayer");
        })

        this.exit.on('pointerdown', () => {
            this.scene.start("quit");
        })
    }
}

export { MainMenu }