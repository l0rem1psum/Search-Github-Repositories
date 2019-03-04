<template>
  <v-container>
    <Readme v-bind:readme="readme"/>
  </v-container>
</template>

<script>
import Readme from "../components/Readme";
import axios from "axios";
var marked = require("marked");

export default {
  name: "ReadmeView",
  components: {
    Readme
  },
  data() {
    return {
      repoName: "",
      contentURL: "",
      repoFiles: [],
      readme: ""
    };
  },
  created() {
    this.repoName = this.$route.params.repoName;
    this.contentURL = `https://api.github.com/repos/${this.repoName}/contents/`;

    axios.get(this.contentURL).then(response => {
      this.repoFiles = response.data;
      for (var i = 0; i < this.repoFiles.length; i++) {
        if (this.repoFiles[i].name.toUpperCase() === "README.MD") {
          axios.get(this.repoFiles[i].download_url).then(response => {
            this.readme = marked(response.data);
          });
          return;
        }
      }

      this.readme = marked(
        "### The current repository does not have a read me file"
      );
    });
  }
};
</script>
