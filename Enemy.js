export default class Enemy {

    constructor(x,y,imageNumber){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;

        this.image = new Image()
        this.image.src = `img/bact${imageNumber}.png`
    }

    draw(ctx){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    move(xVelocity, yVelocity){
        this.x += xVelocity;
        this.y += yVelocity;
    }
}