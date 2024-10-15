let currentSlide = 0;

// Пример изображений для CAPTCHA
const images = [
    { src: 'images/cat1.jpg', isCat: true },
    { src: 'images/dog1.jpg', isCat: false },
    { src: 'images/cat2.jpg', isCat: true },
    { src: 'images/dog2.jpg', isCat: false },
    { src: 'images/cat3.jpg', isCat: true },
    { src: 'images/dog3.jpg', isCat: false }
];

// Перемешивание изображений
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Отображение изображений CAPTCHA
function displayImages() {
    const container = document.querySelector('.images');
    const shuffledImages = shuffle(images);

    shuffledImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.dataset.isCat = image.isCat;
        imgElement.onclick = () => imgElement.classList.toggle('selected');
        container.appendChild(imgElement);
    });
}

// Проверка CAPTCHA
function validateCaptcha() {
  const selectedImages = document.querySelectorAll('.images img.selected');
  let correct = true;

  selectedImages.forEach(img => {
      if (img.dataset.isCat !== 'true') {
          correct = false;
      }
  });

  const message = document.getElementById('message');
  if (correct && selectedImages.length > 0) {
      message.style.color = 'green';
      message.textContent = 'Верно!';
      message.style.display = 'block';
      
      // Показываем слайдер и скрываем CAPTCHA
      const sliderContainer = document.querySelector('.slider-container');
      const captchaContainer = document.querySelector('.captcha-container');
      
      if (sliderContainer && captchaContainer) {
          sliderContainer.style.display = 'block'; // Убираем display: none;
          captchaContainer.style.display = 'none'; // Скрываем CAPTCHA
      } else {
          console.error('Slider or CAPTCHA container not found.');
      }
  } else {
      message.textContent = 'Попробуйте снова.';
      message.style.display = 'block';

      // Перемешиваем изображения при неправильном вводе
      const container = document.querySelector('.images');
      container.innerHTML = ''; // Очищаем контейнер изображений 
      displayImages(); // Отображаем перемешанные изображения
  }
}

// Инициализация CAPTCHA
window.onload = displayImages;

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

