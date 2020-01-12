// API address
const giphyAPI = "https://api.giphy.com/v1/gifs/search?api_key=YMW1ZsxVp8JDNIuz6TdMv48tk7fyTrzm&limit=25&offset=0&rating=G&lang=en&q=";
const wordnikAPI = "http://api.wordnik.com/v4/words.json/randomWord?api_key=8nqhsvilsbiip1s14s9ti5ip5xvrcihstf9eov0q2izmc6wzr";


// things to do on start
window.onload = () => $("#text").val("");


// functions
const say = (something) => console.log(something);

const getData = async (url) => {

    let response = await fetch(url);
    let json = await response.json();
    return json;

}

const keyUp = () => {
    if (event.keyCode === 13) {
        $(".submit").click();
    }
}

const showGif = (query) => {

    say(query);
    $("p").html("You Searched \"" + query + "\".").css("color", "white");

    let r = Math.floor(Math.random() * 20);

    getData(giphyAPI + query)
        .then(gifUrl => gifUrl.data[r].images.downsized_large.url)
        .then(result => $(".gif").attr("src", result))
        .catch(err => {
            say("Cant find gif");
            $(".random").click();
        });

}


// Code
$("#text").on("keyup", keyUp);

$(".submit").on("click", () => {
    let search = $("#text").val();
    showGif(search);
});

$(".random").on("click", () => {
    say("random word...")
    getData(wordnikAPI)
        .then(data => showGif(data.word));
});