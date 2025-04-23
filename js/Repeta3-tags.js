// const container = document.querySelector('.js-container');

// container.addEventListener('click', onClick);

// function onClick(evt) {
//   console.log(evt.target.textContent);
// }


// /*
//  * Код добавления кнопок
//  */

// const addBtn = document.querySelector('.js-add-btn');
// let labelCounter = 6;

// addBtn.addEventListener('click', onAddBtnClick);

// function onAddBtnClick() {
//   const btn = document.createElement('button');
//   btn.textContent = `Кнопка ${labelCounter}`;
//   btn.type = 'button';

//   container.appendChild(btn);
//   labelCounter += 1;
// }

// задача про кнопки 1 часть

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//  if(evt.target.nodeName !== 'BUTTON') {
//   return;
//  }

//  const currentActiveBtn = document.querySelector('.tags__btn--active');

//  if(currentActiveBtn) {
//   currentActiveBtn.classList.remove('tags__btn--active');
//  }

//  const nextActiveBtn = evt.target;
//  // добавляем класс tags__btn--active
//  nextActiveBtn.classList.add('tags__btn--active');
//  selectedTag = nextActiveBtn.dataset.value;
//  console.log(selectedTag);
// }

// 2 часть 

const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set();

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
 if(evt.target.nodeName !== 'BUTTON') {
  return;
 }

 const btn = evt.target;
 const tag = btn.dataset.value;
 const isActive = btn.classList.contains('tags__btn--active');

if(isActive) {
 selectedTags.delete(tag);
} else {
 selectedTags.add(tag);
}

 // toggle
 btn.classList.toggle('tags__btn--active')

 console.log(selectedTags);
}