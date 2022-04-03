
function AudioSeven(config, tracks) {
    this.track = config.audio;
    this.database = tracks.tracks;
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
AudioSeven.prototype.controls = function () {
    this.database.forEach(track => {
         console.log(track.track)   
    });
}

export default AudioSeven;