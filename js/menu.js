// JavaScript Document

function getHeight(object)
{
	return parseInt($(object).css('height'));
}

$(document).ready(function(e) {
	
	$('.nav').click(function(){
		var index=0;
		var float = $(document).height() * 0.75;
		$('#Shilder').animate({
			marginTop:-float
		},400);
		D_index = 1;
		duration(1);
	});
});

var nonStack=0;
var D_index=0;

function duration(i)
{
	var index = i;
	var float = $(document).height() * 0.75;
	var searchBot = ($(document).height() * 0.15 - 30)/2;
	var half = $('#main_search').height() *0.4 - 15;
	var linkPos = $(document).height() * 0.1 + 30;
	if(index == 1)
	{
		$('.search').animate({
			bottom:searchBot
		},400);
		$('#nav').animate({
			opacity:0,
			marginBottom:-10+'%'
		},300);
		$('#footer').animate({
			bottom:0
		},300);
		$('#social').delay(300).animate({
			left:0,
			bottom:searchBot
		},300);
		$('#link').animate({
			bottom:linkPos
		},420);
	}
	else if(index == 0)
	{
		$('.search').animate({
			bottom:half
		},400);
		$('#nav').animate({
			opacity:1,
			marginBottom:0
		},300);
		$('#footer').animate({
			bottom:-30
		},300);
		$('#social').animate({
			left:-20+'%'
		},300);
		$('#link').animate({
			bottom:linkPos + 500
		},420);
	}
	$('body').css('top','0');
}

$(window).bind('mousewheel', function (e) {
	var index=0;
	var e = e || window.event;
	var now = new Date().getTime();
	var float = $(document).height() * 0.75;
	if(now - nonStack > 300)
	{
		if(e.originalEvent.wheelDelta < 0 && D_index == 0)
		{
			$('#Shilder').animate({
				marginTop:-float
			},400);
			index=1;
			D_index = 1;
			duration(index);
		}
		else if(e.originalEvent.wheelDelta > 0 && D_index == 1)
		{
			$('#Shilder').animate({
				marginTop:0
			},400);
			index=0;
			D_index = 0;
			duration(index);
		}
	}
	nonStack = new Date().getTime();
});
$(window).bind('DOMMouseScroll', function (e) {
	var index=0;
	var e = e || window.event;
	var now = new Date().getTime();
	var float = $(document).height() * 0.75;
	if(now - nonStack > 300)
	{
		if(e.originalEvent.detail > 0 && D_index == 0)
		{
			$('#Shilder').animate({
				marginTop:-float
			},400);
			index=1;
			D_index = 1;
			duration(index);
		}
		else if(e.originalEvent.detail < 0 && D_index == 1)
		{
			$('#Shilder').animate({
				marginTop:0
			},400);
			index=0;
			D_index = 0;
			duration(index);
		}
		nonStack = new Date().getTime();
	}
});

 //arrow keys
$(window).keydown(function (e) {
	var index=0;
	var e = e || window.event;
	var now = new Date().getTime();
	var float = $(document).height() * 0.75;
	if (now - nonStack > 300) 
	{
		if (!e)
			e = window.event;
		if (e.keyCode) 
		{
			switch (e.keyCode) 
			{
				case 40:
					if(D_index == 0)
					{
						$('#Shilder').animate({
							marginTop:-float
						},400);
						index=1;
						D_index = 1;
						duration(index);
					}
					break;
				case 38:
					if(D_index == 1)
					{
						$('#Shilder').animate({
							marginTop:0
						},400);
						index=0;
						D_index = 0;
						duration(index);
					}
					break;
			}
		}
		else if (e.which) 
		{   //firefox arrow keys
			switch (e.which) 
			{
				case 40:
					if(D_index == 0)
					{
						$('#Shilder').animate({
							marginTop:-float
						},400);
						index=1;
						D_index = 1;
						duration(index);
					}
					break;
				case 38:
					if(D_index == 1)
					{
						$('#Shilder').animate({
							marginTop:0
						},400);
						index=0;
						D_index = 0;
						duration(index);
					}
					break;
			}
		}
		nonStack = new Date().getTime();
	}
});