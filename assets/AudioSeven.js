
<<<<<<< HEAD
function AudioSeven(config) {
    this.track = config.audio;
    this.lists = config.lists;
    this.isPlaying = true;
}
AudioSeven.prototype.reproducir = function () {
    this.track.play();
    this.isPlaying = true;
}
AudioSeven.prototype.pausar = function () {
    this.track.pause();
    this.isPlaying = false;
}
AudioSeven.prototype.toggleAudio = function () {
    if(this.track.paused && !this.isPlaying) return this.reproducir();
    if( !this.track.paused && this.isPlaying ) return this.pausar();
}

AudioSeven.prototype.toggleMenu = function () {
    if( this.lists.style.display === 'block' ){ this.lists.style.display = 'none'; } 
    else { this.lists.style.display = 'block'; }
=======
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
>>>>>>> 03ebe088a14a6a7dfb82d5c3f10be25c022937e1
}
export default AudioSeven;