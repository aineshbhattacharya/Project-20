var bgImg;
var catImg1, catImg2;
var mouseImg1, mouseImg2;

function preload() {
    //load the images here
    bgImg = loadImage("graden.png");
    catImg1 = loadImage("cat1.png");
    mouseImg1 = loadImage("mouse1.png");
    catImg2 = loadAnimation("cat2.png", "cat3.png");
    mouseImg2 = loadAnimation("mouse2.png", "mouse3.png");
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    cat = createSprite(1000, 800);
    cat.addImage(catImg1);
    cat.scale = 0.5;

    mouse = createSprite(1000, 800);
    mouse.addImage(mouseImg1);
    mouse.scale = 0.2;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here


}
