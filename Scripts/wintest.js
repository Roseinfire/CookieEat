   let wintest = {
       commands: new Array(
           { num: __size__-4, action: "ArrowDown" },
           { num: __size__-__def_x__, action: "ArrowLeft" },
           { num: 0, action: "ArrowLeft" },
           { num: __size__-4, action: "ArrowUp" },
           { num: 0, action: "ArrowRight" }
       ),
       linemoves: 0,
       totalmoves: 0,
       move: function() {
           var line = wintest.linemoves++
           var com = wintest.commands[wintest.totalmoves]
           if(com.num == line) {
               if(wintest.totalmoves++ >= wintest.commands.length-1) { wintest.totalmoves = 2 }
               wintest.linemoves = 0
               controlSnake(com.action)
               }
           },
       };

   for(var i = 0; i < __size__/2-2; i++) {
       wintest.commands.push(
           { num: __size__-3, action: "ArrowUp" },
           { num: 0, action: "ArrowLeft" },
           { num: __size__-3, action: "ArrowUp" },
           { num: 0, action: "ArrowRight" },
       )
       };

   wintest.commands.push(
       { num: __size__-3, action: "ArrowUp" },
       { num: 0, action: "ArrowLeft" },
   )
   
   wintest.commands.push(
       { num: __size__-2, action: "ArrowDown" },
       { num: __size__-2, action: "ArrowRight" },
       { num: __size__-2, action: "ArrowUp" },
       { num: 0, action: "ArrowLeft" }
   )