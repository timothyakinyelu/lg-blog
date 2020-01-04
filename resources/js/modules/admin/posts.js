/*
|-------------------------------------------------------------------------------
| VUEX modules/posts.js
|-------------------------------------------------------------------------------
| The Vuex data store for the posts
*/

import PostAPI from '../../api/admin/post.js';
import { router } from '../../routes';

export const posts = {
    state: {
        published: [],
        postsLoadStatus: 0,

        drafts: [],

        post: {},
        postLoadStatus: 0,

        // editPost: {},
        // editPostLoadStatus: 0,

        postAdded: {},
		postAddStatus: 0,
        postAddText: '',
        
        postUpdated: {},
        postUpdateStatus: 0,
        postUpdatedText: '',

        postPublished: {},
        postPublishedStatus: 0,

        postDeletedStatus: 0,
		postDeleteText: '',
    },
    actions: {
        /*
            Loads the posts from the API
        */
        loadPublished({commit}) {
            commit('setPostsLoadStatus', 1);
           
            PostAPI.getPublished()
            .then(function(response) {
                commit('setPublished', response.data.posts.data);
                commit('setPostsLoadStatus', 2);
            })
            .catch(function() {
                commit('setPublished', []);
                commit('setPostsLoadStatus', 3);
            });
        },
        loadDrafts({commit}) {
            commit('setPostsLoadStatus', 1);
           
            PostAPI.getDrafts()
            .then(function(response) {
                commit('setDrafts', response.data.posts);
                commit('setPostsLoadStatus', 2);
            })
            .catch(function() {
                commit('setDrafts', []);
                commit('setPostsLoadStatus', 3);
            });
        },
        /*
            Loads an individual post for preview
        */
        loadPost({commit}, data) {
            commit('setPostLoadStatus', 1);

            PostAPI.getPost(data.id)
            .then(function(response) {
                commit('setPost', response.data.post);
                commit('setPostLoadStatus', 2);
            })
            .catch(function() {
                commit('setPost', {});
                commit('setPostLoadStatus', 3)
            });
        },
        addPost( { commit, state, dispatch }, data ){
            commit( 'setPostAddedStatus', 1 );
            console.log(data)
            PostAPI.addNewPost( 
                data.category_id, 
                data.title, 
                data.content, 
                data.featured,
                data.tag_id,
                data.slug,
                data.status
            )
            .then( function( response ){
                if( typeof response.data.status !== 'Draft saved.' ){
                commit( 'setPostAddedText', response.data.status +' failed!');
                }else{
                commit( 'setPostAddedText', response.data.title +' has been saved!');
                }
        
                commit( 'setPostAddedStatus', 2 );
                commit( 'setPostAdded', response.data );
                dispatch( 'loadDrafts' );
                // router.push({ name: 'previewpost', params: { id: response.data.id }})
                router.push({ path: '/theotherside/post/' + response.data.post.id + '/preview'})
            })
            .catch( function(){
                commit( 'setPostAddedStatus', 3 );
            });
        },

        /* Update Post */
        updatePost( { commit, dispatch }, data ){
            commit( 'setPostUpdatedStatus', 1 );
            
            PostAPI.updatePost( 
                data.id,
                data.category_id, 
                data.title, 
                data.content,
                data.featured, 
                data.tag_id,
                data.slug, 
            )
            .then( function( response ){
                if( typeof response.data.status !== 'Draft updated.' ){
                commit( 'setPostUpdatedText', response.data.status +' failed!');
                }else{
                commit( 'setPostUpdatedText', response.data.title +' has been updated!');
                }
        
                commit( 'setPostUpdatedStatus', 2 );
                commit( 'setPostUpdated', response.data );
                
                dispatch( 'loadDrafts' );
            })
            .catch( function(){
                commit( 'setPostAddedStatus', 3 );
            });
        },

        /* Publish post */
        publishPost( { commit, dispatch }, data ){
            commit( 'setPostPublishedStatus', 1 );
            PostAPI.publishPost( 
                data.postID,
            )
            .then( function( response ){
                commit( 'setPostPublishedStatus', 2 );
                commit( 'setPostPublished', response.data );
                dispatch( 'loadPublished' );
                dispatch( 'loadDrafts' );
            })
            .catch( function(){
                commit( 'setPostPublishedStatus', 3 );
            });
        },
        /*
			Deletes a post.
		*/
		deletePost( { commit, dispatch }, data ){
			commit( 'setPostDeleteStatus', 1 );

			PostAPI.deletePost( data.postID )
            .then( function( response ){
                commit( 'setPostDeletedText', 'Post has been successfully deleted!');
                commit( 'setPostDeleteStatus', 2 );

                /*
                    Load the posts
                */
                dispatch( 'loadDrafts' );
                dispatch('loadPublished')
            })
            .catch( function(){
                commit( 'setPostDeleteStatus', 3 );
            });
		},
    },
    mutations: {
        /*
            Sets the posts load status
        */
        setPostsLoadStatus(state, status) {
            state.postsLoadStatus = status;
        },

        /*
            Sets the posts
        */
        setPublished(state, published) {
            state.published = published;
        },

        setDrafts(state, drafts) {
            state.drafts = drafts;
        },

        /*
            Set the post load status
        */
        setPostLoadStatus(state, status) {
            state.postLoadStatus = status
        },

        /*
            Set the post
        */
        setPost(state, post) {
            state.post = post
        },

        setPostAdded( state, post ){
			state.postAdded = post;
		},

		/*
			Set the post add status
		*/
		setPostAddedStatus( state, status ){
			state.postAddStatus = status;
		},

		/*
			Set the post add text
		*/
		setPostAddedText( state, text ){
			state.postAddText = text;
        },

        /*
			Sets the updated post
		*/
        setPostUpdated( state, post ){
			state.postUpdated = post;
        },

        /*
			Sets the post updated status
		*/
        setPostUpdatedStatus( state, status ){
			state.postUpdatedStatus = status;
        },

        /*
			Sets the updated post
		*/
        setPostPublished( state, post ){
			state.postPublished = post;
        },

        /*
			Sets the post updated status
		*/
        setPostPublishedStatus( state, status ){
			state.postPublishedStatus = status;
        },

        /*
			Set the post update text
		*/
		setPostUpdatedText( state, text ){
			state.postUpdatedText = text;
        },

        /*
			Sets the post delete status
		*/
        setPostDeleteStatus( state, status ){
			state.postDeletedStatus = status;
        },
        
        /*
			Sets the post deleted text
		*/
		setPostDeletedText( state, text ){
			state.postDeleteText = text;
		},

    },
    getters: {
        /*
            Returns the posts load status.
        */
        getPostsLoadStatus(state) {
            return state.postsLoadStatus;
        },

        /*
            Returns the posts.
        */
        getPublished(state) {
            return state.published;
        },

        getDrafts(state) {
            return state.drafts;
        },

        /*
            Returns the posts load status
        */
        getPostLoadStatus(state) {
            return state.postLoadStatus
        },

        /*
            Returns the posts load status
        */
        getPostPublishedStatus(state) {
            return state.postPublishedStatus
        },
        /*
            Returns the post
        */
        getPost(state) {
            return state.post
        },

        getAddedPost( state ){
			return state.postAdded;
		},

		/*
			Gets the post add status
		*/
		getPostAddStatus( state ){
			return state.postAddStatus;
		},

		/*
			Gets the post add text
		*/
		getPostAddText( state ){
			return state.postAddText;
        },

		/*
			Gets the post update status
		*/
		getPostUpdatedStatus( state ){
			return state.postUpdatedStatus;
        },
        
        /*
			Gets the post update text
		*/
		getPostUpdatedText( state ){
			return state.postUpdatedText;
        },
        
        /*
			Returns the post deleted status.
		*/
		getPostDeletedStatus( state ){
			return state.postDeletedStatus;
		},

		/*
			Returns the post deleted text.
		*/
		getPostDeletedText( state ){
			return state.postDeleteText;
		},

    }
}