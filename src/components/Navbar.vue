<template>
  <nav>
    <v-app-bar app>
      <v-app-bar-nav-icon
        class="textColor--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class=" textColor--text text--darken-1">
        <span class="font-weight-light">Bewerbungs</span>
        <span class="text-uppercase">App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- ------Botton at the right side-------- -->
      <v-btn text color="textColor">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- navigation drower -->
    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/Anna.jpg" />
          </v-avatar>
          <p class="white--text subtitle mt-1">Anna Kazulak</p>
        </v-flex>

        <v-flex class="mt-4 mb-3">
          <Popup />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ link.text }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import Popup from "./Popup";
export default {
  components: {
    Popup,
  },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Aufgaben", route: "/" },
        {
          icon: "mdi-file-document-outline",
          text: "Stellenanzeigen",
          route: "/stellenanzeigen",
        },
        { icon: "mdi-account", text: "Bewerber", route: "/bewerber" },
      ],
    };
  },
};
</script>
<style lang=""></style>
