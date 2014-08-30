(function() {
  "use strict";

  /*
      this module manages a menu ...
  */

  ///////////////
  // Entities
  ///////////////

  Cairo.module("Entities.Dialogs", function(Dialogs, Cairo, Backbone, Marionette, $, _) {

    Dialogs.Menu = Backbone.Model.extend({
      urlRoot: "",

      defaults: {
        key:    0,
        name:   ''
      },

      validate: function(attrs, options) {
        var errors = {};
        if(! attrs.name) {
          errors.name = "can't be blank";
        }
        if( ! _.isEmpty(errors)) {
          return errors;
        }
      }
    });

    Dialogs.Menus = Backbone.Collection.extend({
      url: "",

      model: Dialogs.Menu,
      comparator: "key"
    });

  });

}());