(function ($) {
  "use strict";

  function getAge(dateString) {
    // logic from http://stackoverflow.com/questions/4060004/calculate-age-in-javascript (not perfect)
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    };

    return age;
  };

  function printConsoleMessage() {
    console.log(Array(100).join("-"));
    console.log("HEY!! What are you looking at? If are curious about how my code looks like, let's talk :)");
    console.log(Array(100).join("-"));
  }

  $(function () {
    printConsoleMessage();

    $(".bs-tooltip").tooltip();

    $("#years").html(getAge($("[itemprop=birthDate]").attr("content")));
  });

})(jQuery);


