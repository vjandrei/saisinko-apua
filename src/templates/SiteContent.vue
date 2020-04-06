<template>
  <Layout :show-language="true">
    <section class="hidden sm:block">
      <div class="container mx-auto">
        <Navigation @clicked="localeUpdate" />
      </div>
    </section>
    <section class="mt-6">
      <div class="flower-bg bg-local bg-no-repeat bg-top sm:bg-right-top">
        <section class="my-4">
          <div class="container mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2">
              <div class="flex items-center justify-center">
                <div class="mb-6">
                  <h1
                    class="font-display font-extrabold text-4xl sm:text-5xl text-primary text-center sm:text-left my-8"
                  >{{ $t("text.heading") }}</h1>
                  <h2
                    class="font-display font-normal text-lg sm:text-xl text-gray-900 mb-6"
                  >{{ $t("text.ingress") }}</h2>
                </div>
              </div>
              <div class="flex items-center justify-center">
                <g-image
                  class="w-2/5 sm:w-2/5"
                  src="~/assets/img/fin_saisinko-apua-kyltti-etu.png"
                  fit="contain"
                  blur="0"
                />
                <g-image
                  class="w-2/5 sm:w-2/5"
                  src="~/assets/img/fin_saisinko-apua-kyltti-taka.png"
                  fit="contain"
                  blur="0"
                />
              </div>
            </div>
          </div>
        </section>
        <section class="my-4">
          <div class="container mx-auto text-center sm:my-16">
            <div>
              <h2
                class="text-2xl py-5 text-primary font-display font-extrabold"
              >{{ $t("text.howItWorks") }}</h2>
            </div>
            <div class="grid sm:grid-cols-3 gap-4">
              <div class="bg-primary text-white flex flex-col py-8 px-8 rounded-md">
                <span class="block font-display text-5xl font-extrabold mb-4">1.</span>
                <h2 class="font-display text-lg font-semibold">{{ $t("text.step1") }}</h2>
              </div>
              <div class="bg-primary text-white flex flex-col py-8 px-8 rounded-md">
                <span class="block font-display text-5xl font-extrabold mb-4">2.</span>
                <h2 class="font-display text-lg font-semibold">{{ $t("text.step2") }}</h2>
              </div>
              <div class="bg-primary text-white flex flex-col py-8 px-8 rounded-md">
                <span class="block font-display text-5xl font-extrabold mb-4">3.</span>
                <h2 class="font-display text-lg font-semibold">{{ $t("text.step3") }}</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section id="about" class="my-4 sm:my-12">
      <div class="bg-gray-100">
        <div class="container mx-auto">
          <div class="flex flex-wrap sm:-mx-2 py-3 sm:py-16">
            <div class="lg:w-2/5 px-2 lg:pr-16">
              <h2
                class="font-display font-extrabold text-4xl sm:text-5xl text-primary sm:mb-4"
              >{{ $t("text.about") }}</h2>
            </div>
            <div class="lg:w-3/5 px-2">
              <p
                class="mt-4 font-display text-lg sm:text-xl tracking-normal sm:leading-7 text-gray-900"
              >{{ $t("text.aboutParagraphy1") }}</p>
              <p
                class="mt-4 font-display text-lg sm:text-xl tracking-normal sm:leading-7 text-gray-900"
              >{{ $t("text.aboutParagraphy2") }}</p>
              <p
                class="mt-4 font-display text-lg sm:text-xl tracking-normal sm:leading-7 text-gray-900"
              >{{ $t("text.aboutParagraphy3") }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-2xl text-primary font-display font-extrabold">{{ $t("text.team") }}</h2>
        <p class="font-display text-lg leading-loose font-normal mb-4">{{ $t("text.teamAbout") }}</p>
        <div class="flex flex-wrap -mx-8 font-display">
          <div class="w-full sm:w-1/2 lg:w-1/4 p-8">
            <g-image
              src="~/assets/img/tanja.jpg"
              class="lazy mb-6 mx-auto rounded-full"
              width="500"
            />
            <h3 class="text-xl font-heading">Tanja Pelkonen</h3>
            <span>
              {{ $t("text.volunteering") }}
              <br />
              {{ $t("text.tanja") }}
            </span>
            <p class="mt-4 text-gray-500 leading-relaxed">👨🏻‍🎤</p>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/4 p-8 lg:border-l">
            <g-image
              src="~/assets/img/andreas.jpg"
              class="lazy mb-6 mx-auto rounded-full"
              width="500"
            />
            <h3 class="text-xl font-heading">Andreas Koutsoukos</h3>
            <span>
              {{ $t("text.volunteering") }}
              <br />
              {{ $t("text.andreas") }}
            </span>
            <p class="mt-4 text-gray-500 leading-relaxed">💻</p>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/4 p-8 lg:border-l">
            <g-image
              src="~/assets/img/saija.jpg"
              width="500"
              class="lazy mb-6 mx-auto rounded-full"
            />
            <h3 class="text-xl font-heading">Saija Viitala</h3>
            <span>
              {{ $t("text.volunteering") }}
              <br />
              {{ $t("text.saija") }}
            </span>
            <p class="mt-4 text-gray-500 leading-relaxed">📝</p>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/4 p-8 lg:border-l">
            <g-image
              src="~/assets/img/jussi.jpg"
              width="500"
              class="lazy mb-6 mx-auto rounded-full"
            />
            <h3 class="text-xl font-heading">Jussi Korhonen</h3>
            <span>
              {{ $t("text.volunteering") }}
              <br />
              {{ $t("text.jussi") }}
            </span>
            <p class="mt-4 text-gray-500 leading-relaxed">💪🏻</p>
          </div>
        </div>
        <div class="text-center my-6">
          <a
            href="mailto:saisinko.apua@gmail.com?subject=Yhdenotto"
            class="w-full sm:w-auto font-display font-semibold text-md sm:text-lg text-center bg-primary text-white rounded-full py-3 px-6 mt-4 inline-block"
          >{{ $t("text.helping") }}</a>
          <div class="font-light text-spaceblue-300 text-sm"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="bg-gray-100">
        <div class="container mx-auto sm:mt-40 sm:my-16 sm:py-16">
          <div class="flex justify-center flex-wrap">
            <div class="sm:block w-full md:flex-1 relative mb-16 md:mb-0">
              <div class="w-full sm:w-1/2 mb-2 p-4 relative z-30 xl:px-4 float-left">
                <div
                  class="rounded-lg bg-white px-3 lg:px-6 xl:px-8 py-8 xl:py-16 text-center shadow-lg border border-gray-100 sm:mt-32"
                >
                  <img
                    class="mx-auto w-full xl:w-48"
                    src="https://www.grano.fi/hs-fs/hubfs/Identity/Logot/grano-logo-oranssi.png?width=208&name=grano-logo-oranssi.png"
                    alt="Logo"
                  />

                  <h4 class="text-gray-800 font-bold text-2xl mt-6">Grano</h4>
                  <p class="text-gray-600 mt-6 block md:hidden lg:block">
                    Grano on Suomen monipuolisin sisältöpalvelujen osaaja.
                    Toteutamme asiakkaan myyntiä, brändiä ja tulosta edistäviä
                    markkinoinnin ja viestinnän ratkaisuja digistä printtiin.
                  </p>
                </div>
              </div>
              <div class="w-full sm:w-1/2 mb-2 p-4 relative z-30 sm:pl-6 xl:pl-8 float-left">
                <div
                  class="rounded-lg bg-white px-3 lg:px-6 xl:px-12 py-8 xl:py-16 text-center shadow-lg border border-gray-100"
                >
                  <h4
                    class="text-gray-800 font-bold text-2xl mt-6"
                  >{{ $t("text.helpingEnterpise") }}</h4>
                </div>
              </div>
            </div>
            <div class="flex-1 flex flex-col justify-center z-30 ml-0 md:ml-12">
              <h3
                class="text-gray-800 font-bold text-xl sm:text-3xl lg:text-4xl xl:text-5xl pr-0 lg:pr-8 text-gray-800 font-bold ml-6 mr-6 sm:mr-0 leading-tight"
              >{{ $t("text.coWorkers") }}</h3>
              <h4
                class="ml-6 mt-4 sm:mt-8 mr-6 sm:mr-0 text-sm lg:text-xl xl:text-2xl font-hairline sm:font-medium lg:font-normal text-custom-purple"
              >...</h4>
              <p
                class="ml-6 mt-4 sm:mt-8 mr-6 sm:mr-0 text-sm sm:text-lg xl:text-xl text-gray-600"
              >...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
export default {
  data() {
    return {
      formData: {},
      locale: (this.$i18n.locale = this.$route.path.split("/")[1]),
      localeUpdate: ""
    };
  },
  components: {
    Navigation
  },
  props: {
    submitText: {
      type: String,
      required: false,
      default: "Lähetä lomake"
    }
  },
  metaInfo: {
    title: "Lappu oveen ja anna naapurin auttaa!",
    meta: [
      {
        name: "description",
        content:
          "Suojellaksemme ihmisiä ympärillämme haluamme varmistaa, ettei kenenkään riskiryhmään kuuluvan tarvitsisi altistua virukselle saadakseen ruokaa tai lääkkeitä. Uskomme kanssaihmisten hyvyyteen. Anna naapurin auttaa!"
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Lappu oveen ja anna naapurin auttaa!"
      },
      {
        property: "og:description",
        content:
          "Suojellaksemme ihmisiä ympärillämme haluamme varmistaa, ettei kenenkään riskiryhmään kuuluvan tarvitsisi altistua virukselle saadakseen ruokaa tai lääkkeitä. Uskomme kanssaihmisten hyvyyteen. Anna naapurin auttaa!"
      },
      {
        property: "og:url",
        content: "https://saisinkoapua.netlify.com/"
      },
      {
        property: "og:image",
        content: "https://saisinkoapua.netlify.com/cover.jpg"
      },
      { name: "twitter:card", content: "Summary" },
      {
        name: "twitter:title",
        content: "Lappu oveen ja anna naapurin auttaa!"
      },
      {
        name: "twitter:description",
        content:
          "Suojellaksemme ihmisiä ympärillämme haluamme varmistaa, ettei kenenkään riskiryhmään kuuluvan tarvitsisi altistua virukselle saadakseen ruokaa tai lääkkeitä. Uskomme kanssaihmisten hyvyyteen. Anna naapurin auttaa!"
      },
      { name: "twitter:site", content: "" },
      { name: "twitter:creator", content: "" },
      {
        name: "twitter:image",
        content: "https://saisinkoapua.netlify.com/cover.jpg"
      }
    ]
  },
  async mounted() {
    this.$i18n.locale = this.$route.path.split("/")[1];
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => {
          this.formData = "";
          this.submitText = "Kiitos 👍🏻";
        })
        .catch(error => alert(error));
    }
  },
  locale(value) {
    this.$i18n.locale = value;
  }
};
</script>

<style>
.flower-bg {
  background-image: url("~@/assets/img/htcf-flower@2x.png");
}
.steps {
  background: rgba(255, 255, 255, 0.8);
}
</style>
