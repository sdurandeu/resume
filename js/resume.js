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

$(function () {

    $("[rel=tooltip]").tooltip();

    $("#top-link").click(function () {
      $("body").animate({ scrollTop: $(".header").offset().top }, "slow");
    });

    $("#years").html(getAge($("#years").data("birthdate")));
});