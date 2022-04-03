import { songsAs } from './db/json.js';
import AudioSeven from '/assets/AudioSeven.js';
import TrackList from './db/TrackList.js';

export const containerSongs = document.querySelector('audio');
const reproducir = document.querySelector('#play img:nth-child(2)');
const github = document.querySelector('.github');
const menuClose = document.querySelector('.menuclose');
const audioList = document.querySelector('.audioList');
menuClose.onclick = () => {
    audioList.style.display = 'none';
}


const player = new AudioSeven( { audio: containerSongs } );
reproducir.onclick = () => player.toggleAudio();

const tracklist = new TrackList({ tracks: songsAs }, github);

tracklist.list();
github.onclick = () => tracklist.getGithub();
tracklist.setPlay();


