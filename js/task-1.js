
const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
 const title = category.querySelector('h2').textContent;
const count = category.querySelectorAll('ul li').length;

 console.log(`Category: ${title}`);
 console.log(`Category: ${count}`);
});

