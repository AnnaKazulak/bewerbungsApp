<template>
  <div class="bewerber">
    <h1 class="h4 grey--text font-weight-regular">Bewerber</h1>
    <v-container class="my-5">
      <v-layout row>
        <v-flex xs12 sm6 md4 lg3 v-for="person in persons" :key="person.name">
          <v-card text class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar"
              /></v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subtitle-1">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span>Kontakt</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      persons: [
        {
          name: "Padme Amidala",
          role: "Web Developer",
          avatar: "/PadmeAmidala.jpg",
        },
        {
          name: "Luke Skylwaker",
          role: "Graphic Designer",
          avatar: "/LukeSkylwaker.jpg",
        },
        {
          name: "Anakin Skylwaker",
          role: "Backend Developer",
          avatar: "/AnakinSkylwaker.jpg",
        },
        {
          name: "Leila Organa",
          role: "UI Designer",
          avatar: "/LeilaOrgana.png",
        },
        {
          name: "Obi-Wan Kenobi",
          role: "Marketing Manager",
          avatar: "/ObiWanKenobi.jpg",
        },
        {
          name: "Darth Vader",
          role: "Full Stack Developer",
          avatar: "/DarthVader.jpg",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
