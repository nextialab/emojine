var side = 48;
var rows = 13;
var cols = 17;

var hero = {
    sprite: {},
    x: 8,
    y: 6
}
var cursors;



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
    cursors = game.input.keyboard.createCursorKeys();
    cursors.up.onDown.add(onUp);
    cursors.left.onDown.add(onLeft);
    cursors.right.onDown.add(onRight);
    cursors.down.onDown.add(onDown);
}

function update() {

}

function onUp() {
    if (hero.y > 0) {
        hero.y--;
        hero.sprite.y = hero.y * side;
    }
}

function onRight() {
    if (hero.x < cols - 1) {
        hero.x++;
        hero.sprite.x = hero.x * side;
    }
}

function onLeft() {
    if (hero.x > 0) {
        hero.x--;
        hero.sprite.x = hero.x * side;
    }
}

function onDown() {
    if (hero.y < rows - 1) {
        hero.y++;
        hero.sprite.y = hero.y * side;
    }
}
