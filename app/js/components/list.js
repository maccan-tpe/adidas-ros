'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, $, anime */
app.partial.list = function(){


	var container = $('#container');
	container.on('page:update:list' , function(page, menu){
		$('#content').on('resizeend', 500, function(e){
			e.stopPropagation();
			e.preventDefault();

			var vw = $(window).width();
			var vh = $(window).height();

			// console.log(vh);
			anime({
				targets: 'background, #content',
				height: function(){
					return vh;
				},
				duration: 800,
				easing: 'easeInOutExpo'
			});
			if($(window).width() > 800){
				$('.list article .text').mCustomScrollbar({
					autoDraggerLength: false
				});
			}else{			
				$('.list article .text').mCustomScrollbar('destroy');
			}
		});
	});

	if($('#content.list').length){
		$('#container').trigger('page:update:list', null);
	}

};
