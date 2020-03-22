<template>
  <Layout>
    <section>
      <div class="container mx-auto">
        <nav class="my-8 py-8" role="navigation" aria-label="main navigation">
          <div class="flex flex-col md:flex-row justify-between items-center mx-auto font-display">
            <a href="/" class="font-semibold">hackthecrisisfinland.com</a>
            <div class="mt-4 md:mt-0 hidden md:block">
              <div class="p-2 mx-2 cursor-pointer inline-block" role="button">
                <a href="#form" class="font-semibold relative nav-link">Tilauslomake</a>
              </div>
              <div class="p-2 mx-2 cursor-pointer inline-block" role="button">
                <a href="@/assets/hackthecrisis.pdf" class="font-semibold relative nav-link">Tulosta</a>
              </div>
              <div class="p-2 mx-2 cursor-pointer inline-block" role="button">
                <a href="#about" class="font-semibold relative nav-link">Mistä on kyse?</a>
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
                <h2
                  class="font-display font-normal text-xl text-secondary mb-4"
                >Suojellaksemme ihmisiä ympärillämme haluamme varmistaa, ettei kenenkään riskiryhmään kuuluvan tarvitsisi altistua virukselle saadakseen ruokaa tai lääkkeitä. Uskomme kanssaihmisten hyvyyteen. Anna naapurin auttaa!</h2>
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
        <div class="container mx-auto px-6 text-center my-16">
          <div class="mb-16">
            <h2
              class="text-2xl mb-5 text-primary uppercase font-display font-extrabold"
            >Mite tämä toimii?</h2>
          </div>
          <div class="flex flex-wrap block my-24">
            <div class="px-6 mb-8 w-full md:w-1/3">
              <h2
                class="text-lg font-bold text-spaceblue-400 mb-4"
              >1.Kirjoita kylttiin, millaista apua tarvitset (esim. kaupassa tai apteekissa käynti)</h2>
            </div>
            <div class="px-6 mb-8 w-full md:w-1/3">
              <h2
                class="text-lg font-bold text-spaceblue-400 mb-4"
              >2.Ripusta kyltti kotiovesi ulkopuolelle</h2>
            </div>
            <div class="px-6 mb-8 w-full md:w-1/3">
              <h2
                class="text-lg font-bold text-spaceblue-400 mb-4"
              >3.Kun naapuri ilmoittautuu avuksi, sopikaa, miten apu (esim. kauppalasku) hoidetaan.</h2>
            </div>
          </div>
        </div>
      </section>
      <section id="form">
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

                <label class="block mb-4">
                  <span class="font-display font-semibold text-primary">Määrä</span>
                  <input
                    v-model="formData.piece"
                    aria-label="Määrä"
                    name="piece"
                    type="number"
                    required
                    class="form-input mt-1 block w-full"
                    placeholder="Kpl"
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
                        id="suomi"
                        value="suomi"
                        name="language[]"
                      />
                      <span class="ml-2">Suomi</span>
                    </label>
                  </div>
                  <div class="mr-3">
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        class="form-checkbox"
                        id="svenska"
                        value="svenska"
                        name="language[]"
                      />
                      <span class="ml-2">Svenska</span>
                    </label>
                  </div>
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        class="form-checkbox"
                        id="english"
                        value="english"
                        name="language[]"
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

    <section id="about">
      <div class="bg-gray-100">
        <div class="pt-12 sm:py-24 lg:pt-20">
          <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
              <h2 class="font-display font-extrabold text-5xl text-primary mb-4">Mistä on kyse?</h2>
              <p
                class="mt-4 font-display text-xl leading-7 text-gray-900"
              >Elämme suljettujen ovien takana, emmekä aina edes tiedä, kuka seinän takana asuu. Miten siis voisimme tietää, kuka saattaisi tarvita apua tai keneltä sitä saada?</p>
              <p
                class="mt-4 font-display text-xl leading-7 text-gray-900"
              >Idea Saisinko apua? -kyltteihin syntyi kun Andreaksen naapurissa asuva perhe joutui karanteeniin isän palattua matkoilta. Andreas alkoi pohtia, miten voisi saada tietoa muistakin kotitalossaan apua tarvitsevista, itselleen tuntemattomista ihmisistä.</p>
              <p
                class="mt-4 font-display text-xl leading-7 text-gray-900"
              >Saatuaan idean hotellien käytössä olevien Älä häiritse -kylttien soveltamisesta Andreas jakoi ajatuksensa LinkedInissä. Ideaan tarttui ensimmäisenä Grano, joka halusi hoitaa Saisinko apua? -kylttien painatuksen ja jakelun kaikkialle Suomeen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container mx-auto px-6 text-center my-16">
        <div class="mb-16">
          <h2 class="text-2xl mb-5 text-spaceblue-500 uppercase font-display font-extrabold">Tiimi</h2>
          <p class="font-display text-lg text-spaceblue-400 leading-loose font-normal"></p>
        </div>
        <div class="flex flex-wrap block my-24">
          <div class="px-6 mb-8 w-full md:w-1/3">
            <g-image
              src="~/assets/img/tanja.jpg"
              class="lazy mb-6 mx-auto rounded-full"
              width="500"
            />
            <h2 class="text-lg font-bold text-spaceblue-400 mb-4">Tanja Pelkonen</h2>
            <p class="text-md leading-loose font-normal text-spaceblue-300">Graaffinen suunnittelui</p>
          </div>
          <div class="px-6 mb-8 w-full md:w-1/3">
            <g-image
              src="~/assets/img/andreas.jpg"
              class="lazy mb-6 mx-auto rounded-full"
              width="500"
            />
            <h2 class="text-lg font-bold text-spaceblue-400 mb-4">Andreas Koutsoukos</h2>
            <p
              class="text-md leading-loose font-normal text-spaceblue-300"
            >Idean kehittäjä sekä koodari</p>
          </div>
          <div class="px-6 mb-8 w-full md:w-1/3">
            <g-image
              src="~/assets/img/saija.jpg"
              width="500"
              class="lazy mb-6 mx-auto rounded-full"
            />
            <h2 class="text-lg font-bold text-spaceblue-400 mb-4">Saija Viitala</h2>
            <p class="text-md leading-loose font-normal text-spaceblue-300">Sisällön suunnittelu</p>
          </div>
        </div>
        <div class="text-center">
          <a
            href="https://feedr.dk/register"
            class="px-8 py-3 inline-block rounded text-md text-white font-semibold bg-primary hover:bg-blue-300 mb-4"
          >Ota yhteyttä</a>
          <div class="font-light text-spaceblue-300 text-sm">Ole yhteydessä...</div>
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
