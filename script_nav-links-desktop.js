// Add active class to the current button (highlight it)
var header = document.getElementById("homepage-header__nav-links");
var btns = header.getElementsByClassName("link");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("actives");
		current[0].className = current[0].className.replace(" actives", "");
		this.className += " actives";
	});
}

