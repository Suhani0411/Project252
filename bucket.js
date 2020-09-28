class buckets{
    constructor(x, y) {
        var options = {
            isStatic:true
        }
       
       
        this.x=x;
        this.y=y;
        this.width =200;
        this.height = 213;
        this.wallthickness=80;
        this.image = loadImage("Sprites/dustbingreen.png");
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height,this.wallthickness, options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        imageMode(CENTER);
        fill("white");
        stroke("white");
        image(this.image,0, 0, this.width, this.height);
        pop();
      }
    }