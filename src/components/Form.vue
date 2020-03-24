<section id="form" class="my-4">
          <div class="container mx-auto">
            <div class="flex items-center justify-center">
              <div
                class="w-full sm:w-3/5 py-3 mt-4 sm:px-16 sm:py-6 bg-white sm:shadow-xl rounded-lg"
              >
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
                    <label class="mr-4">
                      <input
                        type="checkbox"
                        id="checkbox"
                        value="check1"
                        name="suomi"
                        v-model="formData.suomi"
                      />
                      <span class="ml-2">Suomi 🇫🇮</span>
                    </label>
                    <label class="mr-4">
                      <input
                        type="checkbox"
                        id="checkbox"
                        value="check2"
                        name="svenska"
                        v-model="formData.svenska"
                      />
                      <span class="ml-2">Svenska 🇸🇪</span>
                    </label>

                    <label class="mr-4">
                      <input
                        type="checkbox"
                        id="checkbox"
                        value="check3"
                        name="english"
                        v-model="formData.english"
                      />
                      <span class="ml-2">English 🇬🇧</span>
                    </label>
                  </div>
                  <div class="text-center">
                    <button
                      class="w-full sm:w-auto font-display font-semibold text-md sm:text-lg text-center bg-primary text-white rounded-full py-3 px-6 mt-4 inline-block"
                      type="submit"
                    >{{ this.submitText }}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>