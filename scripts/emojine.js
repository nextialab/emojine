var side = 48;
var rows = 13;
var cols = 17;

var hero = {
    sprite: null,
    x: 8,
    y: 6
};
var sword = {
    sprite: null,
    x: 8,
    y: 5
}

var ghost = {
    sprite: null,
    x: 0,
    y: 0,
}

var cursors;
var moving = {
    up: false,
    rigth: false,
    down: false,
    left: false
}

var game = new Phaser.Game(side * cols, side * rows, Phaser.AUTO, 'game', {
    preload: preload,
    create: create,
    update: update
});

function preload() {
    game.load.spritesheet('emojis', 'assets/emojione.sprites.png', side, side, 1640);
}

function create() {
    hero.sprite = game.add.sprite(hero.x * side, hero.y * side, 'emojis', map.HERO);
    hero.sprite.anchor.setTo(0.5, 0.5);
    sword.sprite = game.add.sprite(sword.x * side, sword.y * side, 'emojis', map.EMPTY);
    sword.sprite.anchor.setTo(0.5, 0.5);
    ghost.sprite = game.add.sprite(ghost.x * side, ghost.y * side, 'emojis', map.GHOST);
    cursors = game.input.keyboard.createCursorKeys();
    cursors.up.onDown.add(onNorthAction);
    cursors.left.onDown.add(onWestAction);
    cursors.right.onDown.add(onEastAction);
    cursors.down.onDown.add(onSouthAction);
    game.input.keyboard.addKey(Phaser.KeyCode.W).onDown.add(onUpDown);
    game.input.keyboard.addKey(Phaser.KeyCode.A).onDown.add(onLeftDown);
    game.input.keyboard.addKey(Phaser.KeyCode.S).onDown.add(onDownDown);
    game.input.keyboard.addKey(Phaser.KeyCode.D).onDown.add(onRightDown);
    game.input.keyboard.addKey(Phaser.KeyCode.W).onUp.add(onUpUp);
    game.input.keyboard.addKey(Phaser.KeyCode.A).onUp.add(onLeftUp);
    game.input.keyboard.addKey(Phaser.KeyCode.S).onUp.add(onDownUp);
    game.input.keyboard.addKey(Phaser.KeyCode.D).onUp.add(onRightUp);
}

function update() {
    if (moving.up) {
        hero.sprite.y -= 1;
    } else if (moving.down) {
        hero.sprite.y += 1;
    }
    if (moving.right) {
        hero.sprite.x += 1;
    } else if (moving.left) {
        hero.sprite.x -= 1;
    }
}

function onNorthAction() {
    sword.sprite.x = hero.sprite.x;
    sword.sprite.y = hero.sprite.y - side;
    sword.sprite.angle = -90;
    sword.sprite.frame = map.SWORD;
    setTimeout(function () {
        sword.sprite.frame = map.EMPTY;
    }, 100);
}

function onWestAction() {
    sword.sprite.x = hero.sprite.x - side;
    sword.sprite.y = hero.sprite.y;
    sword.sprite.angle = 180;
    sword.sprite.frame = map.SWORD;
    setTimeout(function () {
        sword.sprite.frame = map.EMPTY;
    }, 100);
}

function onSouthAction() {
    sword.sprite.frame = map.SWORD;
    sword.sprite.angle = 0;
    sword.sprite.x = hero.sprite.x;
    sword.sprite.y = hero.sprite.y + side;
    setTimeout(function () {
        sword.sprite.frame = map.EMPTY;
    }, 100);
}

function onEastAction() {
    sword.sprite.x = hero.sprite.x + side;
    sword.sprite.y = hero.sprite.y;
    sword.sprite.angle = -90;
    sword.sprite.frame = map.SWORD;
    setTimeout(function () {
        sword.sprite.frame = map.EMPTY;
    }, 100);
}

function onUpDown() {
    /*if (hero.y > 0) {
        hero.y--;
        hero.sprite.y = hero.y * side;
    }*/
    moving.up = true;
}

function onUpUp() {
    moving.up = false;
}

function onRightDown() {
    /*if (hero.x < cols - 1) {
        hero.x++;
        hero.sprite.x = hero.x * side;
    }*/
    moving.right = true;
}

function onRightUp() {
    moving.right = false;
}

function onLeftDown() {
    /*if (hero.x > 0) {
        hero.x--;
        hero.sprite.x = hero.x * side;
    }*/
    moving.left = true;
}

function onLeftUp() {
    moving.left = false;
}

function onDownDown() {
    /*if (hero.y < rows - 1) {
        hero.y++;
        hero.sprite.y = hero.y * side;
    }*/
    moving.down = true;
}

function onDownUp() {
    moving.down = false;
}
