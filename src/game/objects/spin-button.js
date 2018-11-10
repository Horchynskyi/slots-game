
export class SpinButton extends PIXI.Graphics {
  constructor() {
    super();
    this.interactive = true;

    const size = {
      w: 400,
      h: 150
    };

    this.beginFill(0xEFA4F6);
    this.lineStyle(10, 0x76006C, 0.7);
    this.drawRoundedRect(-size.w * 0.5, -size.h * 0.5, size.w, size.h, 30);

    const style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 76,
      fontWeight: 'bold',
      fill: ['#F26EE7', '#A40296'],
      stroke: '#4a1850',
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
    });

    const text = new PIXI.Text('SPIN', style);
    text.y = 5;
    text.anchor.set(0.5);

    this.addChild(text);

    this.on('pointerdown', () => {
      this.setEnabled(false);

      new TWEEN.Tween(this.scale)
      .to({ x: [0.9, 1], y: [0.9, 1] }, 300)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .start();
    });
  }

  setEnabled(value) {
    this.interactive = value;
    this.alpha = value ? 1 : 0.7;
  }
}