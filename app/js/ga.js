'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, ga, $ */
app.partial.ga = function(){
	var ismobile = $('html').hasClass('mobile') || $('html').hasClass('tablet');
	if(ismobile){
		$('a[data-ga-m]').on('click', function(e){
			ga('send', 'event', 'Button', 'click', $(this).attr('data-ga-m'));
		});
		$('.kv, article.lin, article.chen, article.lu').on('section:active', function(){
			if(typeof ga !== 'undefined' && $(this).attr('data-ga-send') * 1 !== 1){
				ga('send', 'pageview', { 'page': $(this).attr('data-ga-pv-m'), 'title': $(this).attr('data-ga-pv-m')});
				$(this).attr('data-ga-send', 1);
			}
		});
	}else{
		$('a[data-ga]').on('click', function(e){
			$(this).attr('data-ga');
			ga('send', 'event', 'Button', 'click', $(this).attr('data-ga'));
		});
		$('.kv, article.lin, article.chen, article.lu').on('section:active', function(){
			if(typeof ga !== 'undefined' && $(this).attr('data-ga-send') * 1 !== 1){
				$(this).attr('data-ga-pv');
				ga('send', 'pageview', { 'page': $(this).attr('data-ga-pv'), 'title': $(this).attr('data-ga-pv')});
				$(this).attr('data-ga-send', 1);
			}
		});

	}
};
