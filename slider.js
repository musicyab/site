let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideContainer = document.querySelector('.slides');

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // اگر به آخر رسید، دوباره از اول شروع می‌کند
  updateSlidePosition();
}

function updateSlidePosition() {
  const offset = -currentIndex * 100; // هر بار که اسلاید تغییر می‌کند، موقعیت آن تغییر می‌کند
  slideContainer.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, 3000); // تغییر هر 3 ثانیه


function moveSlide(direction) {
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  updateSlidePosition();
}

function updateSlidePosition() {
  const offset = -currentIndex * 100; // حرکت به موقعیت جدید اسلاید
  slideContainer.style.transform = `translateX(${offset}%)`;
}
document.addEventListener("DOMContentLoaded", function () {
  // ایجاد یک آرایه حاوی لینک‌ها و نام آیکون‌ها
  const socialLinks = [
    { name: "facebook", url: "https://facebook.com" },
    { name: "twitter", url: "https://twitter.com" },
    { name: "instagram", url: "https://instagram.com" },
    { name: "youtube", url: "https://youtube.com" }
  ];

  // گرفتن عنصر کانتینر آیکون‌ها
  const container = document.getElementById("social-icons-container");

  // حلقه برای افزودن هر آیکون
  socialLinks.forEach(link => {
    const anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.target = "_blank"; // باز کردن در تب جدید
    anchor.classList.add("social-icon");

    // ایجاد آیکون FontAwesome
    const icon = document.createElement("i");
    icon.classList.add("fab", `fa-${link.name}`);
    
    // اضافه کردن آیکون به لینک
    anchor.appendChild(icon);
    
    // اضافه کردن لینک به کانتینر
    container.appendChild(anchor);
  });
});
function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}
