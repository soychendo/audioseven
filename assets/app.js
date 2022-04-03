import { audiosAs } from './db/json.js';
import AudioSeven from '/assets/AudioSeven.js';
import TrackList from './db/TrackList.js';

export const containerAudio = document.querySelector('audio');
const reproducir = document.querySelector('#play img:nth-child(2)');
const github = document.querySelector('.github');
const menuClose = document.querySelector('.menuclose');
const audioList = document.querySelector('.audioList');
menuClose.onclick = () => {
    audioList.style.display = 'none';
}


const player = new AudioSeven( { audio: containerAudio } );
reproducir.onclick = () => player.toggleAudio();

const tracklist = new TrackList({ tracks: audiosAs }, github);

tracklist.list();
github.onclick = () => tracklist.getGithub();
tracklist.setPlay();


