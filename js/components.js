"use strict";app.partial.home=function(){$("#container").on("page:update:home",function(t,e){function n(t){anime({targets:"html,body",easing:"easeInOutExpo",scrollTop:t.offset().top,delay:1200,complete:function(){$("#content").trigger("rolling"),t.hasClass("lin")?history.pushState(null,document.title,location.search+"#Jeremy Lin"):t.hasClass("chen")?history.pushState(null,document.title,location.search+"#Wei-Yin Chen"):t.hasClass("lu")?history.pushState(null,document.title,location.search+"#Rendy Lu"):history.pushState(null,document.title,"./"+location.search)}})}$(".parallax").each(function(t,e){new Parallax(e)});$("#content").on("resizeend",500,function(t){t.stopPropagation(),t.preventDefault(),$(window).width()>800?$(".home article aside.text").mCustomScrollbar({autoDraggerLength:!1}):($(".home article aside.text").mCustomScrollbar("destroy"),$(".home article aside.text").mCustomScrollbar("destroy"))});var a={},i=null,o=0;$(".kv, article.lin, article.chen, article.lu").each(function(t){var e="Section"+Math.floor(new Date*Math.random());$(this).attr("id",e);a[e]={},a[e].ele=this,a[e].top=function(){return $(this.ele).offset().top},a[e].butt=function(){return $(this.ele).offset().top+$(this.ele).outerHeight()},a[e].middle=function(){return $(this.ele).offset().top+$(this.ele).outerHeight()/2}}),$("#content").on("rolling",function(t){var e=$(window).scrollTop()+$(window).height()/20,n=$(window).scrollTop()+$(window).height()/20*19;$(".kv, article.lin, article.chen, article.lu").each(function(t,r){var l=$(this).attr("id"),s=a[l];s.middle()>=e&&s.middle()<=n&&i!=l&&(i=l),i&&!$("#"+i).hasClass("active")&&($("#"+i).addClass("active").trigger("section:active").siblings().removeClass("active"),$("#"+i).hasClass("lin")?history.pushState(null,document.title,location.search+"#Jeremy Lin"):$("#"+i).hasClass("chen")?history.pushState(null,document.title,location.search+"#Wei-Yin Chen"):$("#"+i).hasClass("lu")?history.pushState(null,document.title,location.search+"#Rendy Lu"):history.pushState(null,document.title,"./"+location.search)),o=e})}),/jeremy(\s|[%]20)lin/i.test(location.hash)?($("article.lin").addClass("active").siblings().removeClass("active"),n($("article.lin"))):/wei[-]yin(\s|[%]20)chen/i.test(location.hash)?($("article.chen").addClass("active").siblings().removeClass("active"),n($("article.chen"))):/rendy(\s|[%]20)lu/i.test(location.hash)?($("article.lu").addClass("active").siblings().removeClass("active"),n($("article.lu"))):$(window).width()>800&&anime({targets:"html,body",easing:"easeInOutExpo",scrollTop:0,delay:50})}),$("#content.home").length&&$("#container").trigger("page:update:home",null)},app.partial.form=function(){var t=$("#container"),e="https://tw2.klear.ly/2017/adidas-ros/api.php";/www\.adidas-campaign\.com\.tw/gi.test(location.href)&&(e="http://www.adidas-campaign.com.tw/heretocreate/event/api.php"),t.on("page:update:form",function(t,n){$("#content").on("resizeend",500,function(t){t.stopPropagation(),t.preventDefault(),$(window).width()>800?($(".bfh-datepicker").removeClass("hide"),$(".bfh-datepicker .input-group").append($("[name=age]").attr("type","text")),$(".bfh-datepicker").bfhdatepicker($(".bfh-datepicker").data())):$("[name=age]").attr("type","date").removeAttr("readonly").insertAfter($(".bfh-datepicker").addClass("hide"));$(window).width();var e=$(window).height();anime({targets:"background, #content",height:function(){return e},duration:800,easing:"easeInOutExpo"}),$(window).width()>800?$(".form article .text").mCustomScrollbar({autoDraggerLength:!1}):$(".form article .text").mCustomScrollbar("destroy")}),$.ajax({url:e+"?session_avail"}).promise().done(function(t){t.success&&$.each(t.data,function(t,e){0==e.vacancy&&$("#session"+e.no).attr("disabled","disabled")})}).catch(function(t){$.ajax({url:"../vacancy.json"}).promise().done(function(t){t.success&&$.each(t.data,function(t,e){0==e.vacancy&&$("#session"+e.no).attr("disabled","disabled"),1*new Date>=1*new Date("2017-7-14 12:00")&&$("#session1, #session2").attr("disabled","disabled"),1*new Date>=1*new Date("2017-7-19 23:59")&&$("#session3, #session4, #session5, #session6").attr("disabled","disabled")})}).catch(function(t){console.log(t)})}),$("form").on("submit",function(t){t.stopPropagation(),t.preventDefault();var n={age:JSON.stringify(new Date($("[name=age]").val().replace(/[-]/g,"/"))).replace(/["]/g,""),email:$("[name=email]").val(),tel:$("[name=tel]").val(),name:$("[name=name]").val(),session:$("[name=session]:checked").val()};return $("[name=agree]:checked").length?n.email?n.tel?n.name?n.session?void $.ajax({method:"post",url:e+"?submit",data:n}).promise().catch(function(t){console.log(t)}).done(function(t){1==t.success?(alert("感謝您的報名與熱烈支持，我們會立即為您處理！報名成功會以簡訊通知，收到簡訊後才算成功完成報名。"),location.href=app.utility.rootPath+"#Jeremy Lin"):alert(t.msg.replace("抱歉，僅開放有限的年齡層參與","請確認您符合報名資格。"))}):(alert("請選擇一個場次"),!1):(alert("請填寫姓名"),!1):(alert("請填寫手機號碼"),!1):(alert("請填寫Email"),!1):(alert("請勾選確認詳閱並同意個資法與活動辦法"),!1)})}),$("#content.form").length&&$("#container").trigger("page:update:form",null)},app.partial.rule=function(){$("#container").on("page:update:rule",function(t,e){$("#content").on("resizeend",500,function(t){t.stopPropagation(),t.preventDefault();$(window).width();var e=$(window).height();anime({targets:"background, #content",height:function(){return e},duration:800,easing:"easeInOutExpo"}),$(window).width()>800?$(".rule article .text").mCustomScrollbar({autoDraggerLength:!1}):$(".rule article .text").mCustomScrollbar("destroy")})}),$("#content.rule").length&&$("#container").trigger("page:update:rule",null)},app.partial.list=function(){$("#container").on("page:update:list",function(t,e){$("#content").on("resizeend",500,function(t){t.stopPropagation(),t.preventDefault();$(window).width();var e=$(window).height();anime({targets:"background, #content",height:function(){return e},duration:800,easing:"easeInOutExpo"}),$(window).width()>800?$(".list article .text").mCustomScrollbar({autoDraggerLength:!1}):$(".list article .text").mCustomScrollbar("destroy")})}),$("#content.list").length&&$("#container").trigger("page:update:list",null)},app.partial.winner=function(){$("#container").on("page:update:winner",function(t,e){$("#content").on("resizeend",500,function(t){t.stopPropagation(),t.preventDefault();$(window).width();var e=$(window).height();anime({targets:"background, #content",height:function(){return e},duration:800,easing:"easeInOutExpo"}),$(window).width()>800?$(".winner article .text").mCustomScrollbar({autoDraggerLength:!1}):$(".winner article .text").mCustomScrollbar("destroy")})}),$("#content.winner").length&&$("#container").trigger("page:update:winner",null)};