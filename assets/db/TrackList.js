
function TrackList(config) {
    this.database = config.tracks;
}

TrackList.prototype.list = function() {
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

export default TrackList;
