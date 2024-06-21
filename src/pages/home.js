document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides');
  const slide = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let currentIndex = 0;
  const totalSlides = slide.length;

  function showSlide(index) {
      if (index >= totalSlides) {
          currentIndex = 0;
      } else if (index < 0) {
          currentIndex = totalSlides - 1;
      } else {
          currentIndex = index;
      }
      const offset = -currentIndex * 100;
      slides.style.transform = `translateX(${offset}%)`;
      console.log(`Showing slide ${currentIndex}`);
  }

  prevButton.addEventListener('click', () => {
      console.log('Prev button clicked');
      showSlide(currentIndex - 1);
  });

  nextButton.addEventListener('click', () => {
      console.log('Next button clicked');
      showSlide(currentIndex + 1);
  });

  showSlide(currentIndex);
});
