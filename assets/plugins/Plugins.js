
class Plugins {

    constructor(config) {
        this.json = config.json;
        this.containerSongs = config.containerSongs;
    }

    songs(music, textTrack) {
        this.json.forEach(song => {
            const { title, track, id } = song;
    
            if(!(music === id)) return; 
                const source = document.createElement('source');
                source.src = `./assets/tracks/${track}.mp3`;
                source.type = 'audio/mpeg';
                textTrack.textContent = title;
                this.clearHTML();
                this.containerSongs.appendChild(source);
                this.containerSongs.load();
                this.containerSongs.play();
        });
    }
    songEnd() {
        this.containerSongs.addEventListener('ended', () => {
            this.containerSongs.play();
        })
    }
    clearHTML() {
        while(this.containerSongs.firstChild) {
            this.containerSongs.removeChild(this.containerSongs.firstChild);
        }
    }

}

export default Plugins;