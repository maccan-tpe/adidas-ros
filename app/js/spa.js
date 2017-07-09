'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations, no-alert */
/*global app, $ */
app.partial.spa = function(){

	// 網址為 gulp 或者 github 時 設定成debug 模式
	var debug = /localhost[:]9000/.test(location.href);
	var rootPath = '/';
	if(/nelson\.works/ig.test(location.href)){
		rootPath = 'http://nelson.works/adidas-ros/';
	} else if(/maccan-tpe\.github\.io/ig.test(location.href)){
		rootPath = 'https://maccan-tpe.github.io/adidas-ros/';
	} else if(/www\.adidas-campaign\.com\.tw/ig.test(location.href)){
		rootPath = 'http://www.adidas-campaign.com.tw/heretocreate/event/';
	} else if(/tw2\.klear\.ly\/2017\/adidas-ros/ig.test(location.href)){
		rootPath = 'http://tw2.klear.ly/2017/adidas-ros/';
	} else if(debug){
		rootPath = 'http://localhost:9000/';
	}

	var container = $('#container'),
		title = document.title;


	app.spa = {
		container: container,
		title: title
	};


	function updateContent(uri, name, menu, callback, isPopstate){
		// console.log(uri, cat, cata, callback || null);
		isPopstate = isPopstate || false;
		container.trigger('page:preupdate');
		if(!isPopstate && location.pathname !== uri){
			$('html').removeClass('loading-done');
		}

		$.get(uri, function(response){
				var title = title;
				var htmlContent = '';
				$(response).each(function(i, element){
					if($(element).attr('property') === 'og:title'){
						title = $(element).attr('content');
					}
					if($(element).attr('role') === 'container'){
							// console.log($('[role=content]', element));
						htmlContent = $('[role=content]', element);
					}
					if($(element).attr('role') === 'menu'){
						$('.menu a', element).each(function(i){
							// console.log($('[role=menu] a').eq(i), $(this));
							$('[role=menu] .menu a').eq(i).attr('data-href', $(this).attr('data-href'));
						});
					}
				});
				if(!isPopstate){
					pushState({uri: uri, name: name, menu: menu, title: title}, 'update content' + uri);
				}

				container.html('').html(htmlContent).promise().done(function(e){
					// console.log($('a[data-href]', container));
					$('a[data-href]', container).on('click', function(e){
						$('header .menu a[data-ref='+$(this).attr('data-ref')+']').trigger('click', e);
						// console.log(e);
					});

				});

				(callback || function(){})();

				container.trigger('page:update:' + name, menu);
				container.trigger('page:update', menu);
		});
	}

	function pushState(info, ref){
		// console.log('history.pushState('+JSON.stringify(info)+', '+(title || document.title)+', '+info.uri+')');
		// console.log('push ref:',ref,':',info);
		info.title = info.title || title;
		document.title = info.title;
		history.pushState(info, info.title, info.uri);
	}

	$(window).on('popstate', function(event){
		if(/jeremy(\s|[%]20)lin/i.test(location.hash)||
			/wei[-]yin(\s|[%]20)chen/i.test(location.hash)||
			/rendy(\s|[%]20)lu/i.test(location.hash)){
			return false;
		}
		var info = event.originalEvent.state;
		// console.log('pop',info);
		if(info === null){
			location.href = rootPath;
		}
		document.title = info.title;
		updateContent(info.uri, info.name, info.menu, function(){
		}, true);
		return true;

	});

	$('a[data-href]').on('click', function(e){
		e.stopPropagation();
		e.preventDefault();
		if(history.pushState){
			var $ele = $(this);
			// console.log($ele);
			var name = $ele.attr('data-ref'), uri;
			var menu = null;
			switch(name){
				case 'home':
					uri = rootPath;
					break;
				default:
					uri = rootPath + name + '/';
					break;
			}
			updateContent(uri, name, menu, function(){
				// console.log(name);
				$ele.addClass('active').siblings().removeClass('active');
			});
		}
		else{
			location.href = $ele.attr('data-href');
		}
	}).on('mousemove', function(e){
		var $ele = $(this);
		$ele.addClass('hover').siblings().removeClass('hover');
	}).on('mouseout', function(e){
		var $ele = $(this);
		$ele.removeClass('hover');
	});


	if(app.utility.getParam('path')){
		var uri = decodeURIComponent(app.utility.getParam('path'));
		$('a[data-href='+ uri +']').trigger('click');
	}

	container.on('page:update', function(e, name){
		// console.log(e);
		// console.log(name);
		$('html').addClass('loading-done');

		app.imageReload.refresh();
	});

	container.trigger('page:update', 'home');
};	
