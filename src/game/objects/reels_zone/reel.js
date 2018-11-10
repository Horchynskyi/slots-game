
import { Slot } from './slot';

export class Reel extends PIXI.Container {
  constructor() {
    super();
    this.isSpinning = false;
    this.slots = [];

    for ( let i = 0; i < Reel.SLOTS_AMOUNT; i++ ) {
      const slot = new Slot();
      slot.y = Reel.OFFSET_Y * i;

      this.addChild(slot);
      this.slots.push(slot);
    }

    const height = this.getLastSlot().y;
    this.pivot.y = height * 0.5;
  }

  _stop() {
    this.isSpinning = false;

    new TWEEN.Tween(this)
    .to({ y: [this.y + Reel.onSpinningCompleteOffset, this.y] }, 150)
    .start();
  }

  startSpin(delay) {
    this.isSpinning = true;

    new TWEEN.Tween(this)
    .to({ y: this.y + Reel.OFFSET_Y * Reel.SLOTS_AMOUNT * Reel.SPINNING_SPEED }, Reel.SPINNING_TIME * 0.3)
    .easing(TWEEN.Easing.Back.In)
    .delay(delay)
    .start()
    .onComplete(() => {
      new TWEEN.Tween(this)
      .to({ y: this.y + Reel.OFFSET_Y * Reel.SPINNING_SPEED * Reel.SLOTS_AMOUNT * 3 }, Reel.SPINNING_TIME * 0.7)
      .start()
      .onComplete(() => {
        this._stop();
      });
    });
  }

  throwLastSlotToTop() {
    const slot = this.slots.pop();
    const currentTopSlot = this.slots[0];

    slot.y = currentTopSlot.y - Reel.OFFSET_Y;

    if ( slot.nextSymbol ) {
      slot.texture = PIXI.Texture.fromFrame(slot.nextSymbol);
      slot.nextSymbol = null;
    }

    this.slots.unshift(slot);
  }

  iniStartSymbols(array) {
    this.slots.forEach((slot, i) => {
      slot.texture = PIXI.Texture.fromFrame(array[i]);
    });
  }

  getLastSlot() {
    return this.slots[this.slots.length - 1];
  }
}

Reel.SLOTS_AMOUNT = 5;
Reel.OFFSET_Y = 180;
Reel.SPINNING_SPEED = 2;
Reel.SPINNING_TIME = 2500;
Reel.onSpinningCompleteOffset = 20;