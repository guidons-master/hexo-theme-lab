(function() {
    let searchData = [];
    const searchResult = document.querySelector('#search-input .panel-blocks');
    const tabAll = document.querySelector('#tab-all');
    const tabTeam = document.querySelector('#tab-team');
    const tabProjects = document.querySelector('#tab-projects');
    const tabResearch = document.querySelector('#tab-research');

    fetch('/hexo-theme-lab/search.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            searchData = data;
        });

    function checkUrl(url) {
        if (url.indexOf('/team/') !== -1) {
            return 'block-team';
        } else if (url.indexOf('/projects/') !== -1) {
            return 'block-projects';
        } else if (url.indexOf('/research/') !== -1) {
            return 'block-research';
        } else return '';
    }

    tabAll.addEventListener('click', function() {
        tabAll.classList.add('is-active');
        tabTeam.classList.remove('is-active');
        tabProjects.classList.remove('is-active');
        tabResearch.classList.remove('is-active');
        document.querySelectorAll('.panel-blocks a').forEach(function (el) {
            el.style.display = 'block';
        });
    });

    tabTeam.addEventListener('click', function() {
        tabAll.classList.remove('is-active');
        tabTeam.classList.add('is-active');
        tabProjects.classList.remove('is-active');
        tabResearch.classList.remove('is-active');
        document.querySelectorAll('.panel-blocks a').forEach(function (el) {
            el.style.display = el.classList.contains('block-team') ? 'block' : 'none';
        });
    });

    tabProjects.addEventListener('click', function() {
        tabAll.classList.remove('is-active');
        tabTeam.classList.remove('is-active');
        tabProjects.classList.add('is-active');
        tabResearch.classList.remove('is-active');
        document.querySelectorAll('.panel-blocks a').forEach(function (el) {
            el.style.display = el.classList.contains('block-projects') ? 'block' : 'none';
        });
    });

    tabResearch.addEventListener('click', function() {
        tabAll.classList.remove('is-active');
        tabTeam.classList.remove('is-active');
        tabProjects.classList.remove('is-active');
        tabResearch.classList.add('is-active');
        document.querySelectorAll('.panel-blocks a').forEach(function (el) {
            el.style.display = el.classList.contains('block-research') ? 'block' : 'none';
        });
    });
        
    document.querySelector('#search-input .input').addEventListener('keyup', function() {
        let query = this.value.trim();
        if (!query) {
            searchResult.innerHTML = '';
            return;
        }

        let html = '';
        searchData.forEach(function (post) {
            if ((post.title && post.title.indexOf(query) !== -1) || (post.content && post.content.indexOf(query) !== -1)) {
                html += '<a class="panel-block ' + checkUrl(post.url) + '" href="' + post.url + '">' +
                            '<span class="panel-icon">' +
                                '<i class="fas fa-book" aria-hidden="true"></i>' +
                            '</span>' +
                            post.title +
                        '</a>';
            }
        });

        searchResult.innerHTML = html;
    });
})();