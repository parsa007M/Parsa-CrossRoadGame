
class Enemy {

    constructor(x, y, z) {
        this.x = x; //set x-axis for each vehicle objects.
        this.y = y; //set y-axis for each vehicle objects.
        this.index = z; //index value of vehicle objects.
        this.vehicleMove = 1; //initial speed factors of vehicle objects.
        this.randomXaxis = 0; //boundary-line check for each vehicle objects to cross the boundary

        this.sprite = ['img/car-one.png',
                       'img/car-two.png',
                       'img/fire-engine.png',
                       'img/bus-one.png',
                       'img/truck.png',
                       'img/bus-three.png',
                       'img/auto.png',
                       'img/cycle.png',
                       'img/ambulance.png'
        ]; 

    }


    /**
    * @description update method to update x-axis by multiply with dt parameters to each vehicle objects. 
    */
    update(dt) {

    this.randomXaxis = Math.floor(Math.random() * (6) +800); 

    if (this.x < this.randomXaxis) { 
        this.x += this.vehicleMove * 100 * dt;
    } else { 

        this.x = -200; 
        this.vehicleMove = Math.floor((Math.random() * 5) + 1); 
    }

}

/**
* -By using the index value is able to render different vehicle objects.     
* @property this.sprite[this.index] which contains index value of vehicle object.  
*/
render() {

    ctx.drawImage(Resources.get(this.sprite[this.index]),this.x,this.y); 
}


};


class Player {

    constructor() { 

       
        this.sprite = 'img/char-clever-boy.png'; // Select the default image

        this.x = 200; //starting location x axis of the player in the board
        this.y = 400; //starting location y axis of the player in the board


        this.previousXaxis = 0; //initial previous locaton x axis set to 0 
        this.previousYaxis = 0; //initial previous location y axis set to 0

       
        this.axisYstart = -5; //minimum height the player can reach at y-axis.
        this.axisYend = 401; //maximum height of y-axis the player can reach.
        this.axisXstart = -1; //minimum width of x-axis the player can reach.
        this.axisXend = 401; //maximum width the player can reach at x-axis

        this.score = 100; //initial score set to 100.
        this.life = 3; //initial life set to 3.
        this.check = 0; //check = 0 used in update() function to display select character popup. 


        this.enemyGroundone = 76 //y-axis of road 1 called by checkCollisions() method. 
        this.enemyGroundtwo = 157 //y-axis of road 2 called by checkCollisions() method.
        this.enemyGroundthree = 238 //y-axis of road 3 called by checkCollisions() method.

        this.scoreDecrement = 25; //score decrease on player vehicle collision called by scoreCalculation() method. 
        this.lifeDecrement = 1; //life decrease on player vehicle collision called by scoreCalculation() method.

        this.hitOne = 68; //hitting position of enemy and player 
       // this.hitTwo = 38; //hitting position of enemy and player 

        this.gemStoneone = '<img src="img/blue.png" alt="blue gem" class="gemstone">'; //gem 1 
        this.gemStonetwo = '<img src="img/green.png" alt="green gem" class="gemstone">'; //gem 2
        this.gemStonethree = '<img src="img/orange.png" alt="orange gem" class="gemstone">'; //gem 3

        this.heart = document.querySelector('.heart').childNodes; 

        this.highScore = document.querySelector('.highscore'); 
        this.gem = document.querySelector('.gem'); 
        this.playerCollection = document.querySelectorAll('.imgselect');
        this.alertmessage = document.querySelector('.alertmsg'); 
        
    }

    update() {

        if (this.check === 0) { //check === 0 for the first time
            modals.style.display = "block"; //then display popup select player of your choice
            this.check += 1; //check increments to 1 this ensure the popup never appear in the game.
        }

    }


   
    render() {

        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    }


 
    handleInput(key) { 
           
       // if (this.y === -5 || this.check === 1 || this.check === 3)
        if (this.y === -5) {

            console.log("Cannot move");

        } else { 
            (key === 'up') ? this.y -= 81 : (key === 'down') 
                           ? this.y += 81 : (key === 'right') 
                           ? this.x += 100 : (key === 'left') 
                           ? this.x -= 100 : console.log("moved"); 

        }

    }


    checkCollisions() {

        if ((this.axisYstart < this.y && this.y < this.axisYend) && (this.axisXstart < this.x && this.x < this.axisXend)) {
          
            this.previousXaxis = this.x; 
            this.previousYaxis = this.y; 

        } else if (this.y > -5) {
            this.x = this.previousXaxis; 
            this.y = this.previousYaxis; 

        } else { 

            setTimeout(this.scoreBoard.bind(this), 1000); 
        }
        

       
        if (this.y === this.enemyGroundthree) { 
        
            if (((vehicleNine.x <= this.x + this.hitOne)) ||
                ( (vehicleEight.x <= this.x + this.hitOne)) ||
                ((vehicleSeven.x <= this.x + this.hitOne))) {

                    /* ---------- */
             /*        if (((vehicleNine.x >= this.x - this.hitOne) && (vehicleNine.x <= this.x + this.hitOne)) ||
                    ((vehicleEight.x >= this.x - this.hitOne) && (vehicleEight.x <= this.x + this.hitOne)) ||
                    ((vehicleSeven.x >= this.x - this.hitOne) && (vehicleSeven.x <= this.x + this.hitOne))) { */


                    /* --------- */
         /*            if (((vehicleNine.x >= this.x - this.hitOne) && (vehicleNine.x <= this.x + this.hitOne)) ||
                    ((vehicleEight.x >= this.x - this.hitTwo) && (vehicleEight.x <= this.x + this.hitTwo)) ||
                    ((vehicleSeven.x >= this.x - this.hitTwo) && (vehicleSeven.x <= this.x + this.hitTwo))) { */

                this.startingPosition();
                this.scoreBoard(); 

            }

        } else if (this.y === this.enemyGroundtwo) { 

            if (((vehicleFour.x >= this.x - this.hitOne) && (vehicleFour.x <= this.x + this.hitOne)) ||
                ((vehicleFive.x >= this.x - this.hitOne) && (vehicleFive.x <= this.x + this.hitOne)) ||
                ((vehicleSix.x >= this.x - this.hitOne) && (vehicleSix.x <= this.x + this.hitOne))) {

                this.startingPosition(); 
                this.scoreBoard(); 

            }
          
        } else if (this.y === this.enemyGroundone) { //check player position at road 1 

            if (((vehicleOne.x >= this.x - this.hitOne) && (vehicleOne.x <= this.x + this.hitOne)) ||
                ((vehicleTwo.x >= this.x - this.hitOne) && (vehicleTwo.x <= this.x + this.hitOne)) ||
                ((vehicleThree.x >= this.x - this.hitOne) && (vehicleThree.x <= this.x + this.hitOne))) {

                this.startingPosition(); 
                this.scoreBoard(); 

            }

        }

    }



    startingPosition() {

        this.x = 200;
        this.y = 400;

    }



    scoreBoard() { 

        (this.life === 0 || this.y === this.axisYstart) ? this.finalDisplay() : this.scoreCalculation(); 
       
    }

    
    
    scoreCalculation() {
        

        this.score -= this.scoreDecrement;
        if(this.life === 0) {this.score = 0};

        this.life -= this.lifeDecrement; 
        (this.life === 2) ? this.heart[3].classList.remove("life") : (this.life === 1) ? 
                            this.heart[5].classList.remove("life") : (this.life === 0) ? 
                            this.heart[7].classList.remove("life") : console.log("game is running"); 

        
       

    }


    
    finalDisplay() {
        
        modal.style.display = "block"; 
        this.highScore.innerHTML = this.score; //insert score in popup

        if (this.score === 100) { //display 3 gemstone
            this.gem.innerHTML = this.gemStoneone + this.gemStonetwo + this.gemStonethree;                  
        } else if (this.score === 75) { //display 2 gemstone
            this.gem.innerHTML = this.gemStoneone + this.gemStonetwo;                  
        } else if (this.score === 50) { //display 1 gemstone
            this.gem.innerHTML = this.gemStoneone;                  
        } else {
            this.gem.innerText = 'Sorry, No Gem'; //no gem
        }   
 
        this.check += 1;

        (this.score < 50) ? this.alertmessage.innerText = 'SORRY YOU LOSE' : this.alertmessage.innerText = 'YOU WON !!!';

    }

};




let vehicleOne = new Enemy(100,95,0); //(width,height,indexvalue) of vehicleOne object // 100 => 0
let vehicleTwo = new Enemy(200,80,1); //(width,height,indexvalue) of vehicleTwo object
let vehicleThree = new Enemy(400,90,2); //(width,height,indexvalue) of vehicleThree object
let vehicleFour = new Enemy(100,170,3); //(width,height,indexvalue) of vehicleFour object
let vehicleFive = new Enemy(300,165,4); //(width,height,indexvalue) of vehicleFive object
let vehicleSix = new Enemy(500,170,5); //(width,height,indexvalue) of vehicleSix object
let vehicleSeven = new Enemy(50,265,6); //(width,height,indexvalue) of vehicleSeven object
let vehicleEight = new Enemy(150,320,7); //(width,height,indexvalue) of vehicleEight object
let vehicleNine = new Enemy(250,260,8); //(width,height,indexvalue) of vehicleNine object


let allEnemies = [vehicleOne, vehicleTwo, vehicleThree, vehicleFour, vehicleFive, vehicleSix, vehicleSeven, vehicleEight, vehicleNine];


var player = new Player();



player.playerCollection.forEach(function (players) { 
    players.addEventListener('click', function () { 
        player.sprite = players.getAttribute('src'); 
        modals.style.display = "none"; 
        player.check += 1; 
    });
});



document.addEventListener('keyup', function (e) {

    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);

});



function reLoad() {
    location.reload();

}