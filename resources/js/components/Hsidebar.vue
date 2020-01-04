<style scoped>
    @media (min-width: 1024px)
        {.lg-px-4 {
            width: 33.33333%;
        }
    }

    .tw-w-full {
        width: 100%;
    }
    .tw-px-4 {
        padding-left: 1rem;
        padding-right: 1rem;
    }
    @media (min-width: 1024px)
        {.lg_tw-flex-col {
            flex-direction: column;
        }
    }
    @media (min-width: 720px)
        {.md_tw-flex-row {
            flex-direction: row;
        }
    }
    .tw--mx-4 {
        margin-left: -1rem;
        margin-right: -1rem;
    }
    .lg-h-full {
        height: 100%;
    }
    .tw-flex-wrap {
        flex-wrap: wrap;
    }
    .tw-flex-col {
        flex-direction: column;
    }
    .tw-flex {
        display: flex;
    }
    @media (min-width: 1024px)
        {   .lg_tw-w-full {
            width: 100%;
        }
    }
    .tw-mb-8 {
        margin-bottom: 2rem;
    }
    @media (min-width: 720px)
        {.md_tw-p-8 {
            padding: 2rem;
        }
    }
    .tw-p-6 {
        padding: 1.1rem;
    }
    .tw-mb-8 {
        margin-bottom: 2rem;
    }
    .tw-bg-surface {
        background-color: #fff;
    }
    .tw--mb-6 {
        margin-bottom: -1.5rem;
    }
    .tw-mb-5 {
        margin-bottom: 15px
    }
    .tw-w-20 {
        width: 5rem;
    }
    .tw-mr-4 {
        margin-right: 2rem;
    }
    /* .tw-bg-overlay {
        background-color: rgba(0,0,0,.4);
    } */
    .tw-aspect-ratio-1\/1 {
        /* padding-top: 100.00%; */
        margin-bottom: 20px;
    }
    h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
        color: inherit !important;
    }
    a {
        background-color: transparent;
        text-decoration: none;
    }
    .tw-text-base {
        font-size: 1rem;
    }
    .tw-block {
        display: block;
    }
    .widget {
        width: 100%;
    }
    img.recent_img {
        max-height: 90px;
        height: 90px;
        max-width: 90px;
        width: 90px;
    }
    .tw-mb-1 {
        margin-bottom: .25rem;
    }
    .widget-title, .widgettitle {
        font-size: 16px;
        letter-spacing: .05em;
        text-align: center;
        text-transform: uppercase;
        display: table;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        margin-bottom: 30px;
    }
    .widget-title:before, .widget-title:after, .widgettitle:before, .widgettitle:after, 
    .heading-title:before, .heading-title:after {
        border-top-color: #ddbe86;
    }
    .widget-title:before, .widgettitle:before {
        right: 15px;
    }
    .widget-title:after, .widgettitle:after {
        left: 15px;
    }
    .widget-title:before, .widgettitle:before, .widget-title:after, .widgettitle:after {
        border-top: 1px solid #ddbe86;
        content: '';
        display: table-cell;
        position: relative;
        top: 50%;
        width: 40%;
        transform: translate(0,50%);
        -webkit-transform: translate(0,50%);
        -moz-transform: translate(0,50%);
        -ms-transform: translate(0,50%);
        -o-transform: translate(0,50%)
    }
    .tm-aboutme__avatar {
        text-align: center;
    }
    .tm-aboutme__avatar--circle img {
        border-radius: 100%;
        margin-left: 50px;
    }
    .tm-aboutme__description {
        text-align: center;
        margin-top: 20px;
    }
    .tm-aboutme__social {
        text-align: center;
        margin-top: 20px;
    }

    @media screen and (min-width: 38.75em)
        {ul, ol {
            margin-left: 0;
        }
    }
    .tm-aboutme__social__item {
        display: inline-block;
        vertical-align: top;
    }
    .tm-aboutme__social__item a {
        height: 34px;
        width: 34px;
        display: inline-block;
        text-align: center;
        border: 1px solid transparent;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .widget_tm_aboutme {
        background: #fff;
        padding: 1.1rem;
        margin-bottom: 15px;
    }
    @media screen and (max-width:787px) {
        .widget {
            padding-left: 1.2rem;
        }
        .sidebr-widgets {
            padding-left: 20px;
        }
        .tm-aboutme__avatar--circle img {
            margin-left: 100px;
        }
    }
    
</style>

<template>
    <div>
        <div class="tw-w-full lg-px-4" v-if="recentPostsLoadStatus === 2">
            <div class="sidebar lg-h-full tw-flex tw-flex-wrap tw-flex-col tw--mx-4">
                <div class="tw-w-full lg_tw-w-full tw-px-4 tw-mb-8">
                    <div class="sidebr-widgets">
                        <aside id="tm_aboutme-2" class="widget widget_tm_aboutme">
                            <h3 class="widget-title" style="padding-top:10px;">About me</h3>
                            <div class="tm-aboutme">
                                <div class="tm-aboutme__avatar tm-aboutme__avatar--circle">
                                    <img src="https://lily.thememove.com/file/2015/07/avatar.jpg" alt="">
                                </div>
                                <div class="tm-aboutme__description">Far far away, behind the word mountains, far from the countries Consonantia...</div>
                                <ul class="tm-aboutme__social">
                                    <li class="tm-aboutme__social__item tm-aboutme__social__item--outline-circle">
                                        <a href="https://www.facebook.com/%20" class="tm-aboutme__social__link" target="_blank">
                                            <i class="fab fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li class="tm-aboutme__social__item tm-aboutme__social__item--outline-circle">
                                        <a href="https://instagram.com" class="tm-aboutme__social__link" target="_blank">
                                            <i class="fab fa-instagram" style="color:orange"></i>
                                        </a>
                                    </li>
                                    <li class="tm-aboutme__social__item tm-aboutme__social__item--outline-circle">
                                        <a href="https://www.pinterest.com" class="tm-aboutme__social__link" target="_blank">
                                            <i class="fab fa-pinterest" style="color:red"></i>
                                        </a>
                                    </li>
                                    <li class="tm-aboutme__social__item tm-aboutme__social__item--outline-circle">
                                        <a href="https://twitter.com" class="tm-aboutme__social__link" target="_blank">
                                            <i class="fab fa-twitter "></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                        <div class="widget widget_lg_posts tw-bg-surface tw-p-6 md_tw-p-8 tw-mb-8 tw-clearfix">
                            <h3 class="widget-title tw-text-xl tw-mb-5" style="padding-top:10px;">Latest Stories</h3>
                            <ul class="tw--mb-6">
                                <li class="tw-flex tw-mb-6" v-for="(post,index) in recentPosts" v-bind:key="index">
                                    <div class="tw-w-20 tw-mr-4">
                                        <router-link class="tw-block tw-bg-overlay tw-aspect-ratio-1/1 tw-relative" 
                                        :to="{ name: 'post', params: { id: post.id, slug: post.slug}}" 
                                        style="width: 90px;">
                                            <img class="recent_img" :src="post.photo.image" alt="">
                                        </router-link>
                                    </div>
                                    <div class="post-meta-title">
                                        <div class="tw-flex-1">
                                            <h4 class="post-title tw-text-base tw-mb-1">
                                                <router-link class="tw-block tw-bg-overlay tw-aspect-ratio-1/1 tw-relative" 
                                                    :to="{ name: 'post', params: { id: post.id, slug: post.slug}}" >
                                                    {{post.title}}
                                                </router-link>
                                            </h4>
                                        </div>
                                        <div class="post-meta post-meta-bottom tw-text-sm tw-text-soft"> 
                                            <time class="post-meta-date" :datetime="post.updated_at">{{post.updated_at}}</time>
                                        </div>
                                    </div>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
           
        }
    },
    created () {
        this.$store.dispatch( 'loadRecentPosts');
    },
    methods: {
        
    },
    /*
        Defines the computed properties on the component.
    */
    computed: {
        recentPostsLoadStatus() {
            return this.$store.getters.getRecentPostsLoadStatus
        },
        /*
            Gets all posts
        */
        recentPosts(){
            return this.$store.getters.getRecentPosts;
        }
    },
}
</script>