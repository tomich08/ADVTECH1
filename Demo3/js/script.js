var username = "Fred";

document.onclick = 
	function(evt){
		makeOneCircle(evt);
	}

	function makeOneCircle(evt){
		evt= (evt||event)

		var newc = document.createElement("div");
		document.appendChild(newc);

	}