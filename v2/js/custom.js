
$(document).ready(function(){ 


Cufon.replace ('h1, h2, h3, h4,span.note');

	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	
	
	

    //Set opacity on each span to 0%
    $(".fb-rollover").css({'opacity':'0'});

	$('.fsocial_network a').hover(
		function() {
			$(this).find('.fb-rollover').stop().fadeTo(500, 1);
		},
		function() {
			$(this).find('.fb-rollover').stop().fadeTo(500, 0);
		}
	)
	
    //Set opacity on each span to 0%
    $(".twitter-rollover").css({'opacity':'0'});

	$('.fsocial_network a').hover(
		function() {
			$(this).find('.twitter-rollover').stop().fadeTo(500, 1);
		},
		function() {
			$(this).find('.twitter-rollover').stop().fadeTo(500, 0);
		}
	)
	
    //Set opacity on each span to 0%
    $(".linkedin-rollover").css({'opacity':'0'});

	$('.fsocial_network a').hover(
		function() {
			$(this).find('.linkedin-rollover').stop().fadeTo(500, 1);
		},
		function() {
			$(this).find('.linkedin-rollover').stop().fadeTo(500, 0);
		}
	)

	    //Set opacity on each span to 0%
    $(".rss-rollover").css({'opacity':'0'});

	$('.fsocial_network a').hover(
		function() {
			$(this).find('.rss-rollover').stop().fadeTo(500, 1);
		},
		function() {
			$(this).find('.rss-rollover').stop().fadeTo(500, 0);
		}
	)
	
	    //Set opacity on each span to 0%
    $(".gplus-rollover").css({'opacity':'0'});

	$('.fsocial_network a').hover(
		function() {
			$(this).find('.gplus-rollover').stop().fadeTo(500, 1);
		},
		function() {
			$(this).find('.gplus-rollover').stop().fadeTo(500, 0);
		}
	)
	
	    //Set opacity on each span to 0%
    $(".mail-rollover").css({'opacity':'0'});

	$('.fsocial_network a').hover(
		function() {
			$(this).find('.mail-rollover').stop().fadeTo(500, 1);
		},
		function() {
			$(this).find('.mail-rollover').stop().fadeTo(500, 0);
		}
	)


	$(".fixedbutton1,.fixedbutton2").hover(
	function() {
	$(this).stop().fadeTo('slow', 1);
	},
	function() {
	$(this).stop().fadeTo('slow', 0.9);
	});	
	
	
	$('#testimonial').cycle({
 		fx:'fade',
 		timeout:4000
 	});
 	
	
	$(".box").hover(
	function() {
	$(this).stop().fadeTo('slow', 1);
	});	
	
	//Hide (Collapse) the toggle containers on load
	$(".toggle div.pane").hide(); 

	//Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
	$(".toggle h5.title").click(function(){
		$(this).toggleClass("active").next().slideToggle("normal");
		return false; //Prevent the browser jump to the link anchor
	});
	
	
});




	