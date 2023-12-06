document.addEventListener('DOMContentLoaded', function () {
    const backgroundNoise = document.getElementById('backgroundNoise');
    const startMusicButton = document.getElementById('startMusicButton');
    const song = document.getElementById('song');
  
    console.log('Script loaded');
  
    // Play background noise when the page loads
    backgroundNoise.play();
  
    startMusicButton.addEventListener('click', function () {
      console.log('Button clicked');
      // Toggle between playing background noise and the song
      if (backgroundNoise.paused) {
        console.log('Playing background noise');
        backgroundNoise.play();
        song.pause();
      } else {
        console.log('Playing song');
        backgroundNoise.pause();
        song.currentTime = 0; // Reset song to the beginning
        song.play();
      }
    });
  });
  