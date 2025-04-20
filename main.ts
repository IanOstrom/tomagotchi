namespace SpriteKind {
    export const Money = SpriteKind.create()
}
namespace StatusBarKind {
    export const Thirst = StatusBarKind.create()
    export const Hunger = StatusBarKind.create()
}
function spawnCoin () {
    coin = sprites.create(assets.image`coin`, SpriteKind.Money)
    tiles.placeOnRandomTile(coin, sprites.castle.tileGrass2)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() >= 5) {
        info.changeScoreBy(-5)
        thirst.value += 50
        dog.startEffect(effects.smiles, 500)
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Money, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
function spawnDog () {
    dog = sprites.create(assets.image`dog normal`, SpriteKind.Player)
    dog.setBounceOnWall(true)
    scene.cameraFollowSprite(dog)
    characterAnimations.loopFrames(
    dog,
    [img`
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        f f . . f 5 5 5 4 4 5 5 5 f . . 
        f 5 f . f 6 5 5 f f 5 5 4 f . . 
        f 5 5 f 4 4 6 6 6 6 6 6 f . . . 
        . f 5 4 4 5 5 5 5 5 5 4 f . . . 
        . . f f 5 5 4 5 5 5 5 5 f . . . 
        . . . f 5 f f 5 f f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        . f f . f 5 5 5 4 4 5 5 5 f . . 
        . f 5 f f 6 5 5 f f 5 5 4 . . . 
        . f 5 4 4 4 6 6 6 6 6 6 f . . . 
        . . f f f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 f f f 5 4 5 f . . . 
        . . . . f f . . f f f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        . f f . f 5 5 5 4 4 5 5 5 f . . 
        . f 5 f f 6 5 5 f f 5 5 4 . . . 
        . f 5 5 f 4 6 6 6 6 6 6 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . . f f f 5 f 5 4 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    dog,
    [img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 4 4 5 f . 
        . . . f 5 5 5 5 5 5 5 f f f . . 
        . . . f 5 4 5 f f f 5 f . . . . 
        . . . f f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 f 5 5 f . 
        . . . f 5 5 5 5 5 5 5 4 5 f . . 
        . . . . f 5 4 5 f 5 f f f . . . 
        . . . . . f f f f f f f . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() >= 5) {
        info.changeScoreBy(-5)
        hunger.value += 50
        dog.startEffect(effects.smiles, 500)
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
    }
})
function spawnStatusBars () {
    hunger = statusbars.create(20, 4, StatusBarKind.Hunger)
    hunger.setLabel("Hunger(A)", 8)
    hunger.setPosition(40, 115)
    hunger.setColor(9, 2)
    thirst = statusbars.create(20, 4, StatusBarKind.Thirst)
    thirst.setLabel("Thirst(B)", 8)
    thirst.setPosition(120, 115)
    thirst.setColor(9, 2)
}
statusbars.onStatusReached(StatusBarKind.Thirst, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 25, function (status) {
    dog.startEffect(effects.warmRadial, 2000)
    for (let index = 0; index < 3; index++) {
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
        pause(200)
    }
})
statusbars.onStatusReached(StatusBarKind.Hunger, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 25, function (status) {
    dog.startEffect(effects.disintegrate, 2000)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
})
function moveDog () {
    if (Math.percentChance(50)) {
        dog.setVelocity(randint(-50, 50), randint(-50, 50))
    } else {
        dog.setVelocity(0, 0)
    }
}
let hunger: StatusBarSprite = null
let dog: Sprite = null
let thirst: StatusBarSprite = null
let coin: Sprite = null
info.setScore(0)
tiles.setCurrentTilemap(tilemap`level1`)
spawnDog()
spawnStatusBars()
game.onUpdateInterval(5000, function () {
    moveDog()
})
game.onUpdateInterval(1000, function () {
    spawnCoin()
})
game.onUpdateInterval(3000, function () {
    hunger.value += -1
    thirst.value += -2
})
