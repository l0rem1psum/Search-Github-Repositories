<template>
  <v-app>
    <v-toolbar app dark>
      <v-toolbar-title class="headline">
        <span>Search Github Repositories</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <SearchBar v-on:get-users="getUsers" />
      <router-view v-bind="props"></router-view>
    </v-content>

    <v-footer app dark height = 50>
      <v-spacer></v-spacer>
      <div>l0rem1psum &copy; 2019 &nbsp;</div>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';

export default {
  name: 'App',
  components: {
    SearchBar
  },
  data () {
    return {
      resultCount: null,
      usersList: []
    }
  },
  methods:{
    getUsers(userName){
      axios.get(`https://api.github.com/search/users?q=${userName}`)
        .then(response => {
          this.resultCount = response.data.total_count;
          this.usersList = response.data.items;
          console.log(this.usersList);
        })
    }
  },
  computed:{
    props(){
      if (this.$route.name === 'results') {
        return {usersList: this.usersList}}
    }
  }
}
</script>
