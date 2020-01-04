/*
    Imports the API URL from the config.
*/
import { BLOG_CONFIG } from '../../config';
import { authHeader } from '../../authHelper';

export default {
    /*
        GET     /api/v1/posts
    */
    getPublished: function(){
        const requestOptions = {
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
        };
        return axios.get( BLOG_CONFIG.API_URL + '/posts/published', requestOptions );
    },

    getDrafts: function(){
        const requestOptions = {
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
        };

        return axios.get( BLOG_CONFIG.API_URL + '/posts/drafts', requestOptions );
    },

    /*
        GET   /api/v1/post/{postID}/preview
    */
    getPost: function( postID ){
        const requestOptions = {
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
        };

        return axios.get( BLOG_CONFIG.API_URL + '/posts/' + postID , requestOptions);
    },

    /*
    POST  /api/v1/posts
    */
    addNewPost: function( categoryID, title, content, featured, tagID, slug, status ){
        const requestOptions = {
            headers: { ...authHeader(), 'Content-Type': 'application/json, multipart/form-data' },
        };
        /*
            Initialize the form data
        */
        let formData = new FormData();
        /*
            Add the form data we need to submit
        */
        formData.append('category_id', categoryID);
        formData.append('title', title);
        formData.append('content', content);
        formData.append('tag_id', tagID);
        formData.append('featured', featured);
        formData.append('slug', slug);
        formData.append('status', status);

        return axios.post( 
            BLOG_CONFIG.API_URL + '/posts', 
            formData
            , requestOptions
        );
    },

    /*
    PUT  /api/v1/posts/{postID}/edit
    */
    updatePost: function( postID, categoryID, title, content, featured, tagID, slug ){
        const requestOptions = {
            headers: { ...authHeader(), 'Content-Type': 'application/json, multipart/form-data' },
        };

        /*
            Initialize the form data
        */
        let formData = new FormData();
        
        formData.append('id', postID);
        formData.append('category_id', categoryID);
        formData.append('title', title);
        formData.append('content', content);
        formData.append('tag_id', tagID);
        formData.append('featured', featured);
        formData.append('slug', slug);

        formData.append('_method', 'PUT');

        return axios.post( BLOG_CONFIG.API_URL + '/posts/' + postID, formData, requestOptions);
    },
    /*
    PUBLISH  /api/v1/posts/{postID}/publlsh
    */
    publishPost: function( postID, status ){
        const requestOptions = {
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
        };

        /*
            Initialize the form data
        */
        let formData = new FormData();

        formData.append('status', status);
        
        formData.append('_method', 'PUT');

        return axios.post( BLOG_CONFIG.API_URL + '/posts/' + postID + '/publish', formData, requestOptions);
    },

    /*
    DELETE  /api/v1/posts/{postID}/
    */
    deletePost: function( postID ){
        const requestOptions = {
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
        };

        return axios.delete( BLOG_CONFIG.API_URL + '/posts/' + postID, requestOptions );
    }
}