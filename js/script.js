const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Close the mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// Sticky header

window.addEventListener("scroll", function () {
  if (window.scrollY >= 720) {
    this.document.body.classList.add("sticky");
  } else {
    this.document.body.classList.remove("sticky");
  }
});

// Location

var map = L.map("map").setView([23.035373099997514, 72.50513840000072], 100);
var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

osm.addTo(map);

var singleMarker = L.marker([23.035373099997514, 72.50513840000072]);
var popup = singleMarker.bindPopup("<h2>Akshar Electric</h2>").openPopup();
popup.addTo(map);


// slide Image
let items = document.querySelectorAll('.carousel .carousel-item')
		items.forEach((el) => {
			const minPerSlide = 5
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

