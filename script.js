let currentSlide = 0;

// Функция для смены слайда
function moveSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Автоматическое пролистывание слайдов
function autoSlide() {
  moveSlide(1); // Переход к следующему слайду
}

// Устанавливаем интервал для автоматического пролистывания каждые 3 секунды
setInterval(autoSlide, 1500);
