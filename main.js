function getRandomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	var randomcolor = `rgb(${r}, ${g}, ${b})`;
	return randomcolor;
}

document.addEventListener("DOMContentLoaded", function () {
	console.log(
		"DOMContentLoaded - event that fires after html has fully loaded for manipulation"
	);
	const button = document.getElementById("change-color-btn");
	const coloBox = document.getElementById("color-box");

	button.addEventListener("click", function () {
		var randomColor = getRandomColor();
		coloBox.style.backgroundColor = randomColor;
	});
});
