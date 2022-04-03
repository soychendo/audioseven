
function AudioSeven(config) {
    this.track = config.audio;
}
AudioSeven.prototype.reproducir = function () {

    this.track.play();
   
    
}
AudioSeven.prototype.pausar = function () {
 
    this.track.pause();

}
AudioSeven.prototype.toggleAudio = function () {
    
        this.track.paused 
            ? this.reproducir()
            : this.pausar();

}

export default AudioSeven;