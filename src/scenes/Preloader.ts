import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super({ key: "Preloader" });
  }
  create() {
    this.game.scene.start("Maps");
  }
}