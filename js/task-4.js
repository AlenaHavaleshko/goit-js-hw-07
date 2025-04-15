const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
 event.preventDefault();

 const formElements = event.currentTarget.elements;

 const email = formElements.email.value.trim();
 const password = formElements.password.value.trim();

 if(email === "" || password === "") {
  return alert('All form fields must be filled in')
 }

 const formData = {
  email,
  password,
 }

 form.reset(); 
 console.log(formData);

}

