
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
            if(currentIndex != this.currentSong.length) 
            {
            this.createSource(this.currentSong[currentIndex], this.title[currentIndex], this.id[currentIndex]);
            console.log(currentIndex)
            } else {
                this.clearHTML();
                this.createSource(this.currentSong[0], this.title[0], this.id[0]);
                return currentIndex = 0;
            }
            currentIndex += 1;
            console.log(currentIndex)
        });
        } 
        
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