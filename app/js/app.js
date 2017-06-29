'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global  $ */
var app = {};
app.partial = {};

// 網址為 gulp 或者 github 時 設定成debug 模式
var debug = /localhost[:]9000|nelson119.github.io/.test(location.href);



$(function(){
    
    // 定義每個section
	$.each(app.partial, function(name, init){
		init();
    });
    app.imageReload.init();


    app.imageReload.callback = function(){
			// console.log('preload callback');
		var loadingDone = anime.timeline({
			// direction: 'forwards',
			loop: true,
			delay: 500,

		});
		loadingDone.add({
			targets: 'html',
			opacity: {
				value: 1,
				duration: 100
			},
			complete: function(){
				$('html').addClass('loading-done');
			}
		});
    	
    };

	var img = new Image();
	img.onload = function(e){

		var logoAnimation = anime.timeline({
			// direction: 'forwards',
			loop: true,
			delay: 500
		});
		logoAnimation.add([
			{
				targets: '.loading-mask .sportbase path',
				translateX: [-2000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2000],
				opacity: {
					value: 1,
					duration: 100
				},
				fill: '#fff',
				delay: function(el, i){ return 0 + (i * 75)},
				duration: 5000,
				easing: 'easeOutExpo',
				offset: 0
			},
			{
				targets: '.loading-mask polygon',
				rotateZ: [-720, 0],
				opacity: {
					value: 1,
					duration: 100
				},
				fill: '#fff',
				delay: function(el, i){ return 0 + (i * 75)},
				duration: 1000,
				easing: 'easeOutExpo',
				offset: 0
			},
			{
				duration: 4000
			}
		]);
	};
	img.src = $('.loading-mask img').attr('data-src');
});



