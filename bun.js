$(document).ready(function ($) {
/*	Global: Function
--------------------	*/
function elcBunny(){
	var interval 	= 1000;

	setInterval(function() {
		 $('.views-field-field-image img').trigger('click');
	}, interval);
}

function isLocalhost(){
	var e;
	document.location.hostname == "localhost" ? e = true : e = false;
	return e;
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
	function defaultRespone(){
		/* Default setup */ // ///
		

		/* Feed <select> onLoad */
		var str_m_menu = String('<select id="m_menu" style="width:auto; height:30px; top:0; float:left;"><option>-- Menu --</option><option value="History">history</option><option value="Science">science</option><option value="Ingredients">ingredients</option><option value="Products">product</option><option value="News">news</option><option value="contact">contact</option></select>');

		$('#block-system-main-menu').append(str_m_menu);		
		
		/* Redirect to menu's path by option click */
		$('#m_menu').change(function(){
			location.href = back2root() + $(this).val();
		});
		
		goResponetive(winWidth);
	}

	function winResize(){
		$(window).resize(function(){
			var winWidth = $(window).width();
			goResponetive(winWidth);
		});
	}
	var winWidth = $(window).width();

	function goResponetive(thisWidth){
		var w980		= 980;
		var w870 		= 870;
		var w740		= 740;
		var fbHeight 	= '';
		var optionBox	= '';		
		
		/* Fix slider.Flower margin-left */
		if(thisWidth < w980) 
			$('#block-views-demo-content-slideshow-block-1 .views-field-nothing span.field-content').css('left','50px');
		
		/* Menu <option> I/O */
 		if(thisWidth < w870){			
			$('#m_menu').show();		
			$('#region-user-first li').hide();
		}else{
			$('#region-user-first li').show();
			$('#m_menu').hide();
		} 
		
		/* Refine FB */
		var img = $('.views-field-field-image img');
		slideFitScreen(img);
 		if(thisWidth < w740){
//			isLH() == true ? fbHeight = 65 : fbHeight = 45;
		
		}else{
//			fbHeight = 50;
		}		
		$('#zone-user-wrapper').height(fbHeight); 
		
	}
	defaultRespone();	// this > goResponetive()
	winResize();		// this > goResponetive()
}

function fixbar(){
	function wrapHome2logo(){
		$('#logo').click(function(){window.location = urlHome;});
	}
	function mainMenuConvert(){		/* Add space between main menu text	*/
		function fbMenu(e,spaceQty){
			var tail = '';
			e == 'CONTACT' ? tail = '' : tail = '<span class="fbMenu_tail">/</span>';
			return	e + '&nbsp; &nbsp; &nbsp;' + tail;
		}

 		if(isAdmin() != true){
			$('#block-system-main-menu .menu li.leaf:last-child a').html(fbMenu('HISTORY',3)).one().end()
			.find('#block-system-main-menu li:nth-last-child(2) a').html(fbMenu('SCIENCE',1)).one().end()
			.find('#block-system-main-menu li:nth-last-child(3) a').html(fbMenu('INGREDIENTS',0)).one().end()
			.find('#block-system-main-menu li:nth-last-child(4) a').html(fbMenu('PRODUCT',0)).attr('href',productLink()).end()
			.find('#block-system-main-menu li:nth-last-child(5) a').html(fbMenu('NEWS',1)).end()
			.find('#block-system-main-menu li:nth-last-child(6) a').html(fbMenu('CONTACT',0));
		} 
	}
	function appendFBdom(){
		/*	Append	to sub menu	(manual insert script)*/
		var FBorgBlockID	= '#block-menu-menu-user-menu';
		var FBcartBlockID 	= '#block-views-shopping-cart-block';

		/*  Append icon: Cart */
		$('.block-shopping-cart-block .content')
		.append(function(){
			return '<img src="' + imgPath() + 'fb_ico_cart_white.png" id="ico_cart">'
		});

		/* Append: Sub-menu: Price */
		$('.view-shopping-cart')
		.appendTo(FBcartBlockID).wrap('<li class="fbSubMenu"></li>').wrap('<a href="cart"></a>')

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
	}
	function cartMouseover(){
		$('#ico_cart_wrapper, #fbMenuWrap>li').mouseout(function(){	// Hide/Show more easy to Ctrl
			if(debug() == false) $('#fbMenuWrap>li').hide();
		});
		$('.region-inner region-user-second-inner, #ico_cart_wrapper, #fbMenuWrap>li').mouseover(function(){
			$('#fbMenuWrap>li').show();
		});
	}
	function subMenu_Product(){
		var productTabID	= '#block-system-main-menu li:nth-child(3)';
		var submenuContent 	= '<ul id="subMenuProduct"><a href="pure-concentrated-fulvic-acid"><li>Fulvic Acid</li></a><a href="hair-care"><li>Hair Care</li></a></ul>';
 		
		$(productTabID).append(submenuContent);

		$(productTabID + ', #subMenuProduct').mouseover(function(){			
			$('#subMenuProduct').show();
		}).mouseout(function(){
			$('#subMenuProduct').hide();
		});
		
		
	}
	/*	Panel
	----------*/
	wrapHome2logo();
	mainMenuConvert();
	if(isLH() == true) {subMenu_Product()};	// [e] ///
	appendFBdom();
	cartMouseover();
}

function page_products(){	/* CSS description & price for this page only */
	var cssStr = {'background':'#e9e9e9', 'color':'lightseagreen', 'margin':'0 0 -40px 4px', 'padding':'0 20px 5px 20px','font-size':'20px', 'width':'400px','position':'relative','left':'-40px'};	// working ///
	
	$('.field-type-commerce-price').css(cssStr);
}

function page_haircare(){	/* CSS description & price */
//	$('.field-type-commerce-price').css({'background':'#e9e9e9', 'color':'lightseagreen', 'margin':'0 0 -40px 4px', 'padding':'0 20px 5px 20px','font-size':'20px', 'width':'400px','position':'relative','left':'-40px'});
	$('.page-hair-care .views-row-2').hide();	// !important not work that's y JS here [hidden: "Pure Concentrated Fulvic Acid"]
}

function page_product_bigImg(){
	$('.node-product-type .cloud-zoom-container #wrap a')
		.attr('href','#')	// Disable click event
		.mouseover(function(){
			var bigImgPath = $(this).children('img').attr('src');
			$(this).append('<div id="imgEnlarge"><img src="'+bigImgPath+'"></div>')
		})
		.mouseout(function(){
			$('#imgEnlarge').remove();
		});	
}

function page_productWrap(){
	// Wrap SKU & $Price
	// Then append after org element
 	var overlay = $('.commerce_add_to_cart_confirmation_overlay').length;
	
	if(overlay == 0){		// Avoid work@overlay cart process

	// Wrap (1)SKU(extra-field) (2)Volume (3)Price
		 $('.commerce-product-extra-field, .field-name-field-my-product-volume, .commerce-product-field-commerce-price').wrapAll('<div id="productWrapL" style="display:inline-block; line-height:40px; width:200px; margin:-30px 0 20px 0;"></div>');

		$('#productWrapL')						// Append down element to upper right
			.after($('.field-type-commerce-product-reference').append());

		$('#edit-quantity, #edit-submit')		// Wrap top-right
		.wrapAll('<div id="qtyNadd2cartWrap" style="float:left; margin-bottom:5px; width:450px;"></div>');

		$('.cloud-zoom-gallery-thumbs')			// Append social icon under IMG
			.after($('.service-links')).append();
	}
}

function product_tab(){
	$('.tabIndex:first-child a').css({'padding-top':'15px','top':'-1px'});
	$('.tabIndex a').mouseover(function(){
		var tagPos = $(this).parent().index();	// Start from [0]
			//tagPos++;							// Adjust it start from [1]
		$('.tabIndex a')						// Clear tab
			.css({'background':'transparent','paddingTop':'10px','background-color':'transparent','top':'0px','position':'relative'});
		$('.tabContent').hide();				// Clear old content

		$(this)									// Tag selected
			.css({'padding-top':'15px','top':'-1px'});
		$('.tabContent')						// Show content depend on tab
			.eq(tagPos).show();	// Start from [1]
	});
}

function indexCtrl(){
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
	indexResize();	
	sliderResize(docWidth, docHeight);
	slideDiv();
	sliderText();	
	
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

if($('#zone-user-wrapper').height() > 50){a();} // working ///

function indexResize(){
	function refineFBheight(docWidth, docHeight){
		var docWidth 	= $(document).width();
		var docHeight	= $(document).height();

		if(docWidth < 740){

		};
	}

	refineFBheight();

	$(window).resize(function(){
		var docWidth 	= $(document).width();
		var docHeight	= $(document).height();
		var img = $('.views-field-field-image img');

		cl('Doc: ' + docWidth + ' x ' + docHeight);
		refineFBheight();
		slideFitScreen(img);
		slideDiv();	// Todo ///
	});
}

function slideFitScreen(aim){
	if(docRadio() == false){		// Slider max width
		var topPX	= docHeight - 818;

		aim.width(docWidth);
		aim.css('height','auto');
		aim.css('top',topPX)
	}else{							// Slider max height
		if(docWidth > 740){
			isLH() == true ? topPX = -65 : topPX = -85;
		}else{
			topPX = -105;
		}

		aim.height(docHeight);
		aim.css({'width':'auto'});
		aim.css('top',topPX)
	}
}

function sliderResize(docWidth, docHeight){
	var img = $('.views-field-field-image img');
	var imgWidth 	= 1500;	// Source from pic file. Radio: 16
	var imgHeight 	= 938;	// Source from pic file. Radio: 10
	var cssInitial	= {'min-height':'none', 'min-width':'none','max-width':'none','max-height':'none'};

	img.css(cssInitial);
	slideFitScreen(img);

//	Math.round((imgWidth / imgHeight)* 10) / 10;	// Photo radio - 16 : 10
//	var centerAdjust = (imgWidth - docWidth) / 4;	// dunno why
//	img.css('left','-' + centerAdjust + 'px');		// Adjustment for 'left'
}

/*	Debug
----------	*/
function debug(){return 0;}

function serverOnly(){	// Not using
	if(isLocalhost() != true){}
}

function productLink(){	// kill it when completed page.product	///
	if(isLocalhost()){
		return 'products';
	}else{
		return urlHome;
	}
}

/*	Lab
--------------------	*/
function docRadio(){	// for browser test
	var w = $(document).width();
	var h = $(document).height();

	if(Math.round((w / h)* 10) / 10 > 1.6){
		return false;	// Slider choose max width
	}else{
		return true;	// Slider choose max height
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
			startSlide	: 0,
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
	
	isLH() == false ? startSlide = 1 : startSlide = 3;	// for debug
	
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
							bunSlider(i);	// auto Start
						}, 7000);			// 7000 is nice
	}

		/* Kill bug for slide content box show all onload problem  */
	$('#block-views-demo-content-slideshow-block-1 .views-field-nothing').attr('style','display:block!important;');
	$('#block-views-demo-content-slideshow-block-1 .event-slider .views-field-nothing').show();

		/* Kill bug for slider auto click to redirect */
//	$('#views-exposed-form-display-products-page').empty();
}

function sliderText(){
	function sliderBox(e){
		return $('#block-views-demo-content-slideshow-block-1 .views-row-' + e + ' .views-field-nothing span.field-content');
	}

	var slideHeadline 	= new Array();	// Start from [1]
	var slideContent 	= new Array();	// Start from [1]
	
	slideHeadline[1]	= 'A Natural Miracle';
	slideHeadline[2]	= '<span id=\"sliderTitle\">AVANTARI</span>Preserve & Nourish';
	slideHeadline[3]	= 'Fulvic Acid Essence';

	slideContent[1] = "<div class=\"sliderContent\">At I.S. Natura, we believe the Earth contains a perfect balance of all the nutrients your body needs.  I.S. Natura decodes Mother Nature’s most powerful secrets and extracts the finest and purest natural essences. All major ingredients are of USA-Arizona Desert and Mexico origin.</div>";
	slideContent[2] = "<div class=\"sliderContent\">AVANTARI, a collection inspired by the natural detoxification, is formulated with Fulvic Acid, Aloe Essences and Organic plants essential oil. AVANTARI offers a range of products: <p style=\"margin:10px 0 0 0;\"><span class=\"seeMore\">See More…</span></div>";
	slideContent[3] = "<div class=\"sliderContent\">– nature’s miracle detox – is scientifically proven by international organizations as one of the most powerful natural antioxidants and free radical scavengers known.<ol id=\"sliderOL\"><li>● Neutralize and detoxify harmful toxins, pollutants, and heavy metals.</li><li>● Resist Radiation</li><li>● Nature’s Antioxidant</li><li>● Optimize Metabolism</li><li>● Enhance Nutrient Absorption </li></ol><span class=\"seeMore\">See More…</span>";

		for(var i = 1; i < slideHeadline.length; i++){
			sliderBox(i).html(slideContent[i]).prepend('<em>' + slideHeadline[i] + '</em><br>');
	}
}

function slideDiv(){
	var topPX 	= '';
	var leftPx 	= '';
	
	docHeight > 380 ? topPX = docHeight - 414 :  topPX = docHeight - 318;	// Slide1.Aloe
		$('#block-views-demo-content-slideshow-block-1 .views-row-1 .views-field-nothing').css('top',topPX +'px');		
	
	leftPx = docWidth - 500 ;	// Slider2.Farm
		$('#block-views-demo-content-slideshow-block-1 .views-row-2 .views-field-nothing span.field-content')
			.css('left',leftPx + 'px');	
	
	topPX = docHeight - 500;	// Slide3.Flower
		$('#block-views-demo-content-slideshow-block-1 .views-row-3 .views-field-nothing span.field-content')
			.css('top',topPX + 'px');	
}

function page_product_lightbox_btn_continue(){
	var btn_continue = $('div.messages.commerce-add-to-cart-confirmation .message-inner .button-wrapper .button.continue .commerce-add-to-cart-confirmation-close');

	btn_continue.click(function(){
		page_productWrap();
	});
}

/* Paypal payment Lab
--------------------	*/
function btn_add2cart(){
	$('#edit-submit').click(function(){
		$('#add2paypalCart').submit();
		return false;
	});
}	

/* Page Ctrl
--------------------	*/
function pageOnly(){
	if(isIndex() == true)	indexCtrl();								// Page.Index
	if(pathExist('hair-care') == true) page_haircare();					// Page.HairCare
	if(pathExist('products') == true) page_products();					// Page.Products	
	if(	pathExist('pure-concentrated-fulvic-acid') == true || 			// Page.product	[Single]
		pathExist('hair-treatment-2') == true || 
		pathExist('hair-treatment-1') == true || 
		pathExist('avantari-renaturation-conditioner') == true || 
		pathExist('avantari-regenerating-shampoo') == true || 
		pathExist('avantari-rejuvenating-shampoo-and-conditioner') == true || 
		pathExist('avantari-re2-hair-care-set') == true || 
		pathExist('AVANTARI-rejuvenating-shampoo-and-conditioner') == true || 
		pathExist('AVANTARI-re2-hair-care-set') == true){	// Page.Product [Single]
		//page_product_bigImg();				// [e] ///
			page_productWrap();
			product_tab();							// Call 1 time only
			page_product_lightbox_btn_continue();	// Call 1 time only
//			btn_add2cart();
	}
}

/* Globle var
--------------------	*/
	var docWidth 	= $(document).width();
	var docHeight	= $(document).height();

/* Panel
--------------------	*/	
	slider2();
	fixbar();	
	responetive();
	pageOnly();
	
	googleFonts();
	ieHack();

});// !Document.Ready