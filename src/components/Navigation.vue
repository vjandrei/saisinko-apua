<template>
  <nav class="my-8 py-8" role="navigation" aria-label="main navigation">
    <div class="flex flex-col md:flex-row justify-between items-center mx-auto font-display">
      <a href="https://www.hackthecrisisfinland.com/" class="font-semibold">#saisinkoapua</a>
      <div class="mt-4 md:mt-0 hidden md:block">
        <div class="p-2 mx-2 cursor-pointer inline-block" role="button">
          <a href="#form" class="font-semibold relative nav-link">
            {{
            $t("text.formLink")
            }}
          </a>
        </div>
        <div class="p-2 mx-2 cursor-pointer inline-block" role="button">
          <a href="hackthecrisis.pdf" class="font-semibold relative nav-link">
            {{
            $t("text.printLink")
            }}
          </a>
        </div>
        <div class="p-2 mx-2 cursor-pointer inline-block" role="button">
          <a href="#about" class="font-semibold relative nav-link">{{ $t("text.about") }}</a>
        </div>
        <div class="p-2 mx-2 cursor-pointer inline-block" role="button">
          <label for="locale" class="font-semibold relative nav-link mr-3">
            {{
            $t("text.localeLink")
            }}
          </label>
          <select v-model="locale">
            <option value="fi">fi</option>
            <option value="en">en</option>
          </select>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import messages from "~/content";
export default {
  name: "Navigation",
  data() {
    return {
      locale: (this.$i18n.locale = this.$route.path.split("/")[1])
    };
  },
  i18n: {
    messages: messages
  },
  watch: {
    locale(value) {
      this.$emit("clicked", value);
      this.$router.push({ path: `/${value}` });
    }
  }
};
</script>
