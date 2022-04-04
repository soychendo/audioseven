
class Plugins {

    constructor(config) {
        this.json = config.json;
        this.containerSongs = config.containerSongs;
        this.nexting = config.nexting;
        this.indiceActual = [];
    }

    songs(music, textTrack) {
        this.json.forEach(song => {
            const { title, track, id } = song;
    
            if(!(music === id)) return; 
                const source = document.createElement('source');
                source.src = `./assets/audio/${track}.mp3`;
                source.type = 'audio/mpeg';
                textTrack.textContent = title;
                this.clearHTML();
                this.containerSongs.appendChild(source);
                this.containerSongs.load();
                this.containerSongs.play();
        });
    }
    songEnd() {
        this.json.forEach(audio => {
            const { track } = audio;
            this.indiceActual.push(track);
        });
        
        let currentIndex = 0;
        if(this.indiceActual.length > Number(currentIndex)) {
            this.containerSongs.addEventListener('ended', () => {
            const source = document.createElement('source');
            source.src = `./assets/audio/${this.indiceActual[currentIndex]}.mp3`;
            this.clearHTML();
            this.containerSongs.appendChild(source);
            this.containerSongs.load();
            this.containerSongs.play(); 
            return currentIndex++;
            })
        } else {
            return currentIndex--;
        }

        console.log(currentIndex)

        
        console.log('fuera', this.indiceActual)
        
    }
    clearHTML() {
        while(this.containerSongs.firstChild) {
            this.containerSongs.removeChild(this.containerSongs.firstChild);
        }
    }

}

export default Plugins;