<template>
  <Layout>
    <section>
      <div class="container mx-auto ">
        <nav class="flex items-center justify-between my-6 py-6">
          <div>
            <a href="">hackthecrisisfinland.com</a>
          </div>
          <div class="flex">
            <a href="" class="mr-4">Tilauslomake</a>
            <a href="">Mistä on kyse?</a>
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
                <h1
                  class="font-display font-extrabold text-5xl text-primary mb-4"
                >
                  Saisinko apua?
                </h1>
                <h2
                  class="font-display font-normal text-xl text-secondary mb-4"
                >
                  Suojellaksemme riskiryhmiä ja pandemian leviämistä haluemme
                  varmistaa, ettei kenenkään riskiryhmän edustajan tarvitsisi
                  mennä tarvittaville kauppa- ja apteekkireissulle, ja siten
                  altistua virukselle. Uskomme kanssaihmisten hyvyyteen ja
                  naapurien voimaan.
                </h2>
                <button
                  class="w-full sm:w-auto font-display font-semibold text-lg bg-primary text-white rounded-full py-2 px-6 "
                >
                  Tilaa omaan naapurustoosi
                  <span class="pl-3 w-4 h-4"> </span>
                </button>
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
            <div
              class="w-full sm:w-3/5 bg-white shadow-xl rounded-lg px-16 py-6"
            >
              <div>
                <h2
                  class="font-display font-extrabold text-2xl text-primary mb-4"
                >
                  Tilaa omaan taloyhtiöösi
                </h2>
              </div>
              <form class="mt-8" action="#" method="POST">
                <label class="block mb-4">
                  <span class="font-display font-semibold text-primary"
                    >Nimesi</span
                  >
                  <input
                    aria-label="Nimesi"
                    name="name"
                    type="name"
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
                    aria-label="Nimesi"
                    name="name"
                    type="name"
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
                    aria-label="Nimesi"
                    name="name"
                    type="name"
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
                    aria-label="Nimesi"
                    name="name"
                    type="name"
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
                      >Haluan laput kielellä</span
                    >
                  </div>
                </div>
                <div class="flex flex-column items-center justify-center my-6">
                  <div class="mr-3">
                    <label class="inline-flex items-center">
                      <input type="checkbox" class="form-checkbox" checked />
                      <span class="ml-2">Suomi</span>
                    </label>
                  </div>
                  <div class="mr-3">
                    <label class="inline-flex items-center">
                      <input type="checkbox" class="form-checkbox" />
                      <span class="ml-2">Svenska</span>
                    </label>
                  </div>
                  <div>
                    <label class="inline-flex items-center">
                      <input type="checkbox" class="form-checkbox" />
                      <span class="ml-2">English</span>
                    </label>
                  </div>
                </div>
                <div class="text-center">
                  <button
                    class="font-display font-semibold text-lg bg-primary text-white rounded-full py-2 px-6 "
                  >
                    Lähetä lomake
                    <span class="pl-3 w-4 h-4"> </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section>
      <div class="bg-gray-100">
        <div class="pt-12 sm:pt-16 lg:pt-20">
          <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
              <h2
                class="font-display font-extrabold text-5xl text-primary mb-4"
              >
                Mistä on kyse?
              </h2>
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
  metaInfo: {
    title: "Saisinko apua?"
  }
};
</script>

<style>
.flower-bg {
  background-image: url("~@/assets/img/htcf-flower.png");
}
</style>
