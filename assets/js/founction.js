(function($){
	$(window).load(function(){
			
    	/* Page Scroll to id fn call */
		$("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
		highlightSelector:"#navigation-menu a"
	});
				
	/* demo functions */
	$("a[rel='next']").click(function(e){
		e.preventDefault();
		var to=$(this).parent().parent("section").next().attr("id");
		$.mPageScroll2id("scrollTo",to);
	});

	$(window).bind('scroll', function() {
         if ($(window).scrollTop() > $('.header-s').height()-50 ) {
             $('.site-header').addClass('menu-top animated fadeInDown');
         }
         else {
             $('.site-header').removeClass('menu-top animated fadeInDown');
         }
    });

});



$(document).ready(function() {
  var menu = $('#navigation-menu'),
      menuToggle = $('#js-mobile-menu'),
      signUp = $('.sign-up'),
      navLink = $('.nav-link');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });



  if ($(window).width() < 899) {

    $(navLink).on('click', function() {
      menu.slideToggle(function(){
        if(menu.is(':hidden')) {
          menu.removeAttr('style');
        }
      });
    });
  }

});

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if(isMobile.any()) {
   

} else {

  $(window).scroll(function() {

    var windowScroll = $(this).scrollTop();

    $('.header-s .zoomImage').css({
      'top': '-' + windowScroll + 'px',
      'right': '-' + windowScroll + 'px',
      'left': '-' + windowScroll + 'px'
    });

  });
}

$('.js-accordion-trigger').bind('click', function(e){
  jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
  jQuery(this).parent().toggleClass('is-expanded');
  e.preventDefault();
});

})(jQuery);
