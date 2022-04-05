
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
            this.createSource({title: title, src: track, id: id});
        });
    }
    repeatSong() {
        this.json.forEach(audio => {
            const { title, track, id } = audio;
            this.title.push(title);
            this.currentSong.push(track);
            this.id.push(id);
        });
        
        let currentIndex = 0; // Esto es lo que hace la magia
        if(this.currentSong.length > (currentIndex + 1)) {
            this.containerSongs.addEventListener('ended', () => {
            if(currentIndex != this.currentSong.length) {
            this.createSource({
                title: this.title[currentIndex],
                src: this.currentSong[currentIndex],  
                id: this.id[currentIndex]
                });
            } else {
                this.clearHTML();
                this.createSource({
                    title: this.title[0],
                    src: this.currentSong[0],  
                    id: this.id[0]
                    });
                return currentIndex = 0;
            }
            currentIndex += 1;
        });
        } 
    }
    createSource(data) {
        const { title, src, id } = data;
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
    volumen() {
        const volumen = document.querySelector('.volumen');
        volumen.oninput = (e) =>{
        const vol = e.target.value;
        this.containerSongs.volume = vol;
        }
    }
    clearHTML() {
        while(this.containerSongs.firstChild) {
            this.containerSongs.removeChild(this.containerSongs.firstChild);
        }
    }
}
export default Plugins;