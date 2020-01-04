<style scoped>
    .lg_header {
        background-color: #ffffff;
        color: #858585;
        border-bottom-color: #eeeeee;
    }

    .lg_header {
        text-align: center;
        position: relative;
        border-bottom: 1px solid #9e9e9ebd;
    }

    .lg_header {
        width: 100%;
        top: 0;
        left: 0;
        z-index: 99;
        transition: background 0.4s, all 0.3s linear;
    }

    .tw-text-soft {
        color: #e3342f;
        font-weight: bolder;
    }

    .tw-mt-2 {
        margin-top: .5rem;
    }

    .tw-text-center {
        text-align: center;
    }

    .row.lg0 {
        margin: 0px;
    }

    .lg_branding {
        text-align: center;
        padding: 30px 0;
        border-bottom: 1px solid #e8edf1;
    }

    .lg_logo_big .row {
        justify-content: center;
    }

    .lg_header .navbar {
        background: transparent;
        padding: 0px;
        border: 0px;
        border-radius: 0px;
    }

    .lg_header .navbar .navbar-brand {
        padding-top: 0;
    }

    .lg_header .navbar .logo_h {
        color: #fff;
        height: 80px;
        text-align: center;
        line-height: 69px;
        font-size: 30px;
        text-transform: uppercase;
        font-weight: 700;
    }
    
    .lg_logo img {
        height: 40px;
    }

    img {
        max-width: 100%;
        /* height: auto; */
    }

    .lg_logo_big a img {
        height: 250px;
    }

    a img {
        border: 0;
    }

    .lg_header .navbar .nav .nav-item {
        margin-right: 45px;
    }

    .lg_header .navbar .nav .nav-item .nav-link {
        font: 600 12px/80px "Philosopher", sans-serif;
        text-transform: uppercase;
        color: #020a21;
        padding: 0px;
        display: inline-block;
        font-size: 14px;
    }

    .lg_header .navbar .nav .nav-item.submenu {
        position: relative;
    }

    .lg_header .navbar .navbar-brand {
        padding-top: 0;
    }

    .lg_header .navbar .lg_logo {
        max-height: 150px;
        max-width: 150px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    nav .nav-a {
        font-family: 'Philosopher', 'Sans serif';
        font-weight: 600;
        color: #343a40;
    }

    .nav-a a {
        text-decoration: none;
        color: #e3342f;
    }

    .dropdown:hover>.dropdown-menu {
        display: block;
    }

    .dropdown-toggle::after {
        display: none;
    }

    /* Hamburger style */
    nav #menu_checkbox
    {
        display: none;
    }

    nav label
    {
        position: absolute;
        top: 50%;
        right: 0;
        left: 0;
        margin: 0 auto;
        margin-top: -46px;
        display: none;
        width: 30px;
        height: 30px;
        transform: translateY(-50%);
        transition: 0.3s ease transform;
        cursor: pointer;
    }

    nav label div
    {
        width: 6px;
        height: 2px;
        background-color: #143240;
        margin-left: 0;
        margin-bottom: 6px;
        border-radius: 4px;
        transition: 0.3s ease width, 0.3s ease margin-left, 
        0.3s ease margin-bottom, 0.3s ease background-color;
    }

    nav label div:first-child
    {
        width: 22px;
    }

    nav label div:nth-child(2)
    {
        width: 15px;
    }

    nav label div:last-child
    {
        width: 30px;
        margin-bottom: 0;
    }

    nav #menu_checkbox:checked + label
    {
        transform: translateY(-50%) rotateZ(-90deg);
    }

    nav #menu_checkbox:checked + label div
    {
        width: 6px;
        margin-left: 12px;
        margin-bottom: 3px;
        background-color: #FFC107;
    }
    nav label#navbar_check {
        position: relative;
        top: 45px;
        right: -50px;
        margin-right: 10px;
        margin-left: 10px;
        /* margin-top: 20px; */
    }
    @media (max-width: 787px) {
        a.navbar-brand {
            position: relative;
            left: 20px;
        }
        nav label {
            display: block;
        }
        
    }
</style>

<template>
    <div>
        <header class="lg_header">
            <div class="lg_branding lg_logo_big">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12"> 
                            <router-link :to="{ name: 'home' }">
                                <img src="/images/sugars.png" alt="logo"/> 
                            </router-link>
                        </div>
                    </div>
                    <p class="section-subtitle tw-text-soft tw-mt-2 tw-mb-0"> 
                        I blog about beauty, fashion and food. Love cats and TEA!😍
                        <!-- <i class="fas fa-grin-hearts"></i> -->
                    </p>
                </div>
            </div>
            <div id="myeader" class="lg_main_nav">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container">
                        <router-link :to="{ name: 'home' }" class="navbar-brand lg_logo">
                            <img src="/images/sugar.png" alt="logo on sticky"/>
                        </router-link>
                        <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" 
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button> -->
                        <input type="checkbox" id="menu_checkbox" data-toggle="collapse" 
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation">
                        <label id="navbar_check" class="" for="menu_checkbox" >
                            <div></div>
                            <div></div>
                            <div></div>
                        </label>
                        <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul class="nav navbar-nav menu_nav ml-auto">
                                <li class="nav-item nav-a"><router-link :to="{ name: 'home' }">Home</router-link></li> 
                                <li class="nav-item nav-a" v-for="(category, index) in categories" v-bind:key="index">
                                    <router-link :to="{ path: '/categories/category/' + category.id + '/' + category.slug }">
                                        {{category.name}}
                                    </router-link>
                                </li> 
                                <!-- <li class="nav-item"><router-link :to="{ name: 'food' }" class="nav-a">Food</router-link></li> 
                                <li class="nav-item"><router-link :to="{ name: 'beauty' }" class="nav-a">Beauty</router-link></li>    
                                <li class="nav-item submenu dropdown">
                                    <a to="" class="nav-a dropdown-toggle" data-toggle="dropdown" 
                                    role="button" aria-haspopup="true" aria-expanded="false">
                                        Blog
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a class="nav-a" to="blog.html">Store</a></li>
                                        <li class="nav-item"><a class="nav-a" to="single-blog.html">Blog Details</a></li>
                                        <li class="nav-item"><a class="nav-a" to="element.html">element</a></li>
                                    </ul>
                                </li>  -->
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    </div>
</template>

<script>
  export default {
    props: [
        'categories'
    ],
    data() {
        return {
            // links: [ 
            //     { 
            //         id: 0,
            //         text: '', 
            //         page: '/HelloWorld' 
            //     } 
            // ] 
        }
    }
  }
</script>