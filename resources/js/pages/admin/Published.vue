<style scoped>
    .theme--light.v-data-table {
        background-color: #f8f9fa;
    }

    .theme--dark.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
        background-color: #6cb2eb;
    }

    .v-btn span a {
        color: #ffffff;
        text-decoration: none;
    }

    .v-text-field {
        position: absolute;
        left: 16vw;
    }
</style>

<template>
    <v-data-table
        :headers="headers"
        :items="posts"
        sort-by="title"
        class="elevation-1"
        :search="search"
        
    >
        <template v-slot:top>
            <v-toolbar flat color="#e9ecef">
                <v-toolbar-title>All Published Posts</v-toolbar-title>
                <v-divider
                class="mx-4"
                inset
                vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-dialog max-width="500px">
                    <!-- <template v-slot:activator="{ on }">
                        <div class="text-center">
                            <v-btn 
                            style="background: #63c76a;"
                            class="mx-2" 
                            v-on="on"
                            >
                                <router-link :to="{ name: 'newpost' }">+ New Post</router-link>
                            </v-btn>
                        </div>
                    </template> -->
                </v-dialog>
                <v-text-field
                    v-model="search"
                    label="Search"
                    single-line
                    hide-details
                >
                </v-text-field>
            </v-toolbar>
        </template>
        <template v-slot:item.action="{ item }">
            <!-- <v-icon
                small
                class="mr-2"
                @click="editPost(item.id)"
                color="blue"
            >
                far fa-edit
            </v-icon> -->
            <v-icon
                small
                @click="deletePost(item.id)"
                color="red"
            >
                fas fa-trash
            </v-icon>
            <v-btn color="#d2691e" style="font-size:10px;" dark class="mb-2 preview" @click="preview(item.id)">Preview</v-btn>
        </template>
        <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
    </v-data-table>
</template>

<script>
    export default {
        data: () => ({
            search: '',
            headers: [
                {
                    text: 'Title',
                    align: 'left',
                    value: 'title',
                },
                { text: 'Categories', value: 'category.name' },
                // { text: 'Tags', value: 'tags' },
                { text: 'Comment Count', value: 'comments_count' },
                { text: 'Status', value: 'status' },
                { text: 'Time Created', value: 'created_at',},
                { text: 'Time Updated', value: 'updated_at',},
                { text: 'Actions', value: 'action', sortable: false },
            ],
        }),
        computed: {
            /*
                Gets the posts load status
            */
            postsLoadStatus(){
                return this.$store.getters.getPostsLoadStatus;
            },

            /*
                Gets the posts
            */
            posts(){
                return this.$store.getters.getPublished;
            }
        },
        created () {
            this.initialize();
        },
        methods: {
            initialize () {
                this.$store.dispatch('loadPublished');
            },
            //  editPost: function (id) {
            //     const postID = id
                
            //     this.$router.push({ path: `/theotherside/post/${postID}/edit` })
            // },
            preview: function (id) {
                const postID = id
                
                this.$router.push({ path: `/theotherside/post/${postID}/preview` })
            },
            deletePost: function(id){
                if( confirm( 'Are you sure you want to delete this post?' ) ){
                    this.$store.dispatch( 'deletePost', {
                        postID: id
                    });
                }
            },
        },
    }
</script>


