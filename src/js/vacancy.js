$(document).ready(function() {
  var $vacancies = $('.vacancy-show'),
      $vacanciesInfo = $('.vacancy-info'),
      $overlay = $('.contentWrapper__overlay');



  $vacancies.on('click', function(e) {
    e.preventDefault();
    var targetData = $(this).data('vacancy');

    $vacanciesInfo.filter(function() {
      return $(this).data('vacancy') == targetData;
    }).addClass('is-active');

    $overlay.addClass('is-active');
  });



  $overlay.on('click', function(e) {
    e.preventDefault();

    $(this).removeClass('is-active');
    $vacanciesInfo.removeClass('is-active');
  });
});
