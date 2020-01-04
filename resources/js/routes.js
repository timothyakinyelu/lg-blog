/*
|-------------------------------------------------------------------------------
| routes.js
|-------------------------------------------------------------------------------
| Contains all of the routes for the application
*/

/*
    Imports Vue and VueRouter to extend with the routes.
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store.js';

import App from './layouts/App'
import Admin from './layouts/Admin'
import Published from './pages/admin/Published'
import Drafts from './pages/admin/Drafts'
import NewPost from './pages/admin/NewPost'
import Preview from './pages/admin/Preview'
import EditPost from './pages/admin/EditPost'
import Categories from './pages/admin/Categories'
import Tags from './pages/admin/Tags'
import Home from './pages/Home'
import Login from './components/Login'
import Post from './pages/Post'
import Category from './pages/Category'

/*
    Extends Vue to use Vue Router
*/
Vue.use(VueRouter)

/*
	This will cehck to see if the user is authenticated or not.
*/
function requireAuth(to, from, next) {
	/*
		Determines where we should send the user.
	*/
    function proceed() {

		/*
			If the user has been loaded determine where we should
			send the user.
		*/
        if (store.getters.getUserLoadStatus() == 2) {
            /*
                If the user is not empty, that means there's a user
                authenticated we allow them to continue. Otherwise, we
                send the user back to the home page.
            */
            if (store.getters.getUser != '') {
                console.log(store.getters.getUser)
                switch (to.meta.permission) {
                    case 'admin':
                        if (store.getters.getUser.permission == 1) {
                            next();
                        } else {
                            next('/login');
                        }
                        break;
                }
            } else {
                next('/login');
            }
        }
    }

	/*
		Confirms the user has been loaded
	*/
    if (store.getters.getUserLoadStatus != 2) {
		/*
			If not, load the user
		*/
        store.dispatch('loadUser');

		/*
			Watch for the user to be loaded. When it's finished, then
			we proceed.
		*/
        store.watch(store.getters.getUserLoadStatus, function () {
            if (store.getters.getUserLoadStatus() == 2) {
                proceed();
            }
        });
    } else {
		/*
			User call completed, so we proceed
		*/
        proceed()
    }

    if (store.getters.isLoggedIn == true) {
        // or however you store your logged in state
        next(); // allow to enter route
    } else {
        next('/login'); // go to '/login';
    }
}

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/theotherside',
            name: 'admin',
            component: Admin,
            redirect: { name: 'published' },
            beforeEnter: requireAuth,
            meta: {
                permission: 'admin'
            },
            children: [
                {
                    path: 'published',
                    name: 'published',
                    component: Published
                },
                {
                    path: 'drafts',
                    name: 'drafts',
                    component: Drafts,
                },
                {
                    path: 'posts/newpost',
                    name: 'newpost',
                    component: NewPost
                },
                {
                    path: 'post/:id/preview',
                    name: 'previewpost',
                    component: Preview
                },
                // {
                //     path: 'post/:id/edit',
                //     name: 'editpost',
                //     component: EditPost
                // },
                {
                    path: 'posts/categories',
                    name: 'categories',
                    component: Categories
                },
                {
                    path: 'posts/tags',
                    name: 'tags',
                    component: Tags
                }
            ]
        },
        {
            path: '/',
            redirect: { name: 'home' },
            component: App,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: Home
                },
                {
                    path: ':page',
                    name: 'posts',
                    component: Home
                },
                {
                    path: 'posts/post/:id/:slug',
                    name: 'post',
                    component: Post
                },
                {
                    path: 'categories/category/:id/:slug',
                    name: 'category',
                    component: Category
                },
                {
                    path: 'categories/category/:id/:slug/:page',
                    name: 'cat',
                    component: Category
                }
            ]
        },
    ]
});

// router.beforeEach((to, from, next) => {
//     // redirect to login page if not logged in and trying to access a restricted page
//     const publicPages = ['/login', '/'];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem('token');

//     if (authRequired && !loggedIn) {
//       return next('/login');
//     }

//     next();
// })