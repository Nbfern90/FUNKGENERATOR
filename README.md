# FUNKGENERATOR

![FUNKGENERATOR](/img/FunkGeneratorPic.png)

### _FUNKGENERATOR allows users to shuffle through a playlist of classic Funk/Soul videos._

## Background

The goal was to create a shuffle player that would loop through all avaiable videos before starting over. As it would be I happen to be listening to a lot of Funk and Funk influenced music at the time, thus the idea of FUNKGENERATOR was born.

## Technologies

- HTML, CSS, Javascript
- Deployed on https://www.netlify.com/

## Functionality

When clicked, The "Get Funky" button fires the randomFunk() function. This function loops through the length of the array and removes the played video from the playlist using the splice() function. When the length of the array is === to 0, the list of videos is pushed back into the array.
