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
