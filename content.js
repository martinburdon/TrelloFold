var mtb = mtb || {};
mtb.trelloFold = mtb.trelloFold || {};

(function() {
  'use strict';

  this.init = function() {
    var lists = $('#board .js-list');

    var _this = this;
    $(lists).each(function() {
      _this.addButton(this);
    });

    this.addEvents();
  };

  this.addButton = function(list) {
    var header = $(list).find('.js-list-header');
    header.prepend('<span class="js-fold-toggle fold-toggle">·</span>');
  };

  this.addEvents = function() {
    $('.js-fold-toggle').on('click', function() {
      $(this).closest('.js-list-content').toggleClass('mtb-fold');
    });
  };

}).apply(mtb.trelloFold);

mtb.trelloFold.init();
