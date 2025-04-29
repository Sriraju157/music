const audio = document.getElementById('audio');
const cube = document.querySelector('.cube');

// Add interactivity to cube faces
cube.addEventListener('click', (event) => {
    const face = event.target;

    if (face.classList.contains('front')) {
        audio.play();
    } else if (face.classList.contains('back')) {
        audio.pause();
    } else if (face.classList.contains('left')) {
        alert('Next song feature can be added here.');
    } else if (face.classList.contains('right')) {
        alert('Previous song feature can be added here.');
    } else if (face.classList.contains('top')) {
        audio.volume = Math.min(audio.volume + 0.1, 1);
    } else if (face.classList.contains('bottom')) {
        audio.volume = Math.max(audio.volume - 0.1, 0);
    }
});
