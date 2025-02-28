const mainVideo = document.getElementById('main-video');
const ambientVideo = document.getElementById('ambient-vid');
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', () => {
  ambientVideo.classList.toggle('hidden');
});

const syncVideos = () => {
  mainVideo.addEventListener('play', () => {
    ambientVideo.currentTime = mainVideo.currentTime;
    ambientVideo.play();
  });

  mainVideo.addEventListener('pause', () => {
    ambientVideo.pause();
  });

  mainVideo.addEventListener('timeupdate', () => {
    if (Math.abs(mainVideo.currentTime - ambientVideo.currentTime) > 0.5) {
      ambientVideo.currentTime = mainVideo.currentTime;
    }
  });
};

document.addEventListener('DOMContentLoaded', syncVideos);
