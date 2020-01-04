/*
    Imports the API URL from the config.
*/
import { BLOG_CONFIG } from '../../config.js';
import { authHeader } from '../../authHelper';

export default {
    /*
        GET     /api/v1/categories
    */
    getCategories: function(){
        const requestOptions = {
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
        };

        return axios.get( BLOG_CONFIG.API_URL + '/categories', requestOptions );
    },

    /*
    POST  /api/v1/categories
    */
    addNewCategory: function( name, slug ){
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
        // formData.append('parent', parent);
        formData.append('name', name);
        formData.append('slug', slug);

        return axios.post( BLOG_CONFIG.API_URL + '/categories', formData, requestOptions)
    },

    /*
    PUT  /api/v1/jobtypes/{categoryID}
    */
    updateCategory: function( categoryID, name, slug){
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

        // formData.append('parent', parent);
        formData.append('name', name);
        formData.append('slug', slug);

        formData.append('_method', 'PUT');

        return axios.post( BLOG_CONFIG.API_URL + '/categories/' + categoryID + '/edit', formData, requestOptions);
    },

    /*
    DELETE  /api/v1/categories/{categoryID}/
    */
    deleteCategory: function( categoryID ){
        const requestOptions = {
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
        };

        return axios.delete( BLOG_CONFIG.API_URL + '/categories/' + categoryID, requestOptions );
    }
}