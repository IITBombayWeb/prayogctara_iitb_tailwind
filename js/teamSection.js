(function($, Drupal, once){
    "use strict";
  Drupal.behaviors.teamSection = {
    attach: function (context, settings) {
      var x = $(context).find('.profile').once('.teamSection');
      for (let i =0; i < x.length; i++) {
        $(x[i]).hover(
          function(){
            var element = $(context).find('#profile' + (i+1));
              element.removeClass('hidden');
          },
          function(){
            var element2 = $(context).find('#profile' + (i+1));
            console.log('hover out')
            console.log(element2)
              element2.addClass('hidden');
          }
        )
      }
    }
  };
}(jQuery, Drupal));