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
  $('.tabs-container').each(function() {
    new Tabs(this);
  });
  $('.empty-block').each(function() {
    new EmptyBlock(this);
  });
  new FormFields();
};

Viewer.prototype.initFunctions = function () {

};

Viewer.prototype.updateResizer = function () {

};
