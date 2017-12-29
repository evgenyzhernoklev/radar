var FormFields = function () {
  this.init();
};

FormFields.prototype.init = function () {
  this.initMasks();

  $('.field-image').on('change', this.uploadImage);
};

FormFields.prototype.initMasks = function () {
  Inputmask.extendDefinitions({
    positionCaretOnTab: 0
  });

  $('.is-mobile').inputmask({"mask": "+7 (999) 999-9999", clearIncomplete: true });
};

FormFields.prototype.uploadImage = function () {
  var $label = $(this).closest('.formLabel'),
      reader = new FileReader(),
      file = $(this).prop('files')[0];

  reader.onloadend = function () {
    var result = reader.result;

    $label.addClass('with-image');
    $label.css('background-image', 'url("' + result + '")');
  }

  if (file) {
    reader.readAsDataURL(file); //reads the data as a URL
  } else {
    $label.removeClass('with-image');
    $label.css('background-image', '');
  }
};
