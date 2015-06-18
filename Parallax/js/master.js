// JavaScript Document
//Author Name: Saptarang
//Author URI: http://www.saptarang.org
//Themeforest: http://themeforest.net/user/saptarang?ref=saptarang
//Creation Date: 19th June, 2014
//Description: A default jQuery for SpiceHub Restaurant Responsive Landing Page, Designed & Developed By Saptarang.

(function($) {"use strict";
	
//Preloader
	$(window).load(function() {
		$('#preloader').fadeOut();
		$('.loading').delay(350).fadeOut('slow');  
		$('body').delay(350).css({'overflow':'visible'});
	})
	
// smooth page Scroll
	$('nav a[href^=#], a.top[href^=#], a.read[href^=#]').click(function(event) {
		event.preventDefault();
		$('html,body').animate({
		scrollTop: $(this.hash).offset().top},
		1000);	
	});
	
// Mobile Grid View
	$( window ).resize(function() {
		var getW = $('body').width();
		if (getW <= 500) {
			$( "#specials" ).removeClass('list');
			$( "#specials" ).addClass('grid');
		}
	});
		
// WOW - animated content
	var wow = new WOW(
	  {
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       100,          // distance to the element when triggering the animation (default is 0)
		mobile:       false,       // trigger animations on mobile devices (default is true)
		live:         true        // act on asynchronously loaded content (default is true)
	  }
	);
	wow.init();
	  
// Header Resizing after scroll
	var cbpAnimatedHeader = (function() {
	var docElem = document.documentElement,
		header = document.querySelector( '.cbp-af-header' ),
		didScroll = false,
		changeHeaderOn = 300;
	
	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}
 
    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'cbp-af-header-shrink' );
        }
        else {
            classie.remove( header, 'cbp-af-header-shrink' );
        }
        didScroll = false;
    }
 
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
 
    init();
 
	})();
	
// Top Arrow
	$(window).scroll(function() {
		if ($(window).scrollTop() > 500) { 
			$('a.top').fadeIn('slow'); 
		} else { 
			$('a.top').fadeOut('slow');
		}
	});
	  
// Collapse menu for small devices
	var winWidth = $('body').width();
	if (winWidth <= 767) {
		
		// Add attribs to menu
		$('#menuNav li a').attr('data-toggle', 'collapse');
		$('#menuNav li a').attr('data-target', '#menuNav');
		
	} else {
	}
	
// Main Slider			
	$('#slides').superslides({
	  hashchange: true,
	  play: 7000  // change slideshow speed
	});
	
	$('#slides').on('mouseenter', function() {
	  $(this).superslides('stop');
	  console.log('Stopped')
	});
	$('#slides').on('mouseleave', function() {
	  $(this).superslides('start');
	  console.log('Started')
	});
	   
// carousel Interval
	$('#specialCarousel.carousel, #menu-carousel.carousel').carousel({
		  interval: false
	});
	
// Switch Views List & Grid
	$('#specials a.viewList').click(function(event) {
		event.preventDefault();
		$('#specials').removeClass('grid');
		$('#specials').addClass('list');	
		$('#specials a.viewGrid').removeClass('active');
		$('#specials a.viewList').addClass('active');	
	});
	
	$('#specials a.viewGrid').click(function(event) {
		event.preventDefault();
		$('#specials').removeClass('list');
		$('#specials').addClass('grid');
		$('#specials a.viewList').removeClass('active');	
		$('#specials a.viewGrid').addClass('active');	
	});
	
	$('#menu-list a.viewList').click(function(event) {
		event.preventDefault();
		$('#menu-list').removeClass('grid');
		$('#menu-list').addClass('list');	
		$('#menu-list a.viewGrid').removeClass('active');
		$('#menu-list a.viewList').addClass('active');	
	});
	
	$('#menu-list a.viewGrid').click(function(event) {
		event.preventDefault();
		$('#menu-list').removeClass('list');	
		$('#menu-list').addClass('grid');
		$('#menu-list a.viewList').removeClass('active');	
		$('#menu-list a.viewGrid').addClass('active');	
	});
	  
// Datepicker - Prefered contact
	$('#datetimepicker').datetimepicker({
		format:'m.d.Y H:i', //date format
		inline:false,
		lang:'en' // language
	});
	
// parallax setting	
	$('#features').parallax("50%", 0.3);
	$('#menu-list').parallax("50%", 0.3);
	$('#more').parallax("50%", 0.3);
	  
// Image Lightbox
	$("a[data-gal^='prettyPhoto']").prettyPhoto({hook: 'data-gal'});
	$('#specialCarousel .food-img a, #menu-list .food-item-list .food-item .food-img a').append('<div class="link img-circle"><i class="fa fa-search-plus"></i></div>');
	   
// Food Menu Scroller
	$(window).load(function(){
		$(".food-item-list").mCustomScrollbar({
			  autoHideScrollbar:true,
			  theme:"rounded",
			  scrollInertia: 300,
			  scrollButtons: { enable : true }
		});
	});
	
// Subscription Form Validation
	$("#subscribeForm input").focus(function() {
		$(this).prev("label").hide();
		$(this).prev().prev("label").hide();	 		 	
	});
	 
	$("#subscribeForm").submit(function() {
		// validate and process form here
		var emailSubscribe = $("#emailSubscribe").val();
		if (emailSubscribe == "") {
			  $('#emailSubscribe').addClass('reqfld');
			  $('<span class="error" style="display:none;"><i class="fa fa-exclamation-circle"></i></span>').insertBefore('#emailSubscribe').fadeIn(400);
			  $("#emailSubscribe").focus(function() {  $('#emailSubscribe').removeClass('reqfld');  $(this).prev().fadeOut(400);});
			  return false;
		 } else if(emailSubscribe.indexOf('@') == -1 || emailSubscribe.indexOf('.') == -1) {
			  $('#emailSubscribe').addClass('reqfld');
			  $('<span class="error" style="display:none;  color:#cc0000">Invalid!</span>').insertBefore('#emailSubscribe').fadeIn(400);
			  $("#emailSubscribe").focus(function() {  $('#emailSubscribe').removeClass('reqfld');  $(this).prev().fadeOut(400);});
			  return false;
		}
		var sub_security = $("#sub-security").val();
		var dataString = '&emailSubscribe=' + emailSubscribe + '&subsecurity=' + sub_security;
		$.ajax({
		  type: "POST",
		  url: "form/subscribe.php",
		  data: dataString,
		  success: function() {
			$("#subscribeForm .form-row").hide();
			$('#subscribeForm').append("<div id='subscribesuccess' class='alert alert-success' style='border:#"+sub_successBox_Border_Color+" 1px "+sub_successBoxBorderStyle+"; background:#"+sub_successBoxColor+";' ></div>");
			$('#subscribesuccess').html("<h5 style='color:#"+sub_textColor+";'><i class='fa fa-check-circle'></i> "+sub_submitMessage+"</h5>")
			.hide().delay(300)
			.fadeIn(1500);
			
			$('#subscribeForm .form-row').delay(6000).slideUp('fast');
			
		  }
		});
		return false;
	});	
	
// Contact Form
	$('.loader').hide();
	$("input, textarea").focus(function() {
		$(this).prev("label").hide();
		$(this).prev().prev("label").hide();	 		 	
	});
	 
	$("#contact_form").submit(function() {
		// validate and process form here
		var name = $("#name").val();
			  if (name == "") {
			  $('#name').addClass('reqfld');
			  $('<span class="error" style="display:none; margin-top:0px;">Required!</span>').insertBefore('#name').fadeIn(400);
			  $("#name").focus(function() {  $('#name').removeClass('reqfld');  $(this).prev().fadeOut(400);});
			  return false;
		} 
		  
		var phone = $("#phone").val();
			  if (phone == "") {
			  $('#phone').addClass('reqfld');
			  $('<span class="error" style="display:none;">Required!</span>').insertBefore('#phone').fadeIn(400);
			  $("#phone").focus(function() {  $('#phone').removeClass('reqfld');  $(this).prev().fadeOut(400);});
			  return false;
		}
		
		var email = $("#email").val();
		if (email == "") {
			  $('#email').addClass('reqfld');
			  $('<span class="error" style="display:none;">Required!</span>').insertBefore('#email').fadeIn(400);
			  $("#email").focus(function() {  $('#email').removeClass('reqfld');  $(this).prev().fadeOut(400);});
			  return false;
		 } else if(email.indexOf('@') == -1 || email.indexOf('.') == -1) {
			  $('#email').addClass('reqfld');
			  $('<span class="error" style="display:none;">Invalid Email Address!</span>').insertBefore('#email').fadeIn(400);
			  $("#email").focus(function() {  $('#email').removeClass('reqfld');  $(this).prev().fadeOut(400);});
			  return false;
		}
		
		var no_of_people = $("#people option:selected").val();
			  if (no_of_people == "") {
			  $('#people').addClass('reqfld');
			  $('<span class="error" style="display:none;">Required!</span>').insertBefore('#people').fadeIn(400);
			  $("#people").focus(function() {  $('#people').removeClass('reqfld');  $(this).prev().fadeOut(400);});
			  return false;
		}
		
		var datetimepicker = $("#datetimepicker").val();
			  if (datetimepicker == "") {
			  $('#datetimepicker').addClass('reqfld');
			  $('<span class="error" style="display:none;">Required!</span>').insertBefore('#datetimepicker').fadeIn(400);
			  $("#datetimepicker").focus(function() {  $('#datetimepicker').removeClass('reqfld');  $(this).prev().fadeOut(400);});
			  return false;
		}
		
		var comment = $("#comment").val();
			  if (comment == "") {
			  $('#comment').addClass('reqfld');
			  $('<span class="error" style="display:none;">Required!</span>').insertBefore('#comment').fadeIn(400);
			  $("#comment").focus(function() {  $('#comment').removeClass('reqfld');  $(this).prev().fadeOut(400);});
			  return false;
		}
		var security = $("#security").val();
		
		$('#contact_form').animate({opacity:'0.3'}, 500);
		
		var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone + '&people=' + no_of_people + '&datetimepicker=' + datetimepicker + '&comment=' + comment + '&security=' + security;
		//alert (dataString);return false;
		$.ajax({
		  type: "POST",
		  url: "form/contact.php",
		  data: dataString,
		  success: function() {
			$("#contact_form").animate({opacity:'1'}, 500);
			$('.loader').hide();
			$("<div id='success' class='alert alert-success' style='border:#"+successBox_Border_Color+" 1px "+successBoxBorderStyle+"; background:#"+successBoxColor+";' ></div>").insertAfter('#contact_form');
			$('#contact_form').slideUp(300);
			$('#success').html("<h5 style='color:#"+textColor+";'>"+submitMessage+"</h5><p style='color:#"+textColor+";'>"+successParagraph+"</p>")
			.hide().delay(300)
			.fadeIn(1500);
		  }
		});
		return false;
	  });
})(jQuery);

// Google Map	  
	 
	function initialize() {
	  var myLatlng = new google.maps.LatLng(42.879489,-78.876206); // Co-ordiantes here 
	  var mapOptions = {
		zoom: 17,
		scrollwheel:false,
		center: myLatlng
	  }
	  var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	  
	  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img class="img-responsive mapLogo" src="img/company.png" alt="SpiceHub" />'+ // Your Company Image here
      '<div id="bodyContent">'+
      '<p>Call Us: <strong>123-456-7890</strong></p>' +
      '</div>'+
      '</div>';

	  var infowindow = new google.maps.InfoWindow({
		  content: contentString
	  });

	
	  var marker = new google.maps.Marker({
		  position: myLatlng,
		  map: map
	  });
	  
	  google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	  });

	}
	
	google.maps.event.addDomListener(window, 'load', initialize);

