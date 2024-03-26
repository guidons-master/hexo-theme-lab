(function() {
  const navbarBurgers = document.querySelector('a.navbar-burger');
  const moonIcon = document.querySelector('.fa-moon');
  const sunIcon = document.querySelector('.fa-sun');
  const shadow = document.getElementById('markdown-container')?.shadowRoot;
  const nav = document.querySelector('nav.navbar');
  const searchIcon = document.getElementById('search-icon');
  const searchInput = document.querySelector("#search-input");
  const searchClose = document.querySelector('#search-input > .modal-background');
  // const languageIcon = document.querySelector(".fa-language");

  if (navbarBurgers) {
    navbarBurgers.addEventListener('click', () => {
      const target = document.getElementById(navbarBurgers.dataset.target);
      navbarBurgers.classList.toggle('is-active');
      target.classList.toggle('is-active');
    });
  }

  moonIcon.addEventListener('click', () => {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
    shadow?.querySelector('.markdown-body').classList.add('dark');
  });

  sunIcon.addEventListener('click', () => {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
    document.body.classList.remove('dark-mode');
    localStorage.removeItem('darkMode');
    shadow?.querySelector('.markdown-body').classList.remove('dark');
  });

  searchIcon.addEventListener('click', () => {
    searchInput.classList.add('is-active');
  });

  searchClose.addEventListener('click', () => {
    searchInput.classList.remove('is-active');
  });

  // languageIcon.addEventListener('click', () => {
  //   languageIcon.classList.toggle('fa-flip-horizontal');
  // });

  if (localStorage.getItem('darkMode') === 'true')
    moonIcon.click();
  else
    sunIcon.click();

  window.addEventListener('scroll', () => {
    nav.classList.toggle('shadow', window.scrollY > 0);
  });
})();