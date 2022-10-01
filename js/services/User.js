//services
import Api from './Api.js';

//Utils
import request from '../utils/request.js';

class User extends Api {
    static  async createUser(id, data) {
        try {
            const responseData = await request('PUT', `users/${id}.json`, data)
            console.log(responseData)
        } catch(e) {
            super.catchError(e);
        }
    }

    static  async getUser(id) {
        try {
            const responseData = await request('GET', `users/${id}.json`)
            console.log(responseData)
            return responseData;
        } catch(e) {
            super.catchError(e);
        }
    }
}

export default User;