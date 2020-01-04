/*
|-------------------------------------------------------------------------------
| VUEX modules/posts.js
|-------------------------------------------------------------------------------
| The Vuex data store for the posts
*/

import Post_API from '../api/post';

export const posts_ = {
    state: {
        allPosts: [],
        allPostsLoadStatus: 0,

        recentPosts: [],
        recentPostsLoadStatus: 0,

        relatedPosts: [],
        relatedPostsStatus: 0,

        singlePost: {},
        singlePostLoadStatus: 0,
    },
    actions: {
        /*
            Loads the posts from the API
        */
        loadAllPosts({commit}, data) {
            commit('setAllPostsLoadStatus', 1);
           
            Post_API.getAllPosts(data.current_page)
            .then(function(response) {
                commit('setAllPosts', 
                    response.data.posts,
                );
                commit('setAllPostsLoadStatus', 2);
            })
            .catch(function() {
                commit('setAllPosts', []);
                commit('setAllPostsLoadStatus', 3);
            });
        },
        /*
            Loads the posts from the API
        */
        loadRecentPosts({commit}) {
            commit('setRecentPostsLoadStatus', 1);
        
            Post_API.getRecentPosts()
            .then(function(response) {
                commit('setRecentPosts', 
                    response.data.posts,
                );
                commit('setRecentPostsLoadStatus', 2);
            })
            .catch(function() {
                commit('setRecentPosts', []);
                commit('setRecentPostsLoadStatus', 3);
            });
        },  
        /*
            Loads an individual post for preview
        */
        loadSinglePost({commit}, data) {
            commit('setSinglePostLoadStatus', 1);
            commit('setRelatedPostsStatus', 1)

            Post_API.getSinglePost(
                data.id,
                data.slug
            )
            .then(function(response) {
                
                commit('setSinglePost', response.data.post);
                commit('setRelatedPosts', response.data.related);
                commit('setSinglePostLoadStatus', 2);
                commit('setRelatedPostsStatus', 2)
            })
            .catch(function() {
                commit('setSinglePost', {});
                commit('setRelatedPosts', []);
                commit('setSinglePostLoadStatus', 3)
                commit('setRelatedPostsStatus', 3)
            });
        },
    },
    mutations: {
        /*
            Sets the posts load status
        */
        setAllPostsLoadStatus(state, status) {
            state.allPostsLoadStatus = status;
        },

        /*
            Sets the posts
        */
        setAllPosts(state, allPosts) {
            state.allPosts = allPosts;
        },

         /*
            Sets the posts load status
        */
        setRecentPostsLoadStatus(state, status) {
            state.recentPostsLoadStatus = status;
        },

        /*
            Sets the posts
        */
        setRecentPosts(state, recentPosts) {
            state.recentPosts = recentPosts;
        },

         /*
            Sets the posts
        */
        setRelatedPosts(state, relatedPosts) {
            state.relatedPosts = relatedPosts;
        },

        /*
            Set the post load status
        */
        setSinglePostLoadStatus(state, status) {
            state.singlePostLoadStatus = status
        },

        /*
            Set the post load status
        */
        setRelatedPostsStatus(state, status) {
            state.relatedPostsStatus = status
        },

        /*
            Set the post
        */
        setSinglePost(state, singlePost) {
            state.singlePost = singlePost
        },
		
    },
    getters: {
        /*
            Returns the posts load status.
        */
        getAllPostsLoadStatus(state) {
            return state.allPostsLoadStatus;
        },

        /*
            Returns the posts.
        */
        getAllPosts(state) {
            return state.allPosts;
        },

        /*
            Returns the posts load status.
        */
        getRecentPostsLoadStatus(state) {
            return state.recentPostsLoadStatus;
        },

        /*
            Returns the posts.
        */
        getRecentPosts(state) {
            return state.recentPosts;
        },
        getRelatedPosts(state) {
            return state.relatedPosts;
        },

        getSinglePostLoadStatus(state) {
            return state.singlePostLoadStatus;
        },

        getRelatedPostsStatus(state) {
            return state.relatedPostsStatus;
        },

        getSinglePost(state) {
            return state.singlePost
        }
    }
}