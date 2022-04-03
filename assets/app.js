import { audiosAs } from './db/json.js';
import AudioSeven from '/assets/AudioSeven.js';
import TrackList from './db/TrackList.js';

const audios = document.querySelector('.db');
const audio = document.querySelector('audio');
const reproducir = document.querySelector('#play img:nth-child(2)');


const player = new AudioSeven( { audio: audio } );
reproducir.onclick = () => player.toggleAudio();

const tracklist = new TrackList({ tracks: audiosAs, container: audios });

tracklist.list();


