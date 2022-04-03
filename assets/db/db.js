
function DB(db) {
    this.database = db.tracks;
    this.container = db.container;
}

DB.prototype.json = function() {
    this.database.forEach(track => {
        const li = document.createElement('li');
        li.classList.add('audio-track');
        li.dataset.id = track.id;
        li.textContent = track.title;
        
        this.container.appendChild(li);
    });
}

export default DB;
