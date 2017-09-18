//Starting array

var topics = [
    "Judo",
    "BJJ",
    "muay thai",
    "freestyle wrestling",
    "jiu-jitsu",
    "boxing"
];

$(document).ready(function() {
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

            
                    function getGifs(topic) {

                        var queryURL = ("http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=1e1f311560de4786917912fb4afee7e5&limit=10");

                        console.log(queryURL);

                        $.ajax({
                            url: queryURL,
                            method: "GET"
                        }).done(function(response) {

                                console.log(response.data);
                                addImages(response);

                       	 });
                        }

                                // Function to create images in the div

                                function addImages(response) {

                                	$("#imageHolder").empty();

                                    for (var j = 0; j < response.data.length; j++) {

                                        var newGif = $("<img>");
                                        newGif.addClass("newGifs");
                                        newGif.attr("src", response.data[j].images.fixed_width_still.url);
                                        newGif.attr('class', "img-thumbnail");
                                        $("#imageHolder").append(newGif);

                                    // Function to animate the retrieved still images
                                		var static = response.data[j].images.fixed_width_still.url
                                		var animate = response.data[j].images.fixed_width.url


		                                if (newGif === animate) {
		                                    $(this).attr('src', $(this).attr('static'));
		                                } else {
		                                    $(this).attr('src', $(this).attr('animate'));

		                                }


                                    }
                                }              

                

        $(".btn-default").on('click', function() {

            	console.log("click");
            	getGifs($(this).attr('value'));
        });
                //closing of doc ready
            });