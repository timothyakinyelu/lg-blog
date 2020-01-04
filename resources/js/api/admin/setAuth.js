/*
    Imports the API URL from the config.
*/
import { BLOG_CONFIG } from '../../config';
import { authHeader } from '../../authHelper';

export default {
    /*
    POST  /api/v1/login
    */
    login: function( email, password ){
        let fd = new FormData();

        const requestOptions = {
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
        };

        fd.append('email', email);
        fd.append('password', password)

        return axios.post( 
            BLOG_CONFIG.API_URL + '/login', fd, requestOptions
        ).then(this.handleResponse)
        .then(token => {
            // login successful if there's a passport token in the response
            if (token) {
                // store user details and passport token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', token);
            }

            return token;
        });
    },

    logout: function() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
    },

    getUser: function() {
        const requestOptions = {
            headers: authHeader()
        };

        return axios.get(BLOG_CONFIG.API_URL + '/getUser', requestOptions);
    },

    handleResponse: function(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    logout();
                    location.reload(true);
                }
    
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
    
            return data;
        });
    }
}