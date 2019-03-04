<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-card>
          <v-list subheader three-line>
            <v-subheader>The user has {{repositoriesList.length}} repositories</v-subheader>
            <v-divider></v-divider>
            <v-list-tile
              v-for="repo in repositoriesList"
              :key="repo.id"
              :to="{name: 'readme', params:{repoName: repo.full_name}}"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{repo.full_name}}</v-list-tile-title>
                <v-list-tile-sub-title>{{repo.description}}</v-list-tile-sub-title>
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
  name: "RepositoriesList",
  props: ["repositoriesList"]
};
</script>
