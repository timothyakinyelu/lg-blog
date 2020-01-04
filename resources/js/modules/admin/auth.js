/*
|-------------------------------------------------------------------------------
| VUEX modules/admin/auth.js
|-------------------------------------------------------------------------------
| The Vuex data store for authentication
*/
import setAuth from '../../api/admin/setAuth'
import { BLOG_CONFIG } from '../../config';
import { authHeader } from '../../authHelper';
import { router } from '../../routes';


const token = localStorage.getItem('token');
export const auth = {
    state: {
        status: '',
        token: token || '',
        user: {},
        userLoadStatus: 0,
    },
    actions: {
        login({ dispatch, commit }, user) {
            const requestOptions = {
                headers: authHeader()
            };
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url:  BLOG_CONFIG.API_URL + '/login', data: user, method: 'POST', requestOptions  })
                .then(function(resp) {
                    const token = resp.data.success
                    
                    localStorage.setItem('token', token)
                    commit('auth_success',token)
                    dispatch( 'loadUser' );
                    router.push({name: 'admin'})
                    resolve(resp)
                })
                .catch(err => {
                  commit('auth_error')
                  localStorage.removeItem('token')
                  reject(err)
                })
            })
        },  
        loadUser({dispatch, commit}) {
            commit( 'setUserLoadStatus', 1 );

            setAuth.getUser()
            .then( function( response ){
                commit( 'setUser', response.data );
                commit( 'setUserLoadStatus', 2 );
            })
            .catch( function(){
                commit( 'setUser', {} );
                commit( 'setUserLoadStatus', 3 );
                window.location.href = '/login';
            });
        },
        logout({ commit }) {
            setAuth.logout();
            commit('logout');
        },  
    },
    mutations: {
        auth_request(state){
            state.status = 'loading'
        },
        auth_success(state, token){
            state.status = 'success'
            state.token = token
        },
        auth_error(state){
            state.status = 'error'
        },
        setUserLoadStatus( state, status ){
            state.userLoadStatus = status;
        },
        setUser(state, resp){
            state.user = resp
        },
        setUserError(state){
            state.status = 'error'
        },
        logout(state){
            state.status = ''
            state.user = ''
        },
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => !!state.status,

        getUserLoadStatus( state ){
            return function(){
                return state.userLoadStatus;
            }
        },
        getUser( state ){
            return state.user;
        },
    }
}