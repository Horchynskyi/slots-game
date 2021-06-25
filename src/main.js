import * as TWEEN from '@tweenjs/tween.js';

import {RESOURCES} from './resources';
import {Game} from './game/index';

const game = new Game();

window.game = game;
window.TWEEN = TWEEN;

const path = './img/';
RESOURCES.forEach((resource) => {
    PIXI.loader.add(resource, path + resource);
});

PIXI.loader.load(() => {
    game.createObjects();

    game.ticker.add(() => {
        TWEEN.update(game.ticker.lastTime);
    });
});

let hidden, visibilityChange;
if (typeof document.hidden !== "undefined") {
    hidden = "hidden";
    visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
}

let tweens = [];

function handleVisibilityChange() {
    if (document[hidden]) {
        tweens = TWEEN.getAll();

        Object.values(tweens).forEach((tw) => {
            tw.pause();
        });
    } else {
        Object.values(tweens).forEach((tw) => {
            tw.resume();
        });
    }
}

document.addEventListener(visibilityChange, handleVisibilityChange, false);