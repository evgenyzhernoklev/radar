var Plug = function () {
  this.init();
};

Plug.prototype.init = function () {
  this.showPlugPopup();
};

Plug.prototype.showPlugPopup = function () {
  $('.popup-plug').bPopup({
    opacity: 0.5,
    follow: [true, false],
    closeClass: 'popup-close'
  });
};
