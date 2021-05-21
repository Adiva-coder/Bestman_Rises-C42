class Drop{
    constructor(x, y){
        
        this.rain = Bodies.circle(x, y, 20);
        this.radius = 10;
        this.image = loadImage("drop.png");
        World.add(world, this.rain);
    }   

    update(){

        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x: random(0, 400), y: random(0, 400)});
        }
    }

    display(){

        var pos = this.rain.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius, this.radius);
    }
}      