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
		$('[data-ga-m]').on('click', function(e){
			ga('send', 'event', 'Button', 'click', $(this).attr('data-ga-m'));
		});
		$('.kv, article.lin, article.chen, article.lu').on('section:active', function(){
			if(typeof ga !== 'undefined' && $(this).attr('data-ga-send') * 1 !== 1){
				ga('send', 'pageview', { 'page': $(this).attr('data-ga-pv-m'), 'title': $(this).attr('data-ga-pv-m')});
				// $(this).attr('data-ga-send', 1);
			}
		});
		$('#container').on('page:update:form', function(){
			ga('send', 'pageview', { 'page': 'mobile_info', 'title': 'mobile_info'});
		});
		$('#container').on('page:update:rule', function(){
			ga('send', 'pageview', { 'page': 'mobile_rules', 'title': 'mobile_rules'});
		});
		$('#container').on('page:update:home', function(){
			ga('send', 'pageview', { 'page': 'Mobile_index', 'title': 'Mobile_index'});
		});
		$('#container').on('page:update:home', function(){
			ga('send', 'pageview', { 'page': 'Mobile_list', 'title': 'Mobile_list'});
		});
		$('#container').on('page:update:home', function(){
			ga('send', 'pageview', { 'page': 'Mobile_list', 'title': 'Mobile_list'});
		});
	}else{
		$('[data-ga]').on('click', function(e){
			$(this).attr('data-ga');
			ga('send', 'event', 'Button', 'click', $(this).attr('data-ga'));
		});
		$('.kv, article.lin, article.chen, article.lu').on('section:active', function(){
			if(typeof ga !== 'undefined' && $(this).attr('data-ga-send') * 1 !== 1){
				$(this).attr('data-ga-pv');
				ga('send', 'pageview', { 'page': $(this).attr('data-ga-pv'), 'title': $(this).attr('data-ga-pv')});
				// $(this).attr('data-ga-send', 1);
			}
		});
		$('#container').on('page:update:form', function(){
			ga('send', 'pageview', { 'page': 'PC_info', 'title': 'PC_info'});
		});
		$('#container').on('page:update:rule', function(){
			ga('send', 'pageview', { 'page': 'PC_rules', 'title': 'PC_rules'});
		});
		$('#container').on('page:update:home', function(){
			ga('send', 'pageview', { 'page': 'PC_index', 'title': 'PC_index'});
		});
		$('#container').on('page:update:list', function(){
			ga('send', 'pageview', { 'page': 'PC_list', 'title': 'PC_list'});
		});
		$('#container').on('page:update:winnner', function(){
			ga('send', 'pageview', { 'page': 'PC_winnner', 'title': 'PC_winnner'});
		});

	}
};
