//initial array of video games
var videoGames = ["Skyrim", "Dark Souls", "Dark Souls 2", "Dark Souls 3", "Bloodborne", "The Witcher 3", "World of Warcraft"];

function videoGameGif() {
    var videoGame = $(this).attr('data-name');
    var gueryURL = "https://api.gihpy.com/v1/gifs/search?q=" + videoGames + "&api+key=Vflj615zpDEH41Qqr3XVVlGGVq7HSlzZ&limit=10";

    $.ajax({
        url:queryURl,
        method: "GET"
        // }).then(function(response){
        //     var vgDiv = $("<div class='videoGame'>");
        //     var rating = response.rated;
        })
    console.log(videoGameGif);
}

//rendering the buttons
function renderButons() {
    $("videoGame-button").empty();
    for (var i=0; i < videoGames.length, i++;) {
        var a = $("<button>");
        a.addClass("vG");
        a.attr("data-name", videoGames[i]);
        a.text(videGames[i]);
        $("videoGame-buttons").append(a);
    }
}
