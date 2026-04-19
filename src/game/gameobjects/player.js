class Player {
  constructor(scene, name) {
    this.scene = scene;
    this.name = name;
    this.team = [];
  }

  /*
  This is a getter so we can get the unique identifier from the name of the player.
  */
  get key() {
    return this.name.split(":")[1];
  }
}

export default Player;