<style scoped>

</style>

<template>
   <div>
        <span v-show="updatePostStatus == 1">Loading</span>
        <span v-show="updatePostStatus == 2">Post Updated successfully!</span>
        <span v-show="updatePostStatus == 3">Post Updated unsuccessfully!</span>

        <form @submit.prevent="updatePost()">
            <div class="card">
                <div class="card-header">
                    <h3>Edit Blog Post</h3>
                </div>
                <div class="card-body">
                    <div class="form-row">
                        <div class="form-group col-xs-12 col-md-4">
                            <label for="blogTitle">Post Title</label>
                            <input type="text" class="form-control" id="blogTitle" v-model="title" placeholder="Example input">
                            <span class="validation" v-show="!validations.title.is_valid">{{ validations.title.text }}</span>
                        </div>
                        <div class="form-group col-xs-12 col-md-4">
                            <label for="slug">Slug</label>
                            <input type="text" class="form-control" id="slug" v-model="slug" placeholder="Example input">
                            <span class="validation" v-show="!validations.slug.is_valid">{{ validations.slug.text }}</span>
                        </div>
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
                                v-on:input="textContent = $event"
                                :editable = true
                            />
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary">Update Post</button>
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
                tag: '',
                tagName: '',
                title: '',
                slug: '',
                content: '',
                textContent: '',
                featured: '',
                categoryID: '',
                tagID: '',
                validations: {
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
                }
            }
        },
        created() {
            this.$store.dispatch( 'loadPost', {
                id: this.$route.params.id
            });
        },
        methods: {
            /*
                Method populates the form with the data we need.
            */
            populateForm(){
                this.categoryName = this.editPost.category.name;
                this.categoryID = this.editPost.category.id;
                for (var i = 0; i < this.editPost.tags.length; i++) {
                    const tagName = this.editPost.tags[i].name;
                    const tagID = this.editPost.tags[i].id;

                    this.selTagName.push(tagName)
                    this.selTagId.push(tagID)

                    this.tagName = this.selTagName
                    this.tagID = this.selTagId
                }
                
                this.title = this.editPost.title;
                this.textContent = this.editPost.content;
                this.slug = this.editPost.slug;
                this.images = this.editPost.photos;
            },
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
            handleFiles() {
                let uploadedFiles = this.$refs.file.files;

                for(let i = 0; i < uploadedFiles.length; i++) {
                    this.images.push(uploadedFiles[i]);
                }
                this.getImagePreviews();
            },
            getImagePreviews(){
                
                    if ( /\.(jpe?g|png|gif)$/i.test( this.image.name ) ) {
                        let reader = new FileReader();
                        reader.addEventListener("load", function(){
                            this.$refs['preview'+parseInt].src = reader.result;
                        }.bind(this), false);
                        reader.readAsDataURL( this.image );
                    }
            },
            removeFile( key ){
                this.images.splice( key, 1 );
                this.getImagePreviews();
            },
            updatePost() {
                // let editorContent = document.querySelector(".editor");
                // let s = editorContent.innerHTML;
                // this.content = s; 
                /*
                Submits edits for a cafe
                */
                if( this.validateEditPost ){
                    this.$store.dispatch( 'updatePost', {
                        id: this.editPost.id,
                        category_id: this.categoryID,
                        tag_id: this.tagID,
                        content: this.textContent,
                        title: this.title,
                        slug: this.slug,
                        content: this.content,
                        images: this.images,
                    });
                }
            },
            validateEditPost() {
                let validEditPostForm = true;

                /*
                Ensure a title has been entered
                */
                if( this.title.trim() == '' ){
                    validEditPostForm = false;
                    this.validations.title.is_valid = false;
                    this.validations.title.text = 'Please enter a job title for the new post!';
                }else{
                    this.validations.title.is_valid = true;
                    this.validations.title.text = '';
                }

                /*
                Ensure a slug has been entered
                */
                if( this.slug.trim() == '' ){
                    validEditPostForm = false;
                    this.validations.slug.is_valid = false;
                    this.validations.slug.text = 'Please enter a slug for the new post!';
                }else{
                    this.validations.slug.is_valid = true;
                    this.validations.slug.text = '';
                }

                /*
                Ensure a content has been entered
                */
                if( this.content.trim() == '' ){
                    validEditPostForm = false;
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
                this.slug = '';
                this.content = '';
                this.image = '';
                this.selTagName = [];
                this.selTagId = [];
                this.search = '';
                this.url = '',
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
            updatePostStatus(){
                return this.$store.getters.getPostUpdateStatus;
            },
            editPostLoadStatus(){
                return this.$store.getters.getPostLoadStatus;
            },
            editPost(){
                return this.$store.getters.getPost;
            },
            updatePostText(){
                return this.$store.getters.getPostUpdateText;
            },
        },
        watch: {
            'updatePostStatus': function(){
                if( this.updatePostStatus == 2 ){
                EventBus.$emit('show-success', {
                    notification: this.updatePostText
                });
                this.$router.push({ name: 'posts' });
                }
            },
            'editPostLoadStatus': function(){
                if( this.editPostLoadStatus == 2 ){
                this.populateForm();
                }
            }
        },
    }
</script>