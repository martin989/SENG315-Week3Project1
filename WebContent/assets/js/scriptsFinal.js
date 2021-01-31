var deckID = 0;
var currentCard = 0;
//JQuery
$(document).ready(function() {
	if (deckID == 0) {
		getNewDeck();
	}
});

function getNewDeck() {
	$.ajax({
		url: "https://deckofcardsapi.com/api/deck/new/",
		type: 'GET',
		dataType: "json",
		contentType: "application/json",
	}).fail(function(response) {
	}).done(function(response) {
		deckID = response.deck_id;
	});
}

function buttonDealClick() {
	$.ajax({
		url: "https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=1",
		type: 'GET',
		dataType: "json",
		contentType: "application/json",
	}).fail(function(response) {
	}).done(function(response) {
		var photo =
			"<div class='column'>" +
				" <img src='" + response.cards[0].image + "' alt='Forest' style='width:50%'> " +
			"</div>"
		$("#cardList").append(photo);
	});

}

function buttonShuffleClick() {
	$.ajax({
		url: "https://deckofcardsapi.com/api/deck/" + deckID + "/shuffle/",
		type: 'GET',
		dataType: "json",
		contentType: "application/json",
	}).fail(function(response) {
	}).done(function(response) {
	});

}

function buttonResetClick() {
	location.reload();
}

