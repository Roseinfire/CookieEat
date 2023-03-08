
   class block {
       constructor(type, dir=null, position=[0, 0]) {
           let w = __width__
           let div = __div__
           const that = this    
           this.x = position[0]
           this.y = position[1]
           this.dir = dir
           this.type = type
           this.accurateFill = function(chain=function() {}) {
               if(game == true) { 
                   that.executeAction(function(a, b, width, height) {
                       ctx.fillRect(a, b, width, height)
                       }, chain)
                   }; return Array.from([that.x, that.y])
               }
           this.accurateClear = function(dir=that.dir) {
               that.dir = dir
               if(game == true) { 
                   that.executeAction(function(a, b, width, height) {
                       ctx.clearRect(a, b, width, height)
                       })
                   }; return Array.from([that.x, that.y])
               }
           this.stroke = function(color="black") {
               if(!color) { ctx.fillRect(that.x * w, that.y * w, w, w) }
               else if(color && color.tagName == "IMG") { ctx.drawImage(color, that.x * w, that.y * w, w, w) }
               else if(color) {
                   w = __width__
                   var style = ctx.fillStyle
                   ctx.fillStyle = color
                   ctx.fillRect(that.x * w, that.y * w, w, w)
                   ctx.fillStyle = style
                   }; return that
               }
           this.finalStroke = function() { 
               window.__final_interval__ = setInterval(function() { that.stroke(__final_color__ ) }, __final_speed__)
               }
           this.executeAction = function(drawer=function() {}, chain=function(){}) {
               function action(progress) {
                   setTimeout(function() {
                       if(progress <= div) { 
                           switch(that.dir) {
                               case "right":
                               drawer(that.x * w, that.y * w, w * progress/div, w); break
                               case "left": 
                               drawer((that.x +1) * w, that.y * w, -1 * w * progress/div, w); break
                               case "up":
                               drawer(that.x * w, (that.y + 1) * w, w, -1* w * progress/div); break
                               case "down":
                               drawer(that.x * w, that.y * w, w,  w * progress/div)
                               }; action(progress+1)
                           } else { chain() } 
                       }, __speed__)
                   }; action(1)
               }
           }
       };

   function createBlock(type, dir, pos) {
       return eval(`window.a${toC(pos[0])}b${toC(pos[1])} = new block("${type}", "${dir}", pos)`)  
       };

   function getBlock(pos) {  
       try { return eval(`a${toC(pos[0])}b${pos[1]}`) } catch  { return new block(null) }
       };

   