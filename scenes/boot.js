var BootScene = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize:

  function BootScene()
  {
      Phaser.Scene.call(this, { key: 'BootScene'});
  },

  preload: function()
  {
      this.load.image('tiles', 'assets/map/spritesheet.png');
      this.load.tilemapTiledJSON('map', 'assets/map/map.json');
      this.load.spritesheet('player', 'assets/RPG_assets.png', { frameWidth: 16, framHeight: 16});
      this.load.spritesheet('enemy', 'assets/enemy_assets.png', { frameWidth: 16, frameHeight: 16});
      this.load.image('splash', 'assets/splash.png');
  },
  startGame: function()
  {
      this.scene.start('WorldScene');
  },
  create: function()
  {
      this.add.image(0, 0, 'splash').setOrigin(0, 0);
      var timeEvent = this.time.addEvent({delay: 5000, callback: this.startGame, callbackScope: this});
  }
});