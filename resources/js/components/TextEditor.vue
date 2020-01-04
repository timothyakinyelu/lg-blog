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
</style>

<template>
    <div>
        <div class="text-editor">
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
                    <button class="tool-items fa fa-undo"           onclick="document.execCommand('undo',false,'')"></button>
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
                    <button class="tool-items fa fa-align-left"      onclick="document.execCommand
                        ('justifyLeft',false,'')">
                    </button>
                    <button class="tool-items fa fa-align-right"     onclick="document.execCommand
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
                    @blur="updateInput" 
                    contenteditable
                    @paste="sanitize"
                    >
                    <!-- <h1>Sample Text</h1>
                    <p>{{editable}}</p> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { BLOG_CONFIG } from '../config';
import { authHeader } from '../authHelper';

export default {
    props: [
        'content',
        'editable'
    ],
    data() {
        return {
            
        }
    },
    mounted() {
        if(this.editable == true) {
        //    this.$refs.textInput.innerHTML = this.content
            const field =  document.getElementById("demo")
            // field.innerHTML = this.content;

            // field.focus();
            this.placeCaretAtEnd(field)
        }
        // document.execCommand("insertParagraph", false, '');
    },
    methods: {
        placeCaretAtEnd(el) {
            el.focus();
            if (typeof window.getSelection != "undefined"
                    && typeof document.createRange != "undefined") {
                var range = document.createRange();
                range.selectNodeContents(el);
                range.collapse(false);
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            } else if (typeof document.body.createTextRange != "undefined") {
                var textRange = document.body.createTextRange();
                textRange.moveToElementText(el);
                textRange.collapse(false);
                textRange.select();
            }
        },
        updateInput(event) {
            event.preventDefault();
            this.$emit('blur', this.$refs.textInput.innerHTML)
        },
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
        link() {
            let url = prompt("Enter the URL", "http://");
            document.execCommand("createLink", false, url);
        },
        copy() {
            document.execCommand("copy", false, "");
        },
        header() {
            document.execCommand("formatBlock", false, value);
        },
        fontColor() {
            document.execCommand("foreColor", false, value);
        },
        backColor() {
            document.execCommand("hiliteColor", false, value);
        },
        getImage(e) {
            let editorContent = document.querySelector(".editor");
            this.image = e.target.files[0];
            
            const requestOptions = {
                headers: { ...authHeader(), 'Content-Type': 'application/json, multipart/form-data' },
            };

            let formData = new FormData();
            let img = document.createElement("img");
            let dataURI;
            /*
                Add the form data we need to submit
            */
            
            formData.append('file', this.image);

            return axios.post( 
                BLOG_CONFIG.API_URL + '/images', 
                formData
                , requestOptions
            ).then(function(response) {
                
                dataURI = response.data.image.file
                // dataID = response.data.image.id
                // console.log(response.data.image.id)
                
                img.src = dataURI;
                img.classList.add("content-image")
                img.setAttribute("id", "img_" + response.data.image.id)

                img.style.maxHeight = "450px"
                img.style.maxWidth = "500px"

                function showBtn() {
                    // if(e.target && e.target.id == "img_" + response.data.image.id) {
                        let z = document.createElement('button'); // is a node
                        z.classList.add("btn-info")
                        z.innerHTML = 'X';

                        editorContent.appendChild(z);

                        function deleteElement() {

                            const requestOptions = {
                                headers: { ...authHeader(), 'Content-Type': 'application/json' },
                            };

                            editorContent.removeChild(img)
                            editorContent.removeChild(z)

                            return axios.delete( 
                                BLOG_CONFIG.API_URL + '/images/' + response.data.image.id, 
                                formData, requestOptions
                            ) 
                        }

                        z.onclick = deleteElement;

                    // }
                }

                img.onclick = showBtn;

                editorContent.appendChild(img);
            }).catch(function() {
                console.log('image not saved')
            });
        },
    },
    // watch: {
    //     content: function () {
    //         this.event.innerHTML = this.content;
    //     }
    // }
}
</script>