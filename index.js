function changeColor() {
	var hex_numbers = ["1", "2", "3", "4", "5", "6", "7"];
	var hex_code = "";
	for (let i = 0; i < 6; i++) {
		var random_index = Math.floor(Math.random() * hex_numbers.length)
		hex_code += hex_numbers[random_index];
	}


	document.getElementsByTagName("body")[0].style.background="#"+hex_code
}