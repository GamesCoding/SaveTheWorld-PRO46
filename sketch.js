var canvas, backgroundImage;

var gameState = 0;
var playerCount, virCount;

var cases;

var score = 0;

var stock = 0;
var database;

var lab1, lab2, lab3;

var dish;

var theVi;

var viGroup;

var form, player, game, vi;

function preload(){
  
}

function setup(){
  canvas = createCanvas(1075,500);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  dish = createSprite(537.5,400,50,50);
  dish.visible = false;

  viGroup = new Group;
}


function draw(){
    background(rgb(46, 139, 87));

    //form.display();

    //console.log(cases);

  if(playerCount === 1){
    game.update(1);
  }
  
  if(gameState === 1){
    game.start();
  }
  
  if(gameState === 2){
    game.play1();

    if(frameCount%100 === 0){

      cases = cases+100;

      vi.update(cases)
    }

  }
}