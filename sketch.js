var canvas;
var music;
var r1, r2, r3, r4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800, 600);

    r1 = createSprite(87.5, 575, 190, 35);
    r1.shapeColor = "blue";

    r2 = createSprite(295, 575, 190, 35);
    r2.shapeColor = "orange";

    r3 = createSprite(505.5, 575, 190, 35);
    r3.shapeColor = "maroon";

    r4 = createSprite(713.5, 575, 190, 35);
    r4.shapeColor = "green";

    box = createSprite(random(20, 750), 50, 40, 40);
    box.shapeColor = "white";
    box.velocityY = 5;
    box.velocityX = 4;

}

function draw() {
    background(rgb(169,169,169));
    drawSprites();

    edges = createEdgeSprites();
    box.bounceOff(edges);

    if(r1.isTouching(box) && box.bounceOff(r1)){
        box.shapeColor = "blue";
        music.play();
    }

    if(r2.isTouching(box) && box.bounceOff(r2)){
        box.shapeColor = "orange";
        music.stop();
        box.velocityX = 0;
        box.velocityY = 0;
    }
    

    if(r3.isTouching(box) && box.bounceOff(r3)){
        box.shapeColor = "maroon";
        music.play();
    }
    

    if(r4.isTouching(box) && box.bounceOff(r4)){
        box.shapeColor = "green";
        music.play();
    }

}

