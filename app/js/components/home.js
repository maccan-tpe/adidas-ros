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

			// var vw = $(window).width();
			// var vh = $(window).height();


			if($(window).width() > 800){
				$('.home article aside.text').mCustomScrollbar({
					autoDraggerLength: false
				});
			}else{			
				$('.home article aside.text').mCustomScrollbar('destroy');
				$('.home article aside.text').mCustomScrollbar('destroy');

				// anime({
				// 	targets: 'section.kv',
				// 	easing: 'easeInOutExpo',
				// 	duration: 250,
				// 	paddingTop: window.innerHeight
				// });
			}
		});



		var range = {}, activeSection = null, scrollTop = 0;

		$('.kv, article.lin, article.chen, article.lu').each(function(i){

			var id = 'Section' + Math.floor(new Date()*Math.random());

			$(this).attr('id', id);

			var ele = this;

			range[id] = {};
			// if(!$('#'+id).length){
			// 	return;
			// }
			range[id].ele = this;
			range[id].top = function(){
				return $(this.ele).offset().top;// - $(this.ele).outerHeight() *1;
			};
			range[id].butt = function(){
				return $(this.ele).offset().top + $(this.ele).outerHeight();// *2;
			};
			range[id].middle = function(){
				return $(this.ele).offset().top + $(this.ele).outerHeight() / 2;// *2;
			};
		});



		$('#content').on('rolling', function(e){
			var currentTop = $(window).scrollTop() + $(window).height() / 20;
			var currentButt = $(window).scrollTop() + $(window).height() / 20 * 19;
			$('.kv, article.lin, article.chen, article.lu').each(function(i, section){
				var sectionId = $(this).attr('id');
				var rg = range[sectionId];
				if(rg.middle() >= currentTop  && rg.middle() <= currentButt){
					if(activeSection != sectionId){
						activeSection = sectionId;
					}
				} 
				if(activeSection && !$('#' + activeSection).hasClass('active')){
					// console.log(activeSection);
					$('#' + activeSection).addClass('active').trigger('section:active')
						.siblings().removeClass('active');
					if($('#' + activeSection).hasClass('lin')){
						history.pushState(null, document.title, location.search + '#Jeremy Lin');
					}else if($('#' + activeSection).hasClass('chen')){
						history.pushState(null, document.title, location.search + '#Wei-Yin Chen');
					}else if($('#' + activeSection).hasClass('lu')){
						history.pushState(null, document.title, location.search + '#Rendy Lu');
					}else{
						history.pushState(null, document.title, './' + location.search );
					}
				}
				scrollTop = currentTop;
			});
		});
		
		function gotoActive(to){
			// console.log(to);
			// if($(window).width() > 800){
				anime({
					targets: 'html,body',
					easing: 'easeInOutExpo',
					scrollTop: to.offset().top,
					delay: 1200,
					complete: function(){
						$('#content').trigger('rolling');
						if(to.hasClass('lin')){
							history.pushState(null, document.title, location.search + '#Jeremy Lin');
						}else if(to.hasClass('chen')){
							history.pushState(null, document.title, location.search + '#Wei-Yin Chen');
						}else if(to.hasClass('lu')){
							history.pushState(null, document.title, location.search + '#Rendy Lu');
						}else{
							history.pushState(null, document.title, './' + location.search );
						}
					}
				});
			// }
		}
		// console.log(/rendy(\s|[%]20)lu/i.test(location.hash));
		if(/jeremy(\s|[%]20)lin/i.test(location.hash)){
			$('article.lin').addClass('active').siblings().removeClass('active');
			gotoActive($('article.lin'));
		}else if(/wei[-]yin(\s|[%]20)chen/i.test(location.hash)){
			$('article.chen').addClass('active').siblings().removeClass('active');
			gotoActive($('article.chen'));
		}else if(/rendy(\s|[%]20)lu/i.test(location.hash)){
			$('article.lu').addClass('active').siblings().removeClass('active');
			gotoActive($('article.lu'));
		}else if($(window).width() > 800){
			anime({
				targets: 'html,body',
				easing: 'easeInOutExpo',
				scrollTop: 0,
				delay: 50
			});
		}
	});

	if($('#content.home').length){
		$('#container').trigger('page:update:home', null);
	}
};
