import { EventBus } from '../EventBus';
import { Scene } from 'phaser';
import Player from '../gameobjects/player';
import {
    NEW_PLAYER,
    CURRENT_PLAYERS,
    PLAYER_DISCONNECTED,
} from '../events';

export class MainMenu extends Scene
{
    logoTween;

    constructor ()
    {
        super('MainMenu');
        this.players = 1
    }

    create ()
    {
        this.startSockets();

        this.add.image(512, 384, 'background');

        this.logo = this.add.image(512, 300, 'logo').setDepth(100);

        this.add.text(512, 460, 'Main Menu', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setDepth(100).setOrigin(0.5);

        this.playerCount = this.add.text(100, 50, `Player Count: ${this.players}`, {
            fontFamily: 'Arial Black', fontSize: 20, color: '#ffffff',
            stroke: '#000000', strokeThickness: 6,
            align: 'left'
        }).setDepth(100).setOrigin(0.5);
        
        EventBus.emit('current-scene-ready', this);
    }

    changeScene ()
    {
        if (this.logoTween)
        {
            this.logoTween.stop();
            this.logoTween = null;
        }

        this.scene.start('Game');
    }

    /**
     * Establish connection to the server and set listeners for the events we want to receive.
     */
    startSockets() {
        this.socket = io();
        this.addPlayer();

        // this.socket.on(
        //     NEW_PLAYER,
        //     function (playerInfo) {
        //         if (playerInfo.key !== this.player.key) {
        //             this.npCount += 1;
        //             console.log(`npCount: ${this.npCount}`);
        //             this.addEnemyPlayers(playerInfo);
        //         }
        //     }.bind(this)
        // );

        this.socket.on(CURRENT_PLAYERS, function (players) {
                this.players = players;
            }
        );

        this.socket.on(
            PLAYER_DISCONNECTED,
            function (key) {
                delete this.players[key];
            }
        );
    }

    /**
     * Alert the server that a player has connected
     */
    addPlayer() {
        this.player = new Player(this, "MyName:" + crypto.randomUUID());
        console.log("Creating player! ", this.player.key);
        this.socket.emit(NEW_PLAYER, this.player.key);
        console.log("Sent player to server!");
    }

    /**
     * When a new enemy event is received, we'll add this new game object to this player's screen.
     */
    // addEnemyPlayers(enemyPlayer) {
    //     console.log("Adding enemy player! ", enemyPlayer.name, " Against ", enemyPlayer.key);
    //     this.players[enemyPlayer.key] = enemyPlayer;
    //     // this.playerCount.updateText();
    // }

    moveLogo (reactCallback)
    {
        if (this.logoTween)
        {
            if (this.logoTween.isPlaying())
            {
                this.logoTween.pause();
            }
            else
            {
                this.logoTween.play();
            }
        }
        else
        {
            this.logoTween = this.tweens.add({
                targets: this.logo,
                x: { value: 750, duration: 3000, ease: 'Back.easeInOut' },
                y: { value: 80, duration: 1500, ease: 'Sine.easeOut' },
                yoyo: true,
                repeat: -1,
                onUpdate: () => {
                    if (reactCallback)
                    {
                        reactCallback({
                            x: Math.floor(this.logo.x),
                            y: Math.floor(this.logo.y)
                        });
                    }
                }
            });
        }
    }
}
