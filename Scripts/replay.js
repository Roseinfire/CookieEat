function replay(begin) {
       (window.__final_interval__ && !__save_final__) ? window.clearInterval(__final_interval__) : null
       ctx.clearRect(0,0,canvas.width, canvas.height)
       elemid("T").innerHTML = (`Time: ${__time__ = 0}`)
       elemid("S").innerHTML = (`Score: ${__score__ = 0}`)
       elemid("R").innerHTML = (`Record: ${__record__}`)
       x = __def_x__
       y = __def_y__
       createBlock("snake", "right", __def_snake__[0])
       createBlock("snake", "right", __def_snake__[1])
       createBlock("snake", "right", __def_snake__[2])
       createBlock("snake", "right", [__def_snake__[0][0] + 1, __def_snake__[0][1]])
       vector = __def_vect__
       invector = __def_invect__
       snake = Array.from(__def_snake__)
       __overg__.style.display = "none"
       let stoper = elemid("stoper")
       stoper.innerHTML == "pause"
       createBlock("cookie", null, __def_cookie__).stroke(__cookie__)
       strokeSnake("all")
       GameOver = false
       };

   