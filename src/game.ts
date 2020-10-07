import 'phaser';
import { Boot } from './scenes/booting/Boot';
import { Preload } from './scenes/booting/Preload';
import { SinglePlayer } from './scenes/gameplay/SinglePlayer';
import { MainMenu } from './scenes/mainMenu/MainMenu';
import { MultiPlayer } from './scenes/gameplay/MultiPlayer';
import { Quit } from './scenes/mainMenu/Quit';

class GameApp extends Phaser.Game {
    public static gameConfig: Phaser.Types.Core.GameConfig = null;

    constructor(config: Phaser.Types.Core.GameConfig) {
        GameApp.gameConfig = config;

        if (GameApp.gameConfig == null) {
            GameApp.gameConfig = {
                type: Phaser.AUTO,
                parent: "content",
                backgroundColor: '#ffffff',
                width: window.innerWidth,
                height: window.innerHeight,
                scene: [Boot, Preload, MainMenu, SinglePlayer, MultiPlayer, Quit]
            };
        }

        super(GameApp.gameConfig);
    }
}

export { GameApp }

new GameApp(null);
