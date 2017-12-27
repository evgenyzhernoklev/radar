var EmptyBlock = function(container) {
  this.container = $(container);
  this.init();
};

EmptyBlock.prototype.init = function () {
  this.updateHeight();
  $(window).on('resize', this.updateHeight.bind(this));
};

EmptyBlock.prototype.updateHeight = function () {
  var windowHeight = $(window).height(),
      offsetTop = this.container.offset().top,
      height = windowHeight - offsetTop;

  this.container.height(height);
};
