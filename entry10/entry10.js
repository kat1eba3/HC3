document.addEventListener("DOMContentLoaded", function () {
    // Get the audio element
    const audio = document.getElementById('backgroundAudio');

    // Check if the browser supports the `play` method
    if (audio.play) {
        // Start playback after a short delay
        setTimeout(function () {
            audio.play();
        }, 1000); // Adjust the delay as needed
    }
});
