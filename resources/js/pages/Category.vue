
<style scoped>
   
</style>

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
                                            <div class="no-posts" >
                                                <h1><strong>No Posts Yet!</strong></h1>
                                            </div>
                                            <div v-if="catPosts" class="swiper-wrapper tw-border-box tw-mb-8" style="margin-bottom:0;" >
                                                <div class="tw-w-full tw-h-auto tw-px-4 
                                                    tw-mb-8 swiper-slide md_tw-w-1/2 
                                                    lg_tw-w-1/2 swiper-slide-active" 
                                                    style="width: 475px;" 
                                                    v-for="post in catPosts.data" v-bind:key="post.id"
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
                                                                    {{ post.updated_at }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                                <!-- <button v-if="allPosts.last_page > 1" class="btn btn-primary form-control loadmorebutton" v-on:click="fetchPosts(allPosts.current_page + 1)">Load more</button> -->
                                                <pagination v-if="catPosts.last_page > 1" :pagination="catPosts" :offset="5" @paginate="fetchPosts(catPosts.current_page)"></pagination>
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
                this.$store.dispatch( 'loadCategoryPosts', {
                     'id': this.$route.params.id,
                    'slug': this.$route.params.slug,
                    'current_page': this.current_page
                });
            } else {
                this.$store.dispatch( 'loadCategoryPosts', {
                    'id': this.$route.params.id,
                    'slug': this.$route.params.slug,
                    'current_page' : this.$route.params.page
                });
            }
        },
        methods: {
            fetchPosts(page) {
                if (page > this.catPosts.last_page) {
                    page = this.catPosts.last_page;
                }
                
                // this.$store.dispatch( 'loadCategoryPosts', {
                //     'current_page' : page
                // });
                this.$router.push({ name: 'cat', params: {id: this.$route.params.id, slug: this.$route.params.slug, page: page}})
                // this.items.push(this.allPosts)
                // this.posts = this.items
            }
        },
        /*
            Defines the computed properties on the component.
        */
        computed: {
            catPostsLoadStatus() {
                return this.$store.getters.getCategoryLoadStatus
            },
            /*
                Gets all posts
            */
            catPosts(){
                return this.$store.getters.getCategoryPosts;
            }
        },
        components: { 
            Hsidebar,
            Pagination
        }
    }
</script>