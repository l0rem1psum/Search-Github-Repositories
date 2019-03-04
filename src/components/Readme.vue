<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12>
        <span v-html="readme" xs12 style></span>
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

<style>
img {
  width: 100%;
}

span {
  display: block;
  width: 100%;
}

pre {
  display: block;
  overflow-x:scroll;
  width: 100%;
}
</style>
