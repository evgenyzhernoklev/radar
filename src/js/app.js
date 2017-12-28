/*
 * Third party
 */

//= ../../node_modules/jquery/dist/jquery.min.js
//= ./vendor/bpopup.min.js
//= ./vendor/jquery.inputmask.bundle.js



/*
 * Custom
 */

//= ./lib/empty-block.js
//= ./lib/forms.js
//= ./lib/popups.js
//= ./lib/tabs.js
//= ./lib/tooltip.js

//= ./viewer.js

//= ./vacancy.js



$(document).ready(function() {
  window.viewer = new Viewer();
});
