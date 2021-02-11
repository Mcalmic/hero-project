const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;   
var score = 0;

var engine, world;
var heroImage

function preload() {

  heroImage = loadImage("Superhero-01.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 400, 1200, 5);   
    hero = new Hero(200, 200, 100, 50);
    slingshot = new Slingshot(hero.body, {x: 200, y:200});
    monster = new Monster(1000, 350, 100, 100);

    box1 = new Box(830, 385, 30, 40);
    box2 = new Box(830, 355, 30, 40);
    box3 = new Box(830, 325, 30, 40);
    box4 = new Box(830, 295, 30, 40);
    box5 = new Box(930, 415, 30, 40);
    box6 = new Box(930, 385, 30, 40);
    box7 = new Box(930, 355, 30, 40);
    box8 = new Box(930, 325, 30, 40);
    box9 = new Box(930, 295, 30, 40);
}

function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(1);
    text(score, 1000, 50);
    ground.display();  

    hero.display();  
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    monster.display();

}

function mouseDragged(){

    Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY})

}

function mouseReleased(){

    slingshot.fly();

}