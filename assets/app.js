import AudioSeven from '/assets/AudioSeven.js';

const audio = document.querySelector('audio');
const reproducir = document.querySelector('#play img:nth-child(2)');


const player = new AudioSeven( { audio: audio } );
reproducir.onclick = () => player.toggleAudio();


