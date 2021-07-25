/*Creat a website that generators random funk videos.
Should have:
- button that generates the new video
  -button should say "Get Funked Up"
-header or somekind that asks"You Tryin' to Get Funked up
-animation of Bootsy that spirals out onclick before the video starts each time you
-mad funk design*/



var randomVid = [
  '/vids/Cisco Kid.mp4',
  '/vids/Gap Band.mp4',
  '/vids/Just Begun.mp4',
  '/vids/Let it Whip.mp4',
  '/vids/Move On Up.mp4',
  '/vids/Parliment.mp4',
  '/vids/Rock Steady.mp4',
  '/vids/Superstition.mp4',
  '/vids/Stretch.mp4',
  '/vids/Do it right.mp4',
  '/vids/Burn Rubber.mp4',
  '/vids/Mary Jane.mp4',
  '/vids/Get Down Tonight.mp4',
  '/vids/Superfly.mp4',
  '/vids/Got to Give it Up.mp4',
  '/vids/The Payback.mp4',
  '/vids/Lets Groove.mp4',
  '/vids/Slipping Into Darkness.mp4',
  '/vids/Back Stabbers.mp4',
  

];
var video = document.getElementById("movie");


function randomFunk() {
var vidIndex = Math.floor(Math.random()*randomVid.length);  

var shuffle = randomVid[vidIndex];


video.src = shuffle;
console.log(video.src);
}






