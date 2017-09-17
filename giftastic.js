//Starting array

var topics = [
	"Judo",
	"BJJ",
	"muay thai",
	"freestyle wrestling",
	"jiu-jitsu",
	"boxing"
]

$(document).ready(function(){
//Functions

// Function to create buttons from array
function displayButtons() { 

	for (var i = 0; i < topics.length; i++) {

		var newButton = $("<button>");
		newButton.addClass("btn btn-default");
		newButton.attr("type", "button");
		newButton.append(topics[i]);
		newButton.attr("value", topics[i]);
		$("#newButtonDiv").append(newButton);

		console.log(topics);

	}
}
debugger;
displayButtons();


// // The ajax to get the API info

$(".btn-default").on('click', function() {

	function getGifs() {

var queryURL = ("http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=1e1f311560de4786917912fb4afee7e5&limit=10");

$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

        	console.log(response);
         })
	}
}); 

// Function to create images in the div

function addImages(response) {

	for (var j = 0; j < response.data.length; j++) {

		var newGif = $("<img>");
        newGif.addClass("newGifs");
        newGif.attr("src", "response[j].data.images.fixed_width_still.url");
        $("#imageHolder").append(newGif);
    		
    	}
}









//closing of doc ready
});