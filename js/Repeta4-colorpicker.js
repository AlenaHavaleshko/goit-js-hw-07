const colors = [
 { hex: '#f44336', rgb: '244,67,54' },
 { hex: '#e91e63', rgb: '233,30,99' },
 { hex: '#9c27b0', rgb: '156,39,176' },
 { hex: '#673ab7', rgb: '103,58,183' },
 { hex: '#3f51b5', rgb: '63,81,181' },
 { hex: '#2196f3', rgb: '33,150,243' },
 { hex: '#00bcd4', rgb: '0,188,212' },
 { hex: '#009688', rgb: '0,150,136' },
 { hex: '#4caf50', rgb: '76,175,80' },
 { hex: '#ffeb3b', rgb: '255,235,59' },
 { hex: '#ff9800', rgb: '255,152,0' },
 { hex: '#795548', rgb: '121,85,72' },
 { hex: '#607d8b', rgb: '96,125,139' }
];

console.log(createColorCardsMarkup(colors));


// 1 шаг - создаем разметку, функция createColorCardsMarkup хранит результат вызова функции всей разметки
function createColorCardsMarkup (colors) {
 return colors.map(({hex, rgb}) => {   // деструктуризируем св-ва hex u rgb
  return `<div class="color-card">
   <div
      class="color-swatch"
      data-hex="${hex}"
      data-rgb="${rgb}"
      style="background-color: ${hex}"
   >
   </div>
   <div class="color-meta">
      <p>HEX: ${hex}</p>
      <p>RGB: ${rgb}</p>
   </div>
</div>`;
 }).join('');
}

// 2 шаг -зарендерим разметку

const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardsMarkup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// 3 шаг - делегирование
paletteContainer.addEventListener('click', onPaletteContainerClick);

// function onPaletteContainerClick (evt) {
//    const isColorSwatchEl = evt.target.classList.contains('color-swatch');
//  // паттерн guard clause
//    if(!isColorSwatchEl) {
//       return;  
//    }

//     // 5 шаг - удаляем класс с активного елемента
// const currentActiveCard = document.querySelector('.color-card.is-active');
// if (currentActiveCard) {
//    currentActiveCard.classList.remove('is-active');
// }

//    // 4 шаг - добавляем класс is-active на элемент
//    const swatchEl = evt.target;

//      // 4 шаг - хорошее решение добавление класса 'is-active' на родтельский див через closest

//     const parentColorCard = swatchEl.closest('.color-card');  // closest - идет вверх по вложенности и ищет елемент, который совпадает с селектором '.color-card'
//     parentColorCard.classList.add('is-active');
//     //console.log(parentColorCard);

//    // плохое решение добавление класса 'is-active' на родтельский див  через .parentNode

//    // const parentColorCard = swatchEl.parentNode;  // parentNode - хранит сслку на родителя swatchEl
//    // console.log(parentColorCard);
//    // swatchEl.classList.add('is-active');

//    console.log(evt.target.dataset.hex);   // получаем в консоли значение hex

//    // шаг 6 - вешаем на боди тот цвет, который выбрали
//    document.body.style.backgroundColor = swatchEl.dataset.hex;
// }


// Рефактиринг функции  onPaletteContainerClic

function onPaletteContainerClick (evt) {
   const isColorSwatchEl = evt.target.classList.contains('color-swatch');
 // паттерн guard clause
   if(!isColorSwatchEl) {
      return;  
   }

    const swatchEl = evt.target;
    const parentColorCard = swatchEl.closest('.color-card'); 

    removeActiveCardClass();             // вызываем функцию removeActiveCardClass()
    addActiveCardClass(parentColorCard); // вызываем функцию addActiveCardClass(parentColorCard)
    setBodyColor(swatchEl.dataset.hex);  // вызываем функцию setBodyColor(swatchEl.dataset.hex)
}

function setBodyColor (color) {
   document.body.style.backgroundColor = color;
}

function removeActiveCardClass () {
   const currentActiveCard = document.querySelector('.color-card.is-active');

    if (currentActiveCard) {
       currentActiveCard.classList.remove('is-active');
    }
}

function addActiveCardClass (card) {
   card.classList.add('is-active');
}

