
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
}
export default AudioSeven;