$(function(){
	//logo区医院搜索框
	 $('.qiehuan').on('click',function(event){
		 $('.innerbox').replaceWith('<div class="innerbox">'+$(event.target).text()+'</div>'); 
	})
	 
	 
	// 
	$('.caption a').each(function(index,element){
		$('.caption a').eq(index).click(function(){
			$('.caption a').eq(index).addClass('active').siblings().removeClass('active');
			$('.item').removeClass('foucus');
			$('.item').eq(index).addClass('foucus').siblings().removeClass('foucus');
		})
	})
	
	//
	var week=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
	$('paiban-box-wrap ').empty();
	var pageCount=7;
	var currentPage=0;
	var days=pageCount*7;
	var date=new Date();
	var time=date.getTime();
	for (i=0;i<days;i++) {
		var _t=time+i*86400*1000;
		var _d=new Date(_t);
		var html=[];
		var w=week[_d.getDay()];
		var y=_d.getFullYear();
		var m=_d.getMonth()+1;
		m=m<10?'0'+m:m;
		var d=_d.getDate();
		d=_d<10?'0'+d:d;
		html.push('<div class="paiban-box-item"> <div class="date">'+w+'<br/>'+y+'-'+m+'-'+d+'</div>');
		html.push('<div class="status"></div>');
		html.push('<div class="status status_full">约满</div>');
		html.push('<div class="status"></div></div>');
		$('#paiban-box-wrap').append(html.join(''));
	}
	var width=$('.paiban-box').width();
	$('#paiban-box-wrap').on('flashLeft',function(){
		$(this).css('left',width*currentPage*-1)
	});
	$('.paiban-l .prev').on('click',function(){
		if (currentPage-1>=0) {
			currentPage-=1;
			$('#paiban-box-wrap').triggerHandler('flashLeft');
		}
		return false;
	});
	$('.paiban-r .next').on('click',function(){
		if (currentPage+1<pageCount) {
			currentPage+=1;
			$('#paiban-box-wrap').triggerHandler('flashLeft');
		}
		return false;
	});	
})
