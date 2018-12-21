var Unit = new Phaser.Class({
    Extends: Phaser.GameObjects.Sprite,
 
    initialize:
 
    function Unit(scene, x, y, texture, frame, type, hp, damage) {
        Phaser.GameObjects.Sprite.call(this, scene, x, y, texture, frame)
        this.type = type;
        this.maxHp = this.hp = hp;
        this.damage = damage; // default damage                
    },
    attack: function(target) {
        target.takeDamage(this.damage);      
    },
    takeDamage: function(damage) {
        this.hp -= damage;        
    }
});

var Enemy = new Phaser.Class({
    Extends: Unit,
 
    initialize:
    function Enemy(scene, x, y, texture, frame, type, hp, damage) {
        Unit.call(this, scene, x, y, texture, frame, type, hp, damage);
        this.flipX = true;
        
        this.setScale(2);
    }
});

var PlayerCharacter = new Phaser.Class({
    Extends: Unit,
 
    initialize:
    function PlayerCharacter(scene, x, y, texture, frame, type, hp, damage) {
        Unit.call(this, scene, x, y, texture, frame, type, hp, damage);
        // flip the image so I don't have to edit it manually
        this.flipX = true;
        
        this.setScale(2);
    }
});

var MenuItem = new Phaser.Class({
    Extends: Phaser.GameObjects.Text,
    
    initialize:
            
    function MenuItem(x, y, text, scene) {
        Phaser.GameObjects.Text.call(this, scene, x, y, text, { color: '#ffffff', align: 'left', fontSize: 15});
    },
    
    select: function() {
        this.setColor('#f8ff38');
    },
    
    deselect: function() {
        this.setColor('#ffffff');
    }
    
});

var BattleScene = new Phaser.Class({
 
    Extends: Phaser.Scene,
 
    initialize:
 
    function BattleScene ()
    {
        Phaser.Scene.call(this, { key: 'BattleScene' });
    },
    preload: function ()
    {
        this.load.spritesheet('player', 'assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
        this.load.spritesheet('enemy', 'assets/enemy_assets.png', { frameWidth: 16, frameHeight: 16});
    },
    create: function ()
    {
        // change the background to green
        this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');
        
        // player character - elf
        var elf = new PlayerCharacter(this, 250, 50, 'player', 1, 'Elf', 100, 20);        
        this.add.existing(elf);
        
        // player character - magic elf
        var magicElf = new PlayerCharacter(this, 250, 100, 'player', 4, 'MagicElf', 80, 8);
        this.add.existing(magicElf);            
        
        var debtCollector1 = new Enemy(this, 50, 50, 'enemy', 53, 'DebtCollector1', 20, 3);
        this.add.existing(debtCollector1);

        var debtCollector2 = new Enemy(this, 50, 100, 'enemy', 53, 'DebtCollector2', 20, 3);
        this.add.existing(debtCollector2);
        
        // array with heroes
        this.heroes = [ elf, magicElf ];
        // array with enemies
        this.enemies = [ debtCollector1, debtCollector2 ];
        // array with both parties, who will attack
        this.units = this.heroes.concat(this.enemies);
        
        // Run UI Scene at the same time
        this.scene.launch('UIScene');
    }
});