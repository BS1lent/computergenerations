document.getElementById('employment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value.trim();
    const birthDate = document.getElementById('birthDate').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const position = document.getElementById('position').value.trim();
    const experience = document.getElementById('experience').value.trim();
    const education = document.getElementById('education').value.trim();
    const skills = document.getElementById('skills').value.trim();
    const language = document.getElementById('language').value.trim();
    const references = document.getElementById('references').value.trim();

    const birthDatePattern = /^(19[4-9][0-9]|200[0-9]|2010)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;    
    const fullnamePattern = /^[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+$/; // ФИО: Имя Отчество Фамилия
    const phonePattern = /^\+\d{11}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!birthDatePattern.test(birthDate)) {
        createCaptcha();
       alert('Некорректная Дата рождения.\n');
        return;
    }

    if (!fullnamePattern.test(fullName)) {
        createCaptcha();
       alert('Некорректное ФИО. Убедитесь, что оно введено в формате: Имя Отчество Фамилия.\n');
        return;
    }

    if (!phonePattern.test(phone)) {
        createCaptcha();
        alert('Неверный формат телефона');
        return;
    }
    if (!emailPattern.test(email)) {
        createCaptcha();
        alert('Неверный формат электронной почты');
        return;
    }
    if (experience < 0) {
        createCaptcha();
        alert('Опыт работы не может быть отрицательным');
        return;
    }

    // Скрываем форму и показываем окно подтверждения
    document.getElementById('employment-form').classList.add('hidden');
    document.getElementById('confirmation').classList.remove('hidden');

    // Перевод данных
    const translatedData = {
        fullName: transliterate(fullName),
        birthDate: transliterate(birthDate),
        email: transliterate(email),
        phone: transliterate(phone),
        position: transliterate(position),
        experience: transliterate(experience.toString()),
        education: transliterate(education),
        skills: transliterate(skills),
        language: transliterate(language),
        references: transliterate(references)
    };

    const translatedOutput = document.getElementById('translated-output');
    translatedOutput.innerHTML = `
        <p><strong>ФИО:</strong> <span class="original">${fullName}</span> <span class="arrow">=> </span> <span class="translated">${translatedData.fullName}</span></p>
        <p><strong>Дата рождения:</strong> <span class="translated">${birthDate}</span></p>
        <p><strong>Электронная почта:</strong> <span class="translated">${email}</span></p>
        <p><strong>Телефон:</strong> <span class="translated">${phone}</span></p>
        <p><strong>Должность:</strong> <span class="original">${position}</span> <span class="arrow">=> </span> <span class="translated">${translatedData.position}</span></p>
        <p><strong>Опыт работы:</strong> <span class="translated">${experience}</span></p>
        <p><strong>Образование:</strong> <span class="original">${education}</span> <span class="arrow">=> </span> <span class="translated">${translatedData.education}</span></p>
        <p><strong>Навыки:</strong> <span class="original">${skills}</span> <span class="arrow">=> </span> <span class="translated">${translatedData.skills}</span></p>
        <p><strong>Знание языков:</strong> <span class="original">${language}</span> <span class="arrow">=> </span> <span class="translated">${translatedData.language}</span></p>
        <p><strong>Рекомендации:</strong> <span class="original">${references}</span> <span class="arrow">=> </span> <span class="translated">${translatedData.references}</span></p>
    `;
});

// Обработчик для кнопки "Подтвердить данные"
document.getElementById('confirm-btn').addEventListener('click', function() {
    alert('Данные отправлены');
    location.reload(); // Перезагрузка страницы для возврата к началу
});

// Обработчик для кнопки "Назад"
document.getElementById('back-btn').addEventListener('click', function() {
    document.getElementById('confirmation').classList.add('hidden');
    document.getElementById('employment-form').classList.remove('hidden');
});

// Функция для "перевода" кириллицы в латиницу
function transliterate(text) {
    if (typeof text !== 'string') {
        console.error('Input is not a string:', text);
        return text;
    }
    const translitMap = {
        'А': 'A', 'а': 'a',
        'Б': 'B', 'б': 'b',
        'В': 'V', 'в': 'v',
        'Г': 'G', 'г': 'g',
        'Д': 'D', 'д': 'd',
        'Е': 'E', 'е': 'e',
        'Ё': 'Yo', 'ё': 'yo',
        'Ж': 'Zh', 'ж': 'zh',
        'З': 'Z', 'з': 'z',
        'И': 'I', 'и': 'i',
        'Й': 'Y', 'й': 'y',
        'К': 'K', 'к': 'k',
        'Л': 'L', 'л': 'l',
        'М': 'M', 'м': 'm',
        'Н': 'N', 'н': 'n',
        'О': 'O', 'о': 'o',
        'П': 'P', 'п': 'p',
        'Р': 'R', 'р': 'r',
        'С': 'S', 'с': 's',
        'Т': 'T', 'т': 't',
        'У': 'U', 'у': 'u',
        'Ф': 'F', 'ф': 'f',
        'Х': 'Kh', 'х': 'kh',
        'Ц': 'Ts', 'ц': 'ts',
        'Ч': 'Ch', 'ч': 'ch',
        'Ш': 'Sh', 'ш': 'sh',
        'Щ': 'Shch', 'щ': 'shch',
        'Ы': 'Y', 'ы': 'y',
        'Э': 'E', 'э': 'e',
        'Ю': 'Yu', 'ю': 'yu',
        'Я': 'Ya', 'я': 'ya',
        'Ь': " ", "ь": " ",
        'Ъ': " ", "ъ": " ",
    };

    return text.split('').map(char => translitMap[char] || char).join('');
}





// Массив с изображениями
const images = [
    'images/image1.jpg', // Например, это правильное изображение
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg'
];

// Укажите индекс правильного изображения (например, 4 для 'image5.jpg')
const correctImageIndex = 4; // Задайте здесь индекс правильного изображения
let shuffledImages = [];
let attempts = 0; // Счетчик попыток
const maxAttempts = 5; // Максимальное количество попыток

// Функция для создания капчи
function createCaptcha() {
    // Скрываем основной контент
    const mainContent = document.getElementById('form-container');
    if (mainContent) {
        mainContent.style.display = 'none';
    }

    // Удаляем предыдущую капчу, если она существует 
    const existingCaptchaContainer = document.getElementById('captcha-container');
    if (existingCaptchaContainer) {
        existingCaptchaContainer.remove();
    }

    // Создаем новый контейнер для капчи
    const captchaContainer = document.createElement('div');
    captchaContainer.id = 'captcha-container';
    captchaContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; // Темный фон
    captchaContainer.style.color = 'white';
    captchaContainer.style.display = 'flex';
    captchaContainer.style.flexDirection = 'column';
    captchaContainer.style.alignItems = 'center';
    captchaContainer.style.justifyContent = 'center';
    captchaContainer.style.height = '100vh';
    document.body.appendChild(captchaContainer);

    const title = document.createElement('h2');
    title.textContent = 'Выберите изображение где не изображена собака:';
    captchaContainer.appendChild(title);

    // Перемешиваем изображения 
    shuffledImages = shuffleArray([...images]);

    // Находим индекс правильного изображения в перемешанном массиве 
    const correctImage = images[correctImageIndex];
    const correctImageNewIndex = shuffledImages.indexOf(correctImage);

    const imagesContainer = document.createElement('div');
    imagesContainer.style.display = 'flex';
    imagesContainer.style.flexWrap = 'wrap';
    imagesContainer.style.justifyContent = 'center';

    shuffledImages.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = 'Картинка';
        imgElement.style.width = '100px';
        imgElement.style.height = '100px';
        imgElement.style.margin = '10px';
        imgElement.style.cursor = 'pointer';
        imgElement.style.border = '2px solid transparent';

        imgElement.addEventListener('mouseover', () => {
            imgElement.style.border = '2px solid yellow';
        });

        imgElement.addEventListener('mouseout', () => {
            imgElement.style.border = '2px solid transparent';
        });

        imgElement.addEventListener('click', () => checkAnswer(index, correctImageNewIndex));

        imagesContainer.appendChild(imgElement);
    });

    captchaContainer.appendChild(imagesContainer);
    const message = document.createElement('div');
    message.id = 'message';
    captchaContainer.appendChild(message);
}

// Функция для проверки ответа
function checkAnswer(selectedIndex, correctImageIndex) {
    const message = document.getElementById('message');
    attempts++; // Увеличиваем счетчик попыток

    if (selectedIndex === correctImageIndex) {
        disableCaptcha()
        message.textContent = 'Правильно!';
        message.style.color = 'green';

        // Удаляем капчу через 1 секунду
        setTimeout(() => {
            const captchaContainer = document.getElementById('captcha-container');
            if (captchaContainer) {
                captchaContainer.style.display = 'none'; // Скрываем капчу 
                }
            const mainContent = document.getElementById('form-container');
            if (mainContent) {
                mainContent.style.display = 'block'; // Показываем основной контент
            }
        }, 500);
    } else {
        message.textContent = 'Неправильно, попробуйте снова.';
        message.style.color = 'red';
        disableCaptcha()
        // Если превышено максимальное количество попыток
        if (attempts >= maxAttempts) {
            message.textContent = 'Вы исчерпали все попытки. Пожалуйста, обновите страницу для новой капчи.';
            message.style.color = 'black';
            disableCaptcha(); // Отключаем капчу
        } else {
            // Обновляем капчу 
            setTimeout(() => {
                createCaptcha();
            }, 2000); // Задержка перед обновлением капчи
        }
    }
}

// Функция для отключения капчи
function disableCaptcha() {
    const captchaContainer = document.getElementById('captcha-container');
    if (captchaContainer) {
        captchaContainer.style.pointerEvents = 'none'; // Блокируем взаимодействие
    }
}

// Функция для перемешивания массива
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Меняем местами
    }
    return array;
}