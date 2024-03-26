(function() {
    let boxs = document.querySelectorAll("div.page > div > div.box");
    let pre = document.querySelector("div.page > nav.pagination > a.pagination-previous");
    let next = document.querySelector("div.page > nav.pagination > a.pagination-next");
    let a = document.querySelectorAll("div.page > nav.pagination > ul.pagination-list > li > a");
    let page = 1;

    function showPage(page) {
        for (let i = 0; i < boxs.length; i++) {
            if (i >= (page - 1) * perPagePosts && i < page * perPagePosts) {
                boxs[i].style.display = "block";
            } else {
                boxs[i].style.display = "none";
            }
        }
    }

    function checkDisabled() {
        if (page == 1) {
            pre.classList.add("is-disabled");
        } else {
            pre.classList.remove("is-disabled");
        }
        if (page == a.length) {
            next.classList.add("is-disabled");
        } else {
            next.classList.remove("is-disabled");
        }
    }

    a?.forEach((item) => {
        item.addEventListener("click", () => {
            a[page - 1].classList.remove("is-current");
            item.classList.add("is-current");
            page = parseInt(item.innerHTML);
            showPage(page);
            checkDisabled();
        });
    });

    pre?.addEventListener("click", () => {
        if (page > 1) {
            a[page-- - 1].classList.remove("is-current");
            a[page - 1].classList.add("is-current");
            showPage(page);
            checkDisabled();
        }
    });

    next?.addEventListener("click", () => {
        if (page < a.length) {
            a[page++ - 1].classList.remove("is-current");
            a[page - 1].classList.add("is-current");
            showPage(page);
            checkDisabled();
        }
    });
})();