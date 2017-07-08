'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations, no-alert*/
/*global app, $, anime */
app.partial.form = function(){


	var container = $('#container');
	container.on('page:update:form' , function(page, menu){
		$('#content').on('resizeend', 500, function(e){
			e.stopPropagation();
			e.preventDefault();
			if($(window).width() > 800){
				anime({
					targets: 'html,body',
					easing: 'easeInOutExpo',
					scrollTop: 0,
					delay: 50
				});
				$('.bfh-datepicker').removeClass('hide');
				$('.bfh-datepicker .input-group').append($('[name=age]').attr('type','text'));
				$('.bfh-datepicker').bfhdatepicker($('.bfh-datepicker').data());
			}else{
				$('[name=age]').attr('type','date').insertAfter($('.bfh-datepicker').addClass('hide'));
			}

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
				$('.form article .text').mCustomScrollbar({
					autoDraggerLength: false
				});
			}else{			
				$('.form article .text').mCustomScrollbar('destroy');
			}

		});
		$.ajax({url:'https://tw2.klear.ly/2017/adidas-ros/api.php?session_avail'}).promise().done(function(r){
			if(r.success){
				$.each(r.data, function(i, d){
					// console.log(d);
					if(d.vacancy == 0){
						$('#session' + d.no).attr('disabled','disabled');
					}
				});
			}
		}).catch(function(e){

			$.ajax({url:'../vacancy.json'}).promise().done(function(r){
				if(r.success){
					$.each(r.data, function(i, d){
						// console.log(d);
						if(d.vacancy == 0){
							$('#session' + d.no).attr('disabled','disabled');
						}
						if(new Date()*1 >= new Date('2017-7-14 12:00')*1){
							$('#session1, #session2').attr('disabled','disabled');
						}
						if(new Date()*1 >= new Date('2017-7-19 23:59')*1){
							$('#session3, #session4, #session5, #session6').attr('disabled','disabled');
						}
					});
				}
			}).catch(function(e){
				console.log(e);
			});
		});
		$('form').on('submit', function(e){
			e.stopPropagation();
			e.preventDefault();
			// var sessions = [];
			// var attr = 'sessions';
			// $('[name=session]:checked').each(function(i,d){sessions.push(d.value); });
			var form = {
				age: JSON.stringify(new Date($('[name=age]').val())).replace(/["]/g,''),
				email: $('[name=email]').val(),
				tel: $('[name=tel]').val(),
				name: $('[name=name]').val(),
				session: $('[name=session]:checked').val()
			};
			// console.log(form);
			if(!$('[name=agree]:checked').length){
				alert('請勾選確認詳閱並同意個資法與活動辦法');
				return false;
			}
			if(!form.email){
				alert('請填寫Email');
				return false;
			}
			if(!form.tel){
				alert('請填寫手機號碼');
				return false;
			}
			if(!form.name){
				alert('請填寫姓名');
				return false;
			}
			if(!form.session){
				alert('請選擇一個場次');
				return false;
			}

			$.ajax({
				method:'post',
				url: 'https://tw2.klear.ly/2017/adidas-ros/api.php?submit', 
				data: form
			}).promise().catch(function(e){
				console.log(e);
			}).done(function(r){
				console.log(r);
				if(r.success == 1){
					alert('恭喜您已完成報名');
				}else{
					alert(r.msg);
				}
			});
		});

	});

	if($('#content.form').length){
		$('#container').trigger('page:update:form', null);
	}

};
