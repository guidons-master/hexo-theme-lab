(function() {
    let backToTopButton = document.getElementById('back-to-top');

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function() {
        if (this.scrollY) {
            backToTopButton.style.opacity = 1;
            backToTopButton.blur();
            backToTopButton.style.pointerEvents = 'auto';
        } else {
            backToTopButton.style.opacity = 0;
            backToTopButton.style.pointerEvents = 'none';
        }
    });
})();