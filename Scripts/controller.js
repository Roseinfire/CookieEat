   document.onkeydown = function(e) { controlSnake(e.key, e.repeat) }

   function controlSnake(key, repeat) {
       document.getElementsByTagName('button')[0].blur()
       if(key == ' ' && !repeat) { 
            if(!GameOver) { stopGame() }
            else if(!game) { replay() }
       }
       if(key == 'ArrowRight') { 
           if(vector != 'left') { 
               invector = 'right'; getBlock(snake[0][0],snake[0][1]).B = 'right'
               }
           }
       if(key == 'ArrowLeft') {
           if(vector != 'right') {
               invector = 'left'; getBlock(snake[0][0],snake[0][1]).B = 'left'
               }
           }
       if(key == 'ArrowDown') {
           if(vector != 'up') { 
               invector = 'down'; getBlock(snake[0][0],snake[0][1]).B = 'down'
               } 
           }
       if(key == 'ArrowUp') { 
           if(vector != 'down') {
               invector = 'up'; getBlock(snake[0][0],snake[0][1]).B = 'up'
               } 
           }
       };

   function stopGame() {
       let stoper = elemid('stoper')
       if(game == true || GameOver) { 
           stoper.innerHTML = "play"
           game = false
           if(window.timer) { 
               window.clearInterval(timer); window.timer=null
               }
           }
       else if(!game) { 
           stoper.innerHTML = "pause"; game=true; next()
           window.timer = setInterval(function() { 
               elemid("T").innerHTML = "Time: " + ((__time__++)/10).toFixed(1)
               }, 100)
           }
       };

   function gameEnd(mess="") {
       game = false
       if(!gameEnd.time) {
           if(!mess) {
               alert(`Congrats! That was a great game..`)
               gameEnd(" Reload to play again!")
               } 
           else {
               gameEnd.time = true
               alert(" Reload to play again!")
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
       stopGame()
       GameOver=true
       elemid("overg").style.display = "block"
       getBlock(snake[0]).finalStroke()
       };

   