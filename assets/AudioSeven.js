
class AudioSeven {
    constructor(config) {
        this.track = config.audio;
        this.lists = config.lists;
        this.anima = config.anima;
        this.isPlaying = true;
    }
    onPlay() {
        this.track.play();
        this.isPlaying = true;
        this.anima.style.setProperty('--anima', '3s linear infinite');
    }
    onPause() {
        this.track.pause();
        this.isPlaying = false;
        this.anima.style.setProperty('--anima', 'paused');
    }
    async toggleAudio() {
        if( this.track.paused && !this.isPlaying) { return this.onPlay(); } 
        else { if( !this.track.paused && this.isPlaying ) { return this.onPause(); } }
    }
    toggleMenu() {
        if( this.lists.style.display === 'block' ){ this.lists.style.display = 'none'; } 
        else { this.lists.style.display = 'block'; }
    }
}
export default AudioSeven;