
import { START_REELS_VIEW } from '../../../game-options';

import { Reel } from './reel';

export class ReelsZone extends PIXI.Container {
  constructor() {
    super();
    this._reels = [];
    this._currentWiningSlots = [];

    const reelsContainer = new PIXI.Container();
    this.addChild(reelsContainer);

    const offsetX = 180;
    for ( let i = 0; i < 5; i++ ) {
      const reel = new Reel();
      reel.x = offsetX * i;
      reel.iniStartSymbols(START_REELS_VIEW[i]);
      
      reelsContainer.addChild(reel);
      this._reels.push(reel);
    }

    let width = this._reels[this._reels.length - 1].x;
    reelsContainer.pivot.x = width * 0.5;

    const coverOffset = 65;
    this._verticalBounds = {
      top: -reelsContainer.height * 0.4 + coverOffset,
      bottom: reelsContainer.height * 0.4 - coverOffset
    };

    const height = 800;
    this._createCoverRect(0, this._verticalBounds.top, game.screen.width, -height);
    this._createCoverRect(0, this._verticalBounds.bottom, game.screen.width, height);

    this.on('spinningCompleted', () => {
      this._currentWiningSlots.forEach((slot) => {
        slot.playWinAnimation();
      });
    });
  }

  _createCoverRect(x, y, w, h) {
    const graphics = new PIXI.Graphics();
    graphics.position.set(x, y);
    graphics.beginFill(0x1099bb);
    graphics.drawRect(-w * 0.5, 0, w, h);
    graphics.beginFill(0x000000);
    graphics.drawRect(-w * 0.5, 0, w, 10);

    this.addChild(graphics);
  }

  _checkSlotsOutOfBounds() {
    if ( this._reels.every((reel) => !reel.isSpinning) ) {
      game.ticker.remove(this._checkSlotsOutOfBounds, this);
      this.emit('spinningCompleted');
      return;
    }

    this._reels.forEach((reel, i) => {
      if ( !reel.isSpinning ) {
        return;
      }

      const currentLastSlot = reel.getLastSlot();
      const localPos = this.toLocal(currentLastSlot, currentLastSlot.parent);

      if ( localPos.y - currentLastSlot.height > this._verticalBounds.bottom ) {
        reel.throwLastSlotToTop();
      } 
    });
  }

  startSpin() {
    const delay = 300;

    this._reels.forEach((reel, i) => {
      reel.startSpin(delay * i);
    });
    
    this._currentWiningSlots.forEach((slot) => {
      slot.stopWinAnimation();
    });
    game.ticker.add(this._checkSlotsOutOfBounds, this);
  }

  setNextCombination(combinationModels) {
    const view = combinationModels.viewModel;
    const win = combinationModels.winModel;

    this._currentWiningSlots.length = 0;

    this._reels.forEach((reel, i) => {
      reel.slots.forEach((slot, j) => {
        slot.nextSymbol = view[i][j];

        if ( win && j > 0 && j < 4 && win[i][j - 1] ) { // skip out of visible rows 
          this._currentWiningSlots.push(slot);
        }
      });
    });
  }
}