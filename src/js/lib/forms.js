var FormFields = function () {
  this.init();
};

FormFields.prototype.init = function () {
  this.initMasks();
};

FormFields.prototype.initMasks = function () {
  Inputmask.extendDefinitions({
    positionCaretOnTab: 0
  });

  $('.is-mobile').inputmask({"mask": "+7 (999) 999-9999", clearIncomplete: true });
};
