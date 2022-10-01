//services
import Play from './services/Play.js';

//Helpers 
import setHtmlFromArray from './helpers/setHTMLFromArray.js';
import markupCreators from './helpers/markupCreators.js';

//Elements
const $adminForm = document.querySelector('.admin__form');
const $adminFormInputs = $adminForm.querySelectorAll('.admin__form-input');
const $adminPlayListContainer = document.querySelector('.admin__play-list-container');
const $adminFormUpload = $adminForm.querySelector('.admin__form-upload');
const $adminFormUploadImage = document.querySelector('.admin__form-aploaded-image');


//Event listeners
$adminForm.addEventListener('submit', handleFormSubmit)
$adminFormInputs.forEach(($adminFormInput) => {
    $adminFormInput.addEventListener('input', handleInput);
});
$adminFormUpload.addEventListener('change', handleUpload);

// Data
const playData = {};

// Event listener functions
async function handleFormSubmit(e) {
    e.preventDefault();
    const data = await Play.createPlay(playData); 
    document.querySelector('.admin__form').reset(); //++++++++++++
    $adminFormUploadImage.src = ''; //++++++++++++
    renderData(data);
    cardProcess();
}

function handleInput(e) {
    playData[e.target.name]= e.target.value;
    console.log(playData);
}

// Functions
async function handleGetPlays() {
    const data = await Play.getPlays();
    console.log(data);
    renderData(data);
    cardProcess();
}

function renderData(data) {
    setHtmlFromArray($adminPlayListContainer, data, markupCreators.playCard );
}

function handleUpload(e) {
    const { files } = e.target;

    if(files[0]){
        const fileReader = new FileReader();

        fileReader.addEventListener('load', (e) => {
            console.log(e.target.result);
            $adminFormUploadImage.src = e.target.result;
            playData.image = e.target.result;
        });
        
        fileReader.readAsDataURL(files[0])
    }
}

handleGetPlays();



function cardProcess() {
    const $cardDeleteButtons = document.querySelectorAll('.card__delete-button');
    console.log($cardDeleteButtons);
    for(let i = 0; i < $cardDeleteButtons.length; i++ ){
        let $cardDeleteButton = $cardDeleteButtons[i];
        $cardDeleteButton.addEventListener('click', async (e) => {
            const id = $cardDeleteButton.closest(".play-card").dataset.id;
            console.log(id);
            const data = await Play.deletePlay(id);
            renderData(data);
        });
    }
  }
  cardProcess()