let video = document.getElementById("myVideo");
let soundButton = document.getElementById("soundButton");

soundButton.addEventListener("click", function() {
    if (video.muted) {
    video.muted = false;
    soundButton.innerHTML = "&#128266;"; 
    } else {
    video.muted = true;
    soundButton.innerHTML = "&#128263;"; 
    }
});