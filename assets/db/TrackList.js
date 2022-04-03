import { audiosAs } from "./json.js";
function TrackList( config, github ) {
    this.database = config.tracks;
    this.github = github;
}

TrackList.prototype.list = function () {
    const container = document.querySelector('.db');
    this.database.forEach(track => {
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
}

TrackList.prototype.setPlay = function () {
    const textTrack = document.querySelector('.description p');
    const source = document.querySelector('audio source');
    const audioTrack = document.querySelectorAll('.audio-track');

    
    audioTrack.forEach(item => {
        item.addEventListener('click', () => {
            let cancion = Number(item.getAttribute('data-id'));
            audiosAs.forEach(audio => {
                if(cancion === audio.id) {
                    source.src = `./assets/tracks/${audio.track}.mp3`;
                    textTrack.textContent = audio.title;
                }
            })
        })
    })

}

TrackList.prototype.getGithub = function () {
    window.open('https://github.com/chendito', '_blank');
}

export default TrackList;
