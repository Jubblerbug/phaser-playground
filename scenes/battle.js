var BattleScene = new Phaser.Class({
 
    Extends: Phaser.Scene,
 
    initialize:
 
    function BattleScene ()
    {
        Phaser.Scene.call(this, { key: 'BattleScene' });
    },
    create: function ()
    {
        // Run UI Scene at the same time
        this.scene.launch('UIScene');
    }
});