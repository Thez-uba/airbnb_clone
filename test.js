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


