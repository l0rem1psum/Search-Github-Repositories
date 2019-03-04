<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12>
        <span v-html="readme"></span>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Readme",
  props: ["readme"]
};
</script>
