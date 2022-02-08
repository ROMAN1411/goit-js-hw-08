import Player from '@vimeo/player';

const TIME__SET = "videoplayer-current-time";
const localTime = localStorage.getItem(TIME__SET);
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const throttle = require('lodash.throttle');

if (localTime) {
  player.setCurrentTime(localTime);
}
player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate({ seconds }) {
  localStorage.setItem(TIME__SET, seconds);
}

