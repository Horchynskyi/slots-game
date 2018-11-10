
export class AwardText extends PIXI.Text {
  constructor() {
    super(
      null, 
      new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 96,
        fontWeight: 'bold',
        fill: ['#F1FF40', '#FFDB25'],
        stroke: '#FFDC40',
        strokeThickness: 2,
        dropShadow: true,
        dropShadowColor: '#F7FF00',
        dropShadowBlur: 20,
        padding: 20
      })
    );
    this.anchor.set(0.5);
    this.scale.set(0);

    this._showAnimation = new TWEEN.Tween(this.scale)
    .to({ x: 1, y: 1 }, 750)
    .easing(TWEEN.Easing.Bounce.Out);

    this._hideAnimation = new TWEEN.Tween(this.scale)
    .to({ x: 0, y: 0 }, 350)
    .easing(TWEEN.Easing.Back.In);
  }

  showWithValue(value) {
    this.text = `${AwardText.START_TEXT}${value}$`;
    this._showAnimation.start();
  }

  hide() {
    this._showAnimation.stop();
    this._hideAnimation.start();
  }
}

AwardText.START_TEXT = 'WIN: ';