var EmptyBlock = function(container, indent) {
  this.window = $(window);
  this.container = $(container);
  this.INDENT = indent || 0;
  this.init();
};

EmptyBlock.prototype.init = function () {
  this.updateHeight();
  this.window.on('resize', this.updateHeight.bind(this));
};

EmptyBlock.prototype.updateHeight = function () {
  var elementPositionTop = this.container.offset().top,
      newHeight = this.window.height() - elementPositionTop - this.INDENT;

  this.container.height(newHeight);
};
