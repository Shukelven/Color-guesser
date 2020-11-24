let colors = [];
let selectedColor;
let numberOfSquares = 6;

let header = document.querySelector("#header");
let squares = document.querySelectorAll(".square");
let displayColor = document.querySelector("#display-color");
let newColorsBtn = document.querySelector("#new-colors");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");
let stripeMessage = document.querySelector("#stripe-message");

SetUpSquares(numberOfSquares);

squares.forEach((square) => {
	square.addEventListener("click", (target) => {
		if(event.target.style.backgroundColor != selectedColor) {
			//"fade" if incorrect selection
			event.target.style.backgroundColor = "#637373";
			stripeMessage.textContent = "Try again";
		} else {
			for (let i = 0; i < squares.length; i++) {
				//change all squares to the correct color
				squares[i].style.backgroundColor = selectedColor;
			}
			//change header to correct color
			header.style.backgroundColor = selectedColor;
			stripeMessage.textContent = "Correct!";
			newColorsBtn.textContent = "Play Again?";
		}
	})
})

newColorsBtn.addEventListener("click", () => {
	SetUpSquares(numberOfSquares);
})

easyBtn.addEventListener("click", () => {
	hardBtn.classList.remove("active");
	easyBtn.classList.add("active");
	numberOfSquares = 3;
	SetUpSquares(numberOfSquares);
})

hardBtn.addEventListener("click", () => {
	easyBtn.classList.remove("active");
	hardBtn.classList.add("active");
	numberOfSquares = 6;
	SetUpSquares(numberOfSquares);
})

function GenerateRandomNumber() {
	//generate random number between 0 and 255
	let rand = Math.floor(Math.random() * 256);
	return rand; 
}

function SetUpSquares(numOfSquares) {
	colors = [];
	header.style.backgroundColor = "#679b9b";
	stripeMessage.textContent = "";
	newColorsBtn.textContent = "New Colors";

	for(let i = 0; i < numOfSquares; i++) {
		//asign random color to each square
		let colorString = `rgb(${GenerateRandomNumber()}, ${GenerateRandomNumber()}, ${GenerateRandomNumber()})`;
		colors.push(colorString);
		squares[i].style.backgroundColor = colorString;
	}

	for(let i = 0; i < squares.length; i++) {
		if(squares[i].style.backgroundColor == colors[i]) {
			//if color of the current square is in the colors array, display it
			squares[i].style.display = "block";
		} else {
			//if color of the current square is not in the colors array, hide it
			squares[i].style.display = "none";
		}
	}
	//select a new color
	selectedColor = colors[Math.floor(Math.random() * colors.length)];
	//display new color on header
	displayColor.textContent = selectedColor;
}