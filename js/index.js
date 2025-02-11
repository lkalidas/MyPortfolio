    // const menuIcon = document.querySelector('.menu-icon i');
    // menuIcon.addEventListener("click", function () {
    //     const navMenu = document.getElementById('nav-menu');
    //     if (navMenu.style.display === "none" || navMenu.style.display === "") {
    //         navMenu.style.display = "block";
    //         menuIcon.className = "fa fa-times";
    //     } else {
    //         navMenu.style.display = "none";
    //         menuIcon.className = "fa-solid fa-bars"
    //     }
    // });

    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        navbarToggle.classList.toggle('active');
    })

    let currentIndex = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;

    // Ensure index stays within bounds
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Calculate the translateX value
    const translateX = -currentIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// Auto slide every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);
