const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Настройка CORS
app.use(cors());
app.use(bodyParser.json());

// Настройка подключения к базе данных
const db = mysql.createConnection({
    host: 'localhost',
    user: 'computergenerations', // Замените на ваше имя пользователя
    password: 'root', // Замените на ваш пароль 
    database: 'computergenerations'
});

// Подключение к базе данных 
db.connect(err => {
    if (err) {
        console.error('Ошибка подключения к базе данных:', err);
        return;
    }
    console.log('Подключено к базе данных MySQL');
});

// Обработка POST-запроса для отправки данных анкеты 
app.post('/submit', (req, res) => {
    const application = req.body;
    const sql = 'INSERT INTO usersKIR SET ?';
    db.query(sql, application, (err, result) => {
        if (err) {
            console.error('Ошибка при вставке данных:', err);
            return res.status(500).send('Ошибка при вставке данных');
        }
        res.status(201).send('Данные успешно отправлены');
    });
});

app.post('/translated-submit', (req, res) => {
    const application = req.body;
    const sql = 'INSERT INTO usersLAT SET ?';
    db.query(sql, application, (err, result) => {
        if (err) {
            console.error('Ошибка при вставке данных:', err);
            return res.status(500).send('Ошибка при вставке данных');
        }
        res.status(201).send('Данные успешно отправлены');
    });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
