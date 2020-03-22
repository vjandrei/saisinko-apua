<template>
  <Layout>
    <section>
      <div class="container mx-auto">
        <nav class="my-8 py-8" role="navigation" aria-label="main navigation">
          <div class="flex flex-col md:flex-row justify-between items-center mx-auto font-display">
            <a href="/" class="font-semibold">hackthecrisisfinland.com</a>
            <div class="mt-4 md:mt-0 hidden md:block">
              <div class="p-2 mx-2 cursor-pointer inline-block" role="button">
                <a class="font-semibold relative nav-link">Tilauslomake</a>
              </div>
              <div class="p-2 mx-2 cursor-pointer inline-block" role="button">
                <a class="font-semibold relative nav-link">Mistä on kyse?</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
    <div class="flower-bg bg-local bg-no-repeat bg-right">
      <section>
        <div class="container mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2">
            <div class="flex items-center justify-center">
              <div class="mb-6">
                <h1 class="font-display font-extrabold text-5xl text-primary mb-4">Saisinko apua?</h1>
                <h2 class="font-display font-normal text-xl text-secondary mb-4">
                  Suojellaksemme riskiryhmiä ja pandemian leviämistä haluemme
                  varmistaa, ettei kenenkään riskiryhmän edustajan tarvitsisi
                  mennä tarvittaville kauppa- ja apteekkireissulle, ja siten
                  altistua virukselle. Uskomme kanssaihmisten hyvyyteen ja
                  naapurien voimaan.
                </h2>
                <button
                  class="w-full sm:w-auto font-display font-semibold text-lg bg-primary text-white rounded-full py-2 px-6"
                >Tilaa omaan naapurustoosi</button>
              </div>
            </div>
            <div class="flex items-center justify-center">
              <g-image
                src="~/assets/img/hackthecrisis_mockup_1.png"
                fit="contain"
                width="200"
                blur="60"
              />
              <g-image
                src="~/assets/img/hackthecrisis_mockup_2.png"
                fit="contain"
                width="200"
                blur="60"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container mx-auto">
          <div class="flex sm:min-h-screen items-center justify-center">
            <div class="w-full sm:w-3/5 bg-white shadow-xl rounded-lg px-16 py-6">
              <div>
                <h2
                  class="font-display font-extrabold text-2xl text-primary mb-4"
                >Tilaa omaan taloyhtiöösi</h2>
              </div>
              <form
                class="mt-8"
                name="contact"
                method="post"
                v-on:submit.prevent="handleSubmit"
                action="/success/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <label class="block mb-4">
                  <span class="font-display font-semibold text-primary">Nimesi</span>
                  <input
                    v-model="formData.name"
                    aria-label="Nimesi"
                    name="name"
                    type="text"
                    required
                    class="form-input mt-1 block w-full"
                    placeholder="Matti Meikäläinen"
                  />
                </label>

                <label class="block mb-4">
                  <span class="font-display font-semibold text-primary">Katuosoite</span>
                  <input
                    v-model="formData.address"
                    aria-label="Katuosoite"
                    name="address"
                    type="text"
                    required
                    class="form-input mt-1 block w-full"
                    placeholder="Mallikatu 1 a"
                  />
                </label>

                <label class="block mb-4">
                  <span class="font-display font-semibold text-primary">Postinumero</span>
                  <input
                    v-model="formData.postnumber"
                    aria-label="Postinumero"
                    name="postnumber"
                    type="text"
                    required
                    class="form-input mt-1 block w-full"
                    placeholder="01234"
                  />
                </label>

                <label class="block mb-4">
                  <span class="font-display font-semibold text-primary">Kaupunki</span>
                  <input
                    v-model="formData.city"
                    aria-label="Kaupunki"
                    name="city"
                    type="text"
                    required
                    class="form-input mt-1 block w-full"
                    placeholder="Kaupunki"
                  />
                </label>

                <div class="relative my-6">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                  </div>
                  <div class="relative flex justify-center text-sm leading-5">
                    <span
                      class="px-2 bg-white font-display font-semibold text-primary"
                    >Haluan laput kielellä</span>
                  </div>
                </div>
                <div class="flex flex-column items-center justify-center my-6">
                  <div class="mr-3">
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        class="form-checkbox"
                        name="suomi"
                        v-model="formData.suomi"
                      />
                      <span class="ml-2">Suomi</span>
                    </label>
                  </div>
                  <div class="mr-3">
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        class="form-checkbox"
                        name="svenska"
                        v-model="formData.svenska"
                      />
                      <span class="ml-2">Svenska</span>
                    </label>
                  </div>
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        class="form-checkbox"
                        name="svenska"
                        v-model="formData.english"
                      />
                      <span class="ml-2">English</span>
                    </label>
                  </div>
                </div>
                <div class="text-center">
                  <button
                    class="font-display font-semibold text-lg bg-primary text-white rounded-full py-2 px-6"
                    type="submit"
                  >{{ this.submitText }}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section>
      <div class="container mx-auto mb-24">
        <div class="flex justify-center flex-wrap">
          <div class="sm:block w-full md:flex-1 relative mb-16 md:mb-0">
            <div class="w-full sm:w-1/2 relative z-30 px-2 xl:px-4 float-left">
              <div
                class="rounded-lg bg-white px-3 lg:px-6 xl:px-8 py-8 xl:py-16 text-center shadow-lg border border-gray-100 mt-32"
              >
                <img class="mx-auto w-full xl:w-48" src alt="Logo" />

                <h4 class="text-gray-800 font-bold text-2xl mt-6">Grano</h4>
                <p
                  class="text-gray-600 mt-6 block md:hidden lg:block"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rem similique.</p>
              </div>
            </div>
            <div class="w-full sm:w-1/2 relative z-30 sm:pl-6 xl:pl-8 float-left">
              <div
                class="rounded-lg bg-white px-3 lg:px-6 xl:px-12 py-8 xl:py-16 text-center shadow-lg border border-gray-100"
              >
                <img class="mx-auto w-20 xl:w-32" src alt="Logo" />
                <h4 class="text-gray-800 font-bold text-2xl mt-6">Terveystalo</h4>
                <p
                  class="text-gray-600 mt-6 block md:hidden lg:block"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rem similique.</p>
              </div>
            </div>
          </div>
          <div class="flex-1 flex flex-col justify-center z-30 ml-0 md:ml-12">
            <h3
              class="text-gray-800 font-bold text-xl sm:text-3xl lg:text-4xl xl:text-5xl pr-0 lg:pr-8 text-gray-800 font-bold ml-6 mr-6 sm:mr-0 leading-tight"
            >Yhteystyökumppanit</h3>
            <h4
              class="ml-6 mt-4 sm:mt-8 mr-6 sm:mr-0 text-sm lg:text-xl xl:text-2xl font-hairline sm:font-medium lg:font-normal text-custom-purple"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. periores tempore, quos.</h4>
            <p
              class="ml-6 mt-4 sm:mt-8 mr-6 sm:mr-0 text-sm sm:text-lg xl:text-xl text-gray-600"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illo deleniti sed ad hic. Corrupti fugiat ex eligendi quibusdam nemo sint saepe alias porro? Doloribus fuga laborum similique necessitatibus a.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="bg-gray-100">
        <div class="pt-12 sm:pt-16 lg:pt-20">
          <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
              <h2 class="font-display font-extrabold text-5xl text-primary mb-4">Mistä on kyse?</h2>
              <p class="mt-4 font-display text-xl leading-7 text-gray-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                iaculis bibendum elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      formData: {}
    };
  },
  props: {
    submitText: {
      type: String,
      required: false,
      default: "Lähetä lomake"
    }
  },
  metaInfo: {
    title: "Saisinko apua?"
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
  }
};
</script>

<style>
.flower-bg {
  background-image: url("~@/assets/img/htcf-flower.png");
}
</style>
