<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-card>
          <v-list subheader>
            <v-subheader>Displaying top {{usersList.length}} result(s)</v-subheader>
            <v-list-tile v-for="user in usersList" :key="user.id" avatar @click="temp">
              <v-list-tile-avatar>
                <img :src="user.avatar_url">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="user.login"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "UsersList",
  components: {},
  props: ["usersList"],
  methods:{
      temp(){
          return true;
      }
  }
};
</script>

<style>
</style>

