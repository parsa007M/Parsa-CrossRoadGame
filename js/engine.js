
  var Engine = (function(global) {

     
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime;

        canvas.width = 505;
        canvas.height = 606;
        doc.body.appendChild(canvas); 

    function main() {
       
        var now = Date.now(), 
            dt = (now - lastTime) / 1000.0;

       
        update(dt); 
        render();

        lastTime = now;

      
        win.requestAnimationFrame(main);
    }

    
    function init() { 

         lastTime = Date.now();
         main(); 
    }

    
    function update(dt) {
        updateEntities(dt);
        player.checkCollisions();
    }

    
    function updateEntities(dt) {
        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });
        player.update();
    }

    
    function render() {
       
        myMusic.play();

        var rowImages = [
                'img/side-way.jpg',   // Top row - block stones
                'img/road-block.png',   // Row 1 of 3 of road
                'img/road-block.png',   // Row 2 of 3 of road
                'img/road-block.png',   // Row 3 of 3 of stone
                'img/grass-block.png',   // Row 1 of 2 of grass
                'img/grass-block.png'    // Row 2 of 2 of grass
            ],
            numRows = 6,
            numCols = 5,
            row, col;

        
        ctx.clearRect(0,0,canvas.width,canvas.height);

        
        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
               
                ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83); // 83 => 81
                
            }
        }

        renderEntities();
    }

    
    function renderEntities() {
       
        allEnemies.forEach(function(enemy) {
            
            enemy.render();
        });

        player.render();
    }

   
  /*   function reset() {
        
    } */

    
    Resources.load([
        'img/side-way.jpg',
        'img/road-block.png',
        'img/grass-block.png',
        'img/car-one.png',
        'img/car-two.png',
        'img/fire-engine.png',
        'img/bus-one.png',
        'img/truck.png',
        'img/bus-three.png',
        'img/auto.png',
        'img/cycle.png',
        'img/ambulance.png',
        'img/char-boy.png',
        'img/char-pink-girl.png',
        'img/char-cat-girl.png',
        'img/char-clever-boy.png',
        'img/char-princess-girl.png'
    ]);
    Resources.onReady(init);

    global.ctx = ctx;


})(this); 

