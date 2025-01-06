//navbar fixed
window.onscroll = function () {
      const header = document.querySelector('header');
      const fixedNav = header.offsetTop;
      if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
      } else {
        header.classList.remove('navbar-fixed');
      }
}
//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', function () {
  const filterDropdown = document.getElementById('filter-kategori');
  const portfolioItems = document.querySelectorAll('[data-kategori]');

  filterDropdown.addEventListener('change', function () {
      const selectedCategory = this.value;

      portfolioItems.forEach(item => {
          if (selectedCategory === 'all' || item.dataset.kategori === selectedCategory) {
              item.style.display = 'block';
          } else {
              item.style.display = 'none';
          }
      });
  });
});
