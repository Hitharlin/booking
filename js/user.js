//services
import Play from './services/Play.js';

//Helpers 
import setHtmlFromArray from './helpers/setHTMLFromArray.js';
import markupCreators from './helpers/markupCreators.js';

//Elements
const $userPlayListContainer = document.querySelector('.user__play-list-container');


//Event listeners

// Data
const playData = {};

// Event listener functions


// Functions
async function handleGetPlays() {
    const data = await Play.getPlays();
    console.log(data);
    renderData(data);
}

function renderData(data) {
    setHtmlFromArray($userPlayListContainer, data, markupCreators.playCard );
}

handleGetPlays();
