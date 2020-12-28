class Form{
    constructor(){
       this.input = createInput("write Your name");
       this.button = createButton('Play');
        this.greeting = createElement('h3');

    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130, 0);

       

        this.input.position(130, 160);
        this.button.position(250, 200);

        this.button.mousePressed(()=>{

           player.playerName = this.input.value();

            playerCount+=1;
            player.update();
            player.updateCount(playerCount);

            this.input.hide();
            this.button.hide();

           
            this.greeting.html("Hello " + player.playerName );
            this.greeting.position(130, 160)

        });

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide(); 
    }
}