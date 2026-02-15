// HERO SLIDESHOW
const hero = document.querySelector(".hero");

const images = [
  "image/sda1.jpg",
  "image/students.jpg",
  "image/sda3.jpg",
  "image/sda4.jpg",
  "image/sda5.jpg"
];

let index = 0;
hero.style.backgroundImage = `url(${images[index]})`;

setInterval(() => {
  index = (index + 1) % images.length;
  hero.style.backgroundImage = `url(${images[index]})`;
}, 4000);


// MOBILE MENU
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}


// SCROLL ANIMATION (ALL SECTIONS)
const animatedItems = document.querySelectorAll(
  ".animate-left, .animate-right, .animate-up, .animate-card"

);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.25 }
);

animatedItems.forEach((item) => observer.observe(item));

// FACILITIES SCROLL
const scrollContainer = document.getElementById("facilityScroll");

function scrollFacilities(direction) {
  const scrollAmount = 320;

  scrollContainer.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

// FORM SUBMIT
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;

  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value
  };

  fetch("https://script.google.com/macros/s/AKfycbzmuHP3MdoeEINiEt9fXZP7Iikbvzvc7GtqxgC_hwvz6RlAD9SJ2MMj3j96MFwrAlSEWQ/exec", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(() => {
    document.getElementById("successMsg").style.display = "block";
    form.reset();
    setTimeout(() => {
      document.getElementById("successMsg").style.display = "none";
    }, 4000);
  })
  .catch(err => {
    console.error(err);
    alert("Something went wrong ❌ Check console");
  });
}

function openFacility(img, title, desc) {
  document.getElementById("popupImg").src = img;
  document.getElementById("popupTitle").innerText = title;
  document.getElementById("popupDesc").innerText = desc;
  document.getElementById("facilityPopup").style.display = "flex";
}

function closeFacility() {
  document.getElementById("facilityPopup").style.display = "none";
}

function scrollFacility(direction) {
  const container = document.querySelector('.facility-scroll');
  const scrollAmount = 420; // adjust if needed
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}
function toggleMenu(){
  document.getElementById("mobileMenu").classList.toggle("active");
}



