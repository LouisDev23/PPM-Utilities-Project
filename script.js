document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlideIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      });
    }
  
    function nextSlide() {
      currentSlideIndex++;
      if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
      }
      showSlide(currentSlideIndex);
    }
  
    // Set the initial slide
    showSlide(currentSlideIndex);
  
    // Automatically switch to the next slide every 5 seconds
    setInterval(nextSlide, 5000);
  });
 
    document.addEventListener('DOMContentLoaded', function() {
      const popupButton = document.getElementById('popupButton');
      const popup = document.getElementById('popup');
      const closeButton = document.getElementById('closeButton');
  
      popupButton.addEventListener('click', function() {
          popup.style.display = 'block';
      });
  
      closeButton.addEventListener('click', function() {
          popup.style.display = 'none';
      });
  });
  //Script to link tarrif page with external page
  document.getElementById('externalLinkButton').addEventListener('click', function() {
    window.open('https://script.google.com/macros/s/AKfycbwr868a_aTk46McGYZpEIONS7dD5QyNTNubPS1rqN10Fx3w4-MoFmdWXyOrPrS3YzXG/exec', '_blank'); // Replace with your external URL
});
  // Show/hide the scroll-to-top button based on scroll position
  window.addEventListener('scroll', function() {
    var scrollButton = document.getElementById('scroll-to-top-button');
    if (window.pageYOffset > 100) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });

  // Scroll to top when the button is clicked
  document.getElementById('scroll-to-top-button').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  