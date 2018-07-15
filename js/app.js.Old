
	const deckCards= document.querySelector('.deck');
	const list= deckCards.querySelectorAll('li');
	const listOfCards= deckCards.querySelectorAll('i');
	const listOfCardsToArray = Array.apply(null, listOfCards);
	let cardsArray= [];	
	let counteMoves=0;

	
/*
 * Create a list that holds all of the cards
 */

	function creareCardList(){
	for (let i=0; i< listOfCardsToArray.length; i++){
		cardsArray.push(listOfCardsToArray[i].className);
		}
	}	
	
	creareCardList();
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
 
 function displayCards(){
	shuffle(cardsArray);
	for (let i=0; i< listOfCards.length; i++){
		listOfCards[i].className= cardsArray[i];
	}
 }
 
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

document.onreadystatechange= function(e){
	if (document.readyState === 'interactive'){
		cardsReset();
		displayCards();
	}
};

function cardsReset(){
	for (let i=0; i < list.length; i++){
			list[i].classList.remove('match');
			list[i].classList.remove('show');
			list[i].classList.remove('open');
	}
}

function open (card){
	card.classList.add('open', 'show');
}
function currentlyOpen (card){
	card.classList.add('open', 'show', 'currentOpen');
}

function compareCards(){
	const list2= deckCards.querySelectorAll('li.currentOpen > i');
	const array2=[];
	const currentCard=document.querySelectorAll('.currentOpen');
	const currentCard2Array = Array.apply(null, currentCard);
	for (let a=0; a< list2.length; a++){
		array2.push (list2[a]);
	}
	if (array2[0].className!=array2[1].className)
	{
		currentCard[0].classList.remove('open' ,'show','currentOpen');
		currentCard[1].classList.remove('open' ,'show','currentOpen');	
	}
	else{
		currentCard[0].classList.remove('currentOpen');
		currentCard[1].classList.remove('currentOpen');
		
	}
}

function move (){
		counteMoves++;
		displayMoves(counteMoves)
		score(counteMoves);
	}

function displayMoves(getCounter){
	if (getCounter% 2=== 0)
	document.querySelector('.moves').innerHTML=counteMoves/2;
}

function score(){
	const starsCount=document.querySelectorAll('.fa-star');
	if (counteMoves>=64)
	{
		for (let i=0; i<2; i++){
			starsCount[i].classList.remove('fa','fa-star');
			starsCount[i].classList.add('far', 'fa-star');
		}
		
	}
	else if (counteMoves>10 && counteMoves<64){
		for (let i=0; i<1; i++){
			starsCount[i].classList.remove('fa-star');
			starsCount[i].classList.add('fa-star-o');
		}
	}
	
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
/*const cardsClass= document.querySelectorAll('.card');
cardsClass.forEach (function(item){
	item.onclick= function (e){
		  e=this.querySelector('i').className;
		  open(e);
	}
});
*/


list.forEach (function(item){
	item.onclick= function (e){	
		 const a= this;
		 currentlyOpen(a);
		move();
		 if (document.querySelectorAll('.currentOpen').length===2){
			setTimeout(function(){ compareCards(); }, 500);
		 }
		}
	});

/*
list.forEach (function(item){
	item.onclick= function (e){	
		 const a= this;
		 if (deckCards.querySelectorAll('.open').length<2){
		 open(a);		
		 }
		 else {
			 const a= deckCards.getElementsByClassName('open');
			 const aToArray = Array.apply(null, a);
			 alert (a[0]);
		 }
	}
});
*/