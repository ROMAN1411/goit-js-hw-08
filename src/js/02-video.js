import Player from '@vimeo/player';

const TIME__SET = "videoplayer-current-time";
const localTime = localStorage.getItem(TIME__SET);
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const throttle = require('lodash.throttle');

function onTimeUpdate({ seconds }) {
  localStorage.setItem(TIME__SET, seconds);
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));

if (localTime) {
  player.setCurrentTime(localTime)
    .then(function (seconds) { })
    .catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});
}




