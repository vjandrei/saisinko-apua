// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require("~/main.css");

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import DefaultLayout from "~/layouts/Default.vue";

config.autoAddCss = false;
library.add(faArrowRight);

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    rel: "stylesheet",
    herf:
      "https://fonts.googleapis.com/css?family=Montserrat:400,600,800&display=swap"
  });
  Vue.component("font-awesome-icon", FontAwesomeIcon);
}
