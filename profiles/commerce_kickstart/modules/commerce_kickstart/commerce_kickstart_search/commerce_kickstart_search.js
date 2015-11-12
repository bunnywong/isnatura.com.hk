(function ($) {

  // Disable checkboxes when the user clicks on one of them. (prevent
  // multi-clic
  Drupal.behaviors.kickstartSearch = {
    attach:function (context) {
      $('.facetapi-checkbox').click(function(e) {		// Bun - Changed 'click' from 'live' ///
        $('.facetapi-checkbox').attr("disabled", true);
      });
    }
  }
})(jQuery);
