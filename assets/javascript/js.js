$(document).ready(function(){
//initial array of video games
    var videoGames = ["Skyrim", "Dark Souls", "Dark Souls 2", "Dark Souls 3", "Bloodborne", "The Witcher 3", "World of Warcraft"];
    console.log(videoGames);

    // rendering the buttons
    function renderButtons() {
        $("#buttons-view").empty();
        for (var i = 0; i < videoGames.length; i++) {
            var a = $("<button>");
            a.addClass("videoGame-btn");
            a.attr("data-name", videoGames[i]);
            a.text(videoGames[i]);
            $("#buttons-view").append(a);
        }
    }


    function videoGameGif() {
        var videoGame = $(this).attr("data-name");
    //     var gueryURL = "https://api.giphy.com/v1/gifs/search?q=" + videoGame + "&api_key=Vflj615zpDEH41Qqr3XVVlGGVq7HSlzZ&limit=10&offset=0&rating=R&lang=en";

    // $.ajax({
    //     url: queryURl,
    //     method: "GET"
    //     })
    //     .then(function(response){
    //         console.log(response);
        // var vgDiv = $("<div class='videoGame'>");
        // var rating = response.Rating;
        // var pOne = $('<p>').text('Rating: ' + rating);
        // vgDiv.append(pOne);
        // var imgURL = response.Gif;
        // var image = $("<img>").attr("src",imgURL);
        // vgDiv.append(image);
        // })
    
    };


    $("#addVG").on("click", function(event) {
        event.preventDefault();
        var videoGame = $("#videoGame-input").val().trim();
        videoGames.push(videoGame);
        renderButtons();
    });
    $(document).on("click'", ".videoGame-btn", videoGameGif);
    renderButtons();
});    

