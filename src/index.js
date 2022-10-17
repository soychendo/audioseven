import { songsAs } from '../assets/db/json.js';
import AudioSeven from '../assets/AudioSeven.js';
import TrackList from '../assets/db/TrackList.js';
import Plugins from '../assets/plugins/Plugins.js';

const containerSongs = document.querySelector('audio');
const reproducir = document.querySelector('#play img:nth-child(2)');
const menuList = document.querySelector('.menu-list');
const audioList = document.querySelector('.audioList');
const download = document.querySelector('.download');
const anima = document.querySelector('.tracks');

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const imgPlay = document.querySelector('#img-play');


const plugins = new Plugins(
    { 
        json: songsAs, 
        containerSongs: containerSongs, 
        download: download,
        anima: anima,
        next: next,
        previous: previous,
        imgPlay: imgPlay
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
        anima: anima,
        imgPlay: imgPlay
    });
reproducir.onclick = () => player.toggleAudio();
menuList.onclick = () => player.toggleMenu();

const tracklist = new TrackList(
    { 
        audiolist: audioList, 
        plugins: plugins, 
    });
tracklist.list();
tracklist.setPlay();
