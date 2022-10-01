import Auth from './services/Auth.js'


//Elements
const $inputsSignUp = document.querySelectorAll('.input-sign-up');
const $formSignUp = document.querySelector('.form-sign-up');
console.log($inputsSignUp);


//Event listeners
$formSignUp.addEventListener('submit', handleSubmit);
$inputsSignUp.forEach((item) => {
    item.addEventListener('input', handleInput);
});  ///էս կոդը մի քիչ փոխեցի item-ով



//Data
const userData = {};

//Event listener functions
function handleInput(e){
    userData[e.target.name] = e.target.value;
    console.log(userData);
}

async function handleSubmit(e){
    e.preventDefault();
    await Auth.signUp(userData);
}