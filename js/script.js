const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const drawer = document.querySelector(".drawer");
const overflow = document.querySelector(".overflow");
const drawerLinks = document.querySelectorAll(".drawerMenu__button")

openBtn.addEventListener("click", () => {
  drawer.classList.add("active");
  overflow.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  drawer.classList.remove("active");
  overflow.classList.remove("active");
});

overflow.addEventListener("click", () => {
  overflow.classList.remove("active");
  drawer.classList.remove("active");
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
})

// accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// drawer

let prevDrawerItem;

drawerLinks.forEach((el) => {
  el.addEventListener('click', () => {
    if (prevDrawerItem) {
      prevDrawerItem.classList.remove("drawerMenu__button--active")
    } 
    el.classList.add("drawerMenu__button--active")
    prevDrawerItem = el
  })
})
