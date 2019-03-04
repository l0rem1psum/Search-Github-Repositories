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
    this.userRepositoryURL = `https://api.github.com/users/${
      this.userName
    }/repos`;
    axios.get(this.userRepositoryURL).then(response => {
      this.repositoriesList = response.data;
    });
  }
};
</script>
