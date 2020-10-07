class KeyboardInput {

    public w?: Phaser.Input.Keyboard.Key;
    public s?: Phaser.Input.Keyboard.Key;
    public a?: Phaser.Input.Keyboard.Key;
    public d?: Phaser.Input.Keyboard.Key;

    public arrUp?: Phaser.Input.Keyboard.Key;
    public arrDown?: Phaser.Input.Keyboard.Key;
    public arrLeft?: Phaser.Input.Keyboard.Key;
    public arrRight?: Phaser.Input.Keyboard.Key;

    constructor(scene: Phaser.Scene) {

        this.w = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.s = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.a = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.d = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.arrUp = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.arrDown = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.arrLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.arrRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    }
}

export { KeyboardInput }