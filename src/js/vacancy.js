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



  $('.vacancy-close').on('click', function(e) {
    e.preventDefault();

    $overlay.removeClass('is-active');
    $vacanciesInfo.removeClass('is-active');
  });



  // map
  var address = $('.vacancyFooter__map').data('address');

  ymaps.ready(init);

  function init() {
    var geocoder = new ymaps.geocode(
      address,
      { results: 1 }
    );

    // После того, как поиск вернул результат, вызывается callback-функция
    geocoder.then(
      function (res) {
        var coord = res.geoObjects.get(0).geometry.getCoordinates(),
            map = new ymaps.Map('map', {
              center: coord,
              zoom: 15
            });

        map.geoObjects.add(res.geoObjects.get(0));
      }
    );
  }
});
