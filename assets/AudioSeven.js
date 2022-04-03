
function AudioSeven(config) {
    this.track = config.audio;
    this.lists = config.lists;
    console.log(config)
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
AudioSeven.prototype.toggleMenu = function () {

    this.lists.style.display === 'block'
        ? this.lists.style.display = 'none'
        : this.lists.style.display = 'block';

}

export default AudioSeven;