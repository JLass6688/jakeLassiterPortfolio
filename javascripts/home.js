console.log('...hello...')

$(document).ready(function(){

		//SOCIAL - ICON ANIMATION
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

		)

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
		}
		function menuOpen(){
			var menuIcons = $('#nav-icon-container').children('span');
			var topBar = menuIcons[0];
			var middleBar = menuIcons[1];
			var bottomBar = menuIcons[2];
			$(topBar).attr('class','menuTopRotate');
			$(middleBar).attr('class','menuMiddleOut');
			$(bottomBar).attr('class','menuBottomRotate');
		}
		function navBarOpen(){
			var nav = $('nav')
			nav.css("right", 0);
		}
		function menuAnimation(){
			var counter = 1;
			$('#nav-icon-container').on('click', function(evt){
				evt.preventDefault();
				if( counter%2 === 0 ){
					menuClose();
					$('#home').animate({right: 0}, 500);
					counter += 1;
				} else{
					menuOpen();
					$('#home').animate({right: "250px"}, 500);
					counter += 1;
				}
			});
		}
		menuAnimation();
		
	


})