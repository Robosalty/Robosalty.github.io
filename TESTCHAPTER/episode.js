window.addEventListener('load', function(){
    var myAudio = document.getElementById("myAudio");
    
    myAudio.onplaying = function() {
    isPlaying = true;
    };
    myAudio.onpause = function() {
    isPlaying = false;
    };
});

var isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        myAudio.pause()
    } else {
        myAudio.play();
    }
}