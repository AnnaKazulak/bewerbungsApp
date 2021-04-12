<template>
  <div class="aufgaben">
    <h1 class="h4 grey--text font-weight-regular">Aufgaben</h1>
    <v-container class="my-5">
      <!-- we use v-layout for grid -->
      <v-layout row class="mb-3">
        <v-btn small text color="grey" @click="sortBy('status')" v-on="on">
          <v-icon left small>mdi-timer-outline</v-icon>
          <span right class="caption text-lowercase">sortiere nach Status</span>
        </v-btn>

        <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
          <v-icon left small>mdi-account</v-icon>
          <span right class="caption text-lowercase"
            >sortiere nach Mitarbeiter</span
          >
        </v-btn>
      </v-layout>

      <v-card flat v-for="(project, index) in projects" :key="index">
        <!-- die class wird hier dynamisch angebunden  :class="`pa-3 project ${project.status}`" -->
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--tex">Aufgabe</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--tex">Mitarbeiter</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--tex">Fällig am</div>
            <div>{{ project.due }}</div>
          </v-flex>

          <v-flex xs2 sm4 md2>
            <div class="text-right pr-5">
              <v-chip
                small
                :class="`${project.status} white--text my-2 caption`"
                >{{ project.status }}</v-chip
              >
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      projects: [
        {
          title: "Stellenanzeige für Web Dev erstellen",
          person: "Nadine",
          due: "1st Mai 2021",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Bewerberpool vorbereiten",
          person: "Edna",
          due: "15th März 2021",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Hiring Manager - Frontend kontaktieren",
          person: "Jochannes",
          due: "20th April 2021",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title:
            "Rückmeldung von Hiring Manager - Frontend bzl. Stellenanzeige holen",
          person: "Martin",
          due: "10th Mai 2021",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Arbeitsvertrag für Jan Kowalski vorbereiten",
          person: "Martin",
          due: "5th April 2021",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: #ffaa2c !important;
}
.v-chip.overdue {
  background: #f83e70 !important;
}
</style>
