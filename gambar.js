
  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.slider img');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  let index = 0;

  next.addEventListener('click', () => {
    if (index < images.length - 1) {
      index++;
    } else {
      index = 0;
    }
    updateSlider();
  });

  prev.addEventListener('click', () => {
    if (index > 0) {
      index--;
    } else {
      index = images.length - 1;
    }
    updateSlider();
  });

  function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }
