<template>
  <v-app>
    <v-toolbar app dark>
      <v-toolbar-title class="headline">
        <span>Search Github Repositories</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app dark height="50">
      <div>&nbsp; l0rem1psum &copy; 2019</div>
      <v-spacer></v-spacer>
      <v-btn flat icon color="white" to="/">
        <v-icon>home</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
