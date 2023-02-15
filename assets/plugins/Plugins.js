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
class Plugins {
    constructor(config) {
        this.json = config.json;
        this.containerSongs = config.containerSongs;
        this.download = config.download;
        this.anima = config.anima;
        this.imgPlay = config.imgPlay;
        this.musicArray = [];
        this.title = [];
        this.src = [];
        this.id = [];
        this.current = 0; // Here we store the id dynamically that comes from all the functions...
    }

    playList() {
        this.musicArray = this.json.map(element => element); // we only reroute the json once
        this.musicArray.forEach(list => {
        const { title, track, id } = list;
        this.title.push(title);
        this.src.push(track);
        this.id.push(id);
        if(this.current === id) {this.createSource({ title: title, src: track, id: id });}
        });
    }
    autoPlay() {
        this.containerSongs.addEventListener('ended', () => {
            this.current++; // we increase the id when the song ends 
            // If the current song is greater than the length of the arrangement, we reset it to 1 or leave it the same
            this.current > this.musicArray.length ? this.current = 1 : this.current = this.current;
            // we create the resource with the current id
            this.createSource({ 
                title: this.title[this.current - 1], 
                src: this.src[this.current - 1], 
                id: this.id[this.current - 1] 
            });
        });
    }
    nextSong() { // bug fixed -> next song
        const source = document.querySelector('source'); 
        // if there is no resource we do nothing
        if(source) { 
            this.current++;
            this.current > this.musicArray.length ? this.current = 1 : this.current;
            this.createSource({ 
                title: this.title[this.current - 1], 
                src: this.src[this.current - 1], 
                id: this.id[this.current - 1] 
            });
        }
    }
    preSong() { // bug fixed -> previous song
        const source = document.querySelector('source');
        if(source) {
            this.current--;
            // if the id of the current song is 1 we reset it to the length of the arrangement
            this.current < 1 ? this.current = this.musicArray.length : this.current;
            this.createSource({ 
                title: this.title[this.current - 1], 
                src: this.src[this.current - 1], 
                id: this.id[this.current - 1] 
            });
        }
    }
    
    createSource(data) { // we create the resource for the audio
      const { title, src, id } = data;
      const textTrack = document.querySelector('.description p');
      const source = document.createElement('source');
      const a = document.createAttribute("download");
      this.download.setAttributeNode(a);
      this.download.href = `./assets/audio/${src}.mp3`;
      this.anima.style.setProperty('--anima', '3s linear infinite');
      this.imgPlay.src = './assets/img/pause.svg';
      
      if(textTrack == undefined || id == undefined || src == undefined) {
      textTrack.textContent = "Add a Song";
      } else {
      source.src = `./assets/audio/${src}.mp3`;
      textTrack.textContent = title;
      source.type = 'audio/mpeg';
      source.id = id;
      this.clearHTML();
      this.containerSongs.appendChild(source);
      this.containerSongs.load();
      this.timeAudio();
      }
    }
    timeAudio(){ // Error promise load
      setTimeout(() => {
          this.containerSongs.play();
      }, 100);
    }
    volume() {
      const volumen = document.querySelector('.volumen');
      volumen.oninput = (e) => {
      const vol = e.target.value;
      this.containerSongs.volume = vol;
      }
    }
    
    clearHTML() {
        while(this.containerSongs.firstChild) {
            this.containerSongs.removeChild(this.containerSongs.firstChild);
        }
    }
}
export default Plugins;