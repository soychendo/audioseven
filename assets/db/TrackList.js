function TrackList( config) {
    this.plugins = config.plugins;
    this.audiolist = config.audiolist;
    this.github = config.github;
}

TrackList.prototype.list = function () {
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
}

TrackList.prototype.setPlay = function () {
    const audioTrack = document.querySelectorAll('.audio-track');

    audioTrack.forEach(element => {
        element.addEventListener('click', () => {
            let music = Number(element.getAttribute('data-id'));
            this.plugins.songs(music);

        })
    })
}

TrackList.prototype.close = function () {
    this.audiolist.style.display = 'none'
}

TrackList.prototype.getGithub = function () {
    window.open('https://github.com/chendito', '_blank');
}


export default TrackList;
