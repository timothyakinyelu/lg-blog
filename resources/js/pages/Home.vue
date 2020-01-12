
<template>
    <div>
        <section id="site-content" class="site-content tw-relative tw-flex-1 tw-z-10">
            <div class="section section-post-carousel tw-border-t tw-border-soft">
                <div class="row">
                    <div class="col-xs-12 col-lg-9">
                        <div class="tw-container">
                            <div class="section-content">
                                <div class="posts swiper-container tw--mx-4 swiper-container-horizontal">
                                    <div class="container">
                                        <div class="row">
                                            <div class="no-posts" v-if="allPosts.data.length < 1">
                                                <h1><strong>No Posts Yet!</strong></h1>
                                            </div>
                                            <div v-if="allPosts" class="swiper-wrapper tw-border-box tw-mb-8" style="margin-bottom:0;" >
                                                <div class="tw-w-full tw-h-auto tw-px-4 
                                                    tw-mb-8 swiper-slide md_tw-w-1/2 
                                                    lg_tw-w-1/2 swiper-slide-active" 
                                                    v-for="post in allPosts.data" v-bind:key="post.id"
                                                    >
                                                    <article class="post-style-cover has-mode 
                                                    mode-dark tw-bg-black tw-flex tw-flex-col 
                                                    tw-justify-end tw-relative tw-overflow-hidden 
                                                    tw-h-full post-26 post type-post status-publish 
                                                    format-standard has-post-thumbnail hentry category-beauty 
                                                    tag-beautiful tag-culture tag-trends">
                                                        <div class="post-horizontal-fill tw-relative tw-z-20 tw-pointer-events-none"></div>
                                                        <div class="grid post-media post-media-image tw-flex-1 tw-absolute tw-inset-0">
                                                            <figure class="effect-hera post-thumbnail tw-block tw-absolute tw-inset-0">
                                                                <img class="header-image tw-h-full tw-w-full 
                                                                tw-object-cover wp-post-image" width="450" height="270" :src="post.photo.image" alt=""/>
                                                                <figcaption>
                                                                    <h2></h2>
                                                                    <p>
                                                                        <router-link class="" :to="{ name: 'post', params: { id: post.id, slug: post.slug}}">
                                                                            <i class="fab fa-readme"></i>
                                                                        </router-link>
                                                                        <!-- <a href="#"><i class="fa fa-fw fa-file-pdf-o"></i></a>
                                                                        <a href="#"><i class="fa fa-fw fa-file-image-o"></i></a>
                                                                        <a href="#"><i class="fa fa-fw fa-file-archive-o"></i></a>
                                                                        <a href="#"><i class="fa fa-fw fa-file-code-o"></i></a> -->
                                                                    </p>
                                                                </figcaption>			
                                                            </figure>
                                                        </div>
                                                        <!-- <div class="post-horizontal-fill tw-relative tw-z-20 tw-pointer-events-none"></div>
                                                        <div class="post-media post-media-image tw-flex-1 tw-absolute tw-inset-0">
                                                            <router-link class="post-thumbnail tw-block tw-absolute tw-inset-0"
                                                            :to="{ name: 'post', params: { id: post.id, slug: post.slug}}">
                                                                <div class="colour-on-hover" v-for="img in post.photos" v-bind:key="img.id" >
                                                                    <img class="header-image tw-h-full tw-w-full tw-object-cover wp-post-image" width="480" height="270" :src="img.image" alt="">
                                                                    <div class=" tw-bg-scrim tw-inset-0"></div>
                                                                </div>
                                                            </router-link>
                                                        </div> -->
                                                        <div class="post-body tw-relative tw-z-10 tw-p-6 md_tw-p-8 
                                                        tw-pointer-events-none tw-text-left lg_tw-p-8">
                                                            <div class="post-header">
                                                                <div class="post-categories tw-overline tw-text-xs 
                                                                tw-text-strong tw-inherit-link-colors tw-mb-2 
                                                                tw-pointer-events-auto">
                                                                <router-link :to="{ name: 'category', params: { id: post.category.id, slug: post.category.slug}}">{{post.category.name}}</router-link> 
                                                                </div>
                                                                <h2 class="post-title tw-text-2xl lg_tw-text-2xl 
                                                                tw-mb-0 tw-pointer-events-auto">
                                                                    <router-link :to="{ name: 'post', params: { id: post.id, slug: post.slug}}">
                                                                        {{post.title}}
                                                                    </router-link>
                                                                </h2>
                                                                <div class="post-meta tw-text-sm tw-text-default 
                                                                tw-pointer-events-auto tw-mt-4">
                                                                    <span class="date">
                                                                        {{ post.updated_at }}
                                                                    </span>
                                                                    <span class="comment_count" style="float: right;">
                                                                        <i class="far fa-comments">
                                                                            {{ post.comments_count }}
                                                                        </i>
                                                                    </span>
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                                <!-- <button v-if="allPosts.last_page > 1" class="btn btn-primary form-control loadmorebutton" v-on:click="fetchPosts(allPosts.current_page + 1)">Load more</button> -->
                                                <pagination v-if="allPosts.last_page > 1" :pagination="allPosts" :offset="5" @paginate="fetchPosts(allPosts.current_page)"></pagination>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-lg-3">
                        <div class="tw-container" style="padding-left: 0;padding-top: 12px;">
                            <Hsidebar/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Pagination from '../components/Pagination' 
    import Hsidebar from '../components/Hsidebar'
    export default {
        props: [
            'categories'
        ],
        data() {
            return {
                // posts: [],
                // items: []
            }
        },
        created () {
            if(this.$route.params.page == '') {
                this.$store.dispatch( 'loadAllPosts', {
                    'current_page': this.current_page
                });
            } else {
                this.$store.dispatch( 'loadAllPosts', {
                    'current_page' : this.$route.params.page
                });
            }
        },
        methods: {
            fetchPosts(page) {
                if (page > this.allPosts.last_page) {
                    page = this.allPosts.last_page;
                }
                
                // this.$store.dispatch( 'loadAllPosts', {
                //     'current_page' : page
                // });
                this.$router.push({ name: 'posts', params: { page: page}})
                // this.items.push(this.allPosts)
                // this.posts = this.items
            }
        },
        /*
            Defines the computed properties on the component.
        */
        computed: {
            /*
                Gets all posts
            */
            allPosts(){
                return this.$store.getters.getAllPosts;
            },

            allPostsLoadStatus() {
                return this.$store.getters.getAllPostsLoadStatus;
            }
        },
        components: { 
            Hsidebar,
            Pagination
        }
    }
</script>

<style>
    .tw-z-10 {
        z-index: 10;
    }
    .tw-relative {
        position: relative;
    }
    .tw-flex-1 {
        flex: 1 1 0%;
    }
    section {
        display: block;
    }

    @media (min-width: 1024px){    
        .home .section-post-carousel {
            padding-top: 4rem;
            padding-right: 0;
            padding-bottom: 4rem;
            padding-left: 0;
        }
    }
    .home .section-post-carousel {
        padding-top: 3rem;
        padding-right: 0;
        padding-bottom: 3rem;
        padding-left: 0;
    }
    .tw-border-t {
        border-top-width: 1px;
    }
    .tw-border-soft {
        border-color: rgba(0,0,0,.05);
        background: #e0e0e0
    }

    @media (min-width: 1024px){    
        .tw-container {
            padding-left: 2rem;
            padding-right: 2rem;
            max-width: 1200px;
        }
    }
    .tw--mx-4 {
        margin-left: -1rem;
        margin-right: -1rem;
    }
    .swiper-container {
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
    }
    .tw-border-box {
        box-sizing: border-box;
    }
    .tw--mb-8 {
        margin-bottom: -2rem;
    }
    .swiper-wrapper {
        /* position: relative; */
        width: 100%;
        /* height: 100%;
        z-index: 1;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-transition-property: -webkit-transform;
        transition-property: -webkit-transform;
        -o-transition-property: transform;
        transition-property: transform;
        transition-property: transform,-webkit-transform;
        -webkit-box-sizing: content-box;
        box-sizing: content-box; */
    }
    .tw-px-4 {
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .tw-mb-8 {
        margin-bottom: 2rem;
        display: inline-block;
    }
    .tw-h-auto {
        height: auto;
        width: 400px;
        max-width: 400px;
    }
    .mode-dark {
        color: rgba(255,255,255,0.7);
    }
    .focus_tw-bg-black:focus, .group:hover .group-hover_tw-bg-black, .hover_tw-bg-black:hover, .tw-bg-black {
        background-color: #1a1a1c;
    }
    .mode-dark, .mode-dark *, .mode-dark *:before, .mode-dark *:after {
        border-color: rgba(255,255,255,.1);
    }
    .mode-dark {
        color: rgba(255,255,255,.7);
    }
    .tw-relative {
        position: relative;
    }
    .tw-overflow-hidden {
        overflow: hidden;
    }
    .tw-justify-end {
        justify-content: flex-end;
    }
    .tw-flex-col {
        flex-direction: column;
    }
    .tw-flex {
        display: flex;
    }
    .tw-bg-black {
        background-color: #141414;
    }
    .post-style-cover {
        max-height: 560px;
    }
    .tw-inset-0 {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .tw-absolute {
        position: absolute;
    }
    .tw-flex-1 {
        flex: 1 1 0%;
    }
    .tw-object-cover {
        -o-object-fit: cover;
        object-fit: cover;
    }
    .tw-h-full {
        height: 100%;
    }

    img, video {
        max-width: 100%;
        height: auto;
    }
    @media (min-width: 1024px){    
        .lg_tw-p-8 {
            padding: 2rem;
        }
    }
   
    .tw-z-10 {
        z-index: 10;
    }
    .tw-text-left {
        text-align: left;
    }
    .tw-relative {
        position: relative;
    }
    .tw-pointer-events-none {
        pointer-events: none;
    }

    .tw-p-6 {
        padding: 1.5rem;
    }
    .tw-text-xs {
        font-size: 0.75rem;
    }

    .tw-mb-2 {
        margin-bottom: .5rem;
    }
    .mode-dark .tw-text-strong {
        color: #ffffff;
    }
    .tw-overline {
        font-family: Karla;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    }
    .mode-dark h2 {
        color: fff;
    }
    @media (min-width: 1024px){    
        .lg_tw-text-2xl {
            font-size: 1.5rem;
        }
    }

    .tw-mb-0 {
        margin-bottom: 0;
    }
    .tw-text-sm {
        font-size: 0.875rem;
    }
    .tw-mt-4 {
        margin-top: 1rem;
    }
    .post-horizontal-fill {
        padding-bottom: 33.3333333333%;
    }
    .post-categories a {
        color: cornsilk;
        font-weight: 600;
        /* font-family: livvic sans-serif; */
        font-size: 14px;
    }
    .post-title a {
        font-size: 1.5rem;
        color: cornsilk;
    }

    /* image animation*/
    img{
        /* float: left;
        width: 32.5%;
        margin:0.25%;
        margin-bottom: 80px; */
        overflow: hidden;
        display: block;
    }

    /* Common style */
    .grid figure {
        position: relative;
        float: left;
        overflow: hidden;
        /* margin: 10px 1%; */
        min-width: 320px;
        max-width: 475px;
        max-height: 300px;
        /* width: 48%; */
        height: auto;
        /* background: #3085a3; */
        text-align: center;
        cursor: pointer;
    }

    .grid figure img {
        position: relative;
        display: block;
        min-height: 300px;
        max-width: 100%;
        height: 100%;
        opacity: 0.65;
    }

    .grid figure figcaption {
        padding: 0;
        color: #fff;
        text-transform: uppercase;
        font-size: 1.25em;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .grid figure figcaption::before,
    .grid figure figcaption::after {
        pointer-events: none;
    }

    .grid figure figcaption,
    .grid figure figcaption > a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    /* For some effects it will show as a button */
    .grid figure figcaption > a {
        z-index: 1000;
        text-indent: 200%;
        white-space: nowrap;
        font-size: 0;
        opacity: 0;
    }

    .grid figure h2 {
        word-spacing: -0.15em;
        font-weight: 300;
    }

    .grid figure h2 span {
        font-weight: 800;
    }

    .grid figure h2,
    .grid figure p {
        margin: 0;
    }

    .grid figure p {
        letter-spacing: 1px;
        font-size: 68.5%;
    }
    /*-----------------*/
    /***** Hera *****/
    /*-----------------*/

    /* figure.effect-hera {
        background: #303fa9;
    } */

    figure.effect-hera h2 {
        font-size: 158.75%;
    }

    figure.effect-hera h2,
    figure.effect-hera p {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
        -webkit-transform: translate3d(-50%,-50%,0);
        transform: translate3d(-50%,-50%,0);
        -webkit-transform-origin: 50%;
        transform-origin: 50%;
    }

    figure.effect-hera figcaption::before {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 150px;
        height: 150px;
        border: 2px solid #fff;
        content: '';
        opacity: 0;
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
        -webkit-transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,-45deg) scale3d(0,0,1);
        transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,-45deg) scale3d(0,0,1);
        -webkit-transform-origin: 50%;
        transform-origin: 50%;
    }

    figure.effect-hera p {
        width: 100px;
        text-transform: none;
        font-size: 121%;
        line-height: 2;
    }

    figure.effect-hera p a {
        color: #fff;
    }

    figure.effect-hera p a:hover,
    figure.effect-hera p a:focus {
        opacity: 0.6;
    }

    figure.effect-hera p a i {
        opacity: 0;
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
    }

    figure.effect-hera p a:first-child i {
        -webkit-transform: translate3d(-60px,-60px,0);
        transform: translate3d(-60px,-60px,0);
        font-size: 70px;
        color: green;
    }

    figure.effect-hera p a:nth-child(2) i {
        -webkit-transform: translate3d(60px,-60px,0);
        transform: translate3d(60px,-60px,0);
    }

    figure.effect-hera p a:nth-child(3) i {
        -webkit-transform: translate3d(-60px,60px,0);
        transform: translate3d(-60px,60px,0);
    }

    figure.effect-hera p a:nth-child(4) i {
        -webkit-transform: translate3d(60px,60px,0);
        transform: translate3d(60px,60px,0);
    }

    figure.effect-hera:hover figcaption::before {
        opacity: 1;
        -webkit-transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,-45deg) scale3d(1,1,1);
        transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,-45deg) scale3d(1,1,1);
    }

    figure.effect-hera:hover h2 {
        opacity: 0;
        -webkit-transform: translate3d(-50%,-50%,0) scale3d(0.8,0.8,1);
        transform: translate3d(-50%,-50%,0) scale3d(0.8,0.8,1);
    }

    figure.effect-hera:hover p i:empty {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0); /* just because it's stronger than nth-child */
        opacity: 1;
    }
    @media screen and (max-width:787px) {
        figure.effect-hera figcaption::before {
            left: 40%;
        }
        figure.effect-hera h2, figure.effect-hera p {
            left: 40%;
        }
        .section {
            padding-right: 15px;
        }
    }
</style>