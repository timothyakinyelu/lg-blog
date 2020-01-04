
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

  .v-text-field--single-line {
    position: absolute;
    left: 9vw;
  }
</style>

<template>
  <v-data-table
    :headers="headers"
    :items="tags"
    sort-by="name"
    class="elevation-1"
    :search="search"
  >
    <template v-slot:top>
      <v-toolbar flat color="#e9ecef">
        <v-toolbar-title>All Tags</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="rgba(228, 16, 16, 0.87)" dark class="mb-2" v-on="on">+ New Tag</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-text-field
            v-model="search"
            label="Search"
            single-line
            hide-details
            class="search"
        >
        </v-text-field>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
        color="blue"
      >
        far fa-edit
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
        color="red"
      >
        fas fa-trash
      </v-icon>
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
      dialog: false,
      tag: '',
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: true,
          value: 'name',
        },
        // { text: 'Parent', value: 'children.data.id', sortable: false  },
        { text: 'No. of Posts', value: 'posts_count'},
        { text: 'Actions', value: 'action', sortable: false },
      ],
      editedIndex: -1,
      editedItem: {
        category: '',
        name: '',
        slug: '',
      },
      defaultItem: {
        category: '',
        name: '',
        slug: '',
      },
    }),

    computed: {
        formTitle () {
          return this.editedIndex === -1 ? 'New Tag' : 'Edit Tag'
        },
        
        tags(){
            return this.$store.getters.getTags;
        }
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    created () {
      this.initialize();
    },
    methods: {
      initialize () {
        this.$store.dispatch('loadTags')
      },
      editItem (item) {
        this.editedIndex = this.tags.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        if( confirm( 'Are you sure you want to delete this tag?' ) ){
          this.$store.dispatch( 'deleteTag', {
            tagID: item.id
          } );
        }
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          this.$store.dispatch( 'updateTag', {
            id: this.editedItem.id,
            name: this.editedItem.name,
          });
        } else {
          this.$store.dispatch('addTag', {
            name: this.editedItem.name,
          });
        }
        this.close()
      },
    },
  }
</script>

