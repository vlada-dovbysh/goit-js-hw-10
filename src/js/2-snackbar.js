import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

iziToast.settings({
    timeout: 3000,
    position: 'topRight',
    icon: '',
});

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
event.preventDefault();

const delay = Number(form.elements.delay.value); 
const state = form.querySelector('input[name="state"]:checked')?.value; 

if (!state || isNaN(delay)) {
    iziToast.error({
    message: 'Please enter a valid delay and select a state.',
    });
    return;
}

makePromise({ delay, state })
    .then(value => {
    iziToast.success({
        message: value,
    });
    })
    .catch(error => {
    iziToast.error({
        message: error,
    });
    });
}

function makePromise({ delay, state }) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
    } else {
        reject(`❌ Rejected promise in ${delay}ms`);
    }
    }, delay);
});
}