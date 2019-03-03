<template>
  <v-container>
    <SearchBar />
    <UsersList v-bind:usersList="usersList" />
  </v-container>
</template>

<script>
import axios from 'axios';
import UsersList from "../components/UsersList";
import SearchBar from "../components/SearchBar";

export default {
  name: "SearchResultsView",
  components: {
    UsersList,
    SearchBar
  },
  data(){
    return{
      userName: '',
      usersList: []
    }
  },
  created(){
        this.userName = this.$route.params.userName;
        axios.get(`https://api.github.com/search/users?q=${this.userName}`)
        .then(response => {
          this.usersList = response.data.items;
          console.log(this.usersList);
        })
    }
};
</script>
