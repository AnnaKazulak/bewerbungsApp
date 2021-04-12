// import Vue from "vue";
// import Vuetify from 'vuetify/lib/framework';
// import Vuetify from "vuetify/lib";
// import "vuetify/src/stylus/app.styl";

// Vue.use(Vuetify, {
//   icons: {
//     iconfont: "mdi",
//   },
//   theme: {
//     themes: {
//       light: {
//         primary: "#9652ff",
//         secondary: "#b0bec5",
//         accent: "#8c9eff",
//         error: "#b71c1c",
//       },
//     },
//   },
// });
// export default new Vuetify({});

import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    themes: {
      light: {
        primary: "#003A5D",
        success: "#3cd1c2",
        info: "#ffaa2c",
        error: "#f83e70",
        textColor: "#005284",
      },
    },
  },
});
