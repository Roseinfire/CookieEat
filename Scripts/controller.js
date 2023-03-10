   document.onkeydown = function(e) { controlSnake(e.key, e.repeat) };

   function controlSnake(key, repeat) {
       document.getElementsByTagName('button')[0].blur()
       if(key == ' ' && !repeat) { 
           if(!GameOver) { stopGame() }
           else if(!game) { replay() }
           }
       if(key == 'ArrowRight') { 
           if(vector != 'left') { 
               invector = 'right';
               }
           }
       if(key == 'ArrowLeft') {
           if(vector != 'right') {
               invector = 'left';
               }
           }
       if(key == 'ArrowDown') {
           if(vector != 'up') { 
               invector = 'down';
               } 
           }
       if(key == 'ArrowUp') { 
           if(vector != 'down') {
               invector = 'up';
               } 
           }
       };

   function stopGame(gameover) {
       var head = getBlock(snake[0])
       let stoper = elemid('stoper')
       if( ( gameover ) || (game && stoper.innerHTML == " pause ") ) {
           stoper.innerHTML = " play "
           game = false;
           }
       else if(!game && !gameover && stoper.innerHTML == " play ") {
           stoper.innerHTML = " pause "; game=true; next()
           }
       };

   function gameEnd(mess="") {
       game = false
       if(!gameEnd.time) {
           if(!mess) {
               alert(`Congrats! That was a great game..`)
               gameEnd(`Thanks for playing !!!`)
               } 
           else {
               gameEnd.time = true
               alert(mess)
               gameEnd()
               }
           }
       else {
           setTimeout(function() {
               var a = document.createElement("a")
               a.href = document.URL
               a.click()
               }, 10)
           }
       };

   function gameOver() {
       stopGame(GameOver=true)
       elemid("overg").style.display = "block"
       getBlock(snake[0]).finalStroke()
       };

   