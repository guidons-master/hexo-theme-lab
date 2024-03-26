document.querySelectorAll('#tabs li').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('#tabs li').forEach(tab => {
            tab.classList.remove('is-active');
        });

        this.classList.add('is-active');

        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });

        const content = document.getElementById(this.dataset.tab);
        if (content) {
            content.style.display = 'block';
        }
    });
});