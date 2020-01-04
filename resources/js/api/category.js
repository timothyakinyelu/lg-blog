/*
    Imports the API URL from the config.
*/
import { BLOG_CONFIG } from '../config';

export default {
    /*
        GET     /api/v1/categories
    */
    getCategory: function(id, slug, current_page){
        const requestOptions = {
            headers: { 'Content-Type': 'application/json' },
        };

        return axios.get( BLOG_CONFIG.API_URL + '/category/' + id + '/' + slug + '?page=' + current_page, requestOptions );
    },
}