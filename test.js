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


/* const openBtn = document.getElementById('openPopover');
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
 */


/* const container = document.querySelector(".scroll-container");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

// Scroll step size
const scrollAmount = 300;

// Scroll function
function scrollLeft() {
  container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
}

function scrollRight() {
  container.scrollBy({ left: scrollAmount, behavior: "smooth" });
}

// Check arrow visibility
function updateButtons() {
  const scrollLeftVal = container.scrollLeft;
  const scrollWidth = container.scrollWidth;
  const clientWidth = container.clientWidth;

  // Show/hide left button
  if (scrollLeftVal > 0) {
    leftBtn.classList.remove("d-none");
  } else {
    leftBtn.classList.add("d-none");
  }

  // Show/hide right button
  if (scrollLeftVal + clientWidth >= scrollWidth - 5) {
    rightBtn.classList.add("d-none");
  } else {
    rightBtn.classList.remove("d-none");
  }
}

// Event listeners
leftBtn.addEventListener("click", scrollLeft);
rightBtn.addEventListener("click", scrollRight);
container.addEventListener("scroll", updateButtons);

// Initial check
updateButtons();

 */