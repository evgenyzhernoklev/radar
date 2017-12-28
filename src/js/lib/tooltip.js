var Tooltip = function() {
  this.content = $('.tooltip-content');
  this.links = $('.tooltip-link');
  this.init();
};

Tooltip.prototype.init = function () {
  var self = this;

  this.links.on('click', this.switchTooltip.bind(this));
  $('body').on('click', function (e) {
    if (!$(e.target).closest('.tooltip-link').length) {
      self.closeTooltips();
    }
  });
};

Tooltip.prototype.switchTooltip = function (e) {
  e.preventDefault();
  e.stopPropagation();

  var $target = $(e.target).closest('.tooltip-link'),
      $targetContent = $target.closest('.tooltip-container').find('.tooltip-content');

  if (!$target.hasClass('is-active')) {
    this.closeTooltips();

    $target.addClass('is-active');
    $targetContent.stop().fadeIn();
  } else {
    this.closeTooltips();
  }
};

Tooltip.prototype.closeTooltips = function () {
  this.links.removeClass('is-active');
  this.content.stop().fadeOut();
};
