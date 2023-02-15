/*-----------------------------------------------------------------------------------
    Reproductor Name: AudioSeven
    Theme URI: https://chendo.dev/audioseven
    Description: Audio Player - Open Source
    Author: @chendodev - chendo : developer and web designer
    Author URI: http://chendo.dev in development
    Github: https://github.com/chendodev
    Youtube: https://youtube.com/@chendodev
    Version: 1.0.1
-----------------------------------------------------------------------------------*/
class TrackList {
    constructor(config) {
        this.plugins = config.plugins;
        this.audiolist = config.audiolist;
    }
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
            let dataId = Number(element.getAttribute('data-id'));
            this.plugins.current = dataId; // Here we save the current selected id, this will start everything
            this.plugins.playList();
        })
    });
}
TrackList.prototype.github = function () {
    window.open('https://github.com/chendodev', '_blank');
}
export default TrackList;
