import store from './utils/store.js';

if(!store.getItem('access_token')) {
    location.href = '/authSignIn.html';
}


