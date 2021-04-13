<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="700">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">neue Aufgabe</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title
          >neue Aufgabe erstellen</v-card-title
        >
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              label="Titel"
              v-model="title"
              prepend-icon="mdi-folder-edit-outline"
              :rules="inputRules"
            ></v-text-field>
            <v-textarea
              label="Information"
              v-model="content"
              prepend-icon="mdi-pencil-outline"
              :rules="inputRules"
            ></v-textarea>
            <!-- Kallender  -->
            <v-menu
              min-width="auto"
              :close-on-content-click="true"
              v-model="menu"
            >
              <template #activator="{on, attrs}">
                <v-text-field
                  :value="formattedDate"
                  label="Fällig am"
                  prepend-icon="mdi-calendar-range"
                  v-model="due"
                  :rules="inputRules"
                  v-on="on"
                  v-bind="attrs"
                >
                </v-text-field>
              </template>
              <v-date-picker v-model="due"></v-date-picker>
            </v-menu>
            <v-spacer></v-spacer>

            <v-btn
              text
              class="success mx-0 mt-3"
              @click="submit"
              :loading="loading"
            >
              Hinzufügen
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
// mit npm die Bibliothek data-fns instaliert und hier importiert:
import { format } from "date-fns";
import db from "@/fb";
export default {
  data() {
    return {
      // date: new Date().toISOString().substr(0, 10),
      title: "",
      content: "",
      due: null,
      menu: false,
      inputRules: [
        (v) => !!v || "Dieses Feld ist erforderlich",
        (v) => v?.length >= 3 || "Geben Sie bitte miniumum 3 Zeichenen",
      ],
      loading: false,
      dialog: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        // console.log(this.title, this.content);
        const project = {
          title: this.title,
          content: this.content,
          // due: format(this.due, "Do MMM YYYY"),
          // due: format(parseISO(this.due), "do MMM YYY"),
          due: this.due,
          person: "Anna",
          status: "ongoing",
        };
        db.collection("projects")
          .add(project)
          .then(() => {
            this.loading = false;
            this.dialog = false;
          });
      }
    },
  },
  computed: {
    formattedDate() {
      // wenn der User das Datum ausgewählt hat wir die mit der format() formatieret, sonst bleib sie leer
      return this.due ? format(new Date(this.due), "Do MMM yyyy") : "";
    },
  },
};
</script>
<style lang=""></style>
