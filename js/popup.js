/*global $, jQuery, alert*/
document.getElementById('placeholder').addEventListener("click", function () {
    chrome.tabs.executeScript(undefined, {allFrames: true, file: 'js/get_videos.js'});
});


$(document).ready(function () {
    "use strict";

    /* code goes here */
});