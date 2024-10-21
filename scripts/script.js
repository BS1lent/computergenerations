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

    const phonePattern = /^[+]?[0-9\s()-]{7,15}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!phonePattern.test(phone)) {
        alert('Неверный формат телефона');
        return;
    }
    if (!emailPattern.test(email)) {
        alert('Неверный формат электронной почты');
        return;
    }
    if (experience < 0) {
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