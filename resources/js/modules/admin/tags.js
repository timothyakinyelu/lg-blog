// VUEX modules/jobtypes.js
/*
    The Vuex data store for the job types
*/

import TagAPI from '../../api/admin/tag.js'

export const tags = {
    state: {
        tags: [],
        tagsLoadStatus: 0,

        tagAddStatus: 0,

        updateTagStatus: 0,
		updateTagText: '',

        tagDeletedStatus: 0,
		tagDeleteText: '',
    },
    actions: {
        loadTags( { commit } ){
            commit( 'setTagsLoadStatus', 1 );

            TagAPI.getTags()
            .then( function(response) {
                commit( 'setTags', response.data );
                commit( 'setTagsLoadStatus', 2 );
            })
            .catch( function() {
                commit( 'setTags', []);
                commit( 'setTagsLoadStatus', 3 );
            });
        },
        addTag( { commit, dispatch }, data) {
            commit( 'setTagAddedStatus', 1 );
            TagAPI.addNewTag( 
                data.name,
            ).then( function(response) {
                commit('setTagAddedStatus', 2);
                dispatch('loadTags');
            }).catch(function() {
                commit('setTagAddedStatus', 3)
            });
        },
        //Update the job type
		updateTag( { commit, dispatch }, data ){
			commit( 'setUpdateTagStatus', 1 );
			TagAPI.updateTag( 
                data.id, 
                data.name,
                )
            .then( function( response ){
                commit( 'setUpdateTagText', response.data.name+' has been successfully updated!');
                commit( 'setUpdateTagStatus', 2 );
                    dispatch( 'loadTags' );
                })
            .catch( function( error ){
                commit( 'setUpdateTagStatus', 3 );
            });
		},
        /*
			Deletes an industry.
		*/
		deleteTag( { commit, dispatch }, data ){
			commit( 'setTagDeleteStatus', 1 );

			TagAPI.deleteTag( data.tagID )
            .then( function( ){
                commit( 'setTagDeletedText', 'Job Type has been successfully deleted!');
                commit( 'setTagDeleteStatus', 2 );

                /*
                    Load the industries
                */
                dispatch( 'loadTags' );
            })
            .catch( function(){
                commit( 'setTagDeleteStatus', 3 );
            });
		},
    },
    mutations: {
        setTagsLoadStatus( state, status ){
            state.tagsLoadStatus = status;
        },
        setTags( state, tags ){
            state.tags = tags;
        },
        setUpdateTagStatus( state, status ){
			state.updateTagStatus = status;
		},
		setUpdateTagText( state, text ){
			state.updateTagText = text;
		},
        setTagAddedStatus( state, status ){
            state.tagAddStatus = status;
        },
        setTagDeleteStatus( state, status ){
			state.tagDeletedStatus = status;
		},
		setTagDeletedText( state, text ){
			state.tagDeleteText = text;
		},
    },
    getters: {
        getTagsLoadStatus( state ) {
            return state.tagsLoadStatus;
        },
        getTags( state ) {
            return state.tags;
        },
		getUpdateTagStatus( state ){
			return state.updateTagStatus;
		},
		getUpdateTagText( state ){
			return state.updateTagText;
		},
        getTagAddStatus( state ){
            return state.tagAddStatus;
        },
        getTagDeletedStatus( state ){
			return state.tagDeletedStatus;
		},
		getTagDeletedText( state ){
			return state.tagDeleteText;
		},
    }
}