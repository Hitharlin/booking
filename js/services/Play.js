//services
import Api from './Api.js';

//Utils
import request from '../utils/request.js';


class Play extends Api {
   static async createPlay(data) {
        try{
            const response = await request('POST', 'plays.json', data);
            return  await this.getPlays();     //++++++++
        } catch(e) {
            super.catchError(e);
        }
   }

   static async getPlays() {
        try{
            const response = await request('GET', 'plays.json');
            console.log(response);
            return super.objectToArray(response);
        } catch(e) {
            super.catchError(e);
        }
   }
//  static async deletePlay(id) {
//       const response = await request('DELETE', `plays.json/${id}.json`);
//  }  

    static async deletePlay(id) {
        console.log('delete');
        const response = await request('DELETE', `plays/${id}.json`);
        console.log(response);
        return  await this.getPlays()
    } 

    static async editPlay() {
        try {
            const response = await request('PUT', `plays/${id}.json`, data)
        } catch (e) {

        }
    }
}

export default Play;