document.addEventListener('DOMContentLoaded', function () {
    const backgroundNoise = document.getElementById('backgroundNoise');
    const startMusicButton = document.getElementById('startMusicButton');

    // Create an array of songs
    const songs = [
        backgroundNoise, // Default background noise
        document.getElementById('song1'),
        document.getElementById('song2'),
        // Add more songs as needed
    ];

    console.log('Script loaded');

    // Play default background noise when the page loads
    backgroundNoise.play();

    let currentSongIndex = 0;

    startMusicButton.addEventListener('click', function () {
        console.log('Button clicked');

        // Pause the current song
        songs[currentSongIndex].pause();

        // Move to the next song
        currentSongIndex = (currentSongIndex + 1) % songs.length;

        // Play the next song
        songs[currentSongIndex].play();

        console.log(`Playing ${songs[currentSongIndex].id}`);
    });
});
