<template></template>

<script>
export default {
  metaInfo: {
    htmlAttrs: {
      lang: ""
    }
  },
  async mounted() {
    let browser_language = window.navigator.language.split("-")[0];
    let languages = ["fi", "en"];
    let selected_language = languages.includes(browser_language)
      ? browser_language
      : "fi";
    this.$router.push({ path: `/${selected_language}` });
  }
};
</script>
