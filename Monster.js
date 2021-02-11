class Monster{
  constructor(x, y, width, height) {
      var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0,
      isStatic: true
     }
      this.image = loadImage("Monster-01.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }
}