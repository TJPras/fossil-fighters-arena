import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class Login extends Scene
{
    logoTween;

    constructor ()
    {
        super('Login');
    }

    create ()
    {
        this.add.image(512, 384, 'background');

        this.add.text(512, 300, 'Fossil Fighters\nArena', {
            fontFamily: 'Arial Black', fontSize: 76, color: '#ff8215',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setDepth(100).setOrigin(0.5);

        this.loginButton = this.add.text(512, 460, 'Login', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setDepth(100).setOrigin(0.5).setInteractive()
        .on('pointerdown', () => this.changeScene())
        .on('pointerover', () => this.loginButtonHoverState() )
        .on('pointerout', () => this.loginButtonRestState() );

        var graphics = this.add.graphics()
        graphics.lineStyle(4, '#000000', 1.0);
        graphics.beginPath();
        graphics.strokeRect(437, 430, 150, 60);

        EventBus.emit('current-scene-ready', this);
    }

    changeScene ()
    {
        if (this.logoTween)
        {
            this.logoTween.stop();
            this.logoTween = null;
        }

        this.scene.start('MainMenu');
    }

    loginButtonHoverState () {
        this.loginButton.setStyle({ fill: '#ff8215' })
    }

    loginButtonRestState () {
        this.loginButton.setStyle({ fill: '#ffffff' })
    }
}
