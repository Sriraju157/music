const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const progress = document.getElementById('progress');
const progressContainer = document.querySelector('.progress-container');

const songs = [
    {
        title: 'Song 1',
        artist: 'Artist 1',
        src: 'song1.mp3',
        cover: 'cover1.jpg'
    },
    {
        title: 'Song 2',
        artist: 'Artist 2',
        src: 'song2.mp3',
        cover: 'cover2.jpg'
    },
    {
        title: 'Song 3',
        artist: 'Artist 3',
        src: 'song3.mp3',
        cover: 'cover3.jpg'
    }
];

let songIndex = 0;

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
    cover.src = song.cover;
}

function playSong() {
    audio.play();
    playBtn.textContent = '⏸️';
}

function pauseSong() {
    audio.pause();
    playBtn.textContent = '▶️';
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress() {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

// Event Listeners
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);

// Load the first song
loadSong(songs[songIndex]);
