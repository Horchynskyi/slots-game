
import { START_WIN_COMBINATIONS, winChance } from '../game-options';
import { combinationMachine } from './../combinations-machine';

import { ReelsZone } from './objects/reels_zone/index';
import { SpinButton } from './objects/spin-button';
import { AwardText } from './objects/award-text';

export class Game extends PIXI.Application {
  constructor() {
    super(window.innerWidth, window.innerHeight, {backgroundColor : 0x1099bb});
    document.body.appendChild(this.view);

    this._currentCombination = false;
    this._startWinCombinations = START_WIN_COMBINATIONS.slice().reverse();
  }

  createObjects() {
    const mainContainer = new PIXI.Container();
    this.stage.addChild(mainContainer);

    const reelsZone = this._reelsZone = new ReelsZone();
    reelsZone.position.set(0, -100);

    const spinButton = this._spinButton = new SpinButton();
    spinButton.position.set(0, reelsZone.y + reelsZone.height * 0.35);

    const awardText = this._awardText = new AwardText();
    awardText.position.set(0, reelsZone.y - reelsZone.height * 0.275);

    mainContainer.addChild(reelsZone);
    mainContainer.addChild(spinButton);
    mainContainer.addChild(awardText);

    mainContainer.position.set(this.screen.width * 0.5, this.screen.height * 0.5);
    
    // 1.2 because of covering rectangles in reels zone
    mainContainer.scale.set(Math.min(game.screen.height * 1.2 / mainContainer.height, 1)); 

    this._initEvents();
  }

  _initEvents() {
    this._spinButton.on('pointerdown', () => {
      this._awardText.hide();

      let nextCombination;
      if ( this._startWinCombinations.length ) {
        nextCombination = this._startWinCombinations.pop();
      } else {
        if ( Math.random() < winChance.value ) {
          nextCombination = combinationMachine.generateRandomWinCombination();
        } else {
          nextCombination = combinationMachine.generateLoseCombination();
        }
      }

      this._currentCombination = nextCombination;

      this._reelsZone.startSpin();
      this._reelsZone.setNextCombination(nextCombination);
    });

    this._reelsZone.on('spinningCompleted', () => {
      if ( this._currentCombination.winAward ) {
        this._awardText.showWithValue(this._currentCombination.winAward);
      }

      this._spinButton.setEnabled(true);
    });
  }
}