// const titleEl = document.querySelector('.js-title');
// const titleEl1 = document.querySelector('.js-title1');
// const titleEl2 = document.querySelector('.js-title2');
// const titleEl3 = document.querySelector('.js-title3');
// const maxLength = 13;
// const totalLength = maxLength + 3;

// titleEl.addEventListener('click', onClick);
// titleEl1.addEventListener('click', onClick);
// titleEl2.addEventListener('click', onClick);
// titleEl3.addEventListener('click', onClick);

// // function onClick(evt) {
// //  const title = evt.currentTarget;
// //  const str = title.textContent.slice(0, maxLength);

// //  if (title.textContent.length > totalLength) {
// //   const remainder = title.textContent.slice(maxLength);
// //   title.setAttribute('data-title', remainder);
// //   title.textContent = str + "...";
// //  } else {

// //   const remainder = title.dataset.title;
// //   console.log(str)
// //   title.textContent = str + remainder;
// //  }
// // }

// // 2 вариант


//  // const remainder = title.textContent.slice(maxLength);
//  function onClick(evt) {
//   const title = evt.currentTarget;
//   const str = title.textContent.slice(0, maxLength);
 
//   if (title.textContent.length > totalLength) {
//    title.setAttribute('data-title', title.textContent);
//    title.textContent = str + "...";
//   } else {
//    const fullText = title.dataset.title;
//    title.textContent = fullText;
//   }
//  }




// const paragraph = document.getElementById("text");
// paragraph.addEventListener("click", function (event) {
//  // console.log(event.currentTarget);
//  // console.log(this);
//  event.currentTarget.style.backgroundColor = "red";
// });



//----------Задача про массив обьектов Галерея

const cars = [
 {
   id: 1,
   title: 'Tesla',
   price: 85999,
  //  img: 'https://via.placeholder.com/700x400?text=Tesla+Model+S',
   onSale: true,
   type: 'sedan',
 },
 {
   id: 2,
   title: 'Honda',
   price: 49756,
  //  img: 'https://source.unsplash.com/700x400/?car,Honda',
   onSale: true,
   type: 'suv',
 },
 {
   id: 3,
   title: 'BMW',
   price: 70999,
  //  img: 'https://source.unsplash.com/700x400/?car,BMW',
   onSale: false,
   type: 'suv',
 },
 {
   id: 4,
   title: 'Audi',
   price: 55200,
  //  img: 'https://source.unsplash.com/700x400/?car,Audi',
   onSale: true,
   type: 'sedan',
 },
 {
   id: 5,
   title: 'Mercedes',
   price: 61999,
  //  img: 'https://source.unsplash.com/700x400/?car,Mercedes',
   onSale: false,
   type: 'sedan',
 },
 {
   id: 6,
   title: 'Ford',
   price: 73500,
  //  img: 'https://source.unsplash.com/700x400/?car,Mustang',
   onSale: true,
   type: 'supercar',
 },
 {
   id: 7,
   title: 'Chevrolet Camaro',
   price: 69800,
  //  img: 'https://source.unsplash.com/700x400/?car,Camaro',
   onSale: false,
   type: 'supercar',
 },
 {
   id: 8,
   title: 'Toyota Corolla',
   price: 34999,
  //  img: 'https://source.unsplash.com/700x400/?car,Toyota',
   onSale: true,
   type: 'sedan',
 },
 {
   id: 9,
   title: 'Nissan Rogue',
   price: 39900,
  //  img: 'https://source.unsplash.com/700x400/?car,Nissan',
   onSale: false,
   type: 'suv',
 },
 {
   id: 10,
   title: 'Kia Sportage',
   price: 42999,
  //  img: 'https://source.unsplash.com/700x400/?car,Kia',
   onSale: true,
   type: 'suv',
 },
 {
  id: 11,
  title: 'Nissan Rogue',
  price: 39900,
  // img: 'https://source.unsplash.com/700x400/?car,Nissan',
  onSale: false,
  type: 'suv',
},
{
  id: 12,
  title: 'Kia Sportage',
  price: 42999,
  // img: 'https://source.unsplash.com/700x400/?car,Kia',
  onSale: true,
  type: 'suv',
},
];
console.log(cars);

const refs = {
 form: document.querySelector('.js-form'),
 container: document.querySelector('.js-list'),
}


// Розмітка для одного елемента

function carTemplate(car) {
  return `<li class="car-item">
     <img src="${car.img}" alt="">
     <div class="car-info">
      <h3>${car.title}</h3>
      <p>${car.type}</p>
      <p>${car.price}</p>
     </div>
    </li>`; 
  }
  
  // Розмітка для всього масива
  
  function carsTemplate(cars) {
   return cars.map(carTemplate).join('');
   
  }
  
  // відмальовка -  вставляємо розмітку
  function renderCars(cars) {
   const markup = carsTemplate(cars); 
   refs.container.innerHTML = markup; // innerHTML - перезаписувати(стара розмітка видалялася, нова - додавалася), insertAdjacentHTML - додавати.
  }
  renderCars(cars);


// Шукаємо форму

refs.form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(evt) {
 evt.preventDefault();

const title = evt.target.elements.query.value.trim();
const type = evt.target.elements.type.value.trim();

const arr = cars.filter(car => {
  const isValidTitle = car.title.toLowerCase().includes(title.toLowerCase());
  const isValidType = car.type === type;
  const isAllType = type === 'all';

  return isValidTitle && (isValidType || isAllType); 
});

renderCars(arr);

console.log(arr);
console.log(title, type);

 evt.target.reset();
};

//-------------------
// refs.form.addEventListener('submit', handleFormSubmit);

// function handleFormSubmit(evt) {
//  evt.preventDefault();

// const title = evt.target.elements.query.value.trim();
// const type = evt.target.elements.type.value.trim();

// const arr = cars.filter(car => {
//   const isValidTitle = car.title.toLowerCase().includes(title.toLowerCase());
//   const isValidType = car.type === type;
//   const isAllType = type === 'all';

//   return isValidTitle && (isValidType || isAllType); 
// });
// }