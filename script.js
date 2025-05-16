document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');

    // Hide loading screen and show content after animation
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        content.classList.remove('hidden');
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            content.classList.add('visible');
        }, 1000);
    }, 3000);
});