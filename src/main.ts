import { Game, Types } from "phaser";
import { Boot } from "./scenes/Boot"

const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 900,
  height: 450,
  parent: "game container",
    scene: [Boot]
};

export default new Game(config);
