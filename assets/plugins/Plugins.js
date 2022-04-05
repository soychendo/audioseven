
class Plugins {

    constructor(config) {
        this.json = config.json;
        this.containerSongs = config.containerSongs;
        this.currentSong = [];
        this.title = [];
        this.id = [];
    }

    songs(music) {
        this.json.forEach(song => {
        const { title, track, id } = song;

        if(!(music === id)) return; 
            this.createSource(track, title, id);
        });
    }
    songEnd() {

        this.json.forEach(audio => {
            const { title, track, id } = audio;
            this.title.push(title);
            this.currentSong.push(track);
            this.id.push(id);
        });
        
        let currentIndex = 0;
        if(this.currentSong.length > (currentIndex + 1)) 
        {
        this.containerSongs.addEventListener('ended', () => {
            if(!(currentIndex === 7)) {
                this.createSource(this.currentSong[currentIndex], this.title[currentIndex], this.id[currentIndex]);
                console.log(currentIndex)
            }  
            return currentIndex += 1;
        });
        } else 
        {
        this.containerSongs.addEventListener('ended', () => this.createSource(this.currentSong[0], this.title[0], this.id[0]));
        }; 
        
    }
    createSource(src, title, id) {
        const textTrack = document.querySelector('.description p');
        const source = document.createElement('source');
            source.src = `./assets/audio/${src}.mp3`;
            source.type = 'audio/mpeg';
            source.id = id;
            textTrack.textContent = title;
            this.clearHTML();
            this.containerSongs.appendChild(source);
            this.containerSongs.load();
            this.containerSongs.play(); 
    }
    clearHTML() {
        while(this.containerSongs.firstChild) {
            this.containerSongs.removeChild(this.containerSongs.firstChild);
        }
    }

}

export default Plugins;