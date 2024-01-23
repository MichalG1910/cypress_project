const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here (początek pliku wygenerowany przez cypress automatycznie)
    },
    baseUrl: "http://www.automationpractice.pl/",               // strona testowa bazowa
    redirectionLimit: 3,                                        // dopuszczalny limit przekierowań na stronie
    retries: {                                                  // ile razy cypress bedzie ponawiał test, jesli wystąpi problem, błąd (np. z połączeniem)
      "runMode": 1,                                             // testy uruchamiane w tle będą ponawiane 1 raz
      "openMode": 1                                             // tryb z dodatkowym ekranikiem będzie ponawiany 1 raz
    },
    watchForFileChanges: true,                                  // jeśli dokonamy zmian w plikach w trakcie testu, cypress automatycznie uruchomi ponownie test już ze zmianami 
    chromeWebSecurity: false,                                   // wyłączamy ochronę przed pracą na nieszyfrowanych stronach (może wyrzucać błędy, jeśli tego nie zrobimy)
    viewportWidth: 1920,
    viewportHeight: 1080,                                       // szerokość,wyskokośćokna przeglądarki w trakcie testów
    waitForAnimations: true,                                    // cypress czeka na wykonanie animacji na stronie (jeśli jakieś są) zanim wykona kolejny krok
    testIsolation: false,                                       // wyłączamy aby po kazdym przeładowaniu nie czyściło testowanej strony (np. nie czyścilo plików cookies)
  },
});
