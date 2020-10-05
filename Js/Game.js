class Game {
    constructor(){
  
     lab1 = loadImage("Images/Lab1.jpg");

     cases = 0;
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
     update(state){
      database.ref('/').update({
        gameState: state
      });
    }

    async start(){
      if(gameState === 0){
        player = new Player();
        vi = new Vi();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form();
        form.display();
      }  

      if(vi.name != null){
        game.update(2);
      }
    }

    play1(){
      form.hide();

      imageMode(CORNER);
      background(lab1,1075,500);

      textSize(30)
      fill("yellow")
      text("Trial 1: Collect the " + vi.name + " virus but avoid the other microbes!",100,90);
      text("Cases: " + cases, 800, 150);
      text("Score: " + score, 800, 180);

      //dish = createSprite(537.5,400,50,50);

      dish.visible = true;

      dish.x = mouseX;
      //dish.y = mouseY;
      dish.shapeColor = "blue";
      

      if(frameCount%30 === 0){
        theVi = createSprite(random(20,1055),0,20,20);
        theVi.velocityY = 5;

        theVi.shapeColor = "purple";

        viGroup.add(theVi);
      }

      if(vi.name !== null){

      for(var i = 0; i<viGroup.length; i++){
        if(viGroup.get(i).isTouching(dish)){
          viGroup.get(i).destroy();

          score++
        }
      }

      //if(viGroup.isTouching(dish)){
        //score++;

        //viGroup.destroyEach();
      //}
    }

      drawSprites();
    }
  }