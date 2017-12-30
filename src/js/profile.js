var Profile = function (container) {
  this.container = $(container);
  this.mapId = 'vacancy-map';
  this.mapContainer = this.container.find('#' + this.mapId);
  this.init();
};

Profile.prototype.init = function () {
  this.initMap();
};

Profile.prototype.initMap = function () {
  var self = this,
      address = this.mapContainer.data('address');

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
            map = new ymaps.Map(self.mapId, {
              center: coord,
              zoom: 15
            });

        map.geoObjects.add(res.geoObjects.get(0));
      }
    );
  }
};
