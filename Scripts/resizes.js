   window.addEventListener("completion", function() {
       __cookie__ = elemid("littlecookie")
       __overg__ = elemid("overg")
       __overg__.onclick = function() { replay(true) }
       __overg__.ondragstart = function() { return false }
       document.onmousemove = function(e) { 
           __overg__.style.marginLeft = (e.pageX - __overg__.width/2) + "px"
           __overg__.style.marginTop = (e.pageY - __overg__.height/2) + "px"
           }
           replay()
           build()       
           createBlock("cookie", null, __def_cookie__).stroke(__cookie__)
           strokeSnake("all")
       })

   window.addEventListener("resize", build)
   
   function build(e) {
       if(!e) {
           __width__ = Math.floor((innerHeight-30)/__height__)
           canvas.width = (__size__ + __padding__) * __width__
           canvas.height = (__size__ + __padding__) * __width__
       }
       var form = elemid("form")
       form.style.width = (__size__) * __width__ -2 + "px"
       form.style.height = (__size__) * __width__ -2 + "px"
       let delta = 20
       form.style.marginLeft = (innerWidth - form.offsetWidth)/2 - delta  + "px"
       form.style.marginTop = (innerHeight - form.offsetWidth)/2 + "px"
       canvas.style.marginLeft = (innerWidth - canvas.width)/2 - delta + "px"
       canvas.style.marginTop = (innerHeight - canvas.width)/2 + "px"
       var sk = elemid("sk")
       sk.style.display = "block"
       sk.style.marginTop=canvas.offsetTop+__width__ + "px"
       sk.style.marginLeft=(innerWidth/2+canvas.width/2) + "px"
       var overg = elemid("overg")
       overg.width = emWidth
       overg.height = emWidth
       overg.style.marginLeft = (innerWidth - overg.width)/2 + "px"
       overg.style.marginTop = (innerHeight - overg.height)/2 + "px"
       };
 

   