<template>
  <v-app>
    <v-toolbar app dark>
      <v-toolbar-title class="headline">
        <span>Search Github Repositories</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <Search />
      <router-view></router-view>
    </v-content>

    <v-footer app dark height = 50>
      <v-spacer></v-spacer>
      <div>l0rem1psum &copy; 2019 &nbsp;</div>
    </v-footer>
  </v-app>
</template>

<script>
import Search from './components/Search';

export default {
  name: 'App',
  components: {
    Search
  },
  data () {
    return {
      //
    }
  }
}
</script>
