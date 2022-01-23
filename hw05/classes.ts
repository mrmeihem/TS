// Реализовать абстрактный класс MyGraphicsPrimitive2D у которого есть следующие свойства: прямоугольная область, описывающая примитив; метод - переместить примитив на заданное смещение;. От него дожен наследоваться абстрактный класс MyAreaPrimitive2D, у которого есть свойство площадь. От него должны наследоваться класс MyCircle, у него есть свойства: центр окружности и ее радиус, а также должен наследоваться класс MyRectangle с свойствами: ширина и высота, левая верхняя граница, правая нижняя граница

abstract class MyGraphicsPrimitive2D {
  constructor(
    public topLeftX: number,
    public topLeftY: number,
    public bottomRightX: number,
    public bottomRightY: number
  ) {}
  public movePrimitive(x: number, y: number): void {
    this.topLeftX = this.topLeftX + x;
    this.bottomRightX = this.bottomRightX + x;
    this.topLeftY = this.topLeftY + y;
    this.bottomRightY = this.bottomRightY + y;
  }
}

class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  constructor(
    public topLeftX: number,
    public topLeftY: number,
    public bottomRightX: number,
    public bottomRightY: number
  ) {
    super(topLeftX, topLeftY, bottomRightX, bottomRightY);
  }
  private area() {
    const area =
      (this.bottomRightX - this.topLeftX) * (this.bottomRightY - this.topLeftY);
    return area;
  }
}

class MyCircle extends MyAreaPrimitive2D {
  constructor(
    public topLeftX: number,
    public topLeftY: number,
    public bottomRightX: number,
    public bottomRightY: number,
    protected circleCenterX: number,
    protected circleCenterY: number,
    public circleRadius: number
  ) {
    super(topLeftX, topLeftY, bottomRightX, bottomRightY);
  }
  private areaCircle() {
    const Pi = 3.1415926;
    const area = 2 * Pi * Math.pow(this.circleRadius, 2);
    return area;
  }
}

class MyRectangle extends MyAreaPrimitive2D {
  constructor(
    public topLeftX: number,
    public topLeftY: number,
    public bottomRightX: number,
    public bottomRightY: number
  ) {
    super(topLeftX, topLeftY, bottomRightX, bottomRightY);
  }
  private width() {
    return this.bottomRightX - this.topLeftX;
  }
  private height() {
    return this.bottomRightY - this.topLeftY;
  }
}
