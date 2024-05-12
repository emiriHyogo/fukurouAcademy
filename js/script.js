// JavaScript Document


	
	$(function() {
		
		//カルーセル
		if (window.matchMedia('(max-width: 500px)').matches) {
			//スマホ処理
			$('.imageScroll').slick({
				arrows: false,
				centerMode: true,
				centerPadding: '10%',
			});
		} else if (window.matchMedia('(min-width:501px)').matches) {
			//PC処理
			$('.imageScroll').slick({
				arrows: true,
				centerMode: true,
				centerPadding: '15%',
				prevArrow: '<button class="slick-arrow slick-prev"></button>',
				nextArrow: '<button class="slick-arrow slick-next"></button>',
			});
		
		}
		
		$(".fadeIn").on("inview",function() {
			$(this).addClass("inview");
		});
		
		
		
		//topボタン
		let pagetop = $('#to-top');
		pagetop.hide();
		
		$(window).scroll(function() {
			if ($(this).scrollTop() > 700) {
				pagetop.fadeIn();
			} else {
				pagetop.fadeOut();
			}
		});
		
		pagetop.click(function() {
			$('body,html').animate({scrollTop: 0}, 500);
			return false;
		});
		
		
		//ハンバーガーメニュー
		$('.hamburger').on('click',function() {
			if ($('#header').hasClass('open')) {
				$('#header').removeClass('open');
			} else {
				$('#header').addClass('open');
			}
		});
		
		$('#mask').on('click',function() {
			$('#header').removeClass('open');
		});
		$('nav a').on('click',function() {
			$('#header').removeClass('open');
		});
		
	});
	