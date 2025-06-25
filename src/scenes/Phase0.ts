import { Scene } from 'phaser'

export class Phase0 extends Scene {
  constructor() {
    super({ key: 'Phase0' })
  }
  preload() {
    this.load.spritesheet('blacksamurai', 'assets/blacksamurai.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }
  
  create() {
    this.blacksamurai  = this.physics.add.sprite(400, 225, 'blacksamurai')

    this.anims.create({
      key: 'andar-direita',
      frames: this.anims.generateFrameNumbers('blacksamurai', { start: 87, end: 95 }),
      frameRate: 10,
      repeat: -1
    });
    this.blacksamurai.play('andar-direita');
    this.blacksamurai.setVelocityX(100);
  }
}
