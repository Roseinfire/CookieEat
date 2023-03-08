   
   function generateCookies(quantity) {
       for(var i = 0; i < quantity; i++) {  createCookie() }
       };

   function createCookie() {
       let places = new Array()
       for(var i = 1; i <= __size__; i++) {
           for(var e = 1; e <= __size__; e++) {
               (function(a, b) {
                   if(!isItSnake(a, b) && !(Tale[0] == a && Tale[1] == b) && !( a == x  && b == y) ) {
                       /*
                          Expression (a != x && b != y) is not equal to !( a == x  && b == y)
                          and logical mistake causes multiple errors. 
                       */
                       places.push(Array.from([a, b]))
                       }
                   })(i, e)
               }
           }
       if(places.length) {
           var randomField = places[ Math.floor(Math.random()*(places.length)) ]
           createBlock("cookie", null, randomField).stroke(__cookie__)
           } 
       else { gameEnd() }
       };

   function eatCookie() {
       snake[snake.length] = new Array()
       snake[snake.length - 1] = Array.from(snake[snake.length-1])
       if(__score__++ >= __record__) {  __record__ = __score__ }
       elemid("R").innerHTML = `Record: ${__record__}`
       elemid("S").innerHTML = `Score: ${__score__}`
       };

   