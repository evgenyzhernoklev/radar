var FormFields = function () {
  this.init();
};

FormFields.prototype.init = function () {
  this.initMasks();
  this.initSelect();

  $('.field-image').on('change', this.uploadImage);
  $('.field-avatar').on('change', this.uploadAvatar);
  $('.field-textarea').on('input propertychange', this.checkLength);
};

FormFields.prototype.initMasks = function () {
  Inputmask.extendDefinitions({
    positionCaretOnTab: 0
  });

  $('.is-mobile').inputmask({"mask": "+7 (999) 999-9999", clearIncomplete: true });
};

FormFields.prototype.initSelect = function () {
  $('.field-select').each(function() {
    $(this).selectize({
      create: false,
      dropdownParent: 'body'
    });
  });
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

FormFields.prototype.uploadAvatar = function () {
  var $label = $(this).closest('.formLabel'),
      $info = $label.find('.formLabel__avatarInfo'),
      $img = $label.find('.formLabel__avatarImg'),
      reader = new FileReader(),
      file = $(this).prop('files')[0];

  reader.onloadend = function () {
    var result = reader.result;

    $label.addClass('with-image');
    $img.attr('src', result);
    $info.text('изменить фото');
  }

  if (file) {
    reader.readAsDataURL(file); //reads the data as a URL
  } else {
    $label.removeClass('with-image');
    $img.attr('src', '');
    $info.text('загрузить фото');
  }
};

FormFields.prototype.checkLength = function () {
  var $info = $(this).closest('.formLabel').find('.field-length'),
      $infoLength = $info.find('.field-length-current'),
      maxLength = +$(this).attr('maxlength'),
      fieldLength = $(this).val().length,
      lengthRemained = maxLength - fieldLength;

  $info.toggleClass('is-full', lengthRemained == 0);
  $infoLength.text(lengthRemained);
};
