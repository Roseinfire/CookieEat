  
   class bot {
       constructor(commands=[], repeatfrom=0) {
           const that = this
           this.commands = commands
           this.linemoves = 0
           this.totalmoves = 0
           this.repeatfrom = repeatfrom
           this.move = function() {
               var line = that.linemoves++
               var com = that.commands[that.totalmoves]
               if(com.num == line) {
                   if(that.totalmoves++ >= that.commands.length-1) { that.totalmoves = that.repeatfrom }
                   that.linemoves = 0
                   controlSnake(com.action)
                   }
               }
           }
       };

   let strategy = [
           { num: __size__-4, action: "ArrowDown" },
           { num: __size__-__def_x__, action: "ArrowLeft" },
           { num: 0, action: "ArrowLeft" },
           { num: __size__-4, action: "ArrowUp" },
           { num: 0, action: "ArrowRight" }
           ]   

   for(var i = 0; i < __size__/2-2; i++) {
       strategy.push(
           { num: __size__-3, action: "ArrowUp" },
           { num: 0, action: "ArrowLeft" },
           { num: __size__-3, action: "ArrowUp" },
           { num: 0, action: "ArrowRight" },
       )
   };

   strategy.push(
       { num: __size__-3, action: "ArrowUp" },
       { num: 0, action: "ArrowLeft" },
   )
   
   strategy.push(
       { num: __size__-2, action: "ArrowDown" },
       { num: __size__-2, action: "ArrowRight" },
       { num: __size__-2, action: "ArrowUp" },
       { num: 0, action: "ArrowLeft" }
   )


   let wintest = new bot(strategy, 2)

   let rounder = new bot([
           { num: 2, action: "ArrowDown" },
           { num: 2, action: "ArrowLeft" },
           { num: 2, action: "ArrowUp" },
           { num: 2, action: "ArrowRight" }]
     )