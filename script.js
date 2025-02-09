$(function () {
  var includes = $("[data-include]");
  $.each(includes, function (index, elem) {
    const element = $(elem);
    var file = "./views/" + element.data("include") + ".html";
    $(this).load(file);
  });
});
