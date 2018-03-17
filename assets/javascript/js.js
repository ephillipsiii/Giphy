$(document).ready(function () {
    //initial array of video games
    var videoGames = ["Skyrim", "Dark Souls", "Dark Souls 2", "Dark Souls 3", "Bloodborne", "The Witcher 3", "World of Warcraft"];
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
    $("#addVG").on("click", function (event) {
        event.preventDefault();
        var videoGame = $("#videoGame-input").val().trim();
        videoGames.push(videoGame);
        renderButtons();
    });
    $(document).on("click", ".videoGame-btn", function () {
        var videoGame = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + videoGame + "&api_key=Vflj615zpDEH41Qqr3XVVlGGVq7HSlzZ&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            var results = response.data
                for (i = 0; i < results.length; i++) {
                    var vgDiv = $("<div>");
                    var rating = results[i].rating;
                    var pOne = $('<p>').text('Rating: ' + rating);
                    vgDiv.append(pOne);
                    var imgURL = results[i].images.original.url;
                    var image = $("<img>").attr("src", imgURL);
                    vgDiv.prepend(image);
                    $("#vG").prepend(vgDiv);
                }
        })        
    });
    renderButtons();
});




