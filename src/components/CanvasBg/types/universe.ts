function getProbability(percents: number) {
  return Math.floor(Math.random() * 1000) + 1 < percents * 10;
}

function getRandInterval(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function makeUniverse(canvas: HTMLCanvasElement) {
  const { width, height } = canvas.getBoundingClientRect();
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  let isFirstRender = true;

  canvas.width = width;
  canvas.height = height;
  canvas.style.backgroundImage = `radial-gradient(
    1600px at 70% 120%,
    rgba(33, 39, 80, 1) 10%,
    #020409 100%
  )`;

  class Star {
    #speedCoeff = 0.05; // 速度系数
    #giantColor = '180,184,240'; // 背景色
    #starColor = '226,225,142'; // 星星颜色
    #cometColor = '226,225,224'; // 彗星颜色

    isGiantStar: boolean = false; // 是否是巨星
    isComet: boolean = false; // 是否是彗星

    x: number = 0; // x坐标
    y: number = 0; // y坐标
    r: number = 0; // 半径
    dx: number = 0; // x轴移动的距离
    dy: number = 0; // y轴移动的距离
    fadingIn: boolean = false;
    fadingOut: boolean = false;
    opacity: number = 0; // 透明度
    opacityTresh: number = 0; // 不透明度
    do: number = 0;

    constructor() {}

    reset() {
      this.isGiantStar = getProbability(3);
      this.isComet = this.isGiantStar || isFirstRender ? false : getProbability(10);
      this.x = getRandInterval(0, width);
      this.y = getRandInterval(0, height);
      this.r = getRandInterval(1.1, 2.6);
      this.dx =
        getRandInterval(this.#speedCoeff, 6 * this.#speedCoeff) +
        +this.isComet * this.#speedCoeff * getRandInterval(50, 120) +
        this.#speedCoeff * 2;
      this.dy =
        -getRandInterval(this.#speedCoeff, 6 * this.#speedCoeff) -
        +this.isComet * this.#speedCoeff * getRandInterval(50, 120);
      this.fadingOut = false;
      this.fadingIn = true;
      this.opacity = 0;
      this.opacityTresh = getRandInterval(0.2, 1 - +this.isComet * 0.4);
      this.do = getRandInterval(0.0005, 0.002) + +this.isComet * 0.001;
    }

    fadeIn() {
      if (this.fadingIn) {
        this.fadingIn = this.opacity > this.opacityTresh ? false : true;
        this.opacity += this.do;
      }
    }

    fadeOut() {
      if (this.fadingOut) {
        this.fadingOut = this.opacity < 0 ? false : true;
        this.opacity -= this.do / 2;

        if (this.x > width || this.y < 0) {
          this.fadingOut = false;
          this.reset();
        }
      }
    }

    draw() {
      ctx.beginPath();

      if (this.isGiantStar) {
        ctx.fillStyle = `rgba(${this.#giantColor},${this.opacity})`;
        ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
      } else if (this.isComet) {
        ctx.fillStyle = `rgba(${this.#cometColor},${this.opacity})`;
        ctx.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, false);

        //comet tail
        for (let i = 0; i < 30; i++) {
          ctx.fillStyle = `rgba(${this.#cometColor},${
            this.opacity - (this.opacity / 20) * i
          })`;
          ctx.rect(this.x - (this.dx / 4) * i, this.y - (this.dy / 4) * i - 2, 2, 2);
          ctx.fill();
        }
      } else {
        ctx.fillStyle = `rgba(${this.#starColor},${this.opacity})`;
        ctx.rect(this.x, this.y, this.r, this.r);
      }

      ctx.closePath();
      ctx.fill();
    }

    move() {
      this.x += this.dx;
      this.y += this.dy;

      if (this.x > width || this.y < 0) {
        this.fadingOut = true;
      }
    }
  }

  const stars: Star[] = [];

  const init = () => {
    const starDensity = 0.116; // 星星密度
    const starCount: number = width * starDensity;

    for (let i = 0; i < starCount; i++) {
      stars[i] = new Star();
      stars[i].reset();
    }
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < stars.length; i++) {
      let star = stars[i];
      star.move();
      star.fadeIn();
      star.fadeOut();
      star.draw();
    }

    window.requestAnimationFrame(draw);
  };

  init();
  draw();

  setTimeout(() => {
    isFirstRender = false;
  }, 100);
}
