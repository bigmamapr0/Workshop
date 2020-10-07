import 'phaser';
import { BootScene } from './scenes/Boot';
import { PreloadScene } from './scenes/Preload';
import { MainScene } from './scenes/Main';

class GameApp extends Phaser.Game {
    public static gameConfig: Phaser.Types.Core.GameConfig = null;

    constructor(config: Phaser.Types.Core.GameConfig) {
        GameApp.gameConfig = config;

        if (GameApp.gameConfig == null) {
            GameApp.gameConfig = {
                type: Phaser.AUTO,
                parent: "content",
                backgroundColor: '#385e78',
                width: window.innerWidth,
                height: window.innerHeight,
                scene: [BootScene, PreloadScene, MainScene]
            };
        }

        super(GameApp.gameConfig);
    }
}

export { GameApp }

new GameApp(null);
