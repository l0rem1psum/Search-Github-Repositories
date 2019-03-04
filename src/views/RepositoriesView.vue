<template>
  <v-container>
    <RepositoriesList v-bind:repositoriesList="repositoriesList"/>
  </v-container>
</template>

<script>
import axios from "axios";
import RepositoriesList from "../components/RepositoriesList.vue";

export default {
  name: "RepositoriesView",
  components: {
    RepositoriesList
  },
  data() {
    return {
      userName: "",
      userRepositoryURL: "",
      repositoriesList: []
    };
  },
  created() {
    this.userName = this.$route.params.userName;
    for (var i = 1; i < 25; i++) {
      axios
        .get(`https://api.github.com/users/${this.userName}/repos?page=${i}&per_page=100&access_token=9cf15650e0a586a820ff9b6ec5be507af4832420`)
        .then(response => {
          if(i === 1){
            this.repositoriesList = response.data;
          }
          if (response.data.length === 0) {
            return
          }
          this.repositoriesList = [
            ...this.repositoriesList,
            ...response.data
          ];
        });
    }
  }
};
</script>
