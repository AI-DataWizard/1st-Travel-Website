$(document).ready(function () {
  $(".menu-btn").click(function () {
    $(".navbar").toggleClass("active");
  });
  $(window).on("scroll", function () {
    $(".navbar").removeClass("active");
  });

  $('input[type="number"]').each(function () {
    $(this).on("input", function () {
      if ($(this).val().length > this.maxLength) {
        $(this).val($(this).val().slice(0, this.maxLength));
      }
    });
  });
});
