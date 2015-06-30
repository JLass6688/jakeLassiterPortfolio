console.log('...hello...')

$(document).ready(function(){

		//SOCIAL - ICON HOVER ANIMATION
		$('.icon-img').hover(
			function(){
				var svg = $(this).prev();
				var circle = $(svg).children()[0];
				$(circle).attr('class', 'social-icon social-icon-hover');
			},
			function(){
				var svg = $(this).prev();
				var circle = $(svg).children()[0];
				$(circle).attr('class', 'social-icon social-icon-out');
			}
		);

		// SOCIAL - ICONS FADE UP ANIMATION
		function iconFadeUp(){
			var containers = $('.icon-container');
			var x = 0;
			setInterval(function interval(){
				if(x<4){
					var container = containers[x];
					$(container).addClass('fadeUp');
					x += 1;
				} else {
					window.clearInterval(interval);
				}
			}, 200);
		};
		setTimeout(iconFadeUp, 3000);

		// MENU CLOSE ICON ANIMATION
		function menuClose(){
			var menuIcons = $('#nav-icon-container').children('span');
			var topBar = menuIcons[0];
			var middleBar = menuIcons[1];
			var bottomBar = menuIcons[2];
			$(topBar).attr('class','menuTopStart');
			setTimeout(function(){$(middleBar).attr('class','menuMiddleIn')},750);
			$(bottomBar).attr('class','menuBottomStart');
		};
		function menuOpen(){
			var menuIcons = $('#nav-icon-container').children('span');
			var topBar = menuIcons[0];
			var middleBar = menuIcons[1];
			var bottomBar = menuIcons[2];
			$(topBar).attr('class','menuTopRotate');
			$(middleBar).attr('class','menuMiddleOut');
			$(bottomBar).attr('class','menuBottomRotate');
		};
		function navBarOpen(){
			var nav = $('nav')
			nav.css("right", 0);
		};

		//FULL MENU ANIMATION FUNCTION
		function menuAnimation(){
			var counter = 1;
			//MENU OPEN AND CLOSE ANIMATION
			$('#nav-icon-container').on('click', function(evt){
				evt.preventDefault();
				if( counter%2 === 0 ){
					menuClose();
					$('#home').animate({right: 0}, 500);
					$('#work').animate({left: 0}, 500);
					$('#about').animate({left: 0}, 500);
					counter += 1;
				} else{
					menuOpen();
					$('#home').animate({right: "250px"}, 500);
					$('#work').animate({left: "-250px"}, 500);
					$('#about').animate({left: "-250px"}, 500);
					counter += 1;
				}
			});
			//WORK CLICK ANIMATION
			$('#work-link').on("click", function(evt){
				evt.preventDefault();
				$('#head-container').fadeOut(500);
				$('#about-content-container').fadeOut(500);
				setTimeout(function(){ $('#about').animate({width: 0}, 500) }, 500);
				setTimeout(function(){ $('#work').animate({top: 0}, 500) }, 500);
				setTimeout(function(){ $('#about').animate({top: '800px'}, 500) }, 1000);
				setTimeout(function(){ $('#work').animate({width: '100%', left: 0}, 1000) }, 1000);
				setTimeout(function(){ $('#work-content-container').fadeIn(500); }, 2000);
				menuClose();
				counter += 1
			});	
			//HOME CLICK ANIMATION
			$('#home-link').on("click", function(evt){
				evt.preventDefault();
				 $('#work-content-container').fadeOut(500);
				 $('#about-content-container').fadeOut(500);
				$('#home').animate({right: 0}, 100);
				setTimeout(function(){ $('#about').animate({width: 0}, 500) }, 500);
				setTimeout(function(){ $('#work').animate({width: 0}, 500) }, 500);
				setTimeout(function(){ $('#about').animate({top: '800px'}, 500) }, 1000);
				setTimeout(function(){ $('#work').animate({top: '800px'}, 500) }, 1000);
				setTimeout(function(){$('#head-container').fadeIn(500)}, 1000)
				menuClose();
				counter += 1
			});	
			//ABOUT CLICK ANIMATION
			$('#about-link').on("click", function(evt){
				evt.preventDefault();
				 $('#head-container').fadeOut(500);
				 $('#work-content-container').fadeOut(500);
				setTimeout(function(){ $('#work').animate({width: 0}, 500) }, 500);
				setTimeout(function(){ $('#about').animate({top: 0}, 500) }, 500);
				setTimeout(function(){ $('#work').animate({top: '800px'}, 500) }, 1000);
				setTimeout(function(){ $('#about').animate({width: '100%', left: 0}, 1000) }, 1000);
				setTimeout(function(){$('#about-content-container').fadeIn(500)}, 2000)
				menuClose();
				counter += 1
			});	
		};
		menuAnimation();

		//MENU ICON HOVER ANIMATION
		$('.nav-text').hover(
			function(){
				var menuText = $(this);
				var span = $(this).prev('span');
				$(menuText).animate({width: '100%'}, 100);
				$(span).animate({opacity: 1, left: 0, width: '100%'}, 300);
			},
			function(){
				var menuText = $(this);
				var span = $(this).prev('span');
				$(menuText).animate({width: '50%'}, 300);
				$(span).animate({opacity: 0, left: '50%', width: 0}, 300);
			}
		);

		//WORK IMG HOVER ANIMATION
		$('.work-piece-container').hover(
			function(){
				var divContainer = $(this);
				var img = $(divContainer).children('img')[0];
				$(img).attr('class', 'workHoverIn');
			},
			function(){
				var divContainer = $(this);
				var img = $(divContainer).children('img')[0];
				$(img).attr('class', 'workHoverOut');
			}
		);

		//WORK EXPANDED ANIMATION
		$('.work-piece-container').on('click', function(evt){
			evt.preventDefault();
			var workExpanded = $(this).next();
			var workExpandedContainer = $(workExpanded).children()[0]
			$(workExpanded).css({'display':'block', 'overflow': 'auto', 'overflow-y': 'scroll'});
			$(workExpanded).animate({left: 0, width: '100%'}, 500);
			setTimeout(function(){$(workExpandedContainer).fadeIn(500)}, 500);
		})

		//WORK EXPANDED CLOSE ANIMATION
		$('.close-icon').on('click', function(evt){
			evt.preventDefault();
			var workInfo = $(this).parent();
			var workExpandedContainer = $(workInfo).parent();
			var workExpanded = $(workExpandedContainer).parent();
			$(workExpandedContainer).fadeOut(500);
			setTimeout(function(){$(workExpanded).animate({left: '50%', width: '0%'}, 500)}, 500);
			setTimeout(function(){$(workExpanded).css({'display':'none', 'overflow': 'none', 'overflow-y': 'scroll'});}, 1000);
		})

		//ABOUT ME SCROLL ANIMATION
		// $('a[href^="#"]').on('click',function (evt){
	 //        evt.preventDefault();

	 //        var target = this.hash;
	 //        var $target = $(target);

	 //        $('html, body').stop().animate({
	 //            'scrollTop': $target.offset().top
	 //        }, 1200, 'swing');
	 //    });
})











