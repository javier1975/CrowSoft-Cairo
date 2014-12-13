(function() {
  "use strict";

  Cairo.module("Controls", function(Controls, Cairo, Backbone, Marionette, $, _) {

    Controls.ButtonStyle = {
      single: 1,
      none: 2
    };

    Controls.InputType = {
      text: 1,
      money: 2,
      integer: 3,
      double: 4,
      percentage: 5,
      mask: 6,
      taxId: 7,
      memo: 8,
      file: 9,
      folder: 10
    };

    var createInput = function() {
      var self = {
        urlRoot: "",
  
        defaults: {},
  
        text: "",
        enabledNoChangeBkColor: false,
        maxLength: 0,
        fileFilter: "",
        inputDisabled: false,
        type: Controls.InputType.text

      }

      var that = Controls.createControl();

      that.htmlTag = "<input/>";

      var superSetElement = that.setElement;

      var isText = function() {
        return (
          self.type === Controls.InputType.text
          || self.type === Controls.InputType.file
          || self.type === Controls.InputType.folder
          || self.type === Controls.InputType.mask
          || self.type === Controls.InputType.taxId
          || self.type === Controls.InputType.memo
        );
      }
      
      that.setElement = function(element, view) {
        superSetElement(element);
        element.val(self.text);
        element.addClass("dialog-control dialog-input-control");
        var onChange = isText() ? view.onTextChange(that) : view.onMaskEditChange(that);
        element.change(function() {
          that.setText(element.val());
          onChange();
        });
      };

      that.setText = function(text) {
        self.text = text;
        var element = that.getElement();
        if(element) {
          element.val(self.text);
        }
      };
      that.getText = function() {
        return self.text;
      };

      that.setValue = that.setText;
      that.getValue = that.getText;

      that.getMask = function() { /* TODO: implement this. */ };
      that.setMask = function(mask) { /* TODO: implement this. */ };
      that.setButtonStyle = function(style) { /* TODO: implement this. */ };
      that.setPasswordChar = function(char) { /* TODO: implement this. */ };
      that.setFormatNumber = function(format) { /* TODO: implement this. */ };
      that.setEnabledNoChangeBkColor = function(value) { self.enabledNoChangeBkColor = value; };
      that.setMaxLength = function(length) { self.maxLength = length; };                       
      that.setInputDisabled = function(value) { self.inputDisabled = value; };
      that.setFileFilter = function(filter) { self.fileFilter = filter; };

      that.getType = function() {
        return self.type;
      };
      that.setType = function(type) {
        self.type = type;
      };
      
      return that;

    };

    Controls.createInput = function() {

      var self = {
        objectType: "cairo.controls.input"
      };

      var that = createInput();

      that.getObjectType = function() {
        return self.objectType;
      };

      return that;

    };

  });

}());