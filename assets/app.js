import { songsAs } from './db/json.js';
import AudioSeven from '/assets/AudioSeven.js';
import TrackList from './db/TrackList.js';
import Plugins from './plugins/Plugins.js';

const containerSongs = document.querySelector('audio');
const reproducir = document.querySelector('#play img:nth-child(2)');
const github = document.querySelector('.github');
const menuClose = document.querySelector('.menuclose');
const menuList = document.querySelector('.menu-list');
const audioList = document.querySelector('.audioList');
<<<<<<< HEAD

const plugins = new Plugins({ 
    json: songsAs, 
    containerSongs: containerSongs,
    });
plugins.repeatSong();
plugins.volumen();

const player = new AudioSeven({ 
    audio: containerSongs, 
    lists: audioList 
=======
const download = document.querySelector('.download');
const anima = document.querySelector('.tracks');

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');


const plugins = new Plugins(
    { 
        json: songsAs, 
        containerSongs: containerSongs, 
        download: download,
        anima: anima,
        next: next,
        previous: previous
    });
plugins.volume();
plugins.playList();
plugins.autoPlay();
plugins.nextSong();
plugins.preSong();

const player = new AudioSeven(
    { 
        audio: containerSongs, 
        lists: audioList, 
        anima: anima
>>>>>>> 03ebe088a14a6a7dfb82d5c3f10be25c022937e1
    });
reproducir.onclick = () => player.toggleAudio();
menuList.onclick = () => player.toggleMenu();

<<<<<<< HEAD
const tracklist = new TrackList({ 
    audiolist: audioList, 
    plugins: plugins, 
    github: github 
=======
const tracklist = new TrackList(
    { 
        audiolist: audioList, 
        plugins: plugins, 
        github: github 
>>>>>>> 03ebe088a14a6a7dfb82d5c3f10be25c022937e1
    });
tracklist.list();
github.onclick = () => tracklist.getGithub();
tracklist.setPlay();
<<<<<<< HEAD
menuClose.onclick = () => tracklist.close();
=======
menuClose.onclick = () => tracklist.close();
>>>>>>> 03ebe088a14a6a7dfb82d5c3f10be25c022937e1
