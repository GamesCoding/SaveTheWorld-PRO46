class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h4');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.input2 = createInput("Name the virus");
    this.continue = createButton('Continue');
  }

  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.input2.hide();
    this.continue.hide();
    this.reset.hide();
  }

  show(){
    this.reset.show();
  }

  display(){

    this.title.html("Save The World!");
    this.title.position(650,175);

    this.input.position(675,300);
    this.button.position(740,350);
    this.reset.position(735,400);
    this.input2.position(675,400);
    this.continue.position(735,500);
    this.input2.hide();
    this.continue.hide();
    //this.reset.hide();

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.input2.show();
      this.continue.show();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Oh no! " + player.name + " there is a new virus and only you can find a vaccine for it!" + " You must Save The World!")
      this.greeting.position(displayWidth/2 - 465, 300);
    });

    this.continue.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      vi.name = this.input2.value();
      vi.index = virCount;
      vi.update();
      //game.update(2);
    });

    
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    //Player.updateCarsAtEnd(0);
      Player.updatePlayer();
      Vi.updateVi();
    });

  }
}
