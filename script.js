const cardsColor = ["red", "red", "green", "green", "blue", "blue", "brown", 
"brown", "yellow", "yellow", "gray", "gray", "cadetblue", "cadetblue", "violet", 
"violet"];


let cards = document.querySelectorAll("div");

cards = [...cards];
console.log(cards);

const start = new Date().getTime();

let activeCard = "";

const activeCards = [];

const gamePairs = 8;

let gameResult = 0;



const clickCard = function() {
	activeCard = this;
	activeCard.classList.remove("hidden");
	if(activeCards.length === 0) {
		activeCards[0] = activeCard;
		return;
	}
	else {
		cards.forEach(card =>{
			card.removeEventListener('click', clickCard)
		})
		activeCards[1] = activeCard;

		if(activeCards[0].className == activeCards [1].className) {
			console.log("dobrze w chuj")
			activeCards.forEach(card => card.classList.add("off"))
			gameResult ++
			if(gamePairs === gameResult) {
				alert("KUNIEC");
}
		}
		else {
			console.log("źle w chuj")
			activeCards.forEach(card => card.classList.add("hidden"))
		}
		activeCard = "";
		activeCards.length = 0;
		cards.forEach(card => card.addEventListener('click', clickCard))
	}
};

const init = function() {
	cards.forEach((card) =>{
		const position = Math.floor(Math.random() *
		cardsColor.length);
		card.classList.add(cardsColor[position]);
		cardsColor.splice(position,1);
	})
	setTimeout(function(){
		cards.forEach((card) =>{
			card.classList.add("hidden")
			card.addEventListener('click', clickCard)

		})
	},2000)
}

init();