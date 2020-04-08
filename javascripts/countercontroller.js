setTimeout(function () {
    document.getElementById("logopart1").classList.add("flickereffect")
    setTimeout(function () {
        document.getElementById("logopart2").classList.add("fadeeffect")
        setTimeout(function () {
            document.getElementById("scrollarrow").style.display = "block";
            document.getElementById("thankyou1").classList.add("fadeeffect")
			setTimeout(function(){
				document.getElementById("thankyou2").classList.add("fadeeffect")
				setTimeout(function(){
					document.getElementById("thankyou3").classList.add("fadeeffect")
				},1100)
			},600)
        }, 100)
    }, 1000)
}, 350)