<template>
  <Layout>
    <section class="hidden sm:block">
      <div class="container mx-auto">
        <nav class="my-8 py-8" role="navigation" aria-label="main navigation">
          <div
            class="flex flex-col md:flex-row justify-between items-center mx-auto font-display"
          >
            <a href="/" class="font-semibold">hackthecrisisfinland.com</a>
            <div class="mt-4 md:mt-0 hidden md:block">
              <div class="p-2 mx-2 cursor-pointer inline-block" role="button">
                <a href="#form" class="font-semibold relative nav-link"
                  >Tilauslomake</a
                >
              </div>
              <div class="p-2 mx-2 cursor-pointer inline-block" role="button">
                <a
                  href="hackthecrisis.pdf"
                  class="font-semibold relative nav-link"
                  >Tulosta</a
                >
              </div>
              <div class="p-2 mx-2 cursor-pointer inline-block" role="button">
                <a href="#about" class="font-semibold relative nav-link"
                  >Mistä on kyse?</a
                >
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
    <section class="mt-6">
      <div class="flower-bg bg-local bg-no-repeat bg-right-top">
        <section class="my-4">
          <div class="container mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2">
              <div class="flex items-center justify-center">
                <div class="mb-6">
                  <h1
                    class="font-display font-extrabold text-2xl sm:text-5xl text-primary mb-4"
                  >
                    Saisinko apua?
                  </h1>
                  <h2
                    class="font-display font-normal text-xl text-secondary mb-4"
                  >
                    Suojellaksemme ihmisiä ympärillämme haluamme varmistaa,
                    ettei kenenkään riskiryhmään kuuluvan tarvitsisi altistua
                    virukselle saadakseen ruokaa tai lääkkeitä. Uskomme
                    kanssaihmisten hyvyyteen. Anna naapurin auttaa!
                  </h2>
                  <button
                    class="w-full sm:w-auto font-display font-semibold text-md sm:text-lg bg-primary text-white rounded-full py-2 px-6"
                  >
                    Tilaa omaan naapurustoosi
                  </button>
                </div>
              </div>
              <div class="flex items-center justify-center">
                <g-image
                  class="w-4/12 sm:w-1/2"
                  src="~/assets/img/hackthecrisis_mockup_1@2x.png"
                  fit="contain"
                  blur="0"
                />
                <g-image
                  class="w-4/12 sm:w-1/2"
                  src="~/assets/img/hackthecrisis_mockup_2@2x.png"
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
              >
                Mite tämä toimii?
              </h2>
            </div>
            <div class="grid sm:grid-cols-3 gap-4">
              <div
                class="bg-primary text-white flex flex-col py-8 px-8 rounded-md"
              >
                <span class="block font-display text-5xl font-extrabold mb-4"
                  >1.</span
                >
                <h2 class="font-display text-lg font-semibold">
                  Kirjoita kylttiin, millaista apua tarvitset (esim. kaupassa
                  tai apteekissa käynti)
                </h2>
              </div>
              <div
                class="bg-primary text-white flex flex-col py-8 px-8 rounded-md"
              >
                <span class="block font-display text-5xl font-extrabold mb-4"
                  >2.</span
                >
                <h2 class="font-display text-lg font-semibold">
                  Ripusta kyltti kotiovesi ulkopuolelle
                </h2>
              </div>
              <div
                class="bg-primary text-white flex flex-col py-8 px-8 rounded-md"
              >
                <span class="block font-display text-5xl font-extrabold mb-4"
                  >3.</span
                >
                <h2 class="font-display text-lg font-semibold">
                  Kun naapuri ilmoittautuu avuksi, sopikaa, miten apu (esim.
                  kauppalasku) hoidetaan.
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section id="form" class="my-4">
          <div class="container mx-auto">
            <div class="flex items-center justify-center">
              <div
                class="w-full sm:w-3/5 py-3 mt-4 sm:px-16 sm:py-6 bg-white sm:shadow-xl rounded-lg"
              >
                <div>
                  <h2
                    class="font-display font-extrabold text-2xl text-primary mb-4"
                  >
                    Tilaa omaan taloyhtiöösi
                  </h2>
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
                    <span class="font-display font-semibold text-primary"
                      >Nimesi</span
                    >
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
                    <span class="font-display font-semibold text-primary"
                      >Katuosoite</span
                    >
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
                    <span class="font-display font-semibold text-primary"
                      >Postinumero</span
                    >
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
                    <span class="font-display font-semibold text-primary"
                      >Kaupunki</span
                    >
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
                    <span class="font-display font-semibold text-primary"
                      >Määrä</span
                    >
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
                        >Haluan laput kielellä</span
                      >
                    </div>
                  </div>

                  <div
                    class="flex flex-column items-center justify-center my-6"
                  >
                    <label>
                      <input
                        type="checkbox"
                        id="checkbox"
                        value="check1"
                        name="checkbox1"
                        v-model="formData.checkbox1"
                      />
                      <span>Checkbox1</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        id="checkbox"
                        value="check2"
                        name="checkbox2"
                        v-model="formData.checkbox2"
                      />
                      <span>Checkbox2</span>
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        id="checkbox"
                        value="check3"
                        name="checkbox3"
                        v-model="formData.checkbox3"
                      />
                      <span>Checkbox3</span>
                    </label>
                  </div>
                  <div class="text-center">
                    <button
                      class="font-display font-semibold text-lg bg-primary text-white rounded-full py-2 px-6"
                      type="submit"
                    >
                      {{ this.submitText }}
                    </button>
                  </div>
                </form>
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
            <div class="lg:w-2/5 px-2 lg:pr-16 mb-6 lg:mb-0">
              <h2
                class="font-display font-extrabold text-2xl sm:text-5xl text-primary sm:mb-4"
              >
                Mistä on kyse?
              </h2>
            </div>
            <div class="lg:w-3/5 px-2">
              <p
                class="mt-4 font-display text-md sm:text-xl tracking-normal

 sm:leading-7  text-gray-900"
              >
                Elämme suljettujen ovien takana, emmekä aina edes tiedä, kuka
                seinän takana asuu. Miten siis voisimme tietää, kuka saattaisi
                tarvita apua tai keneltä sitä saada?
              </p>
              <p
                class="mt-4 font-display text-md sm:text-xl tracking-normal

 sm:leading-7 text-gray-900"
              >
                Idea Saisinko apua? -kyltteihin syntyi kun Andreaksen naapurissa
                asuva perhe joutui karanteeniin isän palattua matkoilta. Andreas
                alkoi pohtia, miten voisi saada tietoa muistakin kotitalossaan
                apua tarvitsevista, itselleen tuntemattomista ihmisistä.
              </p>
              <p
                class="mt-4 font-display text-md sm:text-xl tracking-normal

 sm:leading-7 text-gray-900"
              >
                Saatuaan idean hotellien käytössä olevien Älä häiritse -kylttien
                soveltamisesta Andreas jakoi ajatuksensa LinkedInissä. Ideaan
                tarttui ensimmäisenä Grano, joka halusi hoitaa Saisinko apua?
                -kylttien painatuksen ja jakelun kaikkialle Suomeen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container mx-auto px-6 text-center ">
        <h2 class="text-2xl text-primary font-display font-extrabold">
          Tiimi
        </h2>
        <p class="font-display text-lg leading-loose font-normal mb-4">
          ... about the team...
        </p>
        <div class="flex flex-wrap -mx-8 font-display">
          <div class="w-full sm:w-1/2 md:w-1/4 p-8">
            <g-image
              src="~/assets/img/tanja.jpg"
              class="lazy mb-6 mx-auto rounded-full"
              width="500"
            />
            <h3 class="text-xl font-heading">
              Tanja Pelkonen
            </h3>
            <span>Vapaaehtoinen ❤️ <br />Graaffinen suunnittelija</span>
            <p class="mt-4 text-gray-500 leading-relaxed">
              👨🏻‍🎤
            </p>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/4 p-8 md:border-l">
            <g-image
              src="~/assets/img/andreas.jpg"
              class="lazy mb-6 mx-auto rounded-full"
              width="500"
            />
            <h3 class="text-xl font-heading">
              Andreas Koutsoukos
            </h3>
            <span
              >Vapaaehtoinen ❤️ <br />
              Idean kehittäjä sekä koodari</span
            >
            <p class="mt-4 text-gray-500 leading-relaxed">
              💻
            </p>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/4 p-8 md:border-l">
            <g-image
              src="~/assets/img/saija.jpg"
              width="500"
              class="lazy mb-6 mx-auto rounded-full"
            />
            <h3 class="text-xl font-heading">
              Saija Viitala
            </h3>
            <span
              >Vapaaehtoinen ❤️ <br />
              Sisältö suunnittelija</span
            >
            <p class="mt-4 text-gray-500 leading-relaxed">
              📝
            </p>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/4 p-8 md:border-l">
            <g-image
              src="~/assets/img/jussi.jpg"
              width="500"
              class="lazy mb-6 mx-auto rounded-full"
            />
            <h3 class="text-xl font-heading">
              Jussu Korhonen
            </h3>
            <span>Vapaaehtoinen ❤️ <br />Palvelumuotoilija</span>
            <p class="mt-4 text-gray-500 leading-relaxed">
              💪🏻
            </p>
          </div>
        </div>
        <div class="text-center my-6">
          <a
            href=""
            class="px-8 py-3 inline-block rounded text-md text-white font-semibold bg-primary hover:bg-blue-300 mb-4"
            >Kysy projektista</a
          >
          <div class="font-light text-spaceblue-300 text-sm"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="bg-gray-100">
        <div class="container mx-auto sm:mt-40 sm:my-16 sm:py-16">
          <div class="flex justify-center flex-wrap">
            <div class="sm:block w-full md:flex-1 relative mb-16 md:mb-0">
              <div
                class="w-full sm:w-1/2 relative z-30 px-2 xl:px-4 float-left"
              >
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
              <div
                class="w-full sm:w-1/2 relative z-30 sm:pl-6 xl:pl-8 float-left"
              >
                <div
                  class="rounded-lg bg-white px-3 lg:px-6 xl:px-12 py-8 xl:py-16 text-center shadow-lg border border-gray-100"
                >
                  <h4 class="text-gray-800 font-bold text-2xl mt-6">
                    Miten sinun yrityksesi voisi auttaa?
                  </h4>
                  <p class="text-gray-600 mt-6 block md:hidden lg:block">
                    Auta meitä ...
                  </p>
                </div>
              </div>
            </div>
            <div class="flex-1 flex flex-col justify-center z-30 ml-0 md:ml-12">
              <h3
                class="text-gray-800 font-bold text-xl sm:text-3xl lg:text-4xl xl:text-5xl pr-0 lg:pr-8 text-gray-800 font-bold ml-6 mr-6 sm:mr-0 leading-tight"
              >
                Yhteystyökumppanit
              </h3>
              <h4
                class="ml-6 mt-4 sm:mt-8 mr-6 sm:mr-0 text-sm lg:text-xl xl:text-2xl font-hairline sm:font-medium lg:font-normal text-custom-purple"
              >
                ...
              </h4>
              <p
                class="ml-6 mt-4 sm:mt-8 mr-6 sm:mr-0 text-sm sm:text-lg xl:text-xl text-gray-600"
              >
                ...
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
  background-image: url("~@/assets/img/htcf-flower@2x.png");
}
.steps {
  background: rgba(255, 255, 255, 0.8);
}
</style>
