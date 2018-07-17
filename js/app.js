
const deckCards= document.querySelector('.deck');
const list= deckCards.querySelectorAll('li');
const listOfCards= deckCards.querySelectorAll('i');
const listOfCardsToArray = Array.apply(null, listOfCards);
let cardsArray= [];	
let counteMoves=0;


/*
	* Create a list that holds all of the cards
*/

function createCardList(){
	for (let i=0; i< listOfCardsToArray.length; i++){
		cardsArray.push(listOfCardsToArray[i].className);
	}
}	

createCardList();
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



document.querySelector('.restart').addEventListener('click', function (e){
	cardsReset();
	displayCards();
})

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

function openCard (card){
	card.classList.add('open', 'show');
	
	complete(beginTime);
}

function currentlyOpen (card){
	card.classList.add('currentOpen');
	if (document.querySelectorAll('.currentOpen').length==2){
		setTimeout(matchCards, 500);
	};
}


function displayMoves(){
	if (counteMoves%2===0){
		document.querySelector('.moves').innerHTML=counteMoves/2;
	}
	
}

function score(){
	const countMovesTransform= counteMoves/2;	
	const starsCount=document.querySelectorAll('.stars .fa-star');
	if (countMovesTransform===12){
		starsCount[0].classList.remove('fa-star');
		starsCount[0].classList.add('fa-star-o');
	}
	else if (countMovesTransform === 20){
		starsCount[0].classList.remove('fa-star');
		starsCount[0].classList.add('fa-star-o');
	}
}

let funArr=[];
function checkForOpenCurrent(check){
	alert ('Im in '+ check);
	if (check.querySelector('i').classList.contains('openCurrent')=== false){
	check.querySelector('i').classList.add('openCurrent');
	funArr.push(check.querySelector('i').classList);
	}
	}
	
	let arr=[];
	let counter=0;
	let takeTime=0;
	let beginTime=Math.round(new Date().getTime()/1000);
	/*Add Event listener to any click but only if the class is a card than add the event click to an array*/
	
	document.body.addEventListener('click', function (event) {
	if (event.target.classList.contains('card') &&  event.target.classList.contains('open')===false ) {
	if (takeTime===0){
	beginTime= Math.round(new Date().getTime()/1000);
	takeTime++;
	}
	counteMoves++;
	if (counter<2){
	const getCard = event.target;
	arr.push(getCard);
	counter++;
	openCard(getCard);
	currentlyOpen(getCard);			
	if (arr[0]===arr[1]){
	/*Check it is not the same l beeing clicked*/
	counter--;
	arr.splice(1,1);
	}
	}
	}
	event.preventDefault()
	});
	
	function matchCards(){
	
	const item1= arr[0].querySelector('i').classList[1];
	const item2= arr[1].querySelector('i').classList[1];
	
	if (item1===item2){
	for (let i=0; i<arr.length; i++){
	arr[i].classList.remove('currentOpen');	
	arr[i].classList.add('animated', 'shake');
	}
	}
	else{
	
	for (let i=0; i<arr.length; i++){
	arr[i].classList.remove('currentOpen','open', 'show');	
	}
	}
	counter=0;
	arr=[];
	displayMoves();
	score();
	}
	
	let innerHTMLMessage = '';
	
	
	function complete(beginTime) {
	let listLength=document.querySelectorAll('.open').length;
	if (listLength===16){
	const time= Math.round(new Date().getTime()/1000);
	const endTime= time-beginTime;
	innerHTMLMessage= endTime+' seconds';
	if (endTime>=60){
	innerHTMLMessage= Math.round(endTime/60) +' minutes';
	}
	CompletePopUp();
	}
	}
	
	function CompletePopUp() {
	const modal = document.getElementById('myModal');
	modal.style.display = "block";
	const getStars= document.querySelector('.stars'); 
	const getStarsCopy= getStars.cloneNode(true);
	const modCon=document.querySelector('.modCon');
	modCon.innerHTML= 'Congratulation, you won! <br> Your final time is: '+innerHTMLMessage;
	document.querySelector('.starsPopUp').appendChild(getStarsCopy);
	const span = document.getElementsByClassName("close")[0];
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	modal.style.display = "none";
	location.reload();
	}
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	if (event.target == modal) {
	modal.style.display = "none";
	location.reload();	
	}
	}
	}	