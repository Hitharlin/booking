import { API_KEY } from '../config.js';

//Utils
import request from '../utils/request.js';
import store from '../utils/store.js';


//Services
import User from './User.js';

class Auth extends User{
    static SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    static SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    
    static async signUp(data){
        console.log(data);
        try {
            console.log(Auth.SIGN_UP_URL);
            const responseData = await request('POST', `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
                email: data.email,
                password: data.password,
                returnSecureToken: true,
            });
            const userData = {
                name: data.name,
                email: data.email,
                phone: data.phone,
                role: 'user',
            }
            console.log(1212,responseData);
            const createdUserResponseData = await super.createUser(responseData.localId, userData)
            store.setItem('access_token', responseData.idToken);
            store.setItem('user', userData);
            console.log(data);
            console.log(responseData);
        } catch(e){
            super.catchError(e);
        }
    }

    //էս պետք ա շարունակենք
    static async signIn(data){
        try {
            const responseData = await request('POST', `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,{
                email: data.email,
                password: data.password,
                returnSecureToken: true,
            });

            if(responseData?.error){
                throw responseData.error;
            }

        const userData = await super.getUser(responseData.localId)
        store.setItem('access_token', responseData.idToken);
        store.setItem('user', userData);
        location.href = '/index.html'

    } catch(e) {
        super.catchError(e);
        }
    }  
}

export default Auth;