const { readFileSync } = require('fs');
let tracks;

if (!tracks) readFileSync('tracks.txt', 'utf8').toString().split('\n');

function random(num) {
    if (num) return tracks.slice(0, num)
    else return tracks[Math.floor(Math.random() * tracks.length)]
}

module.exports = random();