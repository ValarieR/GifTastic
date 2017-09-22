//Starting array

var topics = [
    "Judo",
    "BJJ",
    "Muay Thai",
    "Freestyle Wrestling",
    "Jiu-jitsu",
    "Boxing"
];

$(document).ready(function() {
    //Functions

    // Function to create buttons from array
    function displayButtons() {

        for (var i = 0; i < topics.length; i++) {

            var newButton = $("<button>");
            newButton.addClass("btn btn-default topicBtn");
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

        var queryURL = ("https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=1e1f311560de4786917912fb4afee7e5&limit=10");

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
            newGif.addClass("newGifs img-thumbnail grid-item");
            newGif.attr("src", response.data[j].images.fixed_width_still.url);
            //newGif.attr('class', "img-thumbnail");
            newGif.attr("data-state", "still");
            newGif.attr("data-still", response.data[j].images.fixed_width_still.url);
            newGif.attr("data-animate", response.data[j].images.fixed_width.url);
            //newGif.addClass("grid-item");
            //$("#imageHolder").append(newGif);

            // function to display the rating of gifs

            var gifRating = $("<p>");
            gifRating.append("Rating: " + response.data[j].rating);

            var gifPlusRating = $("<div>");
            gifPlusRating.append(newGif, gifRating);
            gifPlusRating.addClass("grid-item");
            $("#imageHolder").append(gifPlusRating);

        }
    }


    // Function to animate the retrieved still images
    // var static = response.data[j].images.fixed_width_still.url
    // var animate = response.data[j].images.fixed_width.url

    $(document).on("click", ".newGifs", function() {

        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });


    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 950,
        isFitWidth: true
    });



    $(".topicBtn").on('click', function() {

        console.log("click");
        getGifs($(this).attr('value'));
        addImages();
        console.log($(this).attr('value'));
    });

    $("#searchBtn").on('click', function() {
        //If search bar is empty
        event.preventDefault();

        var searchWord = $(".form-control").val();
        console.log(searchWord);

        var newBtnSearch = $("<button>");

        $("#newButtonDiv").append(newBtnSearch);
        newBtnSearch.attr("type", "button");
        newBtnSearch.attr('value', searchWord);
        newBtnSearch.addClass("btn btn-default");

        topics.push(searchWord);
        $("#newButtonDiv").empty();
        displayButtons();
        getGifs();
        addImages();


    });


    //closing of doc ready
});