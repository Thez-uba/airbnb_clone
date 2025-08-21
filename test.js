function scrollLeft() {
    document.querySelector('.scroll-container').scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.querySelector('.scroll-container').scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}

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


