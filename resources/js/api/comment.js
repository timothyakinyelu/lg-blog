/*
    Imports the API URL from the config.
*/
import { BLOG_CONFIG } from '../config';
// import { authHeader } from '../../authHelper';

export default {
    /*
        GET     /api/v1/comments
    */
    getAllComments: function(){
        
        const requestOptions = {
            headers: { 'Content-Type': 'application/json' },
        };

        return axios.get( BLOG_CONFIG.API_URL + '/comments', requestOptions);
    },

    /*
        GET   /api/v1/comments/{commentID}
    */
    getSingleComment: function( commentID ){
        const requestOptions = {
            headers: { 'Content-Type': 'application/json' },
        };

        return axios.get( BLOG_CONFIG.API_URL + '/comments/' + commentID, requestOptions );
    },

    /*
    POST  /api/v1/comments/{post_id}
    */
    addNewComment: function( postID, name, email, comment ){
        
        const requestOptions = {
            headers: { 'Content-Type': 'application/json' },
        };
        /*
            Initialize the form data
        */
        let formData = new FormData();
        /*
            Add the form data we need to submit
        */
        formData.append('post_id', postID);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('comment', comment);

        return axios.post( 
            BLOG_CONFIG.API_URL + '/comments', 
            formData
            , requestOptions
        );
    },


    /*
    DELETE  /api/v1/comments/{commentID}
    */
    deletePost: function( commentID ){
        const requestOptions = {
            headers: { 'Content-Type': 'application/json' },
        };

        return axios.delete( BLOG_CONFIG.API_URL + '/comments/' + commentID, requestOptions );
    }
}