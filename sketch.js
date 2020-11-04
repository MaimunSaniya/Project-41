const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var t1,t2,t3,t4;

var thunder,thunders;

var mD = 100;
var thunderCreatedFrame = 0;

var rand;
var drops =[];

function preload(){
   t1 = loadImage("1.png");
   t2 = loadImage("2.png");
   t3 = loadImage("3.png");
   t4 = loadImage("4.png");
   thunders = loadSound("thunder.mp3");
}

function setup(){
   createCanvas(400,800);

   engine = Engine.create();
   world = engine.world;
    
   umbrella = new Umbrella(200,500);
   umbrella.scale = 5;

   if(frameCount%150===0){
      for(var i=0;i<mD;i++){
         drops.push(new Drops(random(0,400),random(0,800)));
      }
   }

}

function draw(){
   Engine.update(engine);
   background(0);

   rand = Math.round(random(1,4));

   if(frameCount%80===0){
      thunderCreatedFrame = frameCount;
      thunder = createSprite(random(0,400),random(0,30),10,10);
      thunders.play();
      switch(rand){
         case 1 : thunder.addImage(t1)&&thunders.play();
            break;
         case 2 : thunder.addImage(t2)&&thunders.play();
            break;
         case 3 : thunder.addImage(t3)&&thunders.play();
            break;
         case 4 : thunder.addImage(t4)&&thunders.play();
            break;
         default:break;
      }
      thunder.scale = random(0.5,0.9);
   }

   if(thunderCreatedFrame+15===frameCount && thunder){
      thunder.destroy();
   }

   umbrella.display();

   for(var i=0;i<mD;i++){
      drops[i].display();
      drops[i].updateRain();
   }

   drawSprites();    
}   

