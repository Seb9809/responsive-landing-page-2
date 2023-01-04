/*=============== SHOW MENU ===============*/
const d = document,
  $navMenu = d.getElementById("nav-menu"),
  $navToggle = d.getElementById("nav-toggle"),
  $navClose = d.getElementById("nav-close");

//Show Menu

if ($navToggle) {
  $navToggle.addEventListener("click", (e) => {
    $navMenu.classList.add("show-menu");
  });
}

//Hidden Menu

if ($navClose) {
  $navClose.addEventListener("click", (e) => {
    $navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const $navlink = d.querySelectorAll(".nav__link");

const $linkAction = () => {
  const $Menu = d.getElementById("nav-menu");
  $Menu.classList.remove("show-menu");
};

$navlink.forEach((n) => n.addEventListener("click", $linkAction));

//Background Header
const $scrollHeader = () => {
  const $header = d.getElementById("header");

  /* When the scroll is greater than 50 viewport height, the class scroll-header gets added to the header tag */
  this.scrollY >= 50
    ? $header.classList.add("scroll-header")
    : $header.classList.remove("scroll-header");
};
/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*=============== EMAIL JS ===============*/
const $contactForm = document.getElementById("contact-form"),
  $contactName = document.getElementById("contact-name"),
  $contactEmail = document.getElementById("contact-email"),
  $contactProject = document.getElementById("contact-project"),
  $contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  if (
    $contactName.value === "" ||
    $contactEmail.value === "" ||
    $contactProject.value === ""
  ) {
    $contactMessage.classList.remove("color-blue");
    $contactMessage.classList.add("color-red");

    $contactMessage.textContent = "Write all the input fields 📩";
  } else {
    emailjs
      .sendForm(
        "service_gm0xjxq",
        "template_k0brmxw",
        "#contact-form",
        "tHZ4-Hlqn5mO3sIHS"
      )
      .then(
        () => {
          $contactMessage.classList.add("color-blue");
          $contactMessage.textContent = "Message sent 🕵🏼";

          setTimeout(() => {
            $contactMessage.textContent = "";
          }, 3000);
        },
        (error) => {
          alert("Ops! A mistake has occurred", error);
        }
      );
    $contactName.value = "";
    $contactEmail.value = "";
    $contactProject.value = "";
  }
};

$contactForm.addEventListener("submit", sendEmail);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const $sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  $sections.forEach((cur) => {
    const sectionHeight = cur.offsetHeight,
      sectionTop = cur.offsetTop - 58,
      sectionId = cur.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const $scrollUp = d.getElementById("scroll-up");

  this.scrollY >= 350
    ? $scrollUp.classList.add("show-scroll")
    : $scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== DARK LIGHT THEME ===============*/
const $themeButton = d.getElementById("theme-button"),
  $darkTheme = "dark-theme",
  $iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  d.body.classList.contains($darkTheme) ? "dark" : "light";

const getCurrentIcon = () =>
  $themeButton.classList.contains($iconTheme)
    ? "ri-moon-clear-line"
    : "ri-sun-line";

if (selectedTheme) {
  d.body.classList[selectedTheme === "dark" ? "add" : "remove"]($darkTheme);
  $themeButton.classList[
    selectedIcon === "ri-moon-clear-line" ? "add" : "remove"
  ]($iconTheme);
}

$themeButton.addEventListener("click", () => {
  d.body.classList.toggle($darkTheme);
  $themeButton.classList.toggle($iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
  const $header = document.getElementById("header");

  this.scrollY >= 50
    ? $header.classList.add("bg-header")
    : $header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const scr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  //reset: true
});

scr.reveal(
  `.home__data, .projects__container, .testimonial__container, .footer__container`
);
scr.reveal(`.home__data div`, { delay: 600, origin: "bottom", interval: 100 });
scr.reveal(`.skills__content:nth-child(1), .contact__content:nth-chil(1)`, {
  origin: "left",
});
scr.reveal(`.skills__content:nth-child(2), .contact__content:nth-chil(2)`, {
  origin: "right",
});
scr.reveal(`.qualification__content, .services__card`, { interval: 100 });
