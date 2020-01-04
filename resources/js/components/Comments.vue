<style scoped>
    
</style>

<template>
    <div>
        <div class="comments">
            <div class="comments-display">
                <h4>Comments</h4>
                <div v-for="(comment, index) in comments" v-bind:key="index">
                    <div class="comment">
                        <p>Name: {{ comment.name }} </p>
                        <p>Comment: <br/>{{ comment.comment }}</p>
                    </div>
                </div>
            </div>
            <div id="post-comment" class="card">
                <div class="card-header">
                     <h3>Add Comment</h3>
                </div>
                <div class="card-body">
                    <form @submit.prevent="postComment()" method="post">
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" v-model="name" placeholder="Example input">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" v-model="email" placeholder="Example input">
                            </div>
                        </div>
                        <div class="row">
                            <div class="">
                                <div class="from-group col-xs-12 col-md-2" style="padding-bottom: 0;">
                                    <label for="body">Comment</label>
                                </div>
                                <div class="form-group col-xs-12 col-md-8">
                                    <textarea id="body" v-model="comment" cols="30" rows="10" style="background-color: #e9ecef"></textarea>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-success">Add Comment</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'comments'
    ],
    data() {
        return {
            name: '',
            email: '',
            comment: ''
        }
    },
    // created() {
    //     this.$store.dispatch('loadComments')
    // },
    methods: {
        postComment: function() {
            const post_ID = this.$route.params.id

            this.$store.dispatch('addComment', {
                postID: post_ID,
                name: this.name,
                email: this.email,
                comment: this.comment,
            });
        },
        clearForm(){
            this.name = '';
            this.email = '';
            this.comment = '';
        },
        deleteComment: function(id){
            if( confirm( 'Are you sure you want to delete this comment?' ) ){
                this.$store.dispatch( 'deleteComment', {
                    commentID: id
                });
            }
        },
    },
    computed: {
        // comments() {
        //     return this.$store.getters.getAllComments;
        // },
        /*
            Gets the posts load status
        */
        commentAddStatus(){
            return this.$store.getters.getCommentAddStatus;
        },
    },
    watch: {
        'commentAddStatus': function(){
            if( this.commentAddStatus == 2 ){
                this.clearForm();
                $("#comment-added-successfully").show().delay(5000).fadeOut();
            }

            if( this.commentAddStatus == 3 ){
                $("#there-was-a-problem-adding-comment").show().delay(5000).fadeOut();
            }
        }
    },
}
</script>