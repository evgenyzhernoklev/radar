var Vacancies = function () {
  this.body = $('body');
  this.showLink = $('.vacancy-show');
  this.hideLink = $('.vacancy-close');
  this.addVacancyLink = $('.vacancy-add');

  this.addVacancyContainer = $('.vacancyAdd');
  this.vacanciesInfo = $('.vacancy-info');
  this.vacancyMap = $('.vacancy-map');
  this.bodyOverlay = $('.contentWrapper__overlay');

  this.init();
};

Vacancies.prototype.init = function () {
  this.showLink.on('click', this.showVacancy.bind(this));
  this.hideLink.on('click', this.hideVacancy.bind(this));
  this.vacanciesInfo.on('click', function(e) {
    e.stopPropagation();
  });
  this.addVacancyLink.on('click', this.addVacancy.bind(this));
};

Vacancies.prototype.showVacancy = function (e) {
  e.preventDefault();
  var $targetVacancy = $(e.target).closest('.vacancy-show').find('.vacancy-info');

  this.body.addClass('is-opened');
  $targetVacancy.addClass('is-active');
  this.bodyOverlay.addClass('is-active');
  this.initMap($targetVacancy);
};

Vacancies.prototype.hideVacancy = function (e) {
  e.preventDefault();

  this.body.removeClass('is-opened');
  this.bodyOverlay.removeClass('is-active');
  this.vacanciesInfo.removeClass('is-active');
  this.addVacancyContainer.removeClass('is-active');
  this.vacancyMap.attr('id', '');
};

Vacancies.prototype.initMap = function ($targetVacancy) {
  var $mapContainer = $targetVacancy.find('.vacancy-map'),
      hasMap = $mapContainer.data('map');

  if (hasMap) {
    return false;
  }

  var address = $mapContainer.data('address'),
      mapId = 'vacancy-map';

  $mapContainer.attr('id', mapId);
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
            map = new ymaps.Map(mapId, {
              center: coord,
              zoom: 15
            });

        map.geoObjects.add(res.geoObjects.get(0));

        $mapContainer.data('map', true);
      }
    );
  }
};

Vacancies.prototype.addVacancy = function (e) {
  e.preventDefault();

  this.body.addClass('is-opened');
  this.bodyOverlay.addClass('is-active');
  this.addVacancyContainer.addClass('is-active');
};
