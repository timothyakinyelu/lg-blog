<style scoped>
    nav {
        background-color: #6cb2eb38 !important;
    }

    a.v-list-item {
        text-decoration: none !important;
    }

    .v-list--dense .v-list-item .v-list-item__title {
        font-size: 1.0rem;
        line-height: 2rem;
        font-family: 'Montserrat', sans-serif;
    }

    .v-list-group .v-list-item {
        position: relative;
        left: -5px;
        padding-left: 0;
    }

    .v-list-group .v-list-item .v-list-item--link{
        position: relative;
        left: 0 !important;
    }

    .v-list-item__action {
        margin-right: 3px !important;
    }
</style>

<template>
    
        <v-navigation-drawer
            v-model="drawer"
            app
            clipped
            >
            <template v-slot:prepend>
                <v-list-item two-line>
                <v-list-item-avatar>
                    <img src="https://randomuser.me/api/portraits/women/81.jpg">
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>{{user.name}}</v-list-item-title>
                    <div v-if="loggedIn == true">
                        <v-list-item-subtitle>loggedIn</v-list-item-subtitle>
                    </div>
                </v-list-item-content>
                </v-list-item>
            </template>
           <v-list dense>
                <!-- <v-list-item exact to="/theotherside">
                    <v-list-item-action>
                        <v-icon color="purple">fa fa-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
                </v-list-item> -->
                <v-list-group no-action>
                    <v-list-item slot="activator" style="padding-right: 0px;">
                        <v-list-item-action>
                            <v-icon color="orange">fa fa-luggage-cart</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Post Management</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item to="/theotherside/published">
                        <v-list-item-action>
                            <v-icon color="blue">fa fa-blog</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Published Posts</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item exact to="/theotherside/drafts">
                        <v-list-item-action>
                            <v-icon color="#bb180c">fa fa-list-alt</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Drafts</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item exact to="/theotherside/posts/categories">
                        <v-list-item-action>
                            <v-icon color="#212529">fa fa-layer-group</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Categories</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item exact to="/theotherside/posts/tags">
                        <v-list-item-action>
                            <v-icon color="#b5a833">fa fa-tags</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Tags</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                
                <v-list-item @click="logout">
                    <v-list-item-action>
                        <v-icon color="green">fa fa-sign-out-alt</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>logout</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    
</template>

<script>
export default {
    data: () => ({
      drawer: null,
    }),
    computed: {
        user() {
            return this.$store.getters.getUser
        },
        loggedIn() {
            return this.$store.getters.isLoggedIn
        }
    },
    methods: {
        logout: function () {
                this.$store.dispatch('logout')
            .then(() => {
                this.$router.push('/login')
            })
        }
    },
}
</script>