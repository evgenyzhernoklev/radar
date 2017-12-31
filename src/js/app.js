/*
 * Third party
 */

//= ../../node_modules/jquery/dist/jquery.min.js
//= ./vendor/bpopup.min.js
//= ./vendor/jquery.inputmask.bundle.js
//= ./vendor/selectize.min.js



/*
 * Custom
 */

//= ./lib/empty-block.js
//= ./lib/forms.js
//= ./lib/plug.js
//= ./lib/popups.js
//= ./lib/tabs.js
//= ./lib/tooltip.js

//= ./vacancy.js
//= ./profile.js

//= ./viewer.js



$(document).ready(function() {
  window.viewer = new Viewer();
});
