var Viewer = function() {
  this.window = $(window);
  this.body = $('body');

  this.init();
};

Viewer.prototype.init = function () {
  this.initClasses();
  this.initFunctions();

  this.window.on('resize', this.updateResizer.bind(this));
};

Viewer.prototype.initClasses = function () {
  if ($('.tooltip-container').length) {
    new Tooltip();
  }
};

Viewer.prototype.initFunctions = function () {

};

Viewer.prototype.updateResizer = function () {

};
