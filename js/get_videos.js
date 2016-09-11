var time = 60;

// get all videos on webpage
var videoElements = document.getElementsByTagName('video');


try {
    var found = false;
    for (var i = 0; i < videoElements.length; i++) {
        videoElements[i].play();
        // set video's time to time stored in URL
        videoElements[i].currentTime = time;
    }
} catch (err) {console.log("ERROR: " + err);} 