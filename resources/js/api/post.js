/*
    Imports the API URL from the config.
*/
import { BLOG_CONFIG } from '../config';
// import { authHeader } from '../../authHelper';

export default {
    /*
        GET     /api/v1/posts
    */
    getAllPosts: function(current_page){
        
        const requestOptions = {
            headers: { 'Content-Type': 'application/json' },
        };

        return axios.get( BLOG_CONFIG.API_URL + '/posts/published?page=' + current_page, requestOptions);
    },

    /*
        GET   /api/v1/post/{postID}/preview
    */
    getSinglePost: function( postID, slug ){
        const requestOptions = {
            headers: { 'Content-Type': 'application/json' },
        };

        return axios.get( BLOG_CONFIG.API_URL + '/post/' + postID + '/' + slug, requestOptions );
    },

    /*
        GET   /api/v1/posts/recent
    */
    getRecentPosts: function(){
        const requestOptions = {
            headers: { 'Content-Type': 'application/json' },
        };

        return axios.get( BLOG_CONFIG.API_URL + '/posts/recent', requestOptions );
    },
}