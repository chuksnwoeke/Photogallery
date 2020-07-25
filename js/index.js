


// var audio = document.getElementById("audio");
// audio.src = URL.createObjectURL("../audio/song.mp3");
// audio.load();
// audio.play();
$("document").ready(function () {
    var audio = document.getElementById("audio");
    audio.src = URL.createObjectURL("../audio/song.mp3");
    audio.load();
    audio.play();
});


// var audioElement = document.createElement('audio');
//     audioElement.setAttribute('src', '../audio/song.mp3');
//     audioElement.load()
//     audioElement.addEventListener("load", function () {
//         audioElement.play();
//     }, true);