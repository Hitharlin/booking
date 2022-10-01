import Auth from './services/Auth.js'

//Elements
const $inputsSignIn = document.querySelectorAll('.input-sign-in');
const $formSignIn = document.querySelector('.form-sign-in');
console.log($inputsSignIn);

//Event listeners
$formSignIn.addEventListener('submit', handleSubmit);
$inputsSignIn.forEach(($formSignIn) => {
    $formSignIn.addEventListener('input', handleInput);
});

//Data
const userData = {};

//Event listener functions
function handleInput(e){
    userData[e.target.name] = e.target.value;
    console.log(userData);
}

async function handleSubmit(e){
    e.preventDefault();
    await Auth.signIn(userData);
}