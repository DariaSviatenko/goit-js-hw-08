import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeUpdate = throttle(({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
}, 1000);

player.on('timeupdate', onTimeUpdate);

const playedTime = Number(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(playedTime);
