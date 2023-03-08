   const canvas = document.getElementById("tcanv")
   const ctx = canvas.getContext("2d")
   const emWidth = 0.28 * innerHeight
   const __immortality__ = false
   const __size__ = 8
   const __padding__ = 2
   const __speed__ = 8
   const __div__ = 16
   const __def_x__ = 4
   const __def_y__ = 2
   const __def_vect__ = "right"
   const __def_invect__ = "right"
   const __def_score__ = 0
   const __def_time__ = 0
   const __cookie_rate__ = NaN
   const __apmove__ = 1
   const __final_speed__ = 250
   const __final_color__ = "rgba(255,161,189,1)"
   const __save_final__ = false
   const __def_cookie__ = [__def_x__+3, __def_y__]
   const __def_snake__ = [[__def_x__, __def_y__], [__def_x__-1, __def_y__], [__def_x__-2, __def_y__]]
   
   let __width__ = undefined // defines via __height__
   let __height__ = __size__ + __padding__
   let __record__ = 0
   let __bot__ = { };
   let __overg__ = new Image()
   let __cookie__= new Image()
   
   var __score__,  __time__, x, y, vector, invector
   
   let snake, Tale
   
   var game = false
   var GameOver = false
   
   function toC(n) { 
       if(n < 0) {
           var f = n.toString(); var F = ""
           for(var i = 1; i < f.length; i++) { F = F + f[i] }
           return "c" + F
           } 
       else { return n } 
       };

   function elemid(id) {
       return document.getElementById(id)
       };

   