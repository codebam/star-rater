stars_pub = 3;

function set_stars(stars) {
	stars_pub = stars;
	update_stars_view(stars);
}

function update_stars_view(maxId) {
	i = 1;
	while (i <= maxId) {
		myElementId = 'star-' + i;
		document.getElementById(myElementId).innerHTML = '★';
		i += 1;
	}
	while (i <= 5) {
		myElementId = 'star-' + i;
		document.getElementById(myElementId).innerHTML = '☆';
		i += 1;
	}
}

function submitRating() {
	cleanUp();
	document.getElementById("message").innerHTML = 'Thank you for taking the time to rate!';
}

function cleanUp() {
	i = 1;
	while (i <= 5) { // remove the stars
		var element = document.getElementById("star-" + i);
		element.parentNode.removeChild(element);
		i += 1;
	}
	var element = document.getElementById("button-submit"); // remove submit button
	element.parentNode.removeChild(element);
}
