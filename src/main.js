// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require("~/main.css");
require("typeface-montserrat");

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import DefaultLayout from "~/layouts/Default.vue";

import VueI18n from "vue-i18n";
import messages from "~/content";

config.autoAddCss = false;
library.add(faArrowRight);

export default function(Vue, { router, head, appOptions, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    rel: "apple-touch-icon",
    href: "apple-touch-icon.png"
  });
  head.link.push({
    rel: "icon",
    href: "favicon.ico"
  });
  Vue.component("font-awesome-icon", FontAwesomeIcon);

  Vue.use(VueI18n);

  let browser_language;

  if (isClient) {
    browser_language = window.navigator.language.split("-")[0];
  }

  appOptions.i18n = new VueI18n({
    locale: browser_language,
    messages
  });
}
