<style scoped>
    main {
        display: block;
    }
    .tw-z-10 {
        z-index: 10;
    }
    .tw-flex-1 {
        flex: 1 1 0%;
    }
    @media (min-width: 1024px) {
        .lg_tw-py-16 {
            padding-top: 2rem;
            padding-bottom: 4rem;
        }
    }
    .tw-container {
        width: 100%;
        margin-right: 0;
        margin-left: 0;
        padding-right: 1rem;
        padding-left: 1rem;
    }
    .section {
        border-color: rgba(0,0,0,.05);
    }
    .tw--mb-8 {
        margin-bottom: -2rem;
    }
    .tw--mx-4 {
        margin-left: -1rem;
        margin-right: -1rem;
    }
    .tw-flex-wrap {
        flex-wrap: wrap;
    }
    .tw-flex-row {
        flex-direction: row;
    }
    .tw-flex {
        display: flex;
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
            max-width: 100%;
        }
    }
    .tw--mx-4 {
        margin-left: -1rem;
        margin-right: -1rem;
    }
    @media (min-width: 1024px){    
        .lg-px {
            width: 66.66667%;
        }
    }
    .lg-full {
        width: 100%;
    }
    .lg-px {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .lg-mb-8 {
        margin-bottom: 2rem;
    }
    .lg-bg-surface {
        background-color: #fff;
    }
    .lg-relative {
        position: relative;
    }
    @media (min-width: 1024px){
        .lg_p-10 {
            padding: 2.5rem;
        }
    }
    .header-image {
        max-height: 420px;
    }
    .post-meta-categories a {
        color: #ceaba0;
    }
    .lg-mb-6 {
        margin-bottom: 1.5rem;
    }
    .lg-overline {
        font-family: Karla;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    }
    .lg-text-xs {
        font-size: 0.75rem;
    }
    .lg-text {
        font-family: 'Montserrat', 'sans-serif'
    }
    @media (min-width: 1024px){    
        .lg-text {
            font-size: 2.125rem;
        }
    }
    .lg-mb-0 {
        margin-bottom: 0;
    }
    .lg-text-sm {
        font-size: 0.875rem;
    }
    .lg-text-sm {
        font-size: .875rem;
    }
    .lg-text-soft {
        color: rgba(0,0,0,.38);
    }

    .lg-mt-5 {
        margin-top: 1.25rem;
    }
    .post-tags-container .post-tags:first-child {
        margin-top: 35px;
    }

    .post-tags {
        margin-top: 10px;
        margin-bottom: 0;
    }

    .post-tags-item.post-tags-item-title {
        font-weight: 700;
        background-color: #393939;
        color: #fff;
        border-color: #393939;
    }

    .post-tags-item {
        display: inline-block;
        position: relative;
        padding: 0 15px;
        line-height: 18px;
        margin-right: 10px;
        font-size: 10px;
        text-transform: uppercase;
        border-radius: 100px;
        border: 1px solid #e0e0e0;
        color: #8d8d8d;
        transition: .3s all ease-in-out;
    }

    .post-tags-item {
        display: inline-block;
        position: relative;
        padding: 0 15px;
        line-height: 18px;
        margin-right: 10px;
        font-size: 10px;
        text-transform: uppercase;
        border-radius: 100px;
        border: 1px solid #e0e0e0;
        color: #8d8d8d;
        transition: .3s all ease-in-out;
    }

    /* image slider */
    img {
        max-width: 100%;
        vertical-align: middle;
    }

    .trigger {
        display: none;
    }

    .slider, .slider-wrapper {
        position: relative;
        height: 250px;
    }

    .slide {
        background-color: black;
        width: 100%;
        overflow: hidden;
        position: absolute;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 5000;
        /* opacity: 0; */
        transition: opacity .5s ease-in-out;
    }

    .slide-img {
        filter: brightness(50%);
        height: 100%;
        object-fit: fill;
        display: block;
        margin: 0 auto;
    }

    .slide-figure {
        height: 100%;
        position: relative;
        margin: 0;
    }

    .slide-caption {
        position: absolute;
        bottom: 30%;
        width: calc(100% - 1rem);
        color: white;
        text-align: center;
        left: 50%;
    }

    .trigger:checked + .slide {
        z-index: 6000;
        opacity: 1;
    }

    .slider-nav {
        width: 100%;
        text-align: center;
        margin: 1rem 0;
    }

    .slider-nav--offcanvas {
        position: static;
        margin: 1rem 0;
    }

    .slider-nav__item {
        display: inline-block;
    }
    .slider-nav__label--dot {
        height: .75rem;
        width: .75rem;
        text-indent: -99999px;
        overflow: hidden;
    }

    .slider-nav__label {
        font-size: 13px;
        background-color: #333;
        display: block;
        height: 1em;
        line-height: 2em;
        width: 1em;
        margin-right: 5px;
        text-align: center;
        border-radius: 50%;
        color: white;
        cursor: pointer;
        transition: background-color .25s, color .25s ease-in-out;
    }

    .slider-nav__label:hover,
    .slider-nav__label:active,
    .slider-nav__label:focus {
        background-color: gray;
        color: black;
    }

    @media only screen and (min-width: 1024px) {
    .slider, .slider-wrapper {
        height: 480px;
    }

    .slide-caption {
        width: 65%;
        font-size: 1.5rem;
    }
    }

    @media only screen and (max-width: 1023px) and (min-width: 768px) {
    .slider, .slider-wrapper {
        height: 360px;
    }

    .slide-caption {
        width: 75%;
        font-size: 1.25rem;
    }
    }

    @media only screen and (min-width: 768px) {
        .slide-img {
            width: 100%;
            height: 100%;
        }
    }
    .slide {
        position: absolute;
        /* z-index: 5000;
        opacity: 0;
        transition: opacity .5s ease-in-out; */
    }
    .trigger:checked + .slide {
        z-index: 6000;
        opacity: 1;
    }
    .slider-nav__label:hover, .slider-nav__label:active, .slider-nav__label:focus {
        background-color: gray;
        color: black;
    }

    @media (min-width: 720px)
        {.md_tw-p-8 {
            padding: 2rem;
        }
    }
    .tw-p-6 {
        padding: 1.5rem;
    }
    .tw-mb-8 {
        margin-bottom: 2rem;
    }
    .tw-bg-surface {
        background-color: #fff;
    }
    .tw-text-xl {
        font-size: 1.25rem;
    }
    .tw-mb-6 {
        margin-bottom: 1.5rem;
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
        display: inline-flex;
    }
    .tw-px-4 {
        padding-left: 0;
        padding-right: 1rem;
    }
    .tw-h-auto {
        height: auto;
    }
    .tw-flex-col {
        flex-direction: column;
    }
    .tw-flex {
        display: flex;
    }
    /* .tw-aspect-ratio-16\/9 {
        padding-top: 56.25%;
    } */
    .tw-mb-4 {
        margin-bottom: 1rem;
    }
    .tw-bg-alt {
        background-color: #f3f3f3;
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
    .tw-block {
        display: block;
    }
    .lazyloading, .lazyloaded {
        transition: opacity .1s linear;
        transition-duration: .2s;
        transition-timing-function: ease;
    }
    .tw-w-full {
        width: 100%;
    }
    .tw-object-cover {
        -o-object-fit: cover;
        object-fit: cover;
    }
    .tw-text-left {
        text-align: left;
    }
    .tw-flex-1 {
        flex: 1 1 0%;
    }
    .tw-text-xs {
        font-size: 0.75rem;
    }
    .focus_tw-text-accent:focus, 
    .group:hover .group-hover_tw-text-accent, 
    .hover_tw-text-accent:hover, .tw-text-accent {
        color: #ceaba0;
    }
    .tw-inherit-link-colors a {
        color: inherit !important;
    }
    @media (min-width: 1024px)
    {    .lg_tw-text-lg {
            font-size: 1.125rem;
        }
    }
    .tw-text-sm {
        font-size: 0.875rem;
    }
    .recent_img {
        width: 100%;
        max-height: 135px;
        /* height: 270px; */
        min-height: 135px;
        /* max-width: 300px; */
    }
    .post-title a {
        font-size: 1.5rem;
        color: #495057;
        text-decoration: none;
        margin-bottom: 10px;
    }
    .post-content >>> img {
        border-radius: 5%;
    }
    @media screen and (max-width:787px) {
        .post-body {
            margin-top: 40px;
            padding: 20px;
        }
        .post-content >>> img {
            max-height: 300px !important;
            max-width: 300px !important;
            border-radius: 5%;
        }
    }
    /* @media screen and (max-width: 787px)
        {  
            .widget[data-v-21df415f] {
            padding-left: 0 !important;
        }
    } */
</style>

<template>
    <div>
        <main id="site-content" class="site-content tw-relative tw-flex-1 tw-z-10" v-if="blogPostLoadStatus == 2">
            <div class="row">
                <div class=" col-xs-12 col-lg-9 section section-main tw-border-t tw-border-soft tw-py-10 lg_tw-py-16">
                    <div class="tw-container">
                        <div class="section-content tw-flex tw-flex-wrap tw-flex-row tw--mx-4 tw--mb-8">
                            <div class="lg-full lg-px">
                                <article class="post-single lg-bg-surface lg-mb-8 post">
                                    <div class="post-media post-media-image lg-relative">
                                        <div class="slider-wrapper">
                                            <div class="slider">
                                                <div>
                                                    <!-- <input type="radio" name="slider" class="trigger"/> -->
                                                    <div class="slide">
                                                        <figure class="slide-figure">
                                                            <img class="slide-img" :src="blogPost.photo.image" />
                                                        </figure><!-- .slide-figure -->
                                                    </div><!-- .slide -->
                                                </div>  
                                            </div>
                                        </div><!-- .slider-wrapper -->
                                        <!-- <div class="" v-for="img in blogPost.photos" v-bind:key="img.id" >
                                            <img width="960px" height="540px" class="header-image" :src="img.image" alt="">
                                        </div> -->
                                    </div>
                                    <div class="post-body lg-p-6 lg_p-10">
                                        <header class="post-header lg-mb-6">
                                            <div class="post-meta lg-overline post-meta-top lg-text-xs lg-mb-2">
                                                <span class="post-meta-categories">
                                                    <router-link :to="{ name: 'category', params: { id: blogPost.category.id, slug: blogPost.category.slug}}">{{blogPost.category.name}}</router-link>
                                                </span>
                                                <h2 class="post-title lg-text lg-mb-0">
                                                    {{blogPost.title}}
                                                </h2>
                                            </div>
                                            <div class="post-meta lg-text-sm post-meta-bottom lg-text-soft lg-mt-5">
                                                {{blogPost.updated_at}}
                                            </div>
                                        </header>
                                        <div class="post-content lg-clearfix" v-html="blogPost.content"></div>
                                        <div class="post-tags-container">
                                            <div class="post-tags">
                                                <a class="post-tags-item post-tags-item-title">Tags</a>
                                                <a class="post-tags-item" v-for="tag in blogPost.tags" :key="tag.id">
                                                    {{tag.name }}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- insert comment count and social media share icons -->
                                    <div class="lg-p-6 lg_p-10">
                                        <Comments
                                            :comments = "blogPost.comments"
                                        />
                                    </div>
                                </article>
                                <div class="related-posts tw-bg-surface tw-p-6 md_tw-p-8 tw-mb-8" v-if = "relatedPosts.length > 0">
                                    <h2 class="related-posts-title tw-text-xl tw-mb-6"> Related Posts</h2>
                                    <div class="related-posts-content">
                                        <div class="posts swiper-container tw--mx-4 swiper-container-initialized swiper-container-horizontal" data-column="1/3" data-loop="1">
                                            <div class="swiper-wrapper tw-border-box tw--mb-8">
                                                <div class="tw-w-full tw-h-auto tw-px-4 tw-mb-8 swiper-slide 
                                                md_tw-w-1/2 lg_tw-w-1/3 swiper-slide-duplicate swiper-slide-duplicate-next" 
                                                data-swiper-slide-index="1" style="width: 280.333px;"
                                                v-for="related in relatedPosts" v-bind:key="related.id"
                                                >
                                                    <article class="post-style-default tw-flex tw-flex-col tw-relative tw-h-full post-138 post type-post status-publish format-standard has-post-thumbnail hentry category-beauty tag-beautiful tag-female tag-makeup tag-style">
                                                        <div class="post-media post-media-image tw-bg-alt tw-relative tw-aspect-ratio-16/9 tw-mb-4"> 
                                                            <router-link :to="{ name: 'post', params: { id: related.id, slug: related.slug}}">
                                                                <img class="recent_img" :src="related.photo.image" alt="">
                                                            </router-link>
                                                        </div>
                                                        <div class="post-body tw-flex-1 tw-text-left">
                                                            <div class="post-header">
                                                                <div class="post-categories tw-overline tw-text-accent tw-inherit-link-colors tw-text-xs tw-mb-2"> 
                                                                    <router-link :to="{ name: 'category', params: { id: related.category.id, slug: related.category.slug}}">
                                                                        {{related.category.name}}
                                                                    </router-link>
                                                                </div>
                                                                <h2 class="post-title tw-text-2xl lg_tw-text-lg tw-mb-0"> 
                                                                    <router-link class="tw-block tw-bg-overlay tw-aspect-ratio-1/1 tw-relative" 
                                                                        :to="{ name: 'post', params: { id: related.id, slug: related.slug}}" >
                                                                        {{related.title}}
                                                                    </router-link>
                                                                </h2>
                                                                <div class="post-meta tw-text-sm tw-text-soft tw-mt-3"> 
                                                                    <time class="post-meta-date" :datetime="related.updated_at">{{related.updated_at}}</time>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- insert sidebar for recent posts -->
                <div class="col-xs-12 col-lg-3" style="background: #e0e0e0;">
                    <div class="tw-container" style="padding-left: 0;padding-top: 20px;">
                        <Hsidebar/>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import Hsidebar from '../components/Hsidebar'
import Comments from '../components/Comments'

export default {
    data() {
        return {
            post: '',
            parents: []
        }
    },
     /*
    When the component is created, add a location
    */
    created(){
        this.$store.dispatch( 'loadSinglePost', {
            id: this.$route.params.id,
            slug: this.$route.params.slug
        });
    },
    methods: {
        // imgLoad() {
        //     return this.post.id
        // }
    },
    /*
    Loads the Vuex data we need and add post status.
    */
    computed: {
        blogPostLoadStatus(){
            return this.$store.getters.getSinglePostLoadStatus;
        },
        blogPost(){
            return this.$store.getters.getSinglePost;
        },
        relatedPosts() {
            return this.$store.getters.getRelatedPosts;
        },
        relatedPostsStatus() {
            return this.$store.getters.getRelatedPostsStatus;
        }
    },
    components: {
        Hsidebar,
        Comments
    }
}
</script>