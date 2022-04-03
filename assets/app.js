import { audiosAs } from './db/json.js';
import AudioSeven from '/assets/AudioSeven.js';
import DB from './db/DB.js';

const audios = document.querySelector('.db');
const audio = document.querySelector('audio');
const reproducir = document.querySelector('#play img:nth-child(2)');


const player = new AudioSeven( { audio: audio } );
reproducir.onclick = () => player.toggleAudio();

const db = new DB({ tracks: audiosAs, container: audios });

db.json();


