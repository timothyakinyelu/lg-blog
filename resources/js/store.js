//VUEX store.js

/*
    Adds the promise polyfill for IE 11
*/
require('es6-promise').polyfill();

import Vue from 'vue'
import Vuex from 'vuex'

import {auth} from './modules/admin/auth'
import {posts} from './modules/admin/posts'
import {categories} from './modules/admin/categories'
import {tags} from './modules/admin/tags'
import {posts_} from './modules/posts'
import {categories_} from './modules/categories'
import {comments_} from './modules/comments'

Vue.use( Vuex )

export default new Vuex.Store({
    modules: {
        auth,
        posts,
        categories,
        tags,
        posts_,
        categories_,
        comments_
    }
})