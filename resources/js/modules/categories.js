// VUEX modules/jobtypes.js
/*
    The Vuex data store for the job types
*/

import CatAPI from '../api/category'

export const categories_ = {
    state: {
        category: '',
        categoryLoadStatus: 0,
    },
    actions: {
        loadCategoryPosts( { commit }, data ){
            commit( 'setCategoryLoadStatus', 1 );

            CatAPI.getCategory(data.id, data.slug, data.current_page)
            .then( function(response) {
                commit( 'setCategory', response.data.cat_posts );
                commit( 'setCategoryLoadStatus', 2 );
            })
            .catch( function() {
                commit( 'setCategory', []);
                commit( 'setCategoryLoadStatus', 3 );
            });
        },
    },
    mutations: {
        setCategoryLoadStatus( state, status ){
            state.categoryLoadStatus = status;
        },
        setCategory( state, category ){
            state.category = category;
        },
    },
    getters: {
        getCategoryLoadStatus( state ) {
            return state.categoryLoadStatus;
        },
        getCategoryPosts( state ) {
            return state.category;
        },
    }
}