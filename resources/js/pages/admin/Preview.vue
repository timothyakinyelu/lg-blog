<style scoped>
    /* text-editor */ 
    .text-editor {
        position: relative;
        box-shadow: none;
        overflow: visible;
        background-color: #fff;
        overflow: auto;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        position: relative;
        z-index: 1;
        border-radius: 2px;
        box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 
        0 3px 1px -2px rgba(0,0,0,.12);
    }

    .lg-toolbar.lg-snow {
        border: 1px solid #ccc;
        box-sizing: border-box;
        font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
        padding: 8px;
    }

    .lg-toolbar.lg-snow .ql-formats {
        margin-right: 15px;
    }
    .lg-snow .ql-formats {
        display: inline-block;
        vertical-align: middle;
    }

    .lg-snow, .lg-snow * {
        box-sizing: border-box;
    }

    .lg-snow.lg-toolbar button, .lg-snow .lg-toolbar button {
        background: none;
        border: none;
        cursor: pointer;
        display: inline-block;
        /* float: left; */
        height: 24px;
        padding: 3px 5px;
        width: 28px;
    }

    .lg-snow .ql-picker.ql-header {
        width: 98px;
    }
    .lg-snow .ql-picker {
        color: #444;
        display: inline-block;
        /* float: left; */
        font-size: 14px;
        font-weight: 500;
        height: 24px;
        position: relative;
        vertical-align: middle;
    }

    .lg-toolbar.lg-snow .ql-picker-label {
        border: 1px solid transparent;
    }

    .lg-snow .ql-picker-label {
        cursor: pointer;
        display: inline-block;
        height: 100%;
        padding-left: 8px;
        padding-right: 2px;
        position: relative;
        width: 100%;
    }

    .lg-toolbar.ql-snow .ql-picker-options {
        border: 1px solid transparent;
        box-shadow: 0 2px 8px rgba(0,0,0,.2);
    }
    .lg-snow .ql-picker-options {
        background-color: #fff;
        display: none;
        min-width: 100%;
        padding: 4px 8px;
        position: absolute;
        white-space: nowrap;
    }

    .lg-snow .ql-picker-options .ql-picker-item {
        cursor: pointer;
        display: block;
        padding-bottom: 5px;
        padding-top: 5px;
    }
    .ql-snow .ql-picker.ql-font {
        width: 108px;
    }
    .lg-snow .ql-color-picker, .lg-snow .ql-icon-picker {
        width: 28px;
    }

    .lg-snow.lg-toolbar:after, .lg-snow .lg-toolbar:after {
        clear: both;
        content: "";
        display: table;
    }

    .ql-toolbar.ql-snow+.ql-container.ql-snow {
        border-top: 0;
    }

    .ql-container, .ql-container .ql-editor {
        height: 30rem;
        padding-bottom: 1rem;
    }
    .ql-container.lg-snow {
        border: 1px solid #ccc;
    }
    .ql-container {
        box-sizing: border-box;
        font-family: Helvetica,Arial,sans-serif;
        font-size: 13px;
        height: 100%;
        margin: 0;
        position: relative;
    }
    .ql-editor {
        box-sizing: border-box;
        line-height: 1.42;
        height: 100%;
        outline: none;
        overflow-y: auto;
        padding: 12px 15px;
        tab-size: 4;
        -moz-tab-size: 4;
        text-align: left;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    .editor .content-image {
        max-width: 500px;
        max-height: 450px;
    }

    .text-editor select {
        -webkit-appearance: menulist;
        border-style: dashed;
        background-color: #f8f9fa;
    }

    .text-editor p {
        margin-bottom: 0;
    }

    div >>> img {
        padding: 20px;
    }

    div >>> button.btn-info {
        font-size: 30px;
        height: 50px;
        width: 50px;
        position: absolute;
        top: 100px;
        left: 460px;
        border-radius: 50%;
    }

    #wrapper {
        overflow: hidden;
        position: relative;
        scroll-behavior: smooth;
    }

    /* #wrapper>.sh-page-layout-default {
        padding: 60px 0;
    } */

    .container.entry-content {
        position: relative;
    }

    #content-wrapper {
        position: relative;
    }

    #content {
        width: 100%;
    }

    .post-item-single {
        position: relative;
    }

    .post-item-single-container {
        position: relative;
        min-height: 200px;
        margin-top: 37px;
    }
 
    .blog-style-post-toptitle .post-item-single-container {
        margin-top: 0;
    }

    .blog-style-single-share .post-item-single-container {
        padding-left: 80px;
    }

    .blog-style-post-toptitle .post-single-meta {
        padding-bottom: 25px;
    }

    .post-single-meta, .post-single-content {
        float: left;
        width: 100%;
    }

    .post-single-meta {
        padding: 0 30px 35px;
        padding-left: 0;
    }

    .post-item-single-container .post-categories-container {
        margin-top: 0;
    }

    .post-categories-container {
        display: block;
        width: 100%;
        margin-bottom: 2px;
    }

    .category{
        font-weight: 700;
    }

    .post-title {
        display: block;
        word-break: break-word;
    }

    .post-single-meta .post-title h1, 
    .post-single-meta .post-title h2 {
        margin-top: 0;
        padding-top: 0;
        margin-bottom: 8px;
        font-size: 36px;
    }

    .blog-style-post-toptitle .post-type-content {
        margin-bottom: 35px;
    }

    .blog-style-post-toptitle .post-type-content 
    .post-thumbnail {
        display: inline-block;
    }
    .post-thumbnail {
        position: relative;
        display: block;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -moz-flex-direction: column;
        -ms-flex-direction: column;
        -o-flex-direction: column;
        flex-direction: column;
        -webkit-flex-direction: column;
        -moz-justify-content: center;
        -ms-justify-content: center;
        -o-justify-content: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .post-thumbnail, .post-thumbnail img, 
    .post-thumbnail .sh-ratio-content, .post-content img {
        border-radius: 8px;
    }

    .post-content {
        padding-bottom: 19px;
    }

    .blog-single .post-content {
        padding-bottom: 0;
        margin-bottom: 0;
        font-size: 15px;
    }

    .post-single-meta, .post-single-content {
        float: left;
        width: 100%;
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

    .header-image {
        max-width: 1000px;
        max-height: 500px;
    }

    div >>> img {
        width: 300px;
        height: 200px;
    }
    .tools {
        display: inline-flex;
        padding-bottom: 20px;
    }
    .publish {
        position: relative;
        right: -200px;
    }
    .post-content >>> p {
        margin-bottom: 0;
    }
</style>

<template>
    <div id="wrapper" class="layout-default" v-if="postLoadStatus === 2">
        <div class="content-container sh-page-layout-default">
            <div class="container entry-content">
                <div id="content-wrapper">
                    <div id="content" class="content-layout-standard">
                        <div class="blog-preview .blog-style-single-share blog-style-post-toptitle">
                            <div class="tools">
                                <!-- <button class="btn btn-info" style="margin-right:10px;" @click="editPost()">Edit</button> -->
                                <button class="btn btn-danger" @click="removePost()">Delete</button>
                                <div class="publish">
                                    <button class="btn btn-success" @click="publishPost()">Publish</button>
                                </div>
                            </div>
                            
                            <article :id="post.id" class="post-item item-single">
                                <div class="post-item-single-container">
                                    <div class="post-single-meta">
                                        <div class="post-category-container">
                                            <div class="post-category">
                                                <h5 class="category"
                                                    v-show="!showField('category')" @click.prevent="focusField('category')"
                                                >
                                                    {{post.category.name}}
                                                </h5>
                                                <div class="centered company-selection-container"
                                                    v-show="showField('category')"
                                                >
                                                    <label for="category">Category</label>
                                                    <input type="text" class="form-control" id="category" v-model="categoryName" v-on:keyup="searchCategories()"/>
                                                    <input type="hidden" v-model="categoryID"/>
                                                    <div class="company-autocomplete-container" v-show="categories.length > 0 && showAutocomplete">
                                                        <div class="company-autocomplete" v-for="category in categories" v-bind:key="category.id" v-on:click="selectCategory( category )">
                                                            <span class="company-name">{{ category.name }}</span>
                                                        </div>
                                                    </div>
                                                    <button 
                                                        class="fa fa-save"
                                                        @click="updateTag"
                                                    ></button>
                                                </div>
                                            </div>
                                            <div class="post-title">
                                                <h1 
                                                    v-show="!showField('title')" @click.prevent="focusField('title')"
                                                    class="title">{{post.title}}
                                                </h1>
                                                <div
                                                    v-show="showField('title')"
                                                >
                                                    <input 
                                                        type="text"
                                                        v-model="post.title"
                                                        @focus="focusField('title')"
                                                    />
                                                    <button 
                                                        class="fa fa-save"
                                                        @click="blurField"
                                                    ></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-type-content">
                                        <div class="post-thumbnail">
                                            <div class=""
                                                v-show="!showField('image')" @click.prevent="focusField('image')"
                                            >
                                                <img class="header-image" :src="post.photo.image" alt="">
                                            </div>
                                            <div class="image"
                                                v-show="showField('image')" 
                                            >
                                                <FeaturedImage
                                                    v-model="featured"
                                                    @focus="focusField('image')"
                                                />
                                                <button 
                                                    class="fa fa-save"
                                                    
                                                    @click="blurField"
                                                ></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-content 
                                        post-single-content" v-html="post.content"
                                        v-show="!showField('content')" @click="focusField('content')"
                                        >
                                    </div>
                                    <div class="text-editor"
                                        v-show="showField('content')"
                                        
                                    >
                                        <div class="lg-toolbar lg-snow">
                                            <span class="ld-formats">
                                                <button class="tool-items fa fa-underline" 
                                                    onclick="document.execCommand('underline', false, ''">
                                                </button>
                                                <button class="tool-items fa fa-italic" 
                                                    onclick="document.execCommand('italic', false, '');">
                                                </button>
                                                <button class="tool-items fa fa-bold" 
                                                    onclick="document.execCommand('bold', false, '');">
                                                </button>
                                                <button class="tool-items fa fa-link"
                                                    v-on:click="link()">
                                                </button>
                                                <button class="tool-items fa fa-scissors" 
                                                    onclick="document.execCommand('cut',false,'')">
                                                </button>
                                            </span>
                                            <span class="lg-formats">
                                                <input class="tool-items fa fa-file-image-o"
                                                    type="file" accept="image/*" id="file" style="display: none;"           v-on:change="getImage($event)"
                                                />
                                                <label for="file" class="tool-items fa fa-file-image">
                                                </label>
                                                <button class="tool-items fa fa-undo" onclick="document.execCommand('undo',false,'')"></button>
                                                <button class="tool-items fa fa-repeat"
                                                    onclick="document.execCommand('redo',false,'')">
                                                </button>
                                                Font-Color: <input type="color" 
                                                    onchange="document.execCommand('foreColor',false, this.value)"
                                                />
                                                Background: <input type="color" 
                                                    onchange="document.execCommand('hiliteColor',false, this.value)"
                                                />
                                            </span>
                                            <span class="lg-formats">
                                                <button class="tool-items fa
                                                    fa-strikethrough" onclick="document.execCommand('strikeThrough',false,'')">
                                                </button>
                                                <button class="tool-items fa fa-trash"
                                                    onclick="document.execCommand('delete',false,'')">
                                                </button>
                                                <button class="tool-items 
                                                    fa fa-check-square" onclick="document.execCommand('selectAll',false,'')">
                                                </button>
                                                <button class="tool-items fa fa-clone"
                                                    v-on:click="copy()">
                                                </button>
                                                <button class="tool-items"
                                                    onclick="document.execCommand('insertHorizontalRule', false ,'')" style="word-wrap: normal;">
                                                    HR
                                                </button>
                                            </span>
                                            <span class="lg-formats">
                                                <button type="button" class="ql-list 
                                                    fa fa-list-ul" value="ordered" onclick="document.execCommand('insertUnorderedList',false,'')">
                                                </button>
                                                <button type="button" class="ql-list 
                                                    fa fa-list-ol" value="bullet" onclick="document.execCommand('insertOrderedList',false,'')">
                                                </button>
                                            </span>
                                            <span class="lg-formats">
                                                <button type="button" class="ql-indent 
                                                    fa fa-outdent" value="-1" onclick="document.execCommand('indent',false,'')">
                                                </button>
                                                <button type="button" class="ql-indent 
                                                    fa fa-indent" value="+1" onclick="document.execCommand('outdent',false,'')">
                                                </button>
                                            </span>
                                            <span class="lg-formats">
                                                <button type="button" class="ql-direction 
                                                    fa fa-paragraph" value="rtl" onclick="document.execCommand('insertParagraph',false,'p')">
                                                </button>
                                            </span>
                                            <!-- Jutify -->
                                            <span class="lg-formats">
                                                <button class="tool-items 
                                                    fa fa-align-center" onclick="document.execCommand('justifyCenter',false,'')">
                                                </button>
                                                <button class="tool-items fa fa-align-left" onclick="document.execCommand
                                                    ('justifyLeft',false,'')">
                                                </button>
                                                <button class="tool-items fa fa-align-right" onclick="document.execCommand
                                                    ('justifyRight',false,'')">
                                                </button>
                                            </span>
                                            <span class="lg-formats">
                                                <select onchange="document.execCommand('formatBlock',false, this.value)">
                                                    <option class="ql-picker-item h1"  
                                                        data-value="1" value="H1">
                                                        Heading
                                                    </option>
                                                    <option class="ql-picker-item h2" 
                                                        data-value="2" value="H2">
                                                        Heading
                                                    </option>
                                                    <option class="ql-picker-item h3"
                                                        data-value="3" value="H3">
                                                        Heading
                                                    </option>
                                                    <option class="ql-picker-item h4"
                                                        data-value="4" value="H4">
                                                        Heading
                                                    </option>
                                                    <option class="ql-picker-item h5"
                                                        data-value="5" value="H5">
                                                        Heading
                                                    </option>
                                                    <option class="ql-picker-item h6"
                                                        data-value="6" value="H6">
                                                        Heading
                                                    </option>
                                                </select>
                                            </span>
                                            <span class="lg-formats">
                                                <select onchange="document.execCommand
                                                    ('fontName',false, this.value)">
                                                        <option class="ql-picker-item"  
                                                            value="Arial" style="font-family: Arial, Sans serif">
                                                            Arial
                                                        </option>
                                                        <option class="ql-picker-item"  
                                                            value="Serif" style="font-family: Serif, Sans serif">
                                                            Serif
                                                        </option>
                                                        <option class="ql-picker-item" 
                                                            value="Monospace" style="font-family: Monospace, Sans serif">
                                                            Monospace
                                                        </option>
                                                        <option class="ql-picker-item" 
                                                            value="Comic Sans MS" style="font-family: Comic Sans MS, Sans serif">
                                                            Comic Sans MS
                                                        </option>
                                                        <option class="ql-picker-item" 
                                                            value="Courier" style="font-family: Courier, Sans serif">
                                                            Courier
                                                        </option>
                                                        <option class="ql-picker-item" 
                                                            value="Georgia" style="font-family: Georgia, Sans serif">
                                                            Georgia
                                                        </option>
                                                        <option class="ql-picker-item" 
                                                            value="Tahoma" style="font-family: Tahoma, Sans serif">
                                                            Tahoma
                                                        </option>
                                                        <option class="ql-picker-item" 
                                                            value="Times New Roman" style="font-family: Times New Roman, Sans serif">
                                                            Times New Roman
                                                        </option>
                                                        <option class="ql-picker-item" 
                                                            value="Verdana" style="font-family: Verdana, Sans serif">
                                                            Verdana
                                                        </option>
                                                        <option class="ql-picker-item" 
                                                            value="Montserrat" style="font-family: Montserrat, Sans serif">
                                                            Montserrat
                                                        </option>
                                                        <option class="ql-picker-item" 
                                                            value="Livvic" style="font-family: Livvic, Sans serif ">
                                                            Livvic
                                                        </option>
                                                        <option class="ql-picker-item" 
                                                            value="Philosopher" style="font-family: Philosopher, Sans serif">
                                                            Philosopher
                                                        </option>
                                                </select>
                                            </span>
                                            <span class="lg-formats">
                                                <select onchange="document.execCommand('fontSize',false, this.value)">
                                                    <option value="">Font Size</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                            </span>
                                        </div>

                                        <div class="center ql-container lg-snow">
                                            <div class="editor ql-editor"
                                                id="demo"
                                                ref="textInput"
                                                v-html="post.content"
                                                @paste="sanitize"
                                                @focus="focusField('content')"
                                                @blur="blurField"
                                                contenteditable
                                               
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-tags-container">
                                        <div class="post-tags"
                                            v-show="!showField('tags')" @click="focusField('tags')"
                                        >
                                            <a class="post-tags-item post-tags-item-title">Tags</a>
                                            <a class="post-tags-item" v-for="tag in post.tags" :key="tag.id">
                                                {{tag.name }}
                                            </a>
                                        </div>
                                        <div
                                            v-show="showField('tags')"
                                            @focus="focusField('tags')"
                                        >
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
                                            <button class="fa fa-save"
                                                @click="updateTag"
                                            ></button>
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

export default {
    components: {
        FeaturedImage
    },
    data() {
        return {
            search: '',
            editField: '',
            selTagName: [],
            selTagId: [],
            tagName: '',
            tagID: '',
            featured: '',
            tagResults: [],
            categories: [],
            showAutocomplete: true,
            categoryName: '',
            categoryID: '',

        }
    },
     /*
    When the component is created, add a location
    */
    created(){
        this.$store.dispatch( 'loadPost', {
            id: this.$route.params.id
        });
    },
    methods: {
        sanitize(event) {
            event.preventDefault();
            const html = this.$sanitize(event.clipboardData.getData('text/html'));
            //or
            //const html = this.$sanitize(
            //  event.clipboardData.getData('text/html'),
            //  {
            //    allowedTags: ['b', 'br']
            //  }
            //);
            document.execCommand('insertHTML', false, (html));
        },
        focusField(content){
            this.editField = content;

            if(this.editField == 'tags') {
                for (var i = 0; i < this.post.tags.length; i++){
                    const tagName = this.post.tags[i].name;
                    const tagID = this.post.tags[i].id;

                    this.selTagName.push(tagName)
                    this.selTagId.push(tagID)

                    this.tagName = this.selTagName
                    this.tagID = this.selTagId

                    console.log(this.tagName)
                }
            }
        },
        updateTag(){
            for (var i = 0; i < this.post.tags.length; i++){
                const tagName = this.post.tags[i].name;
                const tagID = this.post.tags[i].id;

                this.selTagName.push(tagName)
                this.selTagId.push(tagID)

                this.tagName = this.selTagName
                this.tagID = this.selTagId
            }

            if(this.editField == 'category') {
                this.post.category_id = this.categoryID
            }

            this.$store.dispatch( 'updatePost', {
                id: this.$route.params.id,
                category_id: this.post.category_id,
                tag_id: this.tagID,
                title: this.post.title,
                slug: this.post.slug,
                content: this.post.content,
                featured: this.featured,
            });

            location.reload()

            this.editField = ''
        },
        blurField(){
            
            let editorContent = document.querySelector(".editor");
            let s = editorContent.innerHTML;
            this.post.content = s

            if(this.editField == 'image') {
                this.post.photo.image = '/uploads/' + this.featured.name
            }

            for (var i = 0; i < this.post.tags.length; i++){
                const tagName = this.post.tags[i].name;
                const tagID = this.post.tags[i].id;

                this.selTagName.push(tagName)
                this.selTagId.push(tagID)

                this.tagName = this.selTagName
                this.tagID = this.selTagId
            }

            this.$store.dispatch( 'updatePost', {
                id: this.$route.params.id,
                category_id: this.post.category_id,
                tag_id: this.tagID,
                title: this.post.title,
                slug: this.post.slug,
                content: this.post.content,
                featured: this.featured,
            });

            this.editField = ''
        },
        showField(content){
            return (this.post.content == '' || this.editField == content)
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
        publishPost: function() {
            const postID = this.$route.params.id

            if( confirm( 'Are you sure you want to publish this draft?' ) ){
                this.$store.dispatch( 'publishPost', {
                    postID: id
                })
                .then(function(response) {
                    confirm('Post Published');
                })
                .catch(function() {
                    console.log('Unable to publish post')
                });
            }
        },
        editPost: function () {
            const postID = this.$route.params.id
            
            this.$router.push({ path: `/theotherside/post/${postID}/edit` })
        },
        removePost: function(){
            const id = this.$route.params.id

            if( confirm( 'Are you sure you want to delete this draft?' ) ){
                this.$store.dispatch( 'deletePost', {
                    postID: id 
                });
                this.$router.push({name: 'drafts'});
            }
        },
    },
    /*
    Loads the Vuex data we need and add post status.
    */
    computed: {
        postLoadStatus(){
            return this.$store.getters.getPostLoadStatus;
        },
        post(){
            return this.$store.getters.getPost;
        },
    },
}
</script>