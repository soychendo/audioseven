import { songsAs } from './db/json.js';
import AudioSeven from '/assets/AudioSeven.js';
import TrackList from './db/TrackList.js';

export const containerSongs = document.querySelector('audio');
const reproducir = document.querySelector('#play img:nth-child(2)');
const github = document.querySelector('.github');
const menuClose = document.querySelector('.menuclose');
const menuList = document.querySelector('.menu-list');
const audioList = document.querySelector('.audioList');


const player = new AudioSeven( { audio: containerSongs, lists: audioList } );
reproducir.onclick = () => player.toggleAudio();
menuList.onclick = () => player.toggleMenu();

const tracklist = new TrackList({ tracks: songsAs, audiolist: audioList }, github);

tracklist.list();
github.onclick = () => tracklist.getGithub();
tracklist.setPlay();
menuClose.onclick = () => tracklist.close();


