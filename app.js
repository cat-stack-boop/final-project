


//let  x= document.querySelector('exampleFormControlInput1') 


 //x.addEventListener ('click',  (event) => { 
  //   event.target.

 //}
let today = new Date()
const addValidFeedback = document.querySelector('.valid-feedback')
const addInvalidFeedback = document.querySelector('.invalid-feedback')
const form = document.querySelector('#form');



let nameForm = document.querySelector('#name-form')
let nameValidation = document.querySelector('#name-validation');

 form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (nameValidation.value.length > 5) {
        nameValidation.classList.add('is-valid');
        nameValidation.classList.remove('is-invalid');
        addValidFeedback.innerHTML=('Looks good to me!')
      } else if (nameValidation.value.length < 3){
        addInvalidFeedback.innerHTML=('Please put in a valid name')
        nameValidation.classList.add('is-invalid');
        nameValidation.classList.remove('is-valid');
      }
});




let descriptionForm = document.querySelector('#description-form')
let descriptionValidation = document.querySelector('#description-validation');

 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (descriptionValidation.value.length > 5) {
        descriptionValidation.classList.add('is-valid');
        descriptionValidation.classList.remove('is-invalid');
      } else if (descriptionValidation.value.length < 5){
        descriptionValidation.classList.add('is-invalid');
        descriptionValidation.classList.remove('is-valid');
      }
});

let assignedForm = document.querySelector('#assigned-form')
let assignedValidation = document.querySelector('#assigned-validation');

 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (assignedValidation.value.length > 5) {
        assignedValidation.classList.add('is-valid');
        assignedValidation.classList.remove('is-invalid');
      } else if (assignedValidation.value.length < 3){
        assignedValidation.classList.add('is-invalid');
        assignedValidation.classList.remove('is-valid');
      }
});

let dateForm = document.querySelector('#date-form')
let dateValidation = document.querySelector('#date-validation');

 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (dateValidation.value.match > today) {
        dateValidation.classList.add('is-valid');
        dateValidation.classList.remove('is-invalid');
      } else if (dateValidation.value.length < 1){
        dateValidation.classList.add('is-invalid');
        dateValidation.classList.remove('is-valid');
      }
});

let statusForm = document.querySelector('#status-form')
let statusValidation = document.querySelector('#status-validation');

 
 form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (statusValidation.value.length > 1) {
        statusValidation.classList.add('is-valid');
        statusValidation.classList.remove('is-invalid');
      } else if (statusValidation.value.length < 1){
        statusValidation.classList.add('is-invalid');
        statusValidation.classList.remove('is-valid');
      }
});

