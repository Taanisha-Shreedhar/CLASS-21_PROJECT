class Dustbin{
    constructor(x, y, width, height){
        let options = {
        isStatic:true,
        'restitution':0,
        'friction':1,
        'density':0.1
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        push();
        rectMode(CENTER);
        stroke("cyan");
        fill("cyan");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
};