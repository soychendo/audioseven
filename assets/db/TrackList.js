/*

All the rights of the songs to the authors and interpreters of the same, 
the use of them is non-profit, since my project is open source.
Project created from scratch by chendo | Github @chendito

*/
class TrackList {
    constructor(config) {
        this.plugins = config.plugins;
        this.audiolist = config.audiolist;
        this.github = config.github;
    }
    list() {
        const container = document.querySelector('.db');
        this.plugins.json.forEach(track => {
            const li = document.createElement('li');
            li.classList.add('audio-track');
            li.dataset.id = track.id;
            li.title = track.version;
            const p = document.createElement('p');
            p.textContent = track.title;
            const img = document.createElement('img');
            img.src = "./assets/img/track.svg";    
    
            li.appendChild(img);
            li.appendChild(p);
            container.appendChild(li);
        });
    };
    setPlay() {
        const audioTrack = document.querySelectorAll('.audio-track');
        audioTrack.forEach(element => {
            element.addEventListener('click', () => {
            let id = Number(element.getAttribute('data-id'));
            this.plugins.initSongs(id);
            });
        });
    };
    close() { this.audiolist.style.display = 'none'; };
    getGithub() { window.open('https://github.com/chendito', '_blank'); };
}
export default TrackList;
