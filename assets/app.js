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

const plugins = new Plugins(
    { 
        json: songsAs, 
        containerSongs: containerSongs 
    });

const player = new AudioSeven( 
    { 
        audio: containerSongs, 
        lists: audioList 
    });
reproducir.onclick = () => player.toggleAudio();
menuList.onclick = () => player.toggleMenu();

const tracklist = new TrackList(
    { 
        audiolist: audioList, 
        plugins: plugins, 
        github: github 
    });

tracklist.list();
github.onclick = () => tracklist.getGithub();
tracklist.setPlay();
menuClose.onclick = () => tracklist.close();
