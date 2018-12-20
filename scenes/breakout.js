/**
 * Game configuration.
 */
// tslint:disable:typedef
const breakoutGame = {
  container: 'game',
  width: 1920,
  height: 974,
  debug: false,
};
const graphics = {
  width: 4,
  texture: {
      key: 'pixel',
      url: 'images/transparent_pixel.png',
  },
};
const text = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: 12,
};
const paddle = {
  position: {
      x:  breakoutGame.width / 2,
      y:  breakoutGame.height - 10 - graphics.width,
  },
  size: {
      width: 140,
      height: 20,
  },
  color: 0xAAAAAA,
  border: 0xAAAAAA,
};
const ball = {
  position: {
      x:  breakoutGame.width / 2,
      y: paddle.position.y - paddle.size.height / 2 - 10 - graphics.width * 2,
  },
  size: {
      width: 20,
      height: 20,
  },
  color: 0x000000,
  border: 0xAAAA00,
  bounce: 1,
  startHitpoints: 1,
  loseLifePercentage: 0.25,
  text: {
      fontFamily: text.fontFamily,
      fontSize: 8,
  },
};
const brick = {
  position: {
      x:  breakoutGame.width / 4,
      y:  breakoutGame.height / 2,
  },
  size: {
      width: 80,
      height: 20,
  },
  color: 0xAA0000,
  border: 0x220000,
  powerupColor: 0x00AA00,
  powerupBorder: 0x002200,
};
const bricks = {
  startX: brick.size.width * 0.5,
  startY: brick.size.height * 1.5,
  columns: Math.floor( breakoutGame.width / brick.size.width),
  lower: {
      ease: 'linear',
      duration: 250,
  },
};
const physics = {
  launchVelocity: {
      x: 140,
      y:  breakoutGame.height * -1,
  },
  collideVelocity: 10,
  bricksWave: {
      delay: 4000,
      maxDifficultyIteration: 100,
      minColumnsFactor: 0.25,
      maxMinColumnsFactor: 0.7,
      hitpointsRangeFactor: 0.5,
      powerup: {
          minIteration: 3,
          factor: 1 / 10,
          hitpointFactor: 0.075,
      },
  },
  gameOverBrickLine:  breakoutGame.height - brick.size.height * 1.5,
};
const gameOver = {
  title: 'GAME OVER',
  text: {
      fontFamily: text.fontFamily,
      fontSize: 36,
      color: '#ffffff',
  },
  countdownText: {
      fontFamily: text.fontFamily,
      fontSize: 108,
      color: '#ffffff',
  },
  countdown: 3,
  position: { x:  breakoutGame.width * 0.5, y:  breakoutGame.height * 0.4 },
  background: {
      color: 0x222222,
      position: { x:  breakoutGame.width * 0.35, y:  breakoutGame.height * 0.3 },
      size: { width:  breakoutGame.width * 0.3, height:  breakoutGame.height * 0.3 },
  },
};
const scoreboard = {
  position: {
      points: { x:  breakoutGame.width * 0.5, y: gameOver.position.y + 52 },
      hits: { x:  breakoutGame.width * 0.4, y: gameOver.position.y + 84 },
      bricks: { x:  breakoutGame.width * 0.4, y: gameOver.position.y + 108 },
      iteration: { x:  breakoutGame.width * 0.55, y: gameOver.position.y + 84 },
      duration: { x:  breakoutGame.width * 0.55, y: gameOver.position.y + 108 },
  },
  highScore: {
      fontFamily: text.fontFamily,
      fontSize: 24,
      color: '#AAAA00',
  },
  details: {
      fontFamily: text.fontFamily,
      fontSize: 14,
      color: '#00AAAA',
  },
  points: (value) => `High score: ${value}`,
  hits: (value) => `Hits: ${value}`,
  bricks: (value) => `Bricks destroyed: ${value}`,
  iteration: (value) => `Rows: ${value}`,
  duration: (value) => `Time played: ${value}`,
};
const audio = {
  music: {
      key: 'music',
      urls: ['audio/fig-leaf-rag.ogg', 'audio/fig-leaf-rag.mp3'],
      volume: 0.6,
  },
  fx: {
      ballCollide: { key: 'ballCollide', urls: ['audio/hit.ogg', 'audio/hit.mp3'] },
      brickDestroy: { key: 'brickDestroy', urls: ['audio/brick.ogg', 'audio/brick.mp3'] },
      powerup: { key: 'powerup', urls: ['audio/life.ogg', 'audio/life.mp3'] },
      loseLife: { key: 'loseLife', urls: ['audio/floor.ogg', 'audio/floor.mp3'] },
      gameOver: { key: 'gameOver', urls: ['audio/game_over.ogg', 'audio/game_over.mp3'] },
      countdownTick: { key: 'countdownTick', urls: ['audio/countdown.ogg', 'audio/countdown.mp3'] },
      bricksWave: { key: 'bricksWave', urls: ['audio/wave.ogg', 'audio/wave.mp3'] },
  },
};
const progressBar = {
  width:  breakoutGame.width / 3,
  height: 20,
  borderWidth: 2,
  color: 0xFFFFFF,
  border: 0xFFFFFF,
};
const camera = {
  lowerBricks: {
      duration: 350,
      intensity: 0.0025,
  },
  powerup: {
      duration: 350,
      red: 0,
      green: 0.075,
      blue: 0,
  },
  gameOver: {
      duration: 500,
      intensity: 0.1,
  },
};
const effects = {
  flyDown: {
      ease: 'linear',
      duration: 500,
      distance: brick.size.height * 4,
      text: {
          color: '#aaaaaa',
          fontSize: text.fontSize * 1.5,
          fontFamily: text.fontFamily,
      },
  },
  hit: {
      fillColor: 0x660000,
      borderColor: 0x660000,
      borderWidth: 0,
      quantity: 4,
      size: {
          width: 2,
          height: 2,
      },
      speed: {
          min: -200,
          max: 200,
      },
      lifespan: 500,
      gravity: 500,
  },
  explode: {
      fillColor: 0x660000,
      borderColor: 0x660000,
      borderWidth: graphics.width,
      quantity: 8,
      size: {
          width: 8,
          height: 4,
      },
      speed: {
          min: -200,
          max: 200,
      },
      lifespan: 500,
      gravity: 500,
  },
};
const config = {
  breakoutGame,
  graphics,
  text,
  paddle,
  ball,
  physics,
  brick,
  bricks,
  gameOver,
  scoreboard,
  audio,
  progressBar,
  camera,
  effects,
};


var BreakoutScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function BreakoutScene()
  {
      Phaser.Scene.call(this, { key: 'BreakoutScene'});
  },
  preload: preload, 
  create: function create () {
    const brick = brickConfig();
    const stats = new BaseStats();
    const entities = this.createEntities(brick, stats);
    const physics = new BasePhysics(config.physics, entities, this);
    const scoreboard = new BaseScoreboard(config.scoreboard, stats);
    const gameOver = new BaseGameOver(config.gameOver, scoreboard);
    const referee = new Referee(config.breakoutGame, entities, physics, gameOver);
    this.systems = new ReadonlyComposite([
        entities.paddle,
        entities.ball,
        entities.bricks,
        physics,
        gameOver,
        referee,
        stats,
        scoreboard,
        new Camera(config.camera, entities, gameOver),
        new Effects(effectsConfig(brick), config.graphics, entities)
    ]);
    this.systems.setup(this);
  }, 
  update: update,
  createEntities: function (brick, stats) {
    return {
        ball: createBall(config.ball, config.graphics),
        paddle: createPaddle(config.paddle, config.graphics),
        bricks: createBricks(config.physics.bricksWave, brick, stats),
        stats,
    };
  }
})



// function brickConfig(brick, n) {
//   const row = Math.floor(n / brick.bricks.columns);
//   const column = n % brick.bricks.columns;
//   const setRow = set(lensProp('row'), row);
//   const setColumn = set(lensProp('column'), column);
//   const setRowAndColumn = compose(setRow, setColumn);

//   return setRowAndColumn(brick);
// }
function brickConfig() {
  return {
      bricks: config.bricks,
      sprite: config.brick,
      graphics: config.graphics,
      text: textConfig(config.text, config.brick.border),
      powerupColor: config.brick.powerupColor,
      powerupBorder: config.brick.powerupBorder,
  };
}

/**
 * Brick.
 */
class BaseBrick {

    constructor(graphics, hitpoints = 1, isPowerup = false) {
        this.graphics = graphics;
        this.hp = hitpoints;
        this.isPowerupImp = isPowerup;
    }

    hitpoints() {
        return this.hp;
    }

    hit(ball) {
        if (this.hp <= 0) {
            return 0;
        }

        return this.isPowerupImp ? this.applyPowerup(ball) : this.hitByBall(ball);
    }

    isPowerup() {
        return this.isPowerupImp;
    }

    objects() {
        return [gameObject(this.sprite()), this.graphics.text()];
    }

    sprite(){
        return this.graphics.sprite();
    }

    borderWidth(){
        return this.graphics.borderWidth();
    }

    setup(scene){
        this.graphics.setup(scene);
        this.graphics.updateText(this.hp.toString());
        this.graphics.sprite().setImmovable(true);

        return this;
    }

    update() {
        this.graphics.update();

        return this;
    }

    destroy() {
        this.hp = 0;
        this.graphics.destroy();

        return this;
    }

    applyPowerup(ball) {
        const result = this.hp;
        ball.updateHitpoints(ball.hitpoints() + this.hp);
        this.updateHp(0);

        return result;
    }

    hitByBall(ball) {
        const result = (ball.hitpoints() > this.hp ? this.hp : ball.hitpoints());
        this.updateHp(this.hp - ball.hitpoints());

        return result;
    }

    updateHp(hitpoints) {
        this.hp = hitpoints;
        this.graphics.updateText(this.hp.toString());

        if (this.hp <= 0) {
            this.destroy();
        }

        return this;
    }
}

/**
 * Game stats.
 */
class BaseStats{

    constructor() {
        this.reset();
        this.iterationImp = 1;
    }

    points(){
        return this.pointsImp;
    }

    hits(){
        return this.hitsImp;
    }

    iteration(){
        return this.iterationImp;
    }

    bricks(){
        return this.bricksImp;
    }

    duration(){
        return this.durationImp;
    }

    pause(){
        this.timer.paused = true;

        return this;
    }

    resume(){
        this.timer.paused = false;

        return this;
    }

    addPoints(brick, add){
        if (!brick.isPowerup()) {
            this.pointsImp = this.pointsImp + add;
        }

        return this;
    }

    addHit(brick){
        if (!brick.isPowerup()) {
            this.hitsImp = this.hitsImp + 1;
        }

        return this;
    }

    addIteration(){
        this.iterationImp = this.iterationImp + 1;

        return this;
    }

    addBrick(brick){
        if (brick.isPowerup()) {
            return this;
        }
        this.bricksImp = this.bricksImp + 1;

        return this;
    }

    reset(){
        this.pointsImp = 0;
        this.hitsImp = 0;
        this.iterationImp = 0;
        this.durationImp = 0;
        this.bricksImp = 0;

        if (this.timer !== undefined) {
            this.timer.reset(this.timerConfig());
        }

        return this;
    }

    setup(scene){
        this.timer = scene.time.addEvent(this.timerConfig());
        this.pause();

        return this;
    }

    update(){
        return this;
    }

    timerConfig() {
        return {
            delay: 1000,
            loop: true,
            callback: () => {
                this.durationImp = this.durationImp + 1;
            },
        };
    }
}

class BasePhysics {

  constructor(config, entities, scene) {
      this.congfigObj = config;
      this.entities = entities;
      this.scene = scene;
      this.emitter = new Phaser.Events.EventEmitter();
  }

  setup(_scene) {
      setBoundsCollision(this.scene.physics.world, { left: true, right: true, top: true, bottom: false });
      addCollider(
          this.scene.physics.add,
          this.entities.ball,
          this.entities.paddle,
          () => this.collide(this.entities.ball.sprite(), this.entities.paddle.sprite()),
      );
      this.entities.bricks.group().forEach((brick) => this.setupBrick(brick), this);
      this.scene.physics.world.on(
          'worldbounds',
          (body, up, down, left, right) => {
              if (body === this.entities.ball.sprite().body) {
                  this.emitter.emit('ballHitBounds', this.entities.ball, up, down, left, right);
              }
          },
      );

      return this;
  }

  config() {
      return this.congfigObj;
  }

  setupBrick(brick) {
      brick.setup(this.scene);
      addCollider(this.scene.physics.add, this.entities.ball, brick, () => this.entities.bricks.hit(this.entities.ball, brick));

      return this;
  }

  collide(ball, paddle) {
      ball.setVelocityX((ball.x - paddle.x) * this.congfigObj.collideVelocity);
      this.emitter.emit('ballHitPaddle');

      return this;
  }

  update() {
      return this;
  }

  onBallHitPaddle(callback) {
      this.emitter.on('ballHitPaddle', callback);

      return this;
  }

  onBallHitBounds(callback) {
      this.emitter.on('ballHitBounds', callback);

      return this;
  }
}

class BaseScoreboard {

  constructor(config, stats) {
      this.stats = stats;
      this.config = config;
  }

  
  show() {
      this.updateText();
      this.all.forEach((text) => text.visible = true);

      return this;
  }

  
  hide() {
      this.all.forEach((text) => text.visible = false);

      return this;
  }

  
  setup(scene) {
      this.points = createScoreboardText(scene, this.config.highScore, this.config.position.points);
      this.points.setOrigin(0.5, 0.5);
      this.hits = createScoreboardText(scene, this.config.details, this.config.position.hits);
      this.bricks = createScoreboardText(scene, this.config.details, this.config.position.bricks);
      this.iteration = createScoreboardText(scene, this.config.details, this.config.position.iteration);
      this.duration = createScoreboardText(scene, this.config.details, this.config.position.duration);
      this.all = [
          this.points,
          this.hits,
          this.bricks,
          this.iteration,
          this.duration,
      ];

      return this;
  }

  
  update() {
      return this;
  }

  updateText() {
      const stats = [
          this.stats.points(),
          this.stats.hits(),
          this.stats.bricks(),
          this.stats.iteration(),
          this.stats.duration(),
      ];
      const text = [
          this.config.points,
          this.config.hits,
          this.config.bricks,
          this.config.iteration,
          (val) => this.config.duration(val * 1000),
      ];
      this.all.forEach((textObj, index) => {
          textObj.setText(text[index](stats[index]).toUpperCase());
      });

      return this;
  }
}

class BaseGameOver {

  constructor(config, scoreboard, countdown = new BaseCountdown(config)) {
      this.config = config;
      this.active = false;
      this.countdown = countdown;
      this.hideInProgressImp = false;
      this.scoreboard = scoreboard;
      this.emitter = new Phaser.Events.EventEmitter();
  }

  isActive() {
      return this.active;
  }

  show() {
      if (!this.active) {
          this.active = true;
          this.background.visible = true;
          this.text.visible = true;
          this.scoreboard.show();
          this.emitter.emit('show');
      }

      return this;
  }

  hide(done) {
      if (this.active) {
          this.text.visible = false;
          this.hideInProgressImp = true;
          this.scoreboard.hide();
          this.background.visible = false;
          this.countdown.start(() => {
              this.active = false;
              this.hideInProgressImp = false;
              done();
          });
      }

      return this;
  }

  hideInProgress() {
      return this.hideInProgressImp;
  }

  setup(scene) {
      this.text = createText(
          scene,
          {
              position: this.config.position,
              center: true,
              visible: false,
              depth: 100,
              text: this.config.title,
              config: this.config.text,
          },
      );
      this.countdown.setup(scene);
      this.background = scene.add.graphics({});
      this.background.fillStyle(this.config.background.textConfig);
      this.background.fillRect(
          this.config.background.position.x,
          this.config.background.position.y,
          this.config.background.size.width,
          this.config.background.size.height,
      );
      this.background.depth = 50;
      this.background.visible = false;

      return this;
  }

  update() {
      this.countdown.update();

      return this;
  }

  onShow(callback) {
      this.emitter.on('show', callback);

      return this;
  }

  onCountdown(callback) {
      this.countdown.onTick(callback);

      return this;
  }
}

class BaseCountdown {

  constructor(config) {
      this.gameOverConfig = config;
      this.count = config.countdown;
      this.inProgress = false;
      this.emitter = new Phaser.Events.EventEmitter();
  }

  start(done) {
      if (!this.inProgress) {
          this.inProgress = true;
          this.updateCount(this.gameOverConfig.countdown);
          this.text.visible = true;
          this.done = done;
          this.countdownTimer.reset(this.config());
          this.countdownTimer.paused = false;
          this.emitter.emit('tick', this.count);
      }

      return this;
  }

  setup(scene) {
      this.countdownTimer = scene.time.addEvent(this.config());
      this.countdownTimer.paused = true;
      this.text = this.countdownText(scene);
      this.zoomOut = this.zoomOutTween(scene);

      return this;
  }

  update() {
      return this;
  }

  onTick(callback) {
      this.emitter.on('tick', callback);

      return this;
  }

  config() {
      return {
          delay: 1000,
          loop: false,
          repeat: this.gameOverConfig.countdown + 1,
          callback: () => {
              this.tick();
          },
      };
  }

  tick() {
      if (this.count <= 1) {
          this.stop();
          this.done();
      }
      this.updateCount(this.count - 1);
      this.emitter.emit('tick', this.count);
  }

  updateCount(count) {
      this.count = count;
      this.text.setText(count.toString());
      this.zoomOut.restart();

      return this;
  }

  stop() {
      this.countdownTimer.paused = true;
      this.text.visible = false;
      this.inProgress = false;

      return this;
  }

  countdownText(scene) {
      return createText(
          scene,
          {
              position: this.gameOverConfig.position,
              center: true,
              visible: false,
              depth: 100,
              text: this.gameOverConfig.countdown.toString(),
              config: this.gameOverConfig.countdownText,
          },
      );
  }

  zoomOutTween(scene) {
      return scene.tweens.add({
          targets: this.text,
          scaleX: 0,
          scaleY: 0,
          alpha: 0,
          ease: 'Cubic.easeIn',
          delay: 300,
          duration: 700,
          onStart: () => {
              this.text.scaleX = 1;
              this.text.scaleY = 1;
              this.text.alpha = 1;
          },
          paused: true,
      });
  }
}

class Referee {

  constructor(game, entities, physics, gameOver) {
      this.game = game;
      this.physics = physics;
      this.entities = entities;
      this.gameOver = gameOver;
      this.emitter = new Phaser.Events.EventEmitter();
      this.isNewGame = true;
  }

  setup(scene) {
      scene.input.on('pointerup', () => {
          this.resumePlay();
      });
      this.lowerBricksTimer = scene.time.addEvent(this.lowerBrickEvent(scene));
      this.lowerBricksTimer.paused = true;

      return this;
  }

  update() {
      if (this.isBallTouchingFloor()) {
          this.entities.ball.loseLife();
          this.stopPlay();
      }

      if (this.isGameOver()) {
          this.stopPlay();
          this.gameOver.show();
      }

      return this;
  }

  onStart(callback) {
      this.emitter.on('start', callback);

      return this;
  }

  onResume(callback) {
      this.emitter.on('resume', callback);

      return this;
  }

  onStop(callback) {
      this.emitter.on('stop', callback);

      return this;
  }

  isGameOver() {
      return this.isBrickTouchingFloor() || this.entities.ball.hitpoints() <= 0;
  }

  isBallTouchingFloor() {
      return (this.entities.ball.sprite().y > this.game.height);
  }
 
  isBrickTouchingFloor() {
      return (lowestY(this.entities.bricks.group(), -1) >= this.physics.config().gameOverBrickLine);
  }

  stopPlay() {
      if (!this.isStopped) {
          this.lowerBricksTimer.paused = true;
          this.entities.ball.reset(ballOnSpritePosition(this.entities.ball, this.entities.paddle));
          this.isStopped = true;
          this.entities.stats.pause();
          this.emitter.emit('stop');
      }

      return this;
  }

  resumePlay() {
      if (!this.gameOver.hideInProgress() && !this.entities.ball.isInPlay()) {
          this.isStopped = false;

          if (this.gameOver.isActive()) {
              this.isNewGame = true;
              this.entities.stats.reset();
              this.entities.ball.resetHitpoints();
              this.entities.bricks.reset().addRow(this.physics);
              this.gameOver.hide(() => {
                  this.launchBall();
              });
          } else {
              this.launchBall();
          }
      }
  }

  launchBall() {
      this.lowerBricksTimer.paused = false;
      this.entities.ball.launch(this.physics.config().launchVelocity);
      this.entities.stats.resume();

      if (this.isNewGame) {
          this.emitter.emit('start');
          this.isNewGame = false;
      } else {
          this.emitter.emit('resume');
      }

      return this;
  }

  lowerBrickEvent(scene) {
      return {
          delay: this.physics.config().bricksWave.delay,
          loop: true,
          callback: () => {
              this.entities.bricks
                  .addRow(this.physics)
                  .lower(scene);
          },
      };
  }
}

class ReadonlyComposite {

  constructor(systems) {
      this.collection = new BaseMutableComposite(systems);
  }

  systems() {
      return this.collection.systems();
  }

  setup(scene) {
      this.collection.setup(scene);

      return this;
  }

  update() {
      this.collection.update();

      return this;
  }
}


class BaseMutableComposite {

  constructor(systems) {
      this.collection = systems;
  }

  systems() {
      return this.collection;
  }

  add(system) {
      this.collection = this.collection.concat(system);

      return this;
  }

  remove(system) {
      this.collection = this.collection.filter((s) => s !== system);

      return this;
  }

  setup(scene) {
      this.collection.forEach((system) => {
          system.setup(scene);
      });

      return this;
  }

  update() {
      this.collection.forEach((system) => {
          system.update();
      });

      return this;
  }
}

class Camera {

  constructor(config, entities, gameOver) {
      this.config = config;
      this.entities = entities;
      this.gameOver = gameOver;
  }

  setup(scene) {
      this.entities.bricks.onLower(() => {
          shake(scene.cameras.main, this.config.lowerBricks);
      });
      this.entities.bricks.onHit((_ball, brick) => {
          if (brick.isPowerup()) {
              scene.cameras.main.flash(
                  this.config.powerup.duration,
                  this.config.powerup.red,
                  this.config.powerup.green,
                  this.config.powerup.blue,
                  1,
              );
          }
      });
      this.gameOver.onShow(() => {
          shake(scene.cameras.main, this.config.gameOver);
      });

      return this;
  }

  update() {
      return this;
  }
}

function effectsConfig(brick) {
  return {
      brick,
      flyDown: config.effects.flyDown,
      explode: config.effects.explode,
      hit: config.effects.hit,
  };
}

function createBall(ball, graphics) {
  return new BaseBall(
      ball,
      new TextGraphicSprite(
          new BaseGraphicSprite(ball, graphics),
          textConfig(ball.text, ball.border),
      ),
  );
}

class BaseBall {

  constructor(config, graphics) {
      this.graphics = graphics;
      this.config = config;
      this.hp = config.startHitpoints;
      this.emitter = new Phaser.Events.EventEmitter();
  }

  setup(scene) {
      this.graphics.setup(scene);
      this.graphics.sprite().body.onWorldBounds = true;
      this.graphics.sprite().setCollideWorldBounds(true);
      this.graphics.sprite().setBounce(this.config.bounce, this.config.bounce);
      this.graphics.updateText(this.hp.toString());
      followPointerMovementX(scene.input, this.graphics.sprite(), true, () => !this.inPlay);

      return this;
  }

  sprite() {
      return this.graphics.sprite();
  }

  borderWidth() {
      return this.graphics.borderWidth();
  }

  launch(velocity) {
      if (!this.isInPlay()) {
          this.graphics.sprite().setVelocity(velocity.x, velocity.y);
          this.inPlay = true;
      }

      return this;
  }

  reset(position) {
      this.graphics.sprite().setVelocity(0, 0);
      this.graphics.sprite().setPosition(position.x, position.y);
      this.inPlay = false;

      return this;
  }

  update() {
      this.graphics.update();

      return this;
  }

  isInPlay() {
      return this.inPlay;
  }

  destroy() {
      this.graphics.destroy();

      return this;
  }

  hitpoints() {
      return this.hp;
  }

  updateHitpoints(hitpoints) {
      this.hp = hitpoints;
      this.graphics.updateText(this.hp.toString());

      return this;
  }

  resetHitpoints() {
      this.updateHitpoints(this.config.startHitpoints);

      return this;
  }

  loseLife() {
      const dec = Math.max(1, Math.round(this.config.loseLifePercentage * this.hp));
      this.updateHitpoints(this.hp - dec);
      this.emitter.emit('loseLife');

      return this;
  }

  onLoseLife(callback) {
      this.emitter.on('loseLife', callback);

      return this;
  }
}





function preload() {

  this.load.atlas('breakout', 'assets/games/breakout/breakout.png', 'assets/games/breakout/breakout.json');
  this.load.image('starfield', 'assets/misc/starfield.jpg');

}

function update() {
  this.systems.update();
}

function assocRaw(prop, value, obj) {
  return Object.assign({}, obj, { [ prop ] : value })
}

function curry(f, a = []) {
  return (...p) =>
    (o => o.length >= f.length ? f(...o) : curry(f, o))([
      ...a,
      ...p,
    ])
}

function assoc() {
  return curry(assocRaw)
}

function textConfig(text, color) {
  return assoc('color', textColor(color), text);
}

function textColor(color) {
  let colorStr = color.toString(16);

  while (colorStr.length < 6) {
      colorStr = `0${colorStr}`;
  }

  return `#${colorStr}`;
}

class TextGraphicSprite {

  constructor(sprite, text) {
      this.gs = sprite;
      this.textConfig = text;
      this.isSetup = false;
  }

  sprite() {
      return this.gs.sprite();
  }

  borderWidth() {
      return this.gs.borderWidth();
  }

  destroy() {
      this.gs.destroy();
      this.textObj.setText('');
      this.textObj.destroy();

      return this;
  }

  setup(scene) {
      if (this.isSetup) {
          return this;
      }
      this.gs.setup(scene);
      this.textObj = scene.add.text(this.sprite().x, this.sprite().y, '', this.textConfig);
      this.textObj.setOrigin(0.5, 0.5);
      this.isSetup = true;

      return this;
  }

  update() {
      this.text().x = this.sprite().x;
      this.text().y = this.sprite().y;
      this.gs.update();

      return this;
  }

  text() {
      return this.textObj;
  }

  updateText(text) {
      this.textObj.setText(text);

      return this;
  }
}

class BaseGraphicSprite {

  constructor(sprite, graphics) {
      this.config = sprite;
      this.graphics = graphics;
      this.previousPosition = { x: -1, y: -1 };
      this.isSetup = false;
  }

  setup(scene) {
      if (this.isSetup) {
          return this;
      }
      this.graphicsObj = createGraphics(scene.add, graphicsStyle(this.config, this.graphics));
      this.spriteObj = createSprite(scene.physics.add, this.config.position, this.config.size, this.graphics.texture.key);
      this.isSetup = true;

      return this;
  }

  update() {
      if (!positionEqual(this.previousPosition, this.spriteObj)) {
          redrawSprite(this.graphicsObj, this.spriteObj);
      }
      this.previousPosition = spritePosition(this.spriteObj);

      return this;
  }

  sprite() {
      return this.spriteObj;
  }

  borderWidth() {
      return this.graphics.width;
  }

  destroy() {
      this.graphicsObj.clear();
      this.graphicsObj.destroy();
      this.spriteObj.disableBody(true, true);
      this.spriteObj.destroy();

      return this;
  }
}

function createPaddle(sprite, graphics) {
  return new Paddle(new BaseGraphicSprite(sprite, graphics));
}

class Paddle {

  constructor(graphics) {
      this.graphics = graphics;
  }

  setup(scene) {
      this.graphics.setup(scene);
      this.graphics.sprite().setImmovable(true);
      followPointerMovementX(scene.input, this.graphics.sprite());

      return this;
  }

  sprite() {
      return this.graphics.sprite();
  }

  borderWidth() {
      return this.graphics.borderWidth();
  }

  update() {
      this.graphics.update();

      return this;
  }

  destroy() {
      this.graphics.destroy();

      return this;
  }
}

function createBricks(wave, brick, stats) {
  return new BaseBricks(brick, new BaseMutableComposite(nextWaveBricks(wave, 1, brick, [])), stats);
}

class BaseBricks {

  constructor(config, bricks, stats) {
      this.config = config;
      this.bricks = bricks;
      this.iteration = 1;
      this.stats = stats;
      this.emitter = new Phaser.Events.EventEmitter();
  }

  group(){
      return this.bricks.systems();
  }

  setup(scene) {
      this.bricks.setup(scene);

      return this;
  }

  update() {
      this.bricks.update();

      return this;
  }

  hit(ball, brick) {
      const points = brick.hit(ball);
      this.stats.addPoints(brick, points);
      this.stats.addHit(brick);

      if (brick.hitpoints() <= 0) {
          this.bricks.remove(brick);
          this.stats.addBrick(brick);
      }
      this.emitter.emit('hit', ball, brick, points);

      return this;
  }

  lower(scene) {
      const lower = curry(lowerBrick)(scene.tweens, this.config.bricks.lower);
      this.bricks.systems().forEach(lower);
      this.emitter.emit('lower');

      return this;
  }

  addRow(physics) {
      this.iteration = this.iteration + 1;
      const wave = physics.config().bricksWave;
      const newBricks = nextWaveBricks(wave, this.iteration, this.config, this.bricks.systems());
      newBricks.forEach(
          (brick) => {
              this.bricks.add(brick);
              physics.setupBrick(brick);
          },
          this,
      );
      this.stats.addIteration();

      return this;
  }

  reset() {
      this.bricks.systems().forEach((brick) => {
          this.bricks.remove(brick);
          brick.destroy();
      });
      this.iteration = 0;

      return this;
  }

  onLower(callback) {
      this.emitter.on('lower', callback);

      return this;
  }

  onHit(callback){
      this.emitter.on('hit', callback);

      return this;
  }
}

function nextWaveBricks(
  wave,
  iteration,
  config,
  bricks,
) {
  const engine = Random.engines.mt19937().autoSeed();
  const nextCount = nextWaveCount(wave, iteration, config, engine);
  const randomColumns = randomUniqueArray(nextCount, 0, config.bricks.columns, engine);
  const brick = {
      bricks: nextWaveConfig(config, bricks),
      sprite: config.sprite,
      graphics: config.graphics,
      text: config.text,
      powerupColor: config.powerupColor,
      powerupBorder: config.powerupBorder,
  };

  return times(
      (n) => {
          const cfg = brickConfig(brick, randomColumns[n]);
          const powerup = nextWavePowerup(wave, iteration, engine);
          const hitpoints = nextWaveHitpoints(wave, iteration, powerup, engine);

          return createBrick(cfg, hitpoints, powerup);
      },
      randomColumns.length,
  );
}
function nextWaveCount(
  wave,
  iteration,
  config,
  engine = Random.engines.mt19937().autoSeed(),
) {
  /**
   * Iteration that produces the highest probability of maxium bricks.
   */
  const maxIteration = wave.maxDifficultyIteration;

  /**
   * How much weight this iteration has.
   */
  const iterationFactor = Math.min(1, (iteration / maxIteration));

  /**
   * Minimum possible value for start of range.
   */
  const minStartRange = Math.floor(config.bricks.columns * wave.minColumnsFactor);

  /**
   * Maximum possible value for start of range.
   */
  const maxStartRange = Math.max(
      minStartRange,
      Math.min(
          Math.floor(iterationFactor * config.bricks.columns * wave.maxMinColumnsFactor),
          config.bricks.columns,
      ),
  );

  /**
   * Determine start of range.
   */
  const startRange = Random.integer(minStartRange, maxStartRange)(engine);

  /**
   * Amount of slots left to fill all columns.
   */
  const rangeLeft = config.bricks.columns - startRange;

  /**
   * Maximum possible for end of range.
   */
  const maxEndRange = Math.max(1, Math.ceil(iterationFactor * rangeLeft));

  /**
   * Determine end of range.
   */
  const endRange = startRange + Random.integer(1, maxEndRange)(engine);

  /**
   * Determine random between range.
   */
  return Random.integer(startRange, endRange)(engine);
}

function randomUniqueArray(
  length,
  min,
  max,
  engine = Random.engines.mt19937().autoSeed(),
) {
  return Random.sample(engine, range(min, max), Math.min(max, length));
}

function range(from, to) {
  var result = [];
  var n = from;
  while (n < to) {
    result.push(n);
    n += 1;
  }
  return result;
}

function nextWaveConfig(config, bricks) {
  const x = Object.assign({}, config.bricks)
  x.startY = nextWaveStartY(bricks, config)

  return x
  // return set(
  //     lensProp('startY'),
  //     nextWaveStartY(bricks, config),
  //     config.bricks,
  // );
}

function nextWaveStartY(bricks, config) {
  return highestY(bricks, config.bricks.startY) - config.sprite.size.height;
}

function highestY(bricks, defaultValue) {
  return bricks.length === 0
      ? defaultValue
      : bricks.reduce((prev, curr) => prev.sprite().y < curr.sprite().y ? prev : curr)
          .sprite().y;
}

function times(fn, n) {
  var len = Number(n);
  var idx = 0;
  var list;

  if (len < 0 || isNaN(len)) {
    throw new RangeError('n must be a non-negative number');
  }
  list = new Array(len);
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
}

function nextWavePowerup(
  wave,
  iteration,
  engine = Random.engines.mt19937().autoSeed(),
) {
  if (iteration < wave.powerup.minIteration) {
      return false;
  }

  return Random.bool(wave.powerup.factor)(engine);
}

function nextWavePowerup(
  wave,
  iteration,
  engine = Random.engines.mt19937().autoSeed(),
) {
  if (iteration < wave.powerup.minIteration) {
      return false;
  }

  return Random.bool(wave.powerup.factor)(engine);
}

function nextWaveHitpoints(
  wave,
  iteration,
  powerup,
  engine = Random.engines.mt19937().autoSeed(),
) {
  /**
   * Weight for current iteration (from 0% to 100%).
   */
  const iterationFactor = Math.min(1, iteration / wave.maxDifficultyIteration);

  /**
   * Maximum hitpoint difference for current iteration.
   */
  const range = iteration * wave.hitpointsRangeFactor;

  /**
   * Offset for min/max possible hitpoints.
   */
  const offset = iterationFactor * range;

  /**
   * Minimum possible hitpoints.
   * Never less than one.
   */
  const minHp = Math.floor(Math.max(1, iteration - range + offset));

  /**
   * Maximum possible hitpoints.
   * At least equal to the minimum hitpoints plus one.
   */
  const maxHp = Math.ceil(Math.max(minHp + 1, minHp + range));

  /**
   * Determine hitpoints randomly between min/max possible hitpoints.
   */
  const hitpoints = Random.integer(minHp, maxHp)(engine);

  if (powerup) {
      return Math.max(1, Math.round(wave.powerup.hitpointFactor * hitpoints));
  }

  return hitpoints;
}

function createBrick(brick, hitpoints, isPowerup = false) {
  const column = typeof brick.column === 'number' ? brick.column : 0;
  const row = typeof brick.row === 'number' ? brick.row : 0;
  const color = isPowerup ? brick.powerupColor : brick.sprite.color;
  const border = isPowerup ? brick.powerupBorder : brick.sprite.border;

  return new BaseBrick(
      new TextGraphicSprite(
          new BaseGraphicSprite(
              {
                  position: {
                      x: brick.bricks.startX + column * brick.sprite.size.width,
                      y: brick.bricks.startY + row * brick.sprite.size.height,
                  },
                  color,
                  size: brick.sprite.size,
                  border,
              },
              brick.graphics,
          ),
          brickTextConfig(brick, isPowerup),
      ),
      hitpoints,
      isPowerup,
  );
}

function brickTextConfig(brick, isPowerup) {
  return textConfig(brick.text, brickTextColor(brick, isPowerup));
}

function brickTextColor(brick, isPowerup) {
  return isPowerup ? brick.powerupBorder : brick.sprite.border;
}

class Effects {

  constructor(config, graphics, entities) {
      this.config = config;
      this.entities = entities;
      this.explosion = new Explosion(config.explode, graphics);
      this.hit = new Explosion(config.hit, graphics);
      this.systems = new ReadonlyComposite([this.explosion, this.hit]);
  }

  setup(scene) {
      this.systems.setup(scene);
      this.entities.bricks.onHit((_ball, brick, points) => {
          if (!brick.isPowerup()) {
              flyDownText(scene, this.config, brick, points);

              if (brick.hitpoints() === 0) {
                  this.explosion.explode(brick);
              } else {
                  this.hit.explode(brick);
              }
          }
      });

      return this;
  }

  update() {
      this.systems.update();

      return this;
  }
}

class Explosion {
  constructor(config, graphics) {
      this.config = config;
      this.graphics = graphics;
  }

  setup(scene) {
      this.explosionsGraphics = createGraphics(scene.add, explosionGraphicsStyle(this.config));
      this.particles = scene.add.particles(this.graphics.texture.key);
      this.explosion = createExplosion(this.particles, this.config);

      return this;
  }

  explode(brick) {
      this.explosion.explode(this.config.quantity, brick.sprite().x, brick.sprite().y);

      return this;
  }

  update() {
      this.explosionsGraphics.clear();
      this.explosion.forEachAlive(
          (particle) => {
              drawExplodeParticle(this.explosionsGraphics, particle, this.config.size);
          },
          this,
      );

      return this;
  }
}

function createGraphics(factory, style) {
  return factory.graphics({
      fillStyle: {
          color: style.fill.color,
      },
      lineStyle: {
          width: style.border.width,
          color: style.border.color,
      },
  });
}

function graphicsStyle(sprite, graphics) {
  return {
      fill: {
          color: sprite.color,
      },
      border: {
          color: sprite.border,
          width: graphics.width,
      },
  };
}

function createSprite(
  factory,
  position,
  size,
  texture,
) {
  const sprite = factory.sprite(position.x, position.y, texture);
  sprite.setScale(size.width, size.height);
  sprite.setOrigin(size.width * 0.5, size.height * 0.5);

  return sprite;
}

function followPointerMovementX(
  input,
  sprite,
  keepInBounds,
  condition = () => {},
) {
  input.on('pointermove', (pointer) => {
      if (condition(pointer)) {
          sprite.x = keepInBounds
              ? clamp(sprite.displayOriginX, gameWidth(input.systems.game) - sprite.displayOriginX, pointer.x)
              : pointer.x;
      }
  });
}

function setBoundsCollision(world, directions) {
  (world).setBoundsCollision(directions.left, directions.right, directions.top, directions.bottom);
}

function addCollider(
  factory,
  sprite1,
  sprite2,
  hit
) {
  factory.collider(
      // tslint:disable-next-line:no-any
      sprites(sprite1),
      // tslint:disable-next-line:no-any
      sprites(sprite2),
      // tslint:disable-next-line:no-empty
      hit ? hit : (() => {}),
      () => true,
      {},
  );
}

function sprites(sprite) {
  return (
      Array.isArray(sprite) ? sprite : [sprite]
  ).map((s) => s.sprite());
}

function createText(scene, text) {
  const result = scene.add.text(text.position.x, text.position.y, text.text, text.config);

  if (text.center !== undefined && text.center) {
      result.setOrigin(0.5, 0.5);
  }

  if (text.visible !== undefined) {
      result.visible = text.visible;
  }

  if (text.depth !== undefined) {
      result.depth = text.depth;
  }

  return result;
}

function createScoreboardText(
  scene,
  config,
  position,
  depth,
){
  return createText(
      scene,
      {
          position,
          visible: false,
          depth,
          text: '',
          config,
      },
  );
}

function explosionGraphicsStyle(config) {
  return graphicsStyle({ color: config.fillColor, border: config.borderColor }, { width: config.borderWidth });
}
function createExplosion(
  particles,
  config,
){ 
  return particles.createEmitter({
      speed: config.speed,
      lifespan: config.lifespan,
      gravityY: config.gravity,
      frequency: -1,
  });
}


function positionEqual(a, b) {
  return a.x === b.x && a.y === b.y;
}

function redrawSprite(graphics, sprite) {
  graphics.clear();
  graphics.fillRect(startX(sprite), startY(sprite), sprite.displayWidth, sprite.displayHeight);
  graphics.strokeRect(startX(sprite), startY(sprite), sprite.displayWidth, sprite.displayHeight);
}

function startX(sprite) {
  return sprite.x - sprite.displayOriginX;
}

function startY(sprite) {
  return sprite.y - sprite.displayOriginY;
}

function spritePosition(sprite) {
  return {
      x: sprite.x,
      y: sprite.y,
  };
}

function lowestY(bricks, defaultValue) {
  return bricks.length === 0
      ? defaultValue
      : bricks.reduce((prev, curr) => prev.sprite().y > curr.sprite().y ? prev : curr)
          .sprite().y;
}

function clamp(min, max, value) {
  if (min > max) {
    throw new Error('min must not be greater than max in clamp(min, max, value)');
  }
  return value < min
    ? min
    : value > max
      ? max
      : value;
}

function gameWidth(game) {
  return game.config.width;
}

function ballOnSpritePosition(ball, paddle) {
  return {
      x: paddle.sprite().x,
      y: startY(paddle.sprite()) - ball.sprite().displayHeight - paddle.borderWidth() * 2,
  };
}

function shake(camera, config) {
  camera.shake(config.duration, config.intensity, 1);
}

function flyDownText(scene, config, brick, points) {
  const text = createFlyDownText(scene, config, brick, points);
  scene.tweens.add({
      targets: text,
      y: brick.sprite().y + config.flyDown.distance,
      alpha: 0,
      ease: config.flyDown.ease,
      duration: config.flyDown.duration,
      onComplete: () => {
          text.destroy();
      },
  });
}

function createFlyDownText(scene, config, brick, points) {
  return createText(scene, {
      text: points.toString(),
      config: config.flyDown.text,
      position: brick.sprite(),
      center: true,
  });
}

function drawExplodeParticle(graphics, position, size) {
  const startX = position.x - size.width * 0.5;
  const startY = position.y - size.height * 0.5;
  graphics.fillRect(startX, startY, size.width, size.height);
  graphics.strokeRect(startX, startY, size.width, size.height);
}

function lowerBrick(
  tweens,
  config,
  brick,
) {
  return tweens.add({
      targets: brick.objects(),
      y: brick.sprite().y + brick.sprite().displayHeight,
      ease: config.ease,
      duration: config.duration,
  });
}
function gameObject(sprite) {
  // tslint:disable-next-line:no-any
  return sprite;
}