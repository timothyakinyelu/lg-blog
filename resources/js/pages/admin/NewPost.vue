
<template>
    <div>
        <span v-show="postAddStatus == 1">Loading</span>
        <span v-show="postAddStatus == 2">Post added successfully!</span>
        <span v-show="postAddStatus == 3">Post added unsuccessfully!</span>

        <form @submit.prevent="submitNewPost()">
            <div class="card">
                <div class="card-header">
                    <h3>New Blog Post</h3>
                </div>
                <div class="card-body">
                    <div class="form-row">
                        <div class="form-group col-xs-12 col-md-4">
                            <label for="blogTitle">Post Title</label>
                            <input type="text" class="form-control" id="blogTitle" v-model="title" placeholder="Example input">
                            <span class="validation" v-show="!validations.title.is_valid">{{ validations.title.text }}</span>
                        </div>
                        <!-- <div class="form-group col-xs-12 col-md-4">
                            <label for="slug">Slug</label>
                            <input type="text" class="form-control" id="slug" v-model="slug" placeholder="Example input">
                            <span class="validation" v-show="!validations.slug.is_valid">{{ validations.slug.text }}</span>
                        </div> -->
                        <div class="form-group col-xs-12 col-md-4">
                            <div class="centered company-selection-container">
                                <label for="category">Category</label>
                                <input type="text" class="form-control" id="category" v-model="categoryName" v-on:keyup="searchCategories()"/>
                                <input type="hidden" v-model="categoryID"/>
                                <div class="company-autocomplete-container" v-show="categories.length > 0 && showAutocomplete">
                                    <div class="company-autocomplete" v-for="category in categories" v-bind:key="category.id" v-on:click="selectCategory( category )">
                                        <span class="company-name">{{ category.name }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group col-xs-12 col-md-4">
                            <div class="centered company-selection-container">
                                <label for="tag">Tags</label>
                                <input type="text" class="form-control" id="tag" v-model="search" v-on:keyup="searchTags()"/>
                                <input type="hidden" v-model="tagID"/>
                                <div class="company-autocomplete-container" v-show="search.length > 0 && showAutocomplete">
                                    <div class="company-autocomplete" v-for="tagResult in tagResults" multiple v-bind:key="tagResult.id" v-on:click="selectTag( tagResult, $event )">
                                        <span class="company-name">{{ tagResult.name }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="vue-tags-input tags-input">
                                <div class="ti-input">
                                    <ul class="ti-tags">
                                        <li class="ti-tag ti-valid" v-for="s in tagName" v-bind:key="s.index">
                                            <div class="ti-content">
                                                <div class="ti-tag-center">
                                                    <span>{{s}}</span>
                                                </div>
                                            </div>
                                            <div class="ti-actions">
                                                <i class="fas fa-times" v-on:click="removeTag(s, $event)"></i>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="form-group col-sm-12 col-md-9">
                            <FeaturedImage v-model="featured"/>
                        </div>
                        <div class="form-group col-xs-12 col-md-12">
                            <TextEditor 
                                v-bind:content="textContent"
                                v-on:blur="textContent = $event" 
                                :editable = false
                            />
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary">Save Post</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    /*
        Imports lodash for debouncing
    */
    import _ from 'lodash';
    /*
        Imports the config for the API URL for searching companies.
    */
    import { BLOG_CONFIG } from '../../config.js';
    import { authHeader } from '../../authHelper';
    import FeaturedImage from '../../components/FeaturedImage'
    import TextEditor from '../../components/TextEditor'
    
    export default {
        components: {
            FeaturedImage,
            TextEditor
        },
        data() {
            return{
                image: '',
                search: '',
                selTagName: [],
                selTagId: [],
                tagResults: [],
                categories: [],
                showAutocomplete: true,
                categoryName: '',
                tagName: '',
                title: '',
                // slug: '',
                textContent: '',
                featured: '',
                categoryID: '',
                tagID: '',
                validations: {
                    title: {
                        is_valid: true,
                        text: ''
                    },
                    // slug: {
                    //     is_valid: true,
                    //     text: ''
                    // },
                    textContent: {
                        is_valid: true,
                        text: ''
                    },
                }
            }
        },
        methods: {
           
            /*
                Searches the API route for companies
            */
            searchCategories: _.debounce( function(e) {
                /*
                Ensures something is entered before searching companies.
                */
                if( this.categoryName.length > 0){
                    this.showAutocomplete = true;
                    const requestOptions = {
                        headers: authHeader()
                    };

                    axios.get( BLOG_CONFIG.API_URL + '/categories', requestOptions)
                    .then( function( response ){
                        this.categories = response.data;
                    }.bind(this));
                }
            }, 300),
            /*
                Selects an existing company
            */
            selectCategory( category ){
                this.showAutocomplete = false;
                this.categoryName = category.name;
                this.categoryID = category.id;
                this.categories = [];
            },
            /*
                Searches the API route for companies
            */
            searchTags: _.debounce( function(e) {
                /*
                Ensures something is entered before searching companies.
                */
                if( this.search.length > 1){
                    this.showAutocomplete = true;
                    const requestOptions = {
                        headers: authHeader(),
                        params: {
                            search: this.search
                        },
                    };

                   axios.get( BLOG_CONFIG.API_URL + '/tags/search', requestOptions)
                    .then( function( response ){
                        this.tagResults = response.data.tags;
                    }.bind(this));
                }
            }, 300),
            /*
                Selects an existing tag
            */
            selectTag( tagResult, event ){
                this.showAutocomplete = false;
                // this.tagName = tagResult.name;
                // this.tagID = tagResult.id;
                this.tagResults = [];

                const index = this.selTagName.indexOf(tagResult.name);
                
                if (event.target.click) {
                    if (index === -1) {
                        this.selTagName.push(tagResult.name);
                        this.selTagId.push(tagResult.id);
                    }
                }

                this.tagName = this.selTagName;
                this.tagID = this.selTagId;
            },
            removeTag(s, event) {
                const index = this.selTagName.indexOf(s);

                if (event.target.click) {
                    if (index !== -1) {
                        this.selTagName.splice(index, 1);
                        this.selTagId.splice(index, 1);
                    }
                }

                this.tagName = this.selTagName;
                this.tagID = this.selTagId;
               
            },
            submitNewPost() {
                // let editorContent = document.querySelector(".editor");
                // let s = editorContent.innerHTML;
                // this.content = s; 
                // console.log(this.textContent)
                if(this.validateNewPost) {
                   
                    this.$store.dispatch('addPost', {
                        category_id: this.categoryID,
                        tag_id: this.tagID,
                        title: this.title,
                        content: this.textContent,
                        // slug: this.slug,
                        featured: this.featured
                    });
                };
                
            },
            validateNewPost() {
                let validNewPostForm = true;

                /*
                Ensure a title has been entered
                */
                if( this.title.trim() == '' ){
                    validNewPostForm = false;
                    this.validations.title.is_valid = false;
                    this.validations.title.text = 'Please enter a job title for the new post!';
                }else{
                    this.validations.title.is_valid = true;
                    this.validations.title.text = '';
                }

                /*
                Ensure a slug has been entered
                */
                // if( this.slug.trim() == '' ){
                //     validNewPostForm = false;
                //     this.validations.slug.is_valid = false;
                //     this.validations.slug.text = 'Please enter a slug for the new post!';
                // }else{
                //     this.validations.slug.is_valid = true;
                //     this.validations.slug.text = '';
                // }

                /*
                Ensure a content has been entered
                */
                if( this.content.trim() == '' ){
                    validNewPostForm = false;
                    this.validations.content.is_valid = false;
                    this.validations.content.text = 'Please enter a job description for the new post!';
                }else{
                    this.validations.content.is_valid = true;
                    this.validations.content.text = '';
                }

                return validNewPostForm;
            },
            clearForm(){
                this.categoryName = '';
                this.categoryID = '';
                this.tagName = '';
                this.tagID = '';
                this.title = '';
                // this.slug = '';
                this.content = '';
                this.image = '';
                this.selTagName = [];
                this.selTagId = [];
                this.search = '';
                this.featured = '',
                this.validations = {
                    title: {
                        is_valid: true,
                        text: ''
                    },
                    slug: {
                        is_valid: true,
                        text: ''
                    },
                    content: {
                        is_valid: true,
                        text: ''
                    },
                };
            }
        },
        computed: {
            /*
                Gets the posts load status
            */
            postAddStatus(){
                return this.$store.getters.getPostAddStatus;
            },
        },
        watch: {
            'postAddStatus': function(){
                if( this.postAddStatus == 2 ){
                    this.clearForm();
                    $("#post-added-successfully").show().delay(5000).fadeOut();
                }

                if( this.postAddStatus == 3 ){
                    $("#there-was-a-problem-adding-post").show().delay(5000).fadeOut();
                }
            }
        },
    }
</script>

<style>
    span.validation {
        font-size: 11px;
        color: #e3342f;
    }

    .form-control {
        width: 70%;
    }

    .card-header {
        color: grey;
    }

    label {
        color: grey;
    }

    .company-autocomplete {
        color: brown;
        cursor: pointer;
    }

    .company-autocomplete-container {
        position: absolute;
        z-index: 10;
        background: rgb(222, 226, 230);
        max-width: 240px;
        width: 235px;
    }

    span.company-name {
        margin: 20px;
        line-height: 2rem;
        font-weight: 600;
    }

    /* another tag css*/
    .tags-input {
        width: 100%;
        max-width: none;
    }
    .vue-tags-input:not(.light) {
        background: transparent;
    }
    .vue-tags-input {
        max-width: 450px;
        position: relative;
        background-color: #fff;
    }

    .tags-input .ti-input {
        border: none;
        border-bottom: 1px solid #a4b1b6;
        padding: 4px 12px;
    }
    /* .vue-tags-input:not(.light) .ti-input {
        border: 1px solid #8b9396;
    } */
    .ti-input {
        border: 1px solid #ccc;
        display: flex;
        padding: 4px;
        flex-wrap: wrap;
    }
    .ti-tags {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        line-height: 1rem;
        padding-left: 0;
        margin-bottom: 0;
    }
    .tags-input .ti-tags li {
        padding: 5px 8px;
        margin: 2px;
    }
    .tags-input .ti-tag, .tags-input .ti-item.ti-selected-item {
        background-color: #ebde6e;
        color: #1e2a31;
    }
    .ti-tag {
        background-color: #5C6BC0;
        color: #fff;
        border-radius: 2px;
        display: flex;
        padding: 3px 5px;
        margin: 2px;
        font-size: .85em;
    }
    .ti-tag .ti-content {
        display: flex;
        align-items: center;
    }
    .ti-tag .ti-tag-center {
        position: relative;
    }
    .ti-tag span {
        line-height: .85em;
    }
    .ti-tag .ti-actions {
        margin-left: 2px;
        display: flex;
        align-items: center;
        font-size: 1.15em;
    }
    .ti-tag .ti-actions i {
        cursor: pointer;
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