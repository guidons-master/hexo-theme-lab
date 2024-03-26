

function loadScript(src, defer, async, autoReplaceSvg, root = "/hexo-theme-lab") {
    var script = document.createElement('script');
    script.src = root + src;
    script.defer = defer;
    script.async = async;
    if (autoReplaceSvg) {
        script.dataset.autoReplaceSvg = autoReplaceSvg;
    }
    document.head.appendChild(script);
}

(function () {
    let timeout = setTimeout(function() {
        document.body.style.opacity = 1;
    }, 1000);

    window.onload = function() {
        clearTimeout(timeout);
        document.body.style.opacity = 1;
    };
})();

document.addEventListener('DOMContentLoaded', function() {
    loadScript("/js/fontawesome.js", false, true, "nest");
    loadScript("/js/header.js", true, false);
    loadScript("/js/footer.js", true, false);
    loadScript("/js/pagination.js", true, false);
    loadScript("/js/team.js", true, false);
    loadScript("/js/search.js", true, false);
});

console.log("main.js loaded")