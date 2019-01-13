
function scroll(selector) {
  $(selector)[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

$(document).ready(function () {

  const refreshLabels = () => {
    $('nav').localize();
    $('#myCarousel').localize();
    $('.marketing').localize();
    $('#translation-about').localize();
    $('#translation-hiw').localize();
    $('#translation-contact').localize();
    $('#lab_social_icon_footer').localize();
    $('#footer').localize();
    $('title').localize();
  }

  i18next
    .use(i18nextBrowserLanguageDetector)
    .init({
      fallbackLng: 'ptBR',
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

  $("form").submit(function( event ) {
    event.preventDefault();

    const payload = {
      "name" : $("#Name").val(),
      "email" : $("#Email").val(),
      "message" : $("#Message").val()
    }

    $.ajax({
      url: "https://wa9cju1y20.execute-api.us-east-1.amazonaws.com/prod/api/mail",
      type: "POST",
      crossDomain: true,
      data: JSON.stringify(payload),
      dataType: "json",
      contentType: "application/json"
    }).done( res => {
      $("#form-container > form").remove();
        const thanksMessage = i18next.t('contact.thanks');
        $("#form-container").append($('<div><span>' + thanksMessage + '</span></div>'));
    });

  });

});

$(function () {
  var navMain = $(".navbar-collapse"); // avoid dependency on #id
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on("click", "a:not([data-toggle]),img", null, function () {
    navMain.collapse('hide');
  });
});
