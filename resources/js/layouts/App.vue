<style>
    .loader-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .loader {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border-top: 2px solid steelblue;
        border-bottom: 2px solid transparent;
        border-left: 2px solid transparent;
        border-right: 2px solid transparent;
        position: relative;
        animation: spin 3s linear infinite forwards;
    }

    .loader::before,
    .loader::after {
        content: "";
        position: absolute;
        border-radius: 50%;
        border-top: 2px solid inherit;
        border-bottom: 2px solid transparent;
        border-left: 2px solid transparent;
        border-right: 2px solid transparent;
    }

    .loader::before {
        top: 7px;
        left: 7px;
        width: 178px;
        height: 178px;
        border-top: 2px solid tomato;
        animation: spin 2s linear infinite forwards;
    }

    .loader::after {
        top: 16px;
        left: 16px;
        width: 160px;
        height: 160px;
        border-top: 2px solid yellowgreen;
        animation: spin 1s linear infinite forwards;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    /* Scrollbar styles */

    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        /* box-shadow: inset 0 0 5px grey; */
        border-radius: 2px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #3490dc;
        border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #b30000; 
    }
</style>

<template>
    <div id="app-layout">
        <div class="loader-container" v-show="categoriesLoadStatus == 1">
            <div class="loader-wrapper">
                <div class="loader"></div>
            </div>
        </div>
        <div class="main-content" v-show="categoriesLoadStatus == 2">
            <Navbar :categories="categories"/>
            <router-view :key="$route.fullPath"></router-view>
            <Footer/>
        </div>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue'
    import Footer from '../components/Footer.vue'
    
    import { EventBus } from '../event-bus.js';
    export default {
        data: () => ({
            drawer: null,
            current_page: 1
        }),
        created () {
            this.$store.dispatch('loadCategories')
        },
        computed: {
            /*
                Gets the posts load status
            */
            categoriesLoadStatus(){
                return this.$store.getters.getCategoriesLoadStatus;
            },
            categories(){
                return this.$store.getters.getCategories;
            },
        },
        methods: {
            /* will eventually be moved to comments section in post */
            // login(){
            //     EventBus.$emit('prompt-login');
            // },

            // logout(){
            //     this.$store.dispatch('logoutUser');

            //     window.location = '/logout';
            // }
        },
        components: { 
            Navbar,
            Footer
        }
    }
</script>