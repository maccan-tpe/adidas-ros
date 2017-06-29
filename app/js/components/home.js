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
			anime({
				targets: '.kv.active',
				height: function(){

					anime({
						targets: '.kv.active .visual',
						height: (vw * 1080 / 1920),
						top: (vh - (vw * 1080 / 1920)),
						paddingTop: 0,
						duration: 1200,
						easing: 'easeOutExpo'
					});
					anime({
						targets: '.kv.active .here-to-create, .kv.active a.cfa, .kv.active .cfa-bg',
						top: (vh - (vw * 1080 / 1920)),
						duration: 1200
					});
					anime({
						targets: '#content >*:not(.kv)',
						height: 0,
						paddingTop: 0,
						duration: 800,
						easing: 'easeInOutExpo'
					});
					anime({
						targets: 'footer',
						opacity: 0,
						easing: 'easeInOutExpo'
					});
					return vh;
				},
				duration: 800,
				easing: 'easeInOutExpo'
			});
			anime({
				targets: '.lin.active',
				height: function(){

					anime({
						targets: '#content >*:not(.lin)',
						height: 0,
						paddingTop: 0,
						duration: 800,
						easing: 'easeInOutExpo'
					});
					anime({
						targets: '#content article.lin .text',
						height: function(e, i){
							var top = $(e).offset().top;
							return vh>$(e).offset().top?(vh-top-150):(vh-(top-vh)-150);
						},
						paddingTop: 0,
						duration: 800,
						easing: 'easeInOutExpo'
					});
					anime({
						targets: '#content article.lin a.cfa',
						marginTop: function(e, i){
							var top = $(e).prev().offset().top;
							return vh>$(e).prev().offset().top?(vh-top-150):(vh-(top-vh)-150);
						},
						paddingTop: 0,
						easing: 'easeInOutExpo'
					});
					anime({
						targets: 'footer',
						opacity: 0,
						easing: 'easeInOutExpo'
					});
					return vh;
				},
				duration: 800,
				easing: 'easeInOutExpo'
			});
			anime({
				targets: '.chen.active',
				height: function(){

					anime({
						targets: '#content >*:not(.chen)',
						height: 0,
						paddingTop: 0,
						duration: 800,
						easing: 'easeInOutExpo'
					});
					anime({
						targets: '#content article.chen .text',
						height: function(e, i){
							var top = $(e).offset().top;
							return vh>$(e).offset().top?(vh-top-150):(vh-(top-vh)-150);
						},
						paddingTop: 0,
						duration: 800,
						easing: 'easeInOutExpo'
					});
					anime({
						targets: '#content article.chen a.cfa',
						marginTop: function(e, i){
							var top = $(e).prev().offset().top;
							return vh>$(e).prev().offset().top?(vh-top-150):(vh-(top-vh)-150);
						},
						paddingTop: 0,
						easing: 'easeInOutExpo'
					});
					anime({
						targets: 'footer',
						opacity: 0,
						easing: 'easeInOutExpo'
					});
					return vh;
				},
				duration: 800,
				easing: 'easeInOutExpo'
			});
			anime({
				targets: '.lu.active',
				height: function(){

					anime({
						targets: '#content >*:not(.lu)',
						height: 0,
						paddingTop: 0,
						duration: 800,
						easing: 'easeInOutExpo'
					});
					anime({
						targets: '#content article.lu .text',
						height: function(e, i){
							var top = $(e).offset().top;
							return vh>$(e).offset().top?(vh-top-150):(vh-(top-vh)-150);
						},
						paddingTop: 0,
						duration: 800,
						easing: 'easeInOutExpo'
					});
					anime({
						targets: '#content article.lu a.cfa',
						marginTop: function(e, i){
							var top = $(e).prev().offset().top;
							return vh>$(e).prev().offset().top?(vh-top-150):(vh-(top-vh)-150);
						},
						paddingTop: 0,
						easing: 'easeInOutExpo'
					});
					anime({
						targets: 'footer',
						opacity: 1,
						easing: 'easeInOutExpo'
					});
					return vh;
				},
				duration: 800,
				easing: 'easeInOutExpo'
			});

			if($(window).width() > 800){
				$('.home article .text').mCustomScrollbar({
					autoDraggerLength: false
				});
			}else{			
				$('.home article .text').mCustomScrollbar('destroy');
			}
			console.log('resize');

		});

		$('.kv').on('mousewheel', function(e){
			if(e.deltaY < 0){
				$('article.lin').addClass('active').siblings().removeClass('active');
				$('#content').trigger('resizeend');
			}
		});
		$('article.lin').on('mousewheel', function(e){
			if(e.deltaY > 0){
				$('.kv').addClass('active').siblings().removeClass('active');
				$('#content').trigger('resizeend');
			}
			if(e.deltaY < 0){
				$('article.chen').addClass('active').siblings().removeClass('active');
				$('#content').trigger('resizeend');
			}
		});
		$('article.chen').on('mousewheel', function(e){
			if(e.deltaY > 0){
				$('article.lin').addClass('active').siblings().removeClass('active');
				$('#content').trigger('resizeend');
			}
			if(e.deltaY < 0){
				$('article.lu').addClass('active').siblings().removeClass('active');
				$('#content').trigger('resizeend');
			}
		});
		$('article.lu').on('mousewheel', function(e){
			if(e.deltaY > 0){
				$('article.chen').addClass('active').siblings().removeClass('active');
				$('#content').trigger('resizeend');
			}
		});
		
	});

	if($('#content.home').length){
		$('#container').trigger('page:update:home', null);
	}
};
