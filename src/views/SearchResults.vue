<template>
  <v-container>
    <UsersList v-bind:usersList="usersList" />
  </v-container>
</template>

<script>
import UsersList from "../components/UsersList";

export default {
  name: "SearchResults",
  props: ["usersList"],
  components: {
    UsersList
  },
  methods:{
    m1(){
      return;
    }
  }
};
</script>
