function scroll(selector) {
  $(selector)[0].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

$( document ).ready(function() {
  console.log( "ready!" );

  $("#btn-learn").on( "click", function() {
    scroll("#hiw");
  });

  $("#lnk-about").on( "click", function() {
    scroll("#about");
  });

  $("#lnk-hiw").on( "click", function() {
    scroll("#hiw");
  });

  $("#lnk-contact").on( "click", function() {
    scroll("#contact");
  });
});

$(function(){
     var navMain = $(".navbar-collapse"); // avoid dependency on #id
     // "a:not([data-toggle])" - to avoid issues caused
     // when you have dropdown inside navbar
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });
