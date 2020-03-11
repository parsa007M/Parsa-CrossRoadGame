
# Project Title
Cross the Roads Game

# Directory structure

Cross the Roads Game project folder contains following sub-folders:

<!-- CSS -->
1. Create folder with the name "css"
1.1. Use Bootstrap 4.3.1
1.2. Use FontAwesome in Bootstrap

<!-- IMG -->
2. Create folder with the name "img"
2.1. Add your images inside the this folder

<!-- JS -->
3. Create folder with the name "js"
  3.1. "resources.js" - image loading utility
  3.2. "engine.js" - Game loop Engine
  3.3. "app.js" - custom javascript code written in js
  3.4. "sound.js" - custom javascript code for audio written in js

<!-- AUDIO -->
4. Create folder with the name "sound"
  4.1. Contains audio file used in the project

<!-- HTML -->
5. Create a file with the name "index.html". Contains HTML5 content
 

# Project Description
  
This Cross the Roads Game is based on player and vehicle objects. Vehicles are moving at random speed on the road. 
The player needs to cross the road without crashing with number of vehicles. He/she losses his/her life when the player 
crash with the vehicles.Player will win when he successfully cross the road.


# Code Overview

<!-- Part 1 : Create a canvas: -->

In this project we use "Canvas" to build the game.
The canvas element is part of HTML5 and allows for dynamic rendering of 2D shapes and bitmap images.

<!-- Part 2 : app.js -->

This project contains two classes:
  1. Enemy class
  2. Player class

1. Methods in Enemy Class:
  1.1. update() method is used to update vehicle position and speed.
  1.2. render() method is used to render vehicle inside the canvas.

2. Methods in Player Class:

  1.1. update() method is used for player selection.
  1.2. render() method is used to render player.
  1.3. handleInput() method is used to handle keboard actions taken by the player.
  1.4. checkCollisions() method is used to check Enemy - player Collision.
  1.5. scoreBoard(), scoreCalculation() method is used to calculate score.
  1.6. startingPosition() method is used to reset the player position when collision occurs.
  1.7. finalDisplay() method is used to display final score.


3. Global Method:
3.1. reLoad() method is used to reload the entire game.

4. Event Listeners:
  4.1. 'Keyup' listener is used for player movement.
  4.2. 'click' listener is used to select player to play the game.

5. Game Control : keyBoard
  5.1. &larr;&uarr;&rarr;&darr; Arrow keys are used to Move the player. https://www.toptal.com/designers/htmlarrows/
  5.2. 'Keyup' EventListener and handleInput() method in app.js file are used for player Movement.

6. Open sound.js file
6.1. It runs music audio for the game.

# Game Parts information

  1. Player selection
  2. Move player using Keyboard
  3. Vehicle Movement
  4. Player and Enemy collision
  5. Display remaining life
  6. Losing life
  7. Final score board
  8. Running Game 

# Screenshots
 
1. state 1 : Player selection - /home/alper/Desktop/CrossRoadGame-02032020/CrossRoadGame/img/player-selection.JPG   
2. state 2 : Move player using Keyboard - /home/alper/Desktop/CrossRoadGame-02032020/CrossRoadGame/img/player-movement.JPG
3. state 3 : Vehicles Moves at random speed - /home/alper/Desktop/CrossRoadGame-02032020/CrossRoadGame/img/moving-vehicle.JPG
4. state 4 : Player and Enemy crash - /home/alper/Desktop/CrossRoadGame-02032020/CrossRoadGame/img/collision.JPG
5. state 5 : Display remaining life - /home/alper/Desktop/CrossRoadGame-02032020/CrossRoadGame/img/life.JPG
6. state 6 : Losing life displays popup with final score - /home/alper/Desktop/CrossRoadGame-02032020/CrossRoadGame/img/lose.JPG
7. state 7 : Winning game displays popup with final score and gem - /home/alper/Desktop/CrossRoadGame-02032020/CrossRoadGame/img/winning.JPG
8. state 8 : Running Game - /home/alper/Desktop/CrossRoadGame-02032020/CrossRoadGame/img/running game.JPG

# Frameworks used

1. Bootstrap Framework
2. Fontawesome for Bootstrap

# Feature Tasks for DCI FbW10 Students

  1. List of features ready for future development
  2. Increse the size of the game display
  3. Adding collectable objects in the game
  4. Add newly designed game levels in water
  5. Adding real time user experience





