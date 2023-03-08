  function strokeSnake(a) {
       var start = (a=="all") ? 0 : 1
       for(var i = start; i< snake.length; i++) { 
           var a = (i < 230) ? i : 230
           getBlock(snake[i]).stroke(`rgb(${a}, ${a}, ${a})`)
           }
       };

   let steps = 0;
   function next() {
       if(__bot__.move) { __bot__.move() }
       steps++
       if(game == true) {
           switch(vector = invector) {
               case "right": x += 1; break
               case "left": x -= 1; break
               case "up": y -= 1; break
               case "down": y += 1; break
               }
           if(getBlock([x, y]).type != "cookie") {
               var tale = getBlock(snake[snake.length-1])
               Tale = tale.accurateClear(getBlock(snake[snake.length-2]).dir)
               }
           else { eatCookie(); generateCookies(__apmove__) };
           createBlock("snake", vector, [x, y]).accurateFill(function() { 
               Tale = Array.from([null, null]); next()
               })
           let copyS = Array.from(snake)
           snake[0] = Array.from([x,y])
           for(var i = 1; i < snake.length; i++) {
               snake[i] = Array.from(copyS[i-1])
               }; strokeSnake()
           if(__immortality__ == false) {
               if(isItSnake(x, y, 1) == true) { gameOver() }
               if(x > __size__) { gameOver() }
               if(y > __size__) { gameOver() }
               if(y <= 0) {  gameOver() }
               if(x <= 0) {  gameOver() }
               }
           if(steps % __cookie_rate__ == 0) { generateCookies(__apmove__) }
           }
       };

   function isItSnake(a, b, start=0) {
       var check = `${toC(a)}*${toC(b)}`
       for(var i = start; i < snake.length; i++) {
           if(`${toC(snake[i][0])}*${toC(snake[i][1])}` == check) { return true } 
           }; return false
       };

   