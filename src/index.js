/*-----------------------------------------------------------------------------------
    Reproductor Name: AudioSeven
    Theme URI: https://chendo.dev/audioseven
    Description: Audio Player - Open Source
    Author: @chendodev - chendo : developer and web designer
    Author URI: http://chendo.dev in development
    Github: https://github.com/chendodev
    Youtube: https://youtube.com/@chendodev
    Version: 1.0.1
-----------------------------------------------------------------------------------*/
import { songsAs } from '../assets/db/json.js';
import AudioSeven from '../assets/AudioSeven.js';
import TrackList from '../assets/db/TrackList.js';
import Plugins from '../assets/plugins/Plugins.js';

const chendodev = document.querySelector('h1');
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
        imgPlay: imgPlay
    });   

const tracklist = new TrackList(
    { 
        audiolist: audioList, 
        plugins: plugins, 
    });

// TrackList
tracklist.list();
tracklist.setPlay();
chendodev.onclick = () => tracklist.github();

// Plugins
plugins.playList();
containerSongs.addEventListener('ended', plugins.autoPlay());
next.onclick = () => plugins.nextSong();
previous.onclick = () => plugins.preSong();
plugins.volume();


const player = new AudioSeven(
    { 
        audio: containerSongs, 
        lists: audioList, 
        anima: anima,
        imgPlay: imgPlay
    });
reproducir.onclick = () => player.toggleAudio();
menuList.onclick = () => player.toggleMenu();