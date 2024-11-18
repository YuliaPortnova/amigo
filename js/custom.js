$(document).ready(function() {

	/*$(".fancybox").fancybox({
		focus : false,
	});
	$.fancybox.defaults.hash = false;
	*/

	var koef1 = 0.12; //Крысы
	var koef2 = 0.1; //Хомяки
	var koef3 = 0.05; //Кролик
	var koef4 = 0.05; //Шиншилла
	var koef5 = 0.05; //Морская свинка
	var koef6 = 0.2; //Волнистый попугай

	$('.calculate_div1 button').click(function(){
		num_div=$(this).index();
		$(this).addClass('calculate_button_active').siblings('button').removeClass('calculate_button_active');
		$('.home_5_right_text_div').eq(num_div).css('display','block').siblings('div').css('display','none');
		$('#polzunok').slider('value', 40);
		$("#result-polzunok").text(40);
		if ($('.calculate_tip1').hasClass('calculate_button_active')) {
        	koef_result = koef1;
        }
        if ($('.calculate_tip2').hasClass('calculate_button_active')) {
        	koef_result = koef2;
        }
        if ($('.calculate_tip3').hasClass('calculate_button_active')) {
        	koef_result = koef3;
        }
        if ($('.calculate_tip4').hasClass('calculate_button_active')) {
        	koef_result = koef4;
        }
        if ($('.calculate_tip5').hasClass('calculate_button_active')) {
        	koef_result = koef5;
        }
        if ($('.calculate_tip6').hasClass('calculate_button_active')) {
        	koef_result = koef6;
        }
        $(".calculate_div3 span").text((40*koef_result).toFixed(1));
	});

	$("#polzunok").slider({
        animate: "slow",
        range: "min",
        min: 40,
        max: 1000,
        step: 5,
        slide : function(event, ui) {    
            $("#result-polzunok").text(ui.value);
            if ($('.calculate_tip1').hasClass('calculate_button_active')) {
            	 $(".calculate_div3 span").text((ui.value*koef1).toFixed(1));
            }
            if ($('.calculate_tip2').hasClass('calculate_button_active')) {
            	$(".calculate_div3 span").text((ui.value*koef2).toFixed(1));
            }
            if ($('.calculate_tip3').hasClass('calculate_button_active')) {
            	$(".calculate_div3 span").text((ui.value*koef3).toFixed(1));
            }
            if ($('.calculate_tip4').hasClass('calculate_button_active')) {
            	$(".calculate_div3 span").text((ui.value*koef4).toFixed(1));
            }
            if ($('.calculate_tip5').hasClass('calculate_button_active')) {
            	$(".calculate_div3 span").text((ui.value*koef5).toFixed(1));
            }
            if ($('.calculate_tip6').hasClass('calculate_button_active')) {
            	$(".calculate_div3 span").text((ui.value*koef6).toFixed(1));
            }
        }
    });
    $( "#result-polzunok").text($("#polzunok").slider("value"));


	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  arrows: true,
	  centerMode: false,
	  focusOnSelect: true
	});

	$('.responsive-slider').slick({
	  dots: false,
	  arrows: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3
	      }
	    }
	  ]
	});

	$('#topbutton').click(function(){
		$('body,html').animate({scrollTop: 0}, 1200);
	});
	function topbutton() {
		if ($(window).scrollTop() > 800) {
			$('#topbutton').fadeIn();
		} else {
			$('#topbutton').fadeOut();
		}
	}
	topbutton(); 
	$(window).resize(topbutton); 
	$(window).scroll(topbutton);

	$(".mobile-menu").click(function(){ 
		$(this).toggleClass('mobile-menu-close');
		$(this).next('nav').slideToggle();
	});


});