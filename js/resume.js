$(function () {
    $("[rel=tooltip]").tooltip();

    $("#top-link").click(function () {
      $("body").animate({ scrollTop: $(".header").offset().top }, "slow");
    });
});