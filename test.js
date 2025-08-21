  /* const scrollContainer = document.getElementById("scrollContainer");

  function scrollLeft() {
    scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
  }

  function scrollRight() {
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
  } */
  
  document.querySelectorAll(".scroll-container").forEach((container, index) => {
    const leftBtn = container.previousElementSibling.querySelector(".scroll-left");
    const rightBtn = container.previousElementSibling.querySelector(".scroll-right");

    function updateArrows() {
      const scrollLeftPos = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;

      leftBtn.disabled = scrollLeftPos <= 0;
      rightBtn.disabled = scrollLeftPos + clientWidth >= scrollWidth - 1;
    }

    leftBtn.addEventListener("click", () => {
      container.scrollBy({ left: -300, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
      container.scrollBy({ left: 300, behavior: "smooth" });
    });

    container.addEventListener("scroll", updateArrows);
    window.addEventListener("load", updateArrows);
  });


const menuBtn = document.getElementById("menuBtn");
    const sideDropdown = document.getElementById("sideDropdown");

    menuBtn.addEventListener("click", () => {
      sideDropdown.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!menuBtn.contains(e.target) && !sideDropdown.contains(e.target)) {
        sideDropdown.classList.remove("show");
      }
    });

const openBtn = document.getElementById('openPopover');
const closeBtn = document.getElementById('closePopover');
const backdrop = document.getElementById('popoverBackdrop');
const popover = document.getElementById('popoverBox');

function openPopover() {
  backdrop.classList.remove('d-none');
  popover.classList.remove('d-none');
}

function closePopover() {
  backdrop.classList.add('d-none');
  popover.classList.add('d-none');
}

openBtn.addEventListener('click', openPopover);
closeBtn.addEventListener('click', closePopover);
backdrop.addEventListener('click', closePopover);


  let lastScrollY = window.scrollY;
  const bottomNav = document.querySelector('.bottom-nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      // scrolling down → hide
      bottomNav.style.transform = 'translateY(100%)';
    } else {
      // scrolling up → show
      bottomNav.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
  });

  /* const navbar = document.querySelector(".nav-bar");
  const searchBar = document.querySelector(".search-bar");
  const compactSearch = document.querySelector(".compact-search");

  let lastScrollTop = 0;

  window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down → show compact, hide full search
      searchBar.classList.add("d-none");
      compactSearch.classList.remove("d-none");
      navbar.classList.add("navbar-compact");
    } else {
      // Scrolling up (towards top) → restore full navbar
      if (scrollTop < 50) { // only when near top
        searchBar.classList.remove("d-none");
        compactSearch.classList.add("d-none");
        navbar.classList.remove("navbar-compact");
      }
    }
    
    if (scrollTop > 50) {
      // After scrolling down: hide big search, show compact
      searchBar.classList.add("d-none");
      compactSearch.classList.remove("d-none");
      navbar.classList.add("navbar-compact");
    } else {
      // Back at top: show full search, hide compact
      searchBar.classList.remove("d-none");
      compactSearch.classList.add("d-none");
      navbar.classList.remove("navbar-compact");
    }

    lastScrollTop = scrollTop;
  }); */