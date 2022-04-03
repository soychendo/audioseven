
function TrackList(config) {
    this.database = config.tracks;
    this.container = config.container;
}

TrackList.prototype.list = function() {
    this.database.forEach(track => {
        const li = document.createElement('li');
        li.classList.add('audio-track');
        li.dataset.id = track.id;
        const p = document.createElement('p');
        p.textContent = track.title;
        const img = document.createElement('img');
        img.src = "./assets/img/track.svg";    

        li.appendChild(img);
        li.appendChild(p);
        this.container.appendChild(li);
    });
}

export default TrackList;
