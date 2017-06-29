'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, $ */
app.partial.rule = function(){


	var container = $('#container');
	container.on('page:update:rule' , function(page, menu){
		$('#content').on('resizeend', 500, function(e){
			e.stopPropagation();
			e.preventDefault();

			var _vw = $(window).width();
			var _vh = $(window).height();
			anime({
				targets: 'background',
				height: function(){
					return _vh;
				},
				duration: 800,
				easing: 'easeInOutExpo'
			});
			if($(window).width() > 800){
				$('.rule article .text').mCustomScrollbar({
					autoDraggerLength: false
				});
			}else{			
				$('.rule article .text').mCustomScrollbar('destroy');
			}
		});
	});

	if($('#content.rule').length){
		$('#container').trigger('page:update:rule', null);
	}

};
