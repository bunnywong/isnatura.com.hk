jQuery(document).ready(function ($) {
/*	Global: Function
--------------------	*/
function elcBunny(action, interval){
	var interval 	= 1000;

	setInterval(function() {
		 $('.views-field-field-image img').trigger('click');
	}, interval);
}

function iszh(e){
	if (!e) { e = true; }

	if(pathExist('zh') == true){
		return e;
	}else{
		return '';
	}
}

function ec(english, chinese){
	//$path = $_SERVER['REQUEST_URI'];

	if(iszh()){
		return chinese;
	}else{
		return english;
	}
}

function kill_f(e){
	if(isLH()){
		if(e.indexOf('f/') >  0){
			return e.substring(2);	// Ans1
		}
	}else{
		return e;					// Ans2: Server side
	}
}

function isLocalhost(e){
	if(document.location.hostname == 'localhost'){
		return true;
	}else{
		return false;
	}
}

function isAdmin(){
	$('#toolbar').length > 0 ? e = true : e = false;
	return e;
}

function isIndex(){	// Depend on slider
	var isIndex = $('#block-views-demo-content-slideshow-block-1 ul').hasClass('event-slider');
	return isIndex;
}

function back2root(){	// Friend of imgPath()
	var stick = '';	// The qty. of '/' in URL
	isLocalhost() == true ? stick = 2 : stick = 1;	// e.g.: 'localhost/f/ = 2', 'isnatura.com.hk/ = 1'
	var root = window.location.pathname.match(/\//g).length - stick;	// Edit '-2' depend on structure ///

	if(root == 0){		// It's root already
		return '';
	}else{				// Back it to root
		var path = ''
		for(var i = 0; i < root; i++){
			path += '..\/';		// Answer: '../'
		}
		return path;
	}
}

function imgPath(e){
	e == undefined ? e = '' : e = e;
	return back2root() +'profiles/commerce_kickstart/themes/commerce_kickstart_theme/images/' + e;
}

/*	Global: Variable
--------------------	*/
if(isLocalhost() == true){
	var urlHome = 'http://localhost/f';
	var checkOut ='http://localhost/f/cart';
}else{
	var urlHome = 'http://www.isnatura.com.hk';
	var checkOut ='http://www.isnatura.com.hk/cart';
}

/*	Fn. S T A R T
----------------------------------------------------------------------------------------------------	*/
/*	Global
--------------------	*/
function ieHack(){
	if(isIE()){
			var fbBG = {'background':'black',
						'-ms-filter':'progid:DXImageTransform.Microsoft.gradient(startColorstr=#B2000000,endColorstr=#B2000000)',
						'zoom': 1};
		$('#zone-user-wrapper').css(fbBG);

		$('#breadcrumb').css({'margin-top':'-50px'}).end()		// Bread Crumb top up more
		.find('#historyChart').css('margin-top','-30px').end()	// History.Chart
		.find('.all-products').width('940px').end()				// Page.Product.Table - show 2 row
		.find('.historyShowAll').css('top','380px').end()		// History.BtnShowall
		.find('#page_science').css('margin-top','20px');
	}
}

function googleFonts(){
	var cssPath1 	= '<link href="http://fonts.googleapis.com/css?family=';
	var cssPath2	= '" rel="stylesheet" type="text/css">';
	var fontStyle 	= new Array('EB+Garamond',
								'Quicksand:700',
								//'Overlock:900',	// new
								//'Acme',	// new
								//'Love+Ya+Like+A+Sister',	// new
								//'Federo',	// new
								//'Salsa',	// new
								'Chelsea+Market',	// new
								'Ubuntu'
						);

	for(var i = 0; i< 4; i++){
		$('head').append(cssPath1 + fontStyle[i] + cssPath2);
	}
}

function responetive(){
	function default_respone(){
		/* Feed <select> onLoad */
		if(iszh()){	// Chinese menumenu
			var str_m_menu = String('<select id="m_menu" style="top:0;"><option>選單</option><option value="zh/History">歷史</option><option value="zh/Science">科學</option><option value="zh/documentation">- 証書</option><option value="zh/Ingredients">成分</option><option value="zh/products">產品</option><option value="zh/socialize">動向</option><option value="zh/blog">- 博客</option><option value="zh/media-report">- 媒體報導</option><option value="zh/about-us">關於我們</option><option value="zh/contact">- 聯絡我們</option><option value="zh/shop">- 銷售點</option><option value="zh/news">- 最新消息</option></select>');
		}else{	// English menu
			var str_m_menu = String('<select id="m_menu" style="top:0;"><option>Menu</option><option value="History">history</option><option value="Science">science</option><option value="documentation">- documentation</option><option value="Ingredients">ingredients</option><option value="products">product</option><option value="socialize">socialize</option><option value="'+ urlHome +'/blog">- blog</option><option value="media-report">- media</option><option value="about-us">about us</option><option value="contact">- contact</option><option value="shop">- point of sale</option><option value="news">- news</option></select>');
		}

		$('#block-system-main-menu').append(str_m_menu);

		/* Redirect to menu's path by option click */
		$('#m_menu').change(function(){
			location.href = back2root() + $(this).val();
		});

		goResponetive();		
	}// !default_respone()

	function win_resize(){
		$(window).resize(function(){
			goResponetive();
		});
	}// !win_resize()
	
	var winWidth = $(window).width();

	function goResponetive(){
		var win_width	= $(window).width();
		var w980		= 980;
		var w870 		= 870;
		var w740		= 740;
		var optionBox	= '';

		/* Fix slider.Flower margin-left */
		if(win_width < w980)
			$('#block-views-demo-content-slideshow-block-1 .views-field-nothing span.field-content').css('left','50px');

		/* Menu <option> I/O */
 		if(win_width < w870){
			$('#m_menu').show();
			$('#region-user-first li').hide();
		}else{
			$('#region-user-first li').show();
			$('#m_menu').hide();
		}

		/* Refine FB */
		if(isLH() == true) $('#fb_aarow').css('right','-65px');		// Refine arrow for localhost

		var img = $('.views-field-field-image img');
		
 		if(win_width < w740){
		/* Mobile */
			$('#section-content').css('margin-top','-50px');	// Contact big frame
		}else{
		/* Desktop */
			$('#section-content').css('margin-top','-10px');
		}		
	}// !goResponetive()
		
	/* Panel
	----------	*/
	default_respone();	// this > goResponetive()	
	win_resize();
	
	
}

function fixbar(){
	function wrapHome2logo(){
		$('#logo').click(function(){window.location = urlHome;});
	}
	function menuConvert(){		/* Add space between main menu text	*/
		function fbMenu(e,spaceQty){
			var tail = '';
			e == 'CONTACT' ? tail = '' : tail = '<span class="fbMenu_tail">/</span>';
			return	e + '&nbsp; &nbsp; &nbsp;' + tail;
		}

 		if(isAdmin() != true){
			var m1	= $('#block-system-main-menu .menu li.leaf:last-child a').text();

			$('#block-system-main-menu .menu li.leaf:last-child a').html(fbMenu(a($(this).val()),3)).one().end()
				.find('#block-system-main-menu li:nth-last-child(2) a').html(fbMenu('SCIENCE',1)).one().end()
				.find('#block-system-main-menu li:nth-last-child(3) a').html(fbMenu('INGREDIENTS',0)).one().end()
				.find('#block-system-main-menu li:nth-last-child(4) a').html(fbMenu('PRODUCT',0)).attr('href',productLink()).end()
				.find('#block-system-main-menu li:nth-last-child(5) a').html(fbMenu('Socialize',0)).end()
				.find('#block-system-main-menu li:nth-last-child(6) a').html(fbMenu('CONTACT',0));
		}
	}// !menuConvert()

	function appendFBdom(){
		/*	Append	to sub menu	(manual insert script)*/
		var FBorgBlockID	= '#block-menu-menu-user-menu';
		var FBcartBlockID 	= '#block-views-shopping-cart-block';

		/*  Append icon: Cart */
		$('.block-shopping-cart-block .content')
		.append(function(){
			return '<img src="' + imgPath() + 'fb_ico_cart_white.png" id="ico_cart" title="My Cart">'
		});

		/* Append: Sub-menu: Price */
		$('.view-shopping-cart')
		.appendTo(FBcartBlockID).wrap('<li class="fbSubMenu"></li>').wrap('<a href="' + urlHome + iszh('/zh')+ '/cart"></a>')

		/* Append: little arrow */
		.append(function(){			// AppendTo Sub-menu: Aarow icon
			return '<img src="' + imgPath() + 'fb_Arrow.png" id="fb_aarow">'
		});

		/* Append two ORG a/c tag to sub-menu */
		$(FBorgBlockID + ' .first,'+ FBorgBlockID + ' .last').removeClass('leaf')
			.addClass('fbSubMenu').appendTo(FBcartBlockID);

		/* Warp <ul> for 3 menu */
		$(FBcartBlockID).children().wrapAll('<ul id="fbMenuWrap"></ul>');

		/* Wrap and add checkout URL */
		$('#ico_cart')
			.wrap('<a href="'+checkOut+'"><span id="ico_cart_wrapper"></span></a>');

		/* Redirect to child path */
		$('.fbSubMenu').click(function(){
			window.location = $(this).children().attr('href');
		});

		/* Translate to zh*/
		if(iszh()){
			var textArr = ['log in','register', 'my account', 'log out'];

			$('.fbSubMenu a').each(function(){
				var text = $.trim($(this).text().toLowerCase());
				if(text == 'log in') $(this).text('登入');
				if(text == 'register') $(this).text('新用戶');
				if(text == 'my account') $(this).text('我的賬戶');
				if(text == 'log out') $(this).text('登出');
			});
		}
	}// !appendFBdom()

	function cartMouseover(){
		$('#ico_cart_wrapper, #fbMenuWrap>li').mouseout(function(){	// Hide/Show more easy to Ctrl
			if(debug() == false) $('#fbMenuWrap>li').hide();
		});
		$('.region-inner region-user-second-inner, #ico_cart_wrapper, #fbMenuWrap, #fbMenuWrap>li').mouseover(function(){
			$('#fbMenuWrap>li').show();
		});
	}// !cartMouseover()
	
	function subMenu_doc(){
		if(iszh()){
			var science		= '科學';
			var documentation	= '証書';
		}else{
			var science		= 'science';
			var documentation	= 'documentation';
		}

		var menu_product	= '#block-system-main-menu li:nth-child(6)';
		var submenuContent 	= '<ul id="subMenu_doc"><a href="' + back2root() + iszh('zh/') +'science"><li>' + science + '</li></a><a href="' + back2root()  + iszh('zh/') + 'documentation"><li>' + documentation + '</li></a></ul>';

		$(menu_product).append(submenuContent);

		$(menu_product + ', #subMenu_doc').mouseover(function(){
			$('#subMenu_doc').show();
		}).mouseout(function(){
			$('#subMenu_doc').hide();
		});
	}// !subMenu_doc()
	
	function subMenu_Product(){
		if(iszh()){
			var hairCare	= '頭髮護理';
			var FulvicAcid	= '富里酸精華素';
		}else{
			var hairCare 	= 'Hair Care';
			var FulvicAcid	= 'Fulvic Acid';
		}

		var menu_product	= '#block-system-main-menu li:nth-child(4)';
		var submenuContent 	= '<ul id="subMenuProduct"><a href="' + back2root() + iszh('zh/') +'pure-concentrated-fulvic-acid"><li>' + FulvicAcid + '</li></a><a href="' + back2root()  + iszh('zh/') + 'hair-care"><li>' + hairCare + '</li></a></ul>';

		$(menu_product).append(submenuContent);

		$(menu_product + ', #subMenuProduct').mouseover(function(){
			$('#subMenuProduct').show();
		}).mouseout(function(){
			$('#subMenuProduct').hide();
		});
	}// subMenu_Product()

	function subMenu_Social(){
		var menuSocial	= '#block-system-main-menu li:nth-child(3)';		
		var socialize 	= '';
		var blog 		= '';
		var media 		= '';
		
		iszh() ? socialize	 = '動向' 		: socialize= 'socialize';
		iszh() ? blog		 = '博客'		: blog	 = 'blog';		
		iszh() ? media		 = '媒體報導' 	: media	 = 'media';		

		var submenuContent 	= '<ul id="subMenuSocial">';
			submenuContent +='<a href="'+ urlHome + iszh('/zh')+ '/socialize"><li>'+ socialize +'</li></a>';
			submenuContent +='<a href="'+ urlHome + iszh('/zh')+ '/blog"><li>'+ blog +'</li></a>';
			submenuContent +='<a href="'+ urlHome + iszh('/zh')+ '/media-report"><li>'+ media +'</li></a>';
			submenuContent += '</ul>';

		$(menuSocial).append(submenuContent);

		$(menuSocial + ', #subMenuSocial').mouseover(function(){
		
			$('#subMenuSocial').show();
		}).mouseout(function(){
			$('#subMenuSocial').hide();
		});
	}// subMenu_Social()
	
	function subMenu_about(){
		var menuSocial	= '#block-system-main-menu li:nth-child(2)';
		var about 		= '';
		var news 		= '';
		var contact		= '';
		var location	= '';
		iszh() ? about = '關於我們' : about = 'about us';
		iszh() ? news = '最新消息' : news = 'news';
		iszh() ? contact = '聯絡我們' : contact = 'contact';
		iszh() ? location = '分銷點' : location = 'Point of sale';

		var submenuContent 	= '<ul id="subMenuAbout">';
			submenuContent +='<a href="'+ urlHome + iszh('/zh') +'/about-us"><li>'+ about +'</li></a>';
			submenuContent +='<a href="'+ urlHome + iszh('/zh') +'/contact"><li>'+ contact +'</li></a>';
			submenuContent +='<a href="'+ urlHome + iszh('/zh') +'/shop"><li>'+ location +'</li></a>';
			submenuContent +='<a href="'+ urlHome + iszh('/zh') +'/news"><li>'+ news +'</li></a>';
			submenuContent += '</ul>';

		$(menuSocial).append(submenuContent);

		$(menuSocial + ', #subMenuAbout').mouseover(function(){
			$('#subMenuAbout').show();
		}).mouseout(function(){
			$('#subMenuAbout').hide();
		});
	}// subMenu_about()

	function menu_lang(){
		$('#menu_lang').attr('href',lang_io());
	}

	/*	Panel
	----------*/
	wrapHome2logo();
//	menuConvert();
	subMenu_doc();
	subMenu_Product();
	subMenu_Social();
	subMenu_about();
	appendFBdom();
	cartMouseover();
	menu_lang();
}

function lang_io(){
		var base_url		= window.location.pathname;	// window.location.pathname.split( '/' )
		var base_url_Array 	= base_url.split( '/' );
		var iszh			= base_url.indexOf('zh');	// window.location.pathname.split( '/' ).indexOf('zh')
		var start_arr 		= '';
		var pure_path_tail	= '';
		var go_url			= '';
		var tail			= '/';

		if(isLH()){
			iszh > 0 ? start_arr = iszh : start_arr = 2;		// Chi : Chi
		}else{
			iszh > 0 ? start_arr = iszh + 1 : start_arr = 1;	// Chi : Eng
		}

		for(var i = start_arr; i < base_url_Array.length; i++){
			if(i == (base_url_Array.length-1)) tail = '';
			pure_path_tail += base_url_Array[i] + tail;
		}

		if(iszh > 0){	// Go en
			if(isRoot()){	// Page.Index
				go_url = urlHome;				// [OK]
			}else{			// Page.Other
				go_url = urlHome + '/' + pure_path_tail;	// LH[OK], 
			}

			/* Redirect logo href */
			$('#logo_img').parent('a').attr('href',(urlHome + '/zh'));
		}else{			// Go zh
			go_url = urlHome + '/zh/' + pure_path_tail;
		}
		
		return go_url;
}// !lang_io()

function page_products(){	/* CSS description & price for this page only */
	function mobile_img_fit(){	// Have not make responsive 
		var win_width = $(window).width();

		if(win_width < 400){
			$('li.views-row > article > div.content')
				.css({'margin-left':'10px'});
				$('article').css({'padding-top':'0px','margin-top':'0px'});
				$('figure.field-name-field-images img').width(300)
					.css({'right':'50px','top':'50px','position':'relative'});
				$('.views-row-2, .views-row-8').css({'top':'-100px','position':'relative'});
				$('.views-row-2 img, .views-row-8 img').css('top','220px');
		}
	}
	
	var cssStr = {'color':'lightseagreen', 'margin':'0 0 -40px 0px', 'padding':'0 20px 5px 0px','font-size':'20px', 'width':'400px','position':'relative'};

	$('.field-type-commerce-price').css(cssStr);
	$('.all-products > li').mouseover(function(){
//		$(this).children('.view-display-products li header h2').css('border-color','#00aed9');
		// todo...

	});

	product_zh('all');
	//this_responsive();
	mobile_img_fit();
}

function page_haircare(){	/* CSS description & price */
	product_zh('all');
}

function page_product_bigImg(){
// Ref: http://www.elevateweb.co.uk/image-zoom/examples
	var bigImg = $('.node-product-type .cloud-zoom-container #wrap img');	// Only 1pc
	var smallImg = $('.cloud-zoom-processed').not('#cloud-zoom');			// Many

	/* Initial event */
	bigImg.attr('data-zoom-image',function(){
		var bigImgPath = $(this).attr('src');
		return bigImgPath;
	}).elevateZoom({
		responsive: true,
		zoomWindowOffetx: 50,
		scrollZoom: true,
		lensColour: 'green',
		cursor: 'crosshair',
		lensSize: 100,
		tintOpacity:1
	});

	/* Click to update zoom source */
	smallImg.click(function(){
		var thisHref = $(this).attr('href');

		bigImg.attr('data-zoom-image',thisHref);
		bigImg.elevateZoom(function(){return false;});
	});


/* 	$('.node-product-type .cloud-zoom-container #wrap a')
		.attr('href','#')	// Disable click event
		.mouseover(function(){
			var bigImgPath = $(this).children('img').attr('src');
			$(this).append('<div id="imgEnlarge"><img src="'+bigImgPath+'"></div>')
		})
		.mouseout(function(){
			$('#imgEnlarge').remove();
		});	 */
}

function indexCtrl(){
	var img = $('.views-field-field-image img');

	if(isIE()){
		// ToDo: no idea how to extend <input> width in IE..	///
		/* Slider description BG adjust */
		var sliderDIV 	= {'background':'transparent',
						   'filter':'progid:DXImageTransform.Microsoft.gradient(startColorstr=#7F000000,endColorstr=#7F000000)',
						   'zoom': 1};

		$('#block-views-demo-content-slideshow-block-1 .views-field-nothing span.field-content')
			.css(sliderDIV);
	}	// !isIE()

	$('#section-footer').hide();	// Hide footer
	slideFitScreen(img);	// Make slide aligh@bottom
	sliderResize(docWidth, docHeight);
	slideDivPos();
	sliderTextInsert();

	var top = '';
	if(isLH()){
		if(window.chrome){
			top = '-50px';
		}else{
			top = '-30px';
		}
	}else{	// Server side
		if(window.chrome){
			top = '-95px';
		}else{
			top = '-75px';
		}



	}


	if(docWidth < 740)	$('.views-field-field-image img').css('top',top);	// Not yet killed resize perform

// !indexCtrl()

	function appendBG(){	// Not using, old code

		$('body').css({
			   'background':'url("profiles/commerce_kickstart/themes/commerce_kickstart_theme/images/bgPhoto.jpg") no-repeat center center fixed',
				  '-webkit-background-size'	:'cover',	// Safari and Chrome
				  '-moz-background-size'	:'cover',	// Firefox
				  '-o-background-size'		:'cover',	// Opera
				  'background-size'			:'cover'
			});
	} // !appendBG()
//	appendBG();
}

if($('#zone-user-wrapper').height() > 50){} // working ///

function slideFitScreen(aim){
	if(isWideScreen() == true){		// Slider max width
		/* NOT wide window */
		var topPX	= docHeight - 808;

		aim.width(docWidth);
		aim.css('height','auto');
		aim.css('top',topPX);
	}else{							// Slider max height
		/* This is wide window */
		if(docWidth > 740){
			isLH() == true ? topPX = -40 : topPX = -65;
		}else{
			topPX = -105;		// working ///
		}

		aim.height(docHeight)
			.css({'width':'auto','top':topPX});
		$('body').css('over-folw','hidden').height(0);
	}
}

function sliderResize(docWidth, docHeight){
	var img = $('.views-field-field-image img');
	var imgWidth 	= 1500;	// Source from pic file. Radio: 16
	var imgHeight 	= 938;	// Source from pic file. Radio: 10
	var cssInitial	= {'min-height':'none', 'min-width':'none','max-width':'none','max-height':'none'};

	img.css(cssInitial);
	cl('Doc W:'+docWidth);
	cl('Doc H:'+docHeight);
}

/*	Debug
----------	*/
function debug(){
/* if(isLH()) return 1; */
return 0;
}

/*	Lab
--------------------	*/
function isWideScreen(){	// for browser test
	var w 				= $(document).width();
	var h 				= $(document).height();
	var browser_rate	= Math.round((w / h)* 10) / 10;

	if(browser_rate > 1.6){
		cl('wide screen: ' + browser_rate);
		return true;	// Slider choose max width
	}else{
		cl('Not wide: ' + browser_rate);
		return false;	// Slider choose max height
	}
}


function runSLider2(){	// Not use now
	var jsScript_n_css = '<script src="Temp/jquery.bxslider.js"></script><link href="Temp/jquery.bxslider.css" rel="stylesheet" />';
	var autoStart = '';
	isLocalhost() == true ? autoStart = 0 : autoStart = 1;	// [e] /// remove when af debug

	$('head').append(jsScript_n_css);

	var slider = $('.event-slider').bxSlider({
			mode		: 'fade',
			auto		: autoStart,
			startSlide	: 0,	// ORG
			responsive	: false
		}
	);
}

function bunSlider(plusplus){
	var sliderQty = $('.event-slider > li').length;
	var nowSlider = plusplus % sliderQty + 1;

	$('.event-slider > li').fadeOut();								// Hide all slide
	$('.event-slider li:nth-child(' + nowSlider + ')').fadeIn();	// Show this slide

}

function slider2(){	// Ref: bxslider.com | 1.蘆薈, 2.小草, 3.蘆薈田
	/* .bx-viewport = frame						*/
	/* .views-field-field-image = Ctrl img size */

	var i = '';
	var startSlide = '';

	isLH() == false ? startSlide = 1 : startSlide = 1;	// for debug

		/* Initial hide slider exclude the 1st*/
	$('.event-slider').children('li').not($('.event-slider > li:nth-child('+ startSlide +')')).hide();
		/* Click to next slide */
	$('.views-field-field-image img').click(function(){
		i++;
		bunSlider(i);
	});

	$('.event-slider li span')
		.mouseover(function(){
			window.clearInterval(autoNext)
		})
		.mouseout(function(){
	});

	if(isLocalhost() == false){	// Remove after debug ///
		var autoNext = self.setInterval(function() {	// Auto next slide
							i++;
							bunSlider(i);	// auto Start (autoStart)
						}, 4000);			// 7000 is nice
	}

		/* Kill bug for slide content box show all onload problem  */
	$('#block-views-demo-content-slideshow-block-1 .views-field-nothing').attr('style','display:block!important;');
	$('#block-views-demo-content-slideshow-block-1 .event-slider .views-field-nothing').show();

		/* Kill bug for slider auto click to redirect */
//	$('#views-exposed-form-display-products-page').empty();
}

function sliderTextInsert(){
	function sliderBox(e){
		return $('#block-views-demo-content-slideshow-block-1 .views-row-' + e + ' .views-field-nothing span.field-content');
	}

	var slideHeadline 	= new Array();	// Start from [1]
	var slideContent 	= new Array();	// Start from [1]

	slideHeadline[1]	= 'A Natural Miracle';
	slideHeadline[2]	= '<span id=\"sliderTitle\">Avantari</span>Preserve & Nourish';
	slideHeadline[3]	= 'Fulvic Acid Essence';

	slideContent[1] = "<div class=\"sliderContent\">At I.S. Natura, we believe the Earth contains a perfect balance of all the nutrients your body needs.  I.S. Natura decodes Mother Nature’s most powerful secrets and extracts the finest and purest natural essences. All major ingredients are of USA-Arizona Desert and Mexico origin.</div>";
	slideContent[2] = "<div class=\"sliderContent\">AVANTARI, a collection inspired by the natural detoxification, is formulated with Fulvic Acid, Aloe Essences and Organic plants essential oil. AVANTARI offers a range of products: <p style=\"margin:10px 0 0 0;\"><a href=\"products\"><span class=\"seeMore\">See More…</span></a></div>";
	slideContent[3] = "<div class=\"sliderContent\">– nature’s miracle detox – is scientifically proven by international organizations as one of the most powerful natural antioxidants and free radical scavengers known.<ol id=\"sliderOL\"><li>● Neutralize and detoxify harmful toxins, pollutants, and heavy metals.</li><li>● Resist Radiation</li><li>● Nature’s Antioxidant</li><li>● Optimize Metabolism</li><li>● Enhance Nutrient Absorption </li></ol><a href=\"Science\"><span class=\"seeMore\">See More…</span></a>";

		for(var i = 1; i < slideHeadline.length; i++){
			sliderBox(i).html(slideContent[i]).prepend('<em>' + slideHeadline[i] + '</em><br>');
	}
}

function slideDivPos(){
	var topPX 	= '';
	var leftPx 	= '';

	/* Slide1.Aloe */
	docHeight > 380 ? topPX = docHeight - 414 :  topPX = docHeight - 318;
		$('#block-views-demo-content-slideshow-block-1 .views-row-1 .views-field-nothing').css('top',topPX +'px');
		$('#block-views-demo-content-slideshow-block-1 .views-row-1 .views-field-nothing span').css('right','50px');

	/* Slider2.Farm */
	leftPx = docWidth - 500 ;
		$('#block-views-demo-content-slideshow-block-1 .views-row-2 .views-field-nothing span.field-content')
			.css('left',leftPx + 'px');

	/* Slide3.Flower */
	topPX = docHeight - 500;
		$('#block-views-demo-content-slideshow-block-1 .views-row-3 .views-field-nothing span.field-content')
			.css('top',topPX + 'px');
}

/* Paypal payment Lab
--------------------	*/
function updateEveryRow(){
	$('#edit-submit').hide();						// Hide submit btn
	$('.views-field-edit-quantity').width(100);

	var update_cart = '';
	pathExist('zh') == true ? update_cart = '更新' : update_cart = 'Update Cart';
	$('.form-text').parent().append('<a href=#><span class="updateCart">'+ update_cart +'</span></a>');
	$('.updateCart').click(function(){
		$('#edit-submit').trigger('click');
	});
}

function checkout_insertImg(){
	$('#commerce-checkout-form-checkout table thead tr').prepend('<th></th>');	// IMG thead th

	/* Count TTL <tr> in table */
	var countTR = true;
	var i 		= 1;

	while(countTR != 0){
		countTR = $('#commerce-checkout-form-checkout table tbody tr:nth-child(' + i + ')').length;
		i++;
	}
	var ttlTR = i - 2;		// 1 for initial, 1 for last zero result

	/* */
	var productText = '';

	for(var i = 1; i <= ttlTR; i++){
		productText = $('#commerce-checkout-form-checkout table tbody tr:nth-child('+i+') td:first-child').html();
		productText = $.trim(productText);
		if(getProductImg(productText) != false){
			$('#edit-cart-contents table > tbody > tr:nth-child('+i+')')
				.not('.commerce-price-formatted-components')
				.prepend('<td>'+imgWrap(getProductImg(productText))+'</td>');
				$('.commerce-price-formatted-components tbody tr td:first-child').hide();	// Special for avoid gwaai bug (lowB)
		};
	}
	
	/* Act 2: Field.Supplement I/O */
	function supplement_field_io(){		
		/* RePosition of Field.Supplement */
		jQuery('#edit-customer-profile-billing-field-source-from-supplement-und-0-value')
			.appendTo(jQuery('#edit-customer-profile-billing-field-source-from-ref-und').parent());		
	}// !supplement_field_io()
	
	supplement_field_io();
}

function blog_refine(){
	function page_news(){
		/* Page.News(list) */
		var this_path = window.location.pathname;
		var path_news = ['/f/news', '/f/news-zh', '/news', '/news-zh', '/zh/news-zh', , '/zh/news'];

		if(path_news.indexOf(this_path) > -1){
			jQuery('.view-content > .views-row').width('100%');	// Box width
			jQuery('.field-name-field-blog-category').hide();	// Cat
			jQuery('.node-links').css('float','right');		// btn.Read more
			jQuery('.comment-comments a').text('').attr('title','Read More');			// Comment remove '0'
			jQuery('article').css('margin-bottom','50px');		// More space for every news
		}

		/* Page.News(detail) */
		var cat_ans = jQuery('.field-name-field-blog-category .field-items').text();
		if (cat_ans == 'news'){
			jQuery(this).parent().hide();
		}
	}

	/*	Panel
	----------	*/
	page_news();

	$('#block-system-main').css('padding','0px 30px 0px 10px');
	$('article').css('font-size','15px');
	$('article h2 a').css('font-weight','bold');

	blog_translate();
}

function blog_translate(){
	if(pathExist('zh')){
		// Page.Blogs
		$('.field-name-field-blog-category .field-label').text('分類：');	// Category
		$('.field-name-field-tags .field-label').text('標纖：');			// Tag
	}
}

function submitRefine(){
	$('#edit-submit').css({'background-image':'none','text-indent':'40px'}).val('Submit');
}// !submitRefine()

/* Sidebar */
function sb_append(){	// sidebar
	function this_iszh(e){
		if (!e) { e = true; }

		if(pathExist('zh') == true){
			return e;
		}else{
			return '';
		}
	}
	var	str = '';
	str	= '<div class="sideTool toolbar" id="s_toolbar">';

	/* 0. Language toggle */
	if(true){	// I/O option for isLH()
		var base_url	= window.location.pathname;
		var iszh		= base_url.indexOf('zh')
		var kill_digi	= '';
		var path_Aaray	= '';
		var ico_zh		= urlHome+'/profiles/commerce_kickstart/themes/commerce_kickstart_theme/images/ico_lan_c.png';
		var ico_en		= urlHome+'/profiles/commerce_kickstart/themes/commerce_kickstart_theme/images/ico_lan_bw.png';
		var ico_lang	= '';
		var ico_shop		= urlHome+'/profiles/commerce_kickstart/themes/commerce_kickstart_theme/images/ico_shop_bw.png';

		if(iszh < 1){	// Go zh *****
			var lang_text = '繁體中文';
			base_url = 'zh' + base_url;
			var base_url_Array = base_url.split( '/' );

			/* Path adjust */
 			isLH() == true ? path_array = 2 : path_array = 1;
			base_url = 'zh/' + base_url_Array[path_array];

			/* Icon adjust */
			ico_lang = ico_zh;
		}else{			// Go en *****
			var lang_text = 'English';

			/* Path adjust */
			if(isLH() == true){
				kill_digi	= 5;
				var prefix	= '/f';
			}else{
				kill_digi = 3;
				var prefix	= '';
			}

			base_url = prefix + base_url.substring(kill_digi);

			/* Icon adjust */
			ico_lang = ico_en;

		}// !Go zh

		str += '<a href="'+ lang_io() +'">';
		str	+= '<div class="social-icon lan_option button">';
		str += '<div class="lang_text">'+ lang_text +'</div></div>';
		str	+= '</a>';
	}

	/* 1. Shop ///todo */
	str += '<a href="' + urlHome + this_iszh('/zh') + '/shop" >';
	str	+= '<div class="social-icon shop button"></div>';
	str	+= '</a>';	
	/* 2. Facebook */
	str += '<a href="https://www.facebook.com/isnatura" target="_blank">';
	str	+= '<div class="social-icon facebook button"></div>';
	str	+= '</a>';

	/* 3. Contact */
	if(pathExist('zh')){
		str	+= '<a href="zh/contact">';
	}else{
		str	+= '<a href="/contact">';
	}
    str	+= '<div class="tool_email social-icon email button"></div>';
    str	+= '</a>';

	/* 4. Tel */
	str += '<a href="tel:+85235159868">';
    str += '<div class="tool_phone social-icon phone button">';
	str += '<div class="telNum">(852) 3515 9868</div>';
    str += '</div>';

	/* 5. Scroll to top */
	str += '<a><div id="scroll2top"></div></a>';

	str	+= '</div>';

	$('body').append(str);

	/* Ico fit */
	jQuery('.lan_option').css('background-image','url("'+ico_lang+'")');
	
	function sb_responsive(){
		function sb_go_responsive(){
			var win_width = $(window).width();
			var right = '';
			
			win_width < 740 ? right = '0px' : right = '20px';
			$('.sideTool').css('right', right);
		}// !sb_go_responsive()
		
		$(window).resize(function(){
			sb_go_responsive();
		});
		
		sb_go_responsive();
	}// !sb_responsive
	
	sb_responsive();
}//! sb_append()

function sb_text_io(e){
	$(e).mouseover(function(){
		$(this).children().show();
	})
	.mouseout(function(){
		$(this).children().hide();
	});
}// !sb_text_io()
function sb_action(){
	sb_text_io('.tool_phone');
	sb_text_io('.lan_option');

	$('#scroll2top').click(function(){
		$('html,body').animate({scrollTop:0});
	});
}// !sb_action()

function sb_hide_contact_Ico(){
	$('.sideTool .email').hide();
}// !sb_hide_contact_Ico()
/* !Sidebar */

function imgWrap(e){
	var path = back2root() + 'include/img/' + e;
	return	'<img src="' + path + '" class="checkProductImg">';
}

function getProductImg(e){
	e = e.toUpperCase();
	switch(e){
		case 'PURE CONCENTRATED FULVIC ACID':
			return 'FulvicAcid_s.jpg';				break;
		case 'HAIR TREATMENT II':
			return 'Two_s.jpg'; 					break;
		case 'AVANTARI RENATURATION CONDITIONER':
			return 'Conditioner_s.jpg'; 			break;
		case 'SCALP CARE':
			return 'One_s.jpg'; 					break;
		case 'AVANTARI REGENERATING SHAMPOO':
			return 'Shampoo_s.jpg'; 				break;
		case 'AVANTARI REJUVENATING SHAMPOO AND CONDITIONER':
			return 'pg01_s.jpg';				 	break;
		case 'AVANTARI RE2 HAIR CARE SET':
			return 'pg02_s.jpg'; 					break;
		case '3 STEP KIT':
			return 'pg03_s.jpg'; 					break;
		default:
			return false;
	}
}

function product_zh(e){	// Eng & Chi convert
	if(pathExist('zh')){
		var productArr = [	['avantari-regenerating-shampoo', 'Avantari Regenerating Shampoo', '再生洗髮乳'],
							['avantari-renaturation-conditioner', 'Avantari Renaturation Conditioner', '護理潤髮乳'],
							['scalp-care', 'Scalp Care', '頭皮護理精華'],
							['hair-treatment-2', 'Hair Treatment II', '深層護髮精華 II'],
							['pure-concentrated-fulvic-acid', 'Pure Concentrated Fulvic Acid', '富里酸精華素'],
							['avantari-rejuvenating-shampoo-and-conditioner', 'Avantari Rejuvenating Shampoo and Conditioner', ' 洗護套裝'],
							['avantari-re2-hair-care-set', 'Avantari Re2 Hair Care Set', '護髮套裝 4 件'],
							['3-step-kit', '3 Step Kit', '3 件套装']
						];	// Row Ref: [0][0], [0][1], [0][2]

		if(e == 'all'){	// page.products
			$('.all-products h2').each(function(){
				var thisTitle = $.trim($(this).text());
				for (var i=0; i < productArr.length; i++){
					if(thisTitle == productArr[i][1]) $(this).text(productArr[i][2]).css('font-size','15px');
				}
			});
		}else{
			$("label[for='edit-quantity']").text('數量').css({'font-size':'13px','font-weight':400});

			var title = '';
			for (var i=0; i < productArr.length; i++){
				pathExist(productArr[i][0]) == true ? title = productArr[i][2] : title = title;
			}

			$('#block-system-main header').html('<h3>' + title + '</h3>');
		}
	}
}

function diy_footer(){
	if(isLH() == false){
		if(iszh()){
			var i  = 1;
			var zh = '/zh';
		}else{
			var i = 0;
			var zh = '';
		}
		var menu_name = [
							['Company Info','公司簡介'],			// [0]
							['about us','關於我們'],
							['News','最新消息'],			// [2]

							['Service & support','服務與支援'],		// [3]
							['Terms and Conditions','條款及細則'],
							['FAQ','常見問題'],

							['Security & privacy','保安及私穩'],	// [6]
							['Terms of use','使用條款'],
							['Privacy Policy','私穩政策'],

							['Shipping & returns','送貨及退貨'],	// [9]
							['Return and Exchange','退貨及換貨'],
							['Shipping and Delivery','物流配送']
						];

		var html = ' <div class="block block-menu block-menu-footer-navigation block-menu-menu-footer-navigation odd block-without-title" id="block-menu-menu-footer-navigation">  <div class="block-inner clearfix">                    <div class="content clearfix">      <ul class="menu"><li class="first expanded"><span class="nolink">'+ menu_name[0][i] +'</span><ul class="menu"><li class="first leaf"><a href="'+ zh +'/about-us">'+ menu_name[1][i] +'</a></li><li class="last leaf"><a href="'+ zh +'/news'+iszh('-zh')+'">'+ menu_name[2][i] +'</a></li></ul></li><li class="expanded"><span class="nolink">'+ menu_name[3][i] +'</span><ul class="menu"><li class="first leaf"><a href="'+ zh +'/terms-and-conditions">'+ menu_name[4][i] +'</a></li><li class="last leaf"><a href="'+ zh +'/faq">'+ menu_name[5][i] +'</a></li></ul></li><li class="expanded"><span class="nolink">'+ menu_name[6][i] +'</span><ul class="menu"><li class="first leaf"><a href="'+ zh +'/terms-of-use">'+ menu_name[7][i] +'</a></li><li class="last leaf"><a href="'+ zh +'/privacy-policy">'+ menu_name[8][i] +'</a></li></ul></li><li class="last expanded"><span class="nolink">'+ menu_name[9][i] +'</span><ul class="menu"><li class="first leaf"><a href="'+ zh +'/return-and-exchange">'+ menu_name[10][i] +'</a></li><li class="last leaf"><a href="'+ zh +'/shipping-and-delivery">'+ menu_name[11][i] +'</a></li></ul></li></ul>    </div>  </div></div> ';

		$('#block-menu-menu-footer-navigation').html(html);
	}
}

function lang_hack(){
	if(pathExist('checkout')){
		var shipping_zh		= [	['Hong Kong Shipping: 2 - 3 business days','香港送遞送貨：2-3 個工作天','HK$15.00'],
								['Hong Kong Free Shipping: 2 - 3 business days','香港免費速遞送貨','HK$0.00'],
								['China Shipping: 3 - 7 business days', '中國速遞送貨：3-7 個工作天','HK$15.00'],
								['China Free Shipping: 5 - 8 business days','中國免費速遞送貨','HK$0.00'],
								['Taiwan Shipping: 3 - 4 weeks(Not available for air shipment)','台灣海運送貨：3-4 星期（不適用於空運）','HK$50.00'],
								['Taiwan Free Shipping: 3 - 4 weeks(Not available for air shipment)','台灣免費海運送貨：3-4 星期（不適用於空運）','HK$0.00'],
								['International Shipping: 2 - 3 weeks days','','HK$50.00']
								];

		if(pathExist('shipping')){	// Step 2: shipping option
			var shipping_option = $.trim($('#edit-commerce-shipping-shipping-service label').text());	// Page.shipping option
		}
		if(pathExist('shipping')){	// Step 3: review
			var shipping_review	= $('.component-type-flat-rate-china-shipping .component-title').text();
		}
		if(pathExist('orders')){

		}
	}
}// !lang_hack()

function media_refine(){
	$('.node-links').css('float','right');		// btn.Read more
	$('.comment-comments a').text('').attr('title','Read More');			// Comment remove '0'
	$('article').css({'border-bottom':'1px solid lightgray', 'padding':'0 20px 20px 30px', 'margin-bottom':'20px'});
	
	if(!iszh()) $('.breadcrumb').text('home » media');
	blog_translate();
	$('.feed-icon').hide();	// Hide RSS icon
}

function page_product(){
	function product_tab(){
		$('.tabIndex:first-child a').css({'padding-top':'15px','top':'0px','background-color':'transparent'});
		$('.tabIndex a').mouseover(function(){
			var tagPos = $(this).parent().index();	// Start from [0]
			if(pathExist('pure-concentrated-fulvic-acid') || pathExist('avantari-re2-hair-care-set')
							|| pathExist('3-step-kit') ){
							// nth happen, fastest debug @_@
			}else{
				tagPos++;							// Adjust it start from [1]
			}

			$('.tabIndex a')						// Clear tab
				.css({'paddingTop':'10px','background-color':'#EEEEEE','top':'-1px','position':'relative','z-index':'0'});
			$('.tabContent').hide();				// Clear old content
			$(this)									// Tag selected
				.css({'padding-top':'15px','top':'0','background-color':'transparent','z-index':'1'});
			$('.tabContent')						// Show content depend on tab
				.eq(tagPos).show();					// Start from [1]
		});
	}// !product_tab()
	
	function page_product_wrap(){
		// Wrap SKU & $Price
		// Then append after org element
		var overlay = $('.commerce_add_to_cart_confirmation_overlay').length;

		$('.read-more a').trigger('click');
		$('.read-less').hide();
		$('.ui-spinner-buttons').css({'left':'73px','top':'31px'});

		// Wrap (1)SKU(extra-field) (2)Volume (3)Price
			 $('.commerce-product-extra-field, .field-name-field-my-product-volume, .commerce-product-field-commerce-price').wrapAll('<div id="productWrapL" style="display:inline-block; line-height:40px; width:200px; margin:-30px 0 20px 0;"></div>');

			$('#productWrapL')						// Append down element to upper right
				.after($('.field-type-commerce-product-reference').append());

			$('#edit-quantity, #edit-submit')		// Wrap top-right
			.wrapAll('<div id="qtyNadd2cartWrap" style="float:left; margin-bottom:5px; width:450px;"></div>');

			$('.cloud-zoom-gallery-thumbs')			// Append social icon under IMG
				.after($('.service-links')).append();

			$('#wrap > a').width(350);
	}// !page_product_wrap()
	
	function page_product_lightbox_btn_continue(){
		var btn_continue = $('div.messages.commerce-add-to-cart-confirmation .message-inner .button-wrapper .button.continue .commerce-add-to-cart-confirmation-close');

		btn_continue.click(function(){
			page_product_wrap();
		});
	}// !page_product_lightbox_btn_continue()

	function product_go_responsive(){
		var win_width = $(window).width();
		if(win_width < 980){
			$('#edit-quantity').css('display','block');	// input [qty]
			$('#edit-submit').css({'float':'left','margin-top':'10px'});	// btn [add to cart]
			$('.service-links').width(100);	
		}
		if(win_width < 500){	// Mobile
				$('.tabUL').width(260).css('font-size','12px');				// Tab
				$('.htmltabs > div').width(200);	// Content: Fit w/ iTouch
				$('.tabUL > li:first-child, .tabUL > li:nth-child(2)').css({'top':'-11px','position':'relative'})
				$('.tabUL > li:last-child').css('padding-left','10px');
		}else{					// Desktop
				$('.tabUL > li:first-child, .tabUL > li:nth-child(2)').css({'top':'0px','position':'relative'}).css('font-size','10px');
				$('.htmltabs > div').width(410);
				$('.tabUL > li:last-child').css('padding-left','0px');
				$('.tabUL').width('100%');
		}
	}// product_responsive()
	
	function product_responsive(){
		product_go_responsive();	// Initial
		
		$(window).resize(function(){
			product_go_responsive();
		});
	}// product_responsive()

	/* New */
	product_zh();
	/* 		*/
	
	$('figure').height('auto');				// Kill layout bugs for mobile device
	product_tab();							// Call 1 time only ***
	page_product_wrap();					// Wrap ORG element *** /// working
	page_product_lightbox_btn_continue();	// Call 1 time only
	
	product_responsive();
}

/* Page Ctrl
--------------------	*/
function pageOnly(){
//	if(isIndex() == true)	indexCtrl();								// Page.Index
	if(isIndex() == false){
 		sb_append();
		sb_action();
		diy_footer();
	}
	
	var product = ['pure-concentrated-fulvic-acid', 
					'hair-treatment-2',
					'scalp-care',
					'avantari-renaturation-conditioner',
					'avantari-regenerating-shampoo',
					'avantari-rejuvenating-shampoo-and-conditioner',
					'avantari-re2-hair-care-set',
					'3-step-kit'
				];	// Page.Product [Single]
				
	for(var i = 0; i < product.length; i++){
		if(pathExist(product[i]))	page_product();
	}
	
	if(pathExist('hair-care')) page_haircare();					// Page.HairCare
	if(pathExist('products')) page_products();					// Page.Products
	if(pathExist('cart') == true) updateEveryRow();
	if(pathExist('checkout') == true) checkout_insertImg();
	if(pathExist('blog') == true || pathExist('comment') == true) submitRefine();
	if(pathExist('blog') == true || pathExist('%E5%8D%9A%E5%AE%A2') == true || pathExist('news') == true ) blog_refine();
	if(pathExist('media') == true ) media_refine();
	if(pathExist('contact') == true ) sb_hide_contact_Ico();
}

/* Global var
--------------------	*/
	var docWidth 	= $(document).width();
	var docHeight	= $(document).height();
	window.width 	= $(document).width();	// Global var
	window.height	= $(document).height();	// Global var
/* Panel
--------------------	*/
	slider2();
	fixbar();
	responetive();
	pageOnly();	// e.g.: pageExist('abc')

	googleFonts();
	ieHack();
	lang_hack();

	$('#overlay-titlebar').hide();
	$('#breadcrumb > .breadcrumb > a').attr('href','http://www.isnatura.com.hk'+iszh('/zh'));	// Kill breadcrumb [Home] redirect bugs

//	if(isLH() == false) $('.error').parent().hide();	// gwaai methold to hide error

});// !Document.Ready