function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

button.addEventListener('click', () => {

  const randomColor = getRandomHexColor()            // Генерируем случайный цвет

  document.body.style.backgroundColor = randomColor; // Изменяем цвет фона на body

  spanColor.textContent = randomColor;               // Обновляем текст в span с новым цветом
});



   