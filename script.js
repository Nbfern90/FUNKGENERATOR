/*Creat a website that generators random funk videos.
Should have:
- button that generates the new video
  -button should say "Get Funked Up"
-header or somekind that asks"You Tryin' to Get Funked up
-animation of Bootsy that spirals out onclick before the video starts each time you
-mad funk design*/



var randomVid = [
  'https://www.dailymotion.com/embed/video/x73nl0r?autoplay=1',
  'https://www.dailymotion.com/embed/video/xcmwfl?autoplay=1',
  'https://www.dailymotion.com/embed/video/x13lkim?autoplay=1',
  'https://www.dailymotion.com/embed/video/x5nvpm?autoplay=1',
  'https://www.dailymotion.com/embed/video/xibmm?autoplay=1"'
];
var video = document.getElementById("movie");


function randomFunk() {
var vidIndex = Math.floor(Math.random()*randomVid.length);  

var shuffle = randomVid[vidIndex];

//document.getElementById("movie").src =shuffle;
video.src = shuffle;
console.log(video.src);
}






