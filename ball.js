class Ball{
    constructor(x, y, r) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        
        this.x=x;
        this.y=y;
        this.r=r;

//position

        this.body = Matter.Bodies.circle(x, y, (this.r-10)/2,options);
        this.image = loadImage("Sprites/paper.png");
        World.add(world, this.body);
      }

      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        imageMode(CENTER);
        rotate(angle);
        image(this.image,0, 0,this.r);
        pop();
      }
}