


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
  '/vids/Couldnt Get It Right.mp4',       
  

];
var video = document.getElementById("movie");


function randomFunk() {
var vidIndex = Math.floor(Math.random()*randomVid.length);  

var shuffle = randomVid[vidIndex];


video.src = shuffle;
console.log(video.src);                  
}






