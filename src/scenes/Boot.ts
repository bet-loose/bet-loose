import { Scene } from "phaser";

export class Boot extends Scene {
  constructor() {
    super({ key: "Boot" });
  }

  preload() {
    this.load.image("");
  }

  create() {
    this.add
      .image(400, 225, "")
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.stop("");
        this.scene.start("Preloader");
      });
  }
}
