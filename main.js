
// This script is used to change the image on the home page every 4 seconds.

const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 4000); // Change image every 4 seconds
showSlide(currentIndex);



document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    let index = 0;

    function showTestimonial() {
        // Hide all testimonials
        testimonials.forEach((testimonial) => {
            testimonial.classList.remove("active");
            testimonial.style.left = "100%"; // Move off-screen
            testimonial.style.opacity = "0"; // Hide it
        });

        // Show only the current one
        testimonials[index].classList.add("active");
        testimonials[index].style.left = "0"; // Bring it in
        testimonials[index].style.opacity = "1"; // Make it visible

        // Update index for next slide
        index = (index + 1) % testimonials.length; // Loop through all testimonials
    }

    // Ensure all testimonials start off-screen except the first one
    testimonials.forEach((testimonial, i) => {
        if (i !== 0) {
            testimonial.style.left = "100%"; 
            testimonial.style.opacity = "0"; 
        } else {
            testimonial.classList.add("active");
        }
    });

    // Show the first one immediately
    showTestimonial();

    // Change testimonial every 3 seconds
    setInterval(showTestimonial, 7000);
});



document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    alert("Thank you for contacting us! We'll get back to you soon.");
    
    // You can add code here to send the form data to an email or backend server
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50, // Adjust if needed
                behavior: "smooth"
            });
        }
    });
});





