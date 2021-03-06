var WorldScene = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize:

  function WorldScene()
  {
      Phaser.Scene.call(this, {key: 'WorldScene'});
  },
  preload: function()
  {

  },
  wake: function() {
    this.cursors.left.reset();
    this.cursors.right.reset();
    this.cursors.up.reset();
    this.cursors.down.reset();
},
  create: function()
  {
      var map = this.make.tilemap({ key: 'map'});

      var tiles = map.addTilesetImage('spritesheet', 'tiles');

      var grass = map.createStaticLayer('Grass', tiles, 0, 0);

      var obstacles = map.createStaticLayer('Obstacles', tiles, 0, 0);
      obstacles.setCollisionByExclusion([-1]);
      this.add.sprite(100, 100, 'enemy', 4)
      this.player = this.physics.add.sprite(50, 100, 'player', 0);
      
      this.physics.world.bounds.width = map.widthInPixels;
      this.physics.world.bounds.height = map.heightInPixels;
      this.player.setCollideWorldBounds(true);

      this.cursors = this.input.keyboard.createCursorKeys();

      this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
      this.cameras.main.startFollow(this.player);
      this.cameras.main.roundPixels = true;  

      this.physics.add.overlap(this.player, this.spawns, this.onMeetEnemy, false, this);

      //  animation with key 'left', we don't need left and right as we will use one and flip the sprite
      this.anims.create({
          key: 'left',
          frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13]}),
          frameRate: 10,
          repeat: -1
      });
  
      // animation with key 'right'
      this.anims.create({
          key: 'right',
          frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13] }),
          frameRate: 10,
          repeat: -1
      });
      this.anims.create({
          key: 'up',
          frames: this.anims.generateFrameNumbers('player', { frames: [2, 8, 2, 14]}),
          frameRate: 10,
          repeat: -1
      });
      this.anims.create({
          key: 'down',
          frames: this.anims.generateFrameNumbers('player', { frames: [ 0, 6, 0, 12 ] }),
          frameRate: 10,
          repeat: -1
      });

      this.physics.add.collider(this.player, obstacles);

      this.spawns = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
      for(var i = 0; i < 30; i++) {
            var x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
            var y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
            // parameters are x, y, width, height
            this.spawns.create(x, y, 20, 20);          
            
    
      }        

      this.gameWorld = this.physics.add.group({ classType: Phaser.GameObjects.Zone});
      this.gameWorld.create(90, 90, 20, 20);

      // add collider
      this.physics.add.overlap(this.player, this.spawns, this.onMeetEnemy, false, this);
      this.physics.add.overlap(this.player, this.gameWorld, this.onStartPlatform, false, this);

      this.sys.events.on('wake', this.wake, this);
  },
  update: function(time, delta)
  {
      this.player.body.setVelocity(0);

      if(this.cursors.left.isDown)
      {
          this.player.body.setVelocityX(-80);
          this.player.anims.play('left', true);
          this.player.flipX = true;
      }
      else if(this.cursors.right.isDown)
      {
          this.player.body.setVelocityX(80);
          this.player.anims.play('right', true);
          this.player.flipX = false;
      }
      else if (this.cursors.up.isDown)
      {
          this.player.body.setVelocityY(-80);
          this.player.anims.play('up', true);
      }
      else if (this.cursors.down.isDown)
      {
          this.player.body.setVelocityY(80);
          this.player.anims.play('down', true);
      }   
      else
      {
          this.player.anims.stop();
      }

  },
  onMeetEnemy: function(player, zone) {        
    // we move the zone to some other location
    zone.x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
    zone.y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);       

    // shake the world
    this.cameras.main.flash(300);

    // start battle 
    this.scene.switch('BattleScene');
  },
  onStartPlatform: function(player, zone) {


      this.cameras.main.fade(300);
      this.scene.switch('PlatformScene');
  }
});