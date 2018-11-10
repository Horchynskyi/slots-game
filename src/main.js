
import TWEEN from '@tweenjs/tween.js';

import { RESOURCES } from './resources';
import { Game } from './game/index';

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
