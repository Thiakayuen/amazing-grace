
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


let lastScrollY = window.scrollY;
const addressBar = document.querySelector(".address-bar");
const stickyHeader = document.querySelector(".sticky-header");
const addressBarHeight = addressBar.offsetHeight;

// Set initial sticky header position
stickyHeader.style.top = `${addressBarHeight}px`;

window.addEventListener("scroll", () => {
    let currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
        // If scrolled down a bit, hide the address bar
        addressBar.style.transform = "translateY(-100%)";
        stickyHeader.style.top = "0";
    } else {
        // If scrolled all the way back up, show the address bar
        addressBar.style.transform = "translateY(0)";
        stickyHeader.style.top = `${addressBarHeight}px`;
    }

    lastScrollY = currentScrollY;
});



document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach((question) => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;

            // Toggle answer visibility
            if (answer.style.display === "block") {
                answer.style.display = "none"; // Close if already open
            } else {
                answer.style.display = "block"; // Open if closed
            }
        });
    });
});


function changeTitle(page) {
  document.title = page + " | Amazing Grace";
}

document.addEventListener("DOMContentLoaded", function () {
    changeTitle("Home");
  });

  let scrollTimeout;

// Detect when scrolling stops
window.addEventListener("scroll", function () {
  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    let sections = document.querySelectorAll("section");
    let windowHeight = window.innerHeight;
    
    sections.forEach((section) => {
      let rect = section.getBoundingClientRect();
      
      // Only update title if the section is fully visible
      if (rect.top >= 0 && rect.bottom <= windowHeight) {
        let pageTitle = section.getAttribute("id").replace("-", " ");
        changeTitle(pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1));
      }
    });
  }, 200); // Waits for scrolling to stop (200ms delay)
});



document.addEventListener("DOMContentLoaded", function () {
    let video = document.querySelector(".background-video");
    
    video.play().catch(error => {
      console.log("Autoplay failed, requiring user interaction", error);
    });
  });
  
/*
  document.getElementById('mobile-menu').addEventListener("click",()=>{
    document.getElementById('nav-menu').classList.toggle("active")
  }) */



    function toggleMenu() {
        let navDrawer = document.getElementById("navDrawer");
        let menuIcon = document.querySelector(".menu-icon");
        let closeIcon = document.querySelector(".close-icon");
    
        if (navDrawer.classList.contains("active")) {
            navDrawer.classList.remove("active");
            menuIcon.style.display = "block";
            closeIcon.style.display = "none";
        } else {
            navDrawer.classList.add("active");
            menuIcon.style.display = "none";
            closeIcon.style.display = "block";
        }
    }
    