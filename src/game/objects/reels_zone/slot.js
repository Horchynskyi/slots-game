
export class Slot extends PIXI.Sprite {
  constructor() {
    super();
    this._winAnimationScale = null;
    this._winAnimationAngle = null;

    this.nextSymbol = null;
    this.anchor.set(0.5);
  }

  playWinAnimation() {
    this._winAnimationScale = new TWEEN.Tween(this.scale)
    .to({ x: [1.1, 1], y: [1.1, 1] })
    .easing(TWEEN.Easing.Cubic.In)
    .repeat(Infinity)
    .onStop(() => {
      new TWEEN.Tween(this.scale)
      .to({ x: 1, y: 1 })
      .start();
    })
    .start();

    this._winAnimationAngle = new TWEEN.Tween(this)
    .to({ rotation: [0.1, -0.1, 0] })
    .easing(TWEEN.Easing.Sinusoidal.Out)
    .repeat(Infinity)
    .onStop(() => {
      new TWEEN.Tween(this)
      .to({ rotation: 0 })
      .start();
    })
    .start();
  }

  stopWinAnimation() {
    this._winAnimationScale.stop();
    this._winAnimationAngle.stop();
  }
}