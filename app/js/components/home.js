'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, $, anime, Parallax */
app.partial.home = function(){
	var container = $('#container');
	container.on('page:update:home' , function(page, menu){
		// $('.parallax').parallax();
		$('.parallax').each(function(idx, ele){
			var parallax = new Parallax(ele);
		});
		
		var fullpageSections = ['kv', 'lin', 'chen', 'lu'];
		$('#content').on('resizeend', 500, function(e){

			e.stopPropagation();
			e.preventDefault();

			var vw = $(window).width();
			var vh = $(window).height();

			if($(window).width() > 800){
				anime({
					targets: 'html,body',
					easing: 'easeInOutExpo',
					scrollTop: $('#content >section.active, #content >article.active').offset().top
				});
			}
			// anime({
			// 	targets: '.kv.active',
			// 	opacity: function(){

			// 		// anime({
			// 		// 	targets: '.kv.active .here-to-create, .kv.active a.cfa, .kv.active .cfa-bg',
			// 		// 	top: (vh - (vw * 1080 / 1920)),
			// 		// 	duration: 1200
			// 		// });
			// 		anime({
			// 			targets: 'footer',
			// 			opacity: 0,
			// 			easing: 'easeInOutExpo'
			// 		});
			// 		anime({
			// 			targets: '#content >*:not(.kv)',
			// 			opacity: 1,
			// 			filter: 'blur(20px)',
			// 			duration: 800,
			// 			easing: 'easeInOutExpo'
			// 		});
			// 		return 1;
			// 	},
			// 	filter: 'none',
			// 	duration: 800,
			// 	easing: 'easeInOutExpo'
			// });
			// anime({
			// 	targets: '.lin.active',
			// 	opacity: function(){

			// 		anime({
			// 			targets: '#content >*:not(.lin)',
			// 			opacity: 1,
			// 			filter: 'blur(20px)',
			// 			duration: 800,
			// 			easing: 'easeInOutExpo'
			// 		});
			// 		anime({
			// 			targets: 'footer',
			// 			opacity: 0,
			// 			easing: 'easeInOutExpo'
			// 		});
			// 		return 1;
			// 	},
			// 	duration: 800,
			// 	easing: 'easeInOutExpo'
			// });
			// anime({
			// 	targets: '.chen.active',
			// 	opacity: function(){

			// 		anime({
			// 			targets: '#content >*:not(.chen)',
			// 			opacity: 1,
			// 			filter: 'blur(20px)',
			// 			duration: 800,
			// 			easing: 'easeInOutExpo'
			// 		});
			// 		anime({
			// 			targets: 'footer',
			// 			opacity: 0,
			// 			easing: 'easeInOutExpo'
			// 		});
			// 		return vh;
			// 	},
			// 	duration: 800,
			// 	easing: 'easeInOutExpo'
			// });
			// anime({
			// 	targets: '.lu.active',
			// 	opacity: function(){

			// 		anime({
			// 			targets: '#content >*:not(.lu)',
			// 			opacity: 1,
			// 			filter: 'blur(20px)',
			// 			duration: 800,
			// 			easing: 'easeInOutExpo'
			// 		});
			// 		anime({
			// 			targets: 'footer',
			// 			opacity: 1,
			// 			easing: 'easeInOutExpo'
			// 		});
			// 		return 1;
			// 	},
			// 	duration: 800,
			// 	easing: 'easeInOutExpo'
			// });

			if($(window).width() > 800){
				$('.home article aside.text').mCustomScrollbar({
					autoDraggerLength: false
				});
			}else{			
				$('.home article aside.text').mCustomScrollbar('destroy');
			}
			// console.log('resize');

		});


		// $('.kv').on('mousewheel', function(e){
		// 	if(e.deltaY < -1){
		// 		$('article.lin').addClass('active').siblings().removeClass('active');
		// 		$('#content').trigger('resizeend');
		// 	}
		// });
		// $('article.lin').on('mousewheel', function(e){
		// 	if(e.deltaY > 1){
		// 		$('.kv').addClass('active').siblings().removeClass('active');
		// 		$('#content').trigger('resizeend');
		// 	}
		// 	if(e.deltaY < -1){
		// 		$('article.chen').addClass('active').siblings().removeClass('active');
		// 		$('#content').trigger('resizeend');
		// 	}
		// });
		// $('article.chen').on('mousewheel', function(e){
		// 	if(e.deltaY > 1){
		// 		$('article.lin').addClass('active').siblings().removeClass('active');
		// 		$('#content').trigger('resizeend');
		// 	}
		// 	if(e.deltaY < -1){
		// 		$('article.lu').addClass('active').siblings().removeClass('active');
		// 		$('#content').trigger('resizeend');
		// 	}
		// });
		// $('article.lu').on('mousewheel', function(e){
		// 	if(e.deltaY > 1){
		// 		$('article.chen').addClass('active').siblings().removeClass('active');
		// 		$('#content').trigger('resizeend');
		// 	}
		// });
		$('.kv, article.lin, article.chen, article.lu').on('mousemove', function(e){
			$(this).addClass('active').siblings().removeClass('active');
			// $('#content').trigger('resizeend');
		});


		// $('.kv, article.lin, article.chen, article.lu').each(function(i){

		// 	var id = 'Section' + (new Date());
		// 	$(this).attr('id', id);

		// 	range[id] = {};
		// 	// if(!$('#'+id).length){
		// 	// 	return;
		// 	// }
		// 	range[id].top = function(){
		// 		return $('#' + id).offset().top;// - $('#' + id).outerHeight() *1;
		// 	};
		// 	range[id].butt = function(){
		// 		return $('#' + id).offset().top + $('#' + id).outerHeight();// *2;
		// 	};
		// 	range[id].middle = function(){
		// 		return $('#' + id).offset().top + $('#' + id).outerHeight() / 2;// *2;
		// 	};
		// });

		
		// $(window).on('scroll resize', function(){
		// 	var currentTop = $(window).scrollTop() + $(window).height() / 3;
		// 	var currentButt = $(window).scrollTop() + $(window).height() / 3 * 2;
		// 	$('.section').each(function(i, section){
		// 		var sectionId = $(this).attr('id');
		// 		var rg = range[sectionId];
		// 		if(rg.middle() >= currentTop  && rg.middle() <= currentButt){
		// 			if(activeSection != sectionId){
		// 				activeSection = sectionId;
		// 			}
		// 		} 
		// 		if(activeSection && !$('#' + activeSection).hasClass('on')){
		// 			$('#' + activeSection).addClass('on').trigger('section:on')
		// 				.siblings().removeClass('on');
		// 		}
		// 		scrollTop = currentTop;
		// 	});
		// });
		
	});

	if($('#content.home').length){
		$('#container').trigger('page:update:home', null);
	}
};
