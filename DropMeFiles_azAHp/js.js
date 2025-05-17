// Инициализация переменных
let dollarsPerClick = 1;
let totalDollars = 0;

// Находим кнопку кликера (добавьте класс 'clicker' в HTML)
const clickerButton = document.querySelector('.clicker'); // Или добавьте класс clicker в HTML
const dollar = document.querySelector(".dollar")

// Обработчик клика
clickerButton.addEventListener('click', () => {
    totalDollars += dollarsPerClick;
    dollar.innerHTML = totalDollars + '$'
     // Для отладки
    // Здесь можно добавить обновление интерфейса
});