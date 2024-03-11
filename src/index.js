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

// Shuffle Functionality
plugins.shuffle = () => {
    plugins.songs = plugins.songs.sort(() => Math.random() - 0.5);
    tracklist.list(); // Re-render the playlist
};

const shuffleButton = document.querySelector('.shuffle');
shuffleButton.addEventListener('click', () => {
    plugins.shuffle();
    if (plugins.isPlaying()) {
        player.loadSong(plugins.currentSongIndex());
    }
});

// Repeat Functionality
let repeatMode = 'none'; // none, single, all

plugins.toggleRepeat = () => {
    const repeatButton = document.querySelector('.repeat');

    switch (repeatMode) {
        case 'none':
            repeatMode = 'single';
            repeatButton.classList.add('active');
            break;
        case 'single':
            repeatMode = 'all';
            repeatButton.classList.add('active');
            break;
        case 'all':
            repeatMode = 'none';
            repeatButton.classList.remove('active');
            break;
    }
};

const repeatButton = document.querySelector('.repeat');
repeatButton.addEventListener('click', () => {
    plugins.toggleRepeat();
});

containerSongs.addEventListener('ended', () => {
    switch (repeatMode) {
        case 'none':
            plugins.autoPlay();
            break;
        case 'single':
            player.loadSong(plugins.currentSongIndex());
            break;
        case 'all':
            plugins.nextSong();
            break;
    }
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
