
<template>
  <v-app id="inspire">
    <admin-navbar></admin-navbar>

    <v-app-bar
      app
      clipped-left
      color="#3f7bab"
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      
      <div class="flex-grow-1"></div>
      <v-row
        align="center"
        style="max-width: 650px"
      >
        
      </v-row>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AdminNavbar from '../components/AdminNavbar'
  export default {
    components: {
      AdminNavbar
    },
    props: {
      source: String,
    },
    
    created () {
      this.$store.dispatch( 'loadUser' );
      this.$vuetify.theme.white = true
    },
  }
</script>