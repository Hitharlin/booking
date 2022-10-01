import { DATABASE_URL } from "../config.js";

/**
 * 
 * @param {*} method 
 * @param {*} url 
 * @param {*} data 
 */

const request = async (method, url, data = null) => {
    console.log(url)
    try {
        const _url = url.includes('sign') ? url : `${DATABASE_URL}${url}`;

        const response = await fetch(_url, {
            method,
            body: data !==  null ? JSON.stringify(data) : null,
        });

        const responseData = await response.json();
        return responseData;
    } catch(e) {
        console.log('asd');
        console.log(e);
    }
};

export default request;