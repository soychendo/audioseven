
class Plugins {

    constructor(config) {
        this.json = config.json;
        this.containerSongs = config.containerSongs;
        this.currentSong = [];
        this.title = [];
    }

    songs(music) {
        this.json.forEach(song => {
        const { title, track, id } = song;

        if(!(music === id)) return; 
            this.createSource(track, title);
        });
    }
    songEnd() {

        this.json.forEach(audio => {
            const { title, track } = audio;
            this.title.push(title);
            this.currentSong.push(track);
        });
        
        let currentIndex = 0;
        if(this.currentSong.length > (currentIndex+1)) 
        {
        this.containerSongs.addEventListener('ended', () => {
            this.createSource(this.currentSong[currentIndex], this.title[currentIndex]);
            return currentIndex += 1;
        });
        } else 
        {
            this.currentSong.pause();
        }; 
        
    }
    createSource(src, title) {
        const textTrack = document.querySelector('.description p');
        const source = document.createElement('source');
            source.src = `./assets/audio/${src}.mp3`;
            source.type = 'audio/mpeg';
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