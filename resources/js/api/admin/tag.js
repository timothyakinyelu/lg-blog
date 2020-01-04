/*
    Imports the API URL from the config.
*/
import { BLOG_CONFIG } from '../../config.js';
import { authHeader } from '../../authHelper';

export default {
    /*
        GET     /api/v1/tags
    */
    getTags: function(){
        const requestOptions = {
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
        };

        return axios.get( BLOG_CONFIG.API_URL + '/tags', requestOptions );
    },
    /*
    POST  /api/v1/tags
    */
    addNewTag: function( name ){
        const requestOptions = {
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
        };

        /*
            Initialize the form data
        */
        let formData = new FormData();
        /*
            Add the form data we need to submit
        */
        formData.append('name', name);

        return axios.post( BLOG_CONFIG.API_URL + '/tags', formData, requestOptions)
    },
    /*
    PUT  /api/v1/tags/{tagID}/edit
    */
    updateTag: function( tagID, name){
        const requestOptions = {
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
        };

        /*
            Initialize the form data
        */
        let formData = new FormData();
        /*
            Add the form data we need to submit
        */

        formData.append('name', name);

        formData.append('_method', 'PUT');

        return axios.post( BLOG_CONFIG.API_URL + '/tags/' + tagID + '/edit', formData, requestOptions);
    },

    /*
    DELETE  /api/v1/tags/{tagID}/
    */
    deleteTag: function( tagID ){
        const requestOptions = {
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
        };

        return axios.delete( BLOG_CONFIG.API_URL + '/tags/' + tagID, requestOptions );
    }
}