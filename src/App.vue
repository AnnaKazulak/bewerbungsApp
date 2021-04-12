<template>
  <v-app class="pink darken-2">
    <Navbar />
    <v-content class="grey lighten-4 mx-4 my-4 ">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },

  data() {
    return {};
    //
  },
};
</script>
