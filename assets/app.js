import { audiosAs } from './db/json.js';
import AudioSeven from '/assets/AudioSeven.js';
import TrackList from './db/TrackList.js';

const audio = document.querySelector('audio');
const reproducir = document.querySelector('#play img:nth-child(2)');
const github = document.querySelector('.github');


const player = new AudioSeven( { audio: audio }, { tracks: audiosAs } );
reproducir.onclick = () => player.toggleAudio();

player.controls();

const tracklist = new TrackList({ tracks: audiosAs }, github);

tracklist.list();
github.onclick = () => tracklist.getGithub();
tracklist.setPlay();


