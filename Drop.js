class Drops{
    constructor(x,y){
        var options = {
            friction:0.001,
            resitution:0.1
        }

        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 10;
        World.add(world,this.rain);
        this.image = loadImage("drop.png");
    }
    updateRain(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,800)});
        }
    }
    display(){
        //fill("blue")
        imageMode(CENTER);
        image(this.image,this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}