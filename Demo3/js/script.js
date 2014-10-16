var username = "Fred";

//languages offer other useful events than onclick

document.onmousemove = 
	function(evt){
		makeOneCircle(evt);
	}

	function makeOneCircle(evt){
		evt = (evt||event)
		//makes all browsers understand the event
		//make a new circle
		var newc = document.createElement("div");
		//set location of the new div to where the mouse is
		newc.style.left = evt.clientX+"px";
		newc.style.top = evt.clientY+"px";
		//add "body" below
		document.body.appendChild(newc);

	}