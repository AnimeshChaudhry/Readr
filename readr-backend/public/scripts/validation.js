(function (window) {
  "use strict";
  var App = window.App || {};

  var Validation = {
    // Validates an email address.

    isValidEmail: function(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  };

  App.Validation = Validation;
  window.App = App;
})(window);
