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

    for (var i = 1; i < 100; i++) {
      axios
        .get(`https://api.github.com/users/${this.userName}/repos?page=${i}&per_page=100`)
        .then(response => {
          console.log(`https://api.github.com/users/${this.userName}/repos?page=${i}&per_page=100`);
          if (response.data.length === 0) {
            return;
          }
          this.repositoriesList = [
            ...this.repositoriesList,
            ...this.currentPage
          ];
        });
    }
  }
};
</script>
