
function scroll(selector) {
  $(selector)[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

$(document).ready(function () {

  const refreshLabels = () => {
    $('nav').localize();
  }

  i18next
    .use(i18nextBrowserLanguageDetector)
    .init({
      fallbackLng: 'en',
      debug: true,
      resources: {
        en: en,
        ptBR: ptBR,
      }
    }, function (err, t) {
      jqueryI18next.init(i18next, $);
      refreshLabels();
    });

  i18next.on('languageChanged', () => {
    refreshLabels();
  });

  $("#btn-learn").on("click", function () {
    scroll("#hiw");
  });

  $("#lnk-about").on("click", function () {
    scroll("#about");
  });

  $("#lnk-hiw").on("click", function () {
    scroll("#hiw");
  });

  $("#lnk-contact").on("click", function () {
    scroll("#contact");
  });
});

$(function () {
  var navMain = $(".navbar-collapse"); // avoid dependency on #id
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on("click", "a:not([data-toggle])", null, function () {
    navMain.collapse('hide');
  });
});
