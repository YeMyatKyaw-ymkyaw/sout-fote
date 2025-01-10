let currentIndex = 0;
    const slides = document.querySelectorAll('.slides');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
      if (index >= slides.length) currentIndex = 0;
      if (index < 0) currentIndex = slides.length - 1;

      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
      });

      slides[currentIndex].classList.add('active');
      dots[currentIndex].classList.add('active');
    }

    function changeSlide(step) {
      currentIndex += step;
      showSlide(currentIndex);
    }

    function currentSlide(index) {
      currentIndex = index;
      showSlide(currentIndex);
    }

    setInterval(() => {
      changeSlide(1);
    }, 3000);