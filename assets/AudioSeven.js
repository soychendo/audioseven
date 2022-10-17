
class AudioSeven {
    constructor(config) {
        this.track = config.audio;
        this.lists = config.lists;
        this.anima = config.anima;
        this.imgPlay = config.imgPlay;
        this.isPlaying = true;
    }
    onPlay() {
        this.track.play();
        this.isPlaying = true;
        this.anima.style.setProperty('--anima', '3s linear infinite');
        this.imgPlay.src = './assets/img/pause.svg';
    }
    onPause() {
        this.track.pause();
        this.isPlaying = false;
        this.anima.style.setProperty('--anima', 'paused');
        this.imgPlay.src = './assets/img/play.svg';
    }
    async toggleAudio() {
        if( this.track.paused && !this.isPlaying) { return this.onPlay(); } 
        else { if( !this.track.paused ) { return this.onPause(); } }
    }
    toggleMenu() {
        if( this.lists.style.height === '250px' ){ 
            this.lists.style.height = '0px';
            this.lists.style.borderBottom = '0'; 
        } 
        else { 
            this.lists.style.height = '250px'; 
            this.lists.style.borderBottom = '2px solid #000';
        }
    }
}
export default AudioSeven;