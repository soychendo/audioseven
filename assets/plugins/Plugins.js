
class Plugins {
    constructor(config) {
        this.json = config.json;
        this.containerSongs = config.containerSongs;
<<<<<<< HEAD
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
=======
        this.download = config.download;
        this.anima = config.anima;
        this.previous = config.previous;
        this.next = config.next;
        this.musicArray = [];
        this.title = [];
        this.src = [];
        this.id = [];
    }
    initSongs(id) {
        if(!id) return; 
            this.playList(id);
    }
    playList(audio) {
        this.musicArray = this.json.map(element => element);
        this.musicArray.forEach(list => {
        const { title, track, id } = list;
        this.title.push(title);
        this.src.push(track);
        this.id.push(id);
        if(audio === id) {this.createSource({ title: title, src: track, id: id });}
        this.autoPlay(audio); // el audio = id, que viene de tracklist, que a mi imaginación es el que hace todo :v
        }); // peguenle una manito :')
    }
    autoPlay(audio) {
        let i = audio; 
        if(this.musicArray.length > (i + 1) || this.musicArray.length !== (this.musicArray.length + 1)) { 
        this.containerSongs.addEventListener('ended', () => {
        this.createSource({ title: this.title[i], src: this.src[i], id: this.id[i] });
        i += 1;
        });
        } else {
            this.anima.style.setProperty('--anima', 'paused');
        }
        this.nextSong(audio);
    }
    nextSong(i) { // el next funciona bien
        let n = i
        const source = document.querySelector('source');
        if(source) {
        this.next.addEventListener('click', () => {
            this.createSource({ title: this.title[n], src: this.src[n], id: this.id[n] });
            n += 1;
            this.preSong(n)
        });
        }
        
        
    }
    preSong(i) { // el previous aún falta trabajar :v
        let p = i - 2
        const source = document.querySelector('source');
        if(source) {
        this.previous.addEventListener('click', () => {
            this.createSource({ title: this.title[p], src: this.src[p], id: this.id[p] });
            p -= 1;
        }) 
        }
    }
    
    createSource(data) {
        const { title, src, id } = data;
        this.anima.style.setProperty('--anima', '3s linear infinite');
        this.download.href = `./assets/audio/${src}.mp3`;
        const textTrack = document.querySelector('.description p');
        const source = document.createElement('source');
        const a = document.createAttribute("download");
        this.download.setAttributeNode(a);
        if(textTrack == undefined || id == undefined || src == undefined) {
        textTrack.textContent = "Add a Song";
        } else {
        source.src = `./assets/audio/${src}.mp3`;
        textTrack.textContent = title;
        source.type = 'audio/mpeg';
        source.id = id;
        this.clearHTML();
        this.containerSongs.appendChild(source);
        this.containerSongs.load();
        let playPromise = this.containerSongs.play(); 
        if(playPromise) {
        playPromise.then(() => {
        console.log('load')
        setTimeout(() => {
            console.log("done.");
        }, this.containerSongs.duration * 1000);

        }).catch(() => {
            // :(
        })
        }
        }
    }
    volume() {
        const volumen = document.querySelector('.volumen');
        volumen.oninput = (e) => {
>>>>>>> 03ebe088a14a6a7dfb82d5c3f10be25c022937e1
        const vol = e.target.value;
        this.containerSongs.volume = vol;
        }
    }
<<<<<<< HEAD
=======
    
>>>>>>> 03ebe088a14a6a7dfb82d5c3f10be25c022937e1
    clearHTML() {
        while(this.containerSongs.firstChild) {
            this.containerSongs.removeChild(this.containerSongs.firstChild);
        }
    }
}
export default Plugins;