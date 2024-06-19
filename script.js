let timeout;
document.addEventListener('mousemove', function(e) {
    if (timeout) {
        cancelAnimationFrame(timeout);
    }
    timeout = requestAnimationFrame(function() {
        const videoContainer = document.getElementById('videoContainer');
        const x = (e.clientX - window.innerWidth / 2) / 20;
        const y = (e.clientY - window.innerHeight / 2) / 20;
        videoContainer.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundMusic');
    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.catch(function(error) {
            console.log('Autoplay was prevented. Trying to play again after user interaction.');
            // Wait for user interaction
            document.body.addEventListener('click', function() {
                audio.play();
            }, { once: true });
        });
    }
});
