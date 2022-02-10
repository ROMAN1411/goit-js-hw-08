import throttle from 'lodash/throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const formValues = {
  email: form.email.value,
  message: form.message.value,
};


form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput({ target: { name, value } }) {
  formValues[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues));

  // console.log(localStorage)
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { email, message }
  } = evt.currentTarget;

  if (email.value === "" || message.value === "") {
    alert("All fields must be filled!");
    evt.currentTarget.reset();
    return
  }
  
  console.log('Submitting the form!');
  console.log(`Email: ${email.value}`);
  console.log(`Password: ${message.value}`);
  // console.log(formValues)

  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
};

populateTextarea();

// function populateTextarea() {
//   const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   if (savedForm === null) {
//     return;
//   }

//   form.email.value = savedForm.email;
//   form.message.value = savedForm.message;
// };


function populateTextarea() {
  let savedForm = localStorage.getItem(STORAGE_KEY);
  if (savedForm) {
    savedForm = JSON.parse(savedForm);
    Object.entries(savedForm).forEach(([key, value]) => {
      formValues[key] = value;
      form.elements[key].value = value;
    });
  }
}