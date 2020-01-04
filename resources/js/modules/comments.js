/*
|-------------------------------------------------------------------------------
| VUEX modules/posts.js
|-------------------------------------------------------------------------------
| The Vuex data store for the posts
*/

import Comment_API from '../api/comment';

export const comments_ = {
    state: {
        allComments: [],
        allCommentsLoadStatus: 0,

        commentAdded: {},
		commentAddStatus: 0,

        singleComment: {},
        singleCommentLoadStatus: 0,

        commentDeletedStatus: 0,
    },
    actions: {
        /*
            Loads the posts from the API
        */
        loadComments({commit}) {
            commit('setAllCommentsLoadStatus', 1);
           
            Comment_API.getAllComments()
            .then(function(response) {
                commit('setAllComments', 
                    response.data.comments,
                );
                commit('setAllCommentsLoadStatus', 2);
            })
            .catch(function() {
                commit('setAllComments', []);
                commit('setAllCommentsLoadStatus', 3);
            });
        },
        /*
            Loads an individual comment for preview
        */
        loadSingleComment({commit}, data) {
            commit('setSingleCommentLoadStatus', 1);

            Comment_API.getSingleComment(
                data.id,
            )
            .then(function(response) {
                
                commit('setSingleComment', response.data);
                commit('setSingleCommentLoadStatus', 2);
            })
            .catch(function() {
                commit('setSingleComment', {});
                commit('setSingleCommentLoadStatus', 3)
            });
        },
        addComment( { commit, state, dispatch }, data ){
            commit( 'setCommentAddedStatus', 1 );
            
            Comment_API.addNewComment( 
                data.postID, 
                data.name, 
                data.email, 
                data.comment,
            )
            .then( function( response ){
                commit( 'setCommentAddedStatus', 2 );
                commit( 'setCommentAdded', response.data );
                dispatch( 'loadComments' );
            })
            .catch( function(){
                commit( 'setCommentAddedStatus', 3 );
            });
        },
        /*
			Deletes a comment.
		*/
		deleteComment( { commit, dispatch }, data ){
			commit( 'setCommentDeleteStatus', 1 );

			Comment_API.deleteComment( data.commentID )
            .then( function( response ){
                commit( 'setCommentDeleteStatus', 2 );

                /*
                    Load the posts
                */
                dispatch( 'loadComments' );
            })
            .catch( function(){
                commit( 'setCommentDeleteStatus', 3 );
            });
		},
    },
    mutations: {
        /*
            Sets the comments load status
        */
        setAllCommentsLoadStatus(state, status) {
            state.allCommentsLoadStatus = status;
        },

        /*
            Sets the comments
        */
        setAllComments(state, allComments) {
            state.allComments = allComments;
        },

        /*
            Set the comment load status
        */
        setSingleCommentLoadStatus(state, status) {
            state.singleCommentLoadStatus = status
        },

        /*
            Set the comment
        */
        setSingleComment(state, singleComment) {
            state.singleComment = singleComment
        },

        setCommentAdded( state, singleComment ){
			state.commentAdded = singleComment;
		},

		/*
			Set the post add status
		*/
		setCommentAddedStatus( state, status ){
			state.commentAddStatus = status;
        },
        /*
			Sets the post delete status
		*/
        setCommentDeleteStatus( state, status ){
			state.commentDeletedStatus = status;
        },
		
    },
    getters: {
        /*
            Returns the comments load status.
        */
        getAllCommentsLoadStatus(state) {
            return state.allCommentsLoadStatus;
        },

        /*
            Returns the comments.
        */
        getAllComments(state) {
            return state.allComments;
        },

        getSingleCommentLoadStatus(state) {
            return state.singleCommentLoadStatus;
        },

        getSingleComment(state) {
            return state.singleComment
        },
        /*
			Gets the comment add status
		*/
		getCommentAddStatus( state ){
			return state.commentAddStatus;
		},
    }
}