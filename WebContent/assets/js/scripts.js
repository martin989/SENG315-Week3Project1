var deckID = 0;
var pileID = 0;
//JQuery
$(document).ready(function(){

});

function buttonClick(){
	var e = document.getElementById("option");
	var strOption = e.value;
	
	var urlVar ="";
	var typeVar ="";
	var datatypeVar ="json";
	var contentTypeVar ="application/json";

	switch(strOption) {
  		case "1":
    		urlVar ="https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
			typeVar ="GET";
    		break;
  		case "2":
     		urlVar ="https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=2";
			typeVar ="GET";  
    		break;
		case "3":
     		urlVar ="https://deckofcardsapi.com/api/deck/" + deckID + "/shuffle/";
			typeVar ="GET";  
    		break;
		case "4":
     		urlVar ="https://deckofcardsapi.com/api/deck/new/";
			typeVar ="GET";  
    		break;
		case "5":
     		urlVar ="https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH";
			typeVar ="GET";  
    		break;
		case "6":
     		urlVar ="https://deckofcardsapi.com/api/deck/" + deckID + "/pile/" + pileID + "/add/?cards=AS,2S";
			typeVar ="GET";  
    		break;
		case "7":
     		urlVar ="https://deckofcardsapi.com/api/deck/" + deckID + "/pile/" + pileID + "/shuffle/";
			typeVar ="GET";  
    		break;
		case "8":
     		urlVar ="https://deckofcardsapi.com/api/deck/" + deckID + "/pile/" + pileID + "/list/";
			typeVar ="GET";  
    		break;
  		default:

	}

	$.ajax({
		url: urlVar,
		type: typeVar,
		dataType : datatypeVar,
        contentType: contentTypeVar,
	}).fail(function(response) {
		console.log("Error in syntax");
		document.getElementById("response").value = "Error in syntax";
    }).done(function(response) {
    	deckID = response.deck_id;
		
		document.getElementById('response').value = response.deck_id;
		//console.log(document.getElementById('response'));
		console.log(response.cards[0].image);
	});
}


