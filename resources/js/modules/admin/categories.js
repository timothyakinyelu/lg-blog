// VUEX modules/jobtypes.js
/*
    The Vuex data store for the job types
*/

import CatAPI from '../../api/admin/category.js'

export const categories = {
    state: {
        categories: [],
        categoriesLoadStatus: 0,

        categoryAddStatus: 0,

        updateCategoryStatus: 0,
		updateCategoryText: '',

        categoryDeletedStatus: 0,
		categoryDeleteText: '',
    },
    actions: {
        loadCategories( { commit } ){
            commit( 'setCategoriesLoadStatus', 1 );

            CatAPI.getCategories()
            .then( function(response) {
                commit( 'setCategories', response.data );
                commit( 'setCategoriesLoadStatus', 2 );
            })
            .catch( function() {
                commit( 'setCategories', []);
                commit( 'setCategoriesLoadStatus', 3 );
            });
        },
        addCategory( { commit, dispatch }, data) {
            commit( 'setCategoryAddedStatus', 1 );
            CatAPI.addNewCategory( 
                // data.parent,
                data.name,
                data.slug,
            ).then( function() {
                commit('setCategoryAddedStatus', 2);
                dispatch('loadCategories');
            }).catch(function() {
                commit('setCategoryAddedStatus', 3)
            });
        },
        //Update the job type
		updateCategory( { commit, dispatch }, data ){
			commit( 'setUpdateCategoryStatus', 1 );
			CatAPI.updateCategory( 
                data.id,
                // data.parent, 
                data.name,
                data.slug,
                )
            .then( function( response ){
                commit( 'setUpdateCategoryText', response.data.name+' has been successfully updated!');
                commit( 'setUpdateCategoryStatus', 2 );
                    dispatch( 'loadCategories' );
                })
            .catch( function( error ){
                commit( 'setUpdateCategoryStatus', 3 );
            });
		},
        /*
			Deletes an industry.
		*/
		deleteCategory( { commit, dispatch }, data ){
			commit( 'setCategoryDeleteStatus', 1 );

			CatAPI.deleteCategory( data.categoryID )
            .then( function( response ){
                commit( 'setCategoryDeletedText', 'Job Type has been successfully deleted!');
                commit( 'setCategoryDeleteStatus', 2 );

                /*
                    Load the categories
                */
                dispatch( 'loadCategories' );
            })
            .catch( function(){
                commit( 'setCategoryDeleteStatus', 3 );
            });
		},
    },
    mutations: {
        setCategoriesLoadStatus( state, status ){
            state.categoriesLoadStatus = status;
        },
        setCategories( state, categories ){
            state.categories = categories;
        },
        setUpdateCategoryStatus( state, status ){
			state.updateCategoryStatus = status;
		},
		setUpdateCategoryText( state, text ){
			state.updateCategoryText = text;
		},
        setCategoryAddedStatus( state, status ){
            state.categoryAddStatus = status;
        },
        setCategoryDeleteStatus( state, status ){
			state.categoryDeletedStatus = status;
		},
		setCategoryDeletedText( state, text ){
			state.categoryDeleteText = text;
		},
    },
    getters: {
        getCategoriesLoadStatus( state ) {
            return state.categoriesLoadStatus;
        },
        getCategories( state ) {
            return state.categories;
        },
		getUpdateCategoryStatus( state ){
			return state.updateCategoryStatus;
		},
		getUpdateCategoryText( state ){
			return state.updateCategoryText;
		},
        getCategoryAddStatus( state ){
            return state.categoryAddStatus;
        },
        getCategoryDeletedStatus( state ){
			return state.categoryDeletedStatus;
		},
		getCategoryDeletedText( state ){
			return state.categoryDeleteText;
		},
    }
}