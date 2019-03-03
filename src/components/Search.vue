<template>
  <v-container grid-list-md text-xs-center>
    <form>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field v-model="userName" label="Github Username" outline></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-btn block color="secondary" dark @click="searchUsers">Search</v-btn>
        </v-flex>
      </v-layout>
    </form>
  </v-container>
</template>

<script>
export default {
  name: "Search",
  data(){
      return{
          userName: null
      }
  },
  methods:{
      searchUsers(){
          console.log(this.userName);
      }
  }
};
</script>

<style>
</style>
