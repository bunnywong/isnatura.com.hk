<link href="http://fonts.googleapis.com/css?family=EB+Garamond" rel="stylesheet" type="text/css">
<style>
#mobile_content{position:relative;text-align:left; padding:30px 20px 0 0px; display:none;}
#mobile_content p{text-align:justify;}
#science{border:1px red solid; border-radius:20px; padding:50px;}
#science div{border:1px gray solid; height:auto; padding:30px; width:500px;} /* /// */
#science div p:first-child:first-letter{font-size:200%;}
#science h3{font-size:12px; word-wrap:break-word; text-transform:lowercase; width:5px;}

.hideMe{background:transparent;}
.upMe{z-index:99;}
.tagMe{z-index:10;}

#page_science{border:1px solid gary; margin:-20px auto 0 auto; width:auto;}
#DNA_div{text-align:center; position:relative;}
#DNA_man{margin:0 auto 0 auto; position:relative; top:20px; width:550px; z-index:0;}
.scienceLayer{background:#66CC99; height:535px; margin-top:-519px; position:relative; width:0px; z-index:9;}
	.scienceLayerL{float:left; margin-left:-45px;}
	.scienceLayerR{float:right; margin-right:-45px;}

.scienceLayerInner{background:white; border-radius:20px; font-family: arial; height:426px; display:none; margin-top:30px; opacity:0.5; padding:30px; padding-top:10px; position:relative; width:0px; z-index:10; text-align:justify;}
	.scienceLayerInnerL{float:left; margin-left:30px;}
	.scienceLayerInnerR{float:right; margin-right:30px;}


.tag{background:#66CC99; cursor:pointer; height:125px; padding:5px; position:relative; width:35px;
	opacity:1;}
.tag img{height:auto; position:relative; width:35px;}

.tagL{border-left:0px; border-top:0px; border-radius:0 20px 20px 0; border:1px solid white; float:left;}
	#tagL1{margin-top:-520px;}
	#tagL2{margin-top:-420px;}
	#tagL3{margin-top:-320px;}
	#tagL4{margin-top:-220px;}
	#tagL5{margin-top:-120px;}
	#tagL5 img{position:relative; top:20px;}
.tagR{border-right:0; border-top:0; border-radius:20px 0 0 20px; border:1px solid white; float:right;}
	#tagR1{margin-top:-520px;}
	#tagR2{margin-top:-420px;}
	#tagR3{margin-top:-320px;}
	#tagR4{margin-top:-220px;}
	#tagR5{margin-top:-120px;}
	#tagR5 img{position:relative; top:20px;}
.sliderCloseAarow{top:45px; opacity:0.8;}

.scienceLayerInner > div{line-height:20px;}
<?php iszh('p, .scienceLayerInner div{font-size:15px;}'); ?>
</style>

<?php iszh('<style>#tagL5 img, #tagR5 img{top:0;}</style>'); ?>

<div id="page_science" class="page_content">
<div id="DNA_div"><script>function sc_imgPath2(e){alert(e);}</script>
	<img id="DNA_man" src="<?php iszh('../'); ?>profiles/commerce_kickstart/themes/commerce_kickstart_theme/images/sc/DNA_man.png">
	<div id="mobile_content">
	</div>
</div>
<div class="tag tagL" id="tagL1"><img src="<?php iszh('../'); ?>profiles/commerce_kickstart/themes/commerce_kickstart_theme/images/sc/TagText1_Introduction<?php iszh('_zh')?>.png"></div>
<div class="tag tagL" id="tagL2"><img src="<?php iszh('../'); ?>profiles/commerce_kickstart/themes/commerce_kickstart_theme/images/sc/TagText2_Detox<?php iszh('_zh')?>.png"></div>
<div class="tag tagL" id="tagL3"><img src="<?php iszh('../'); ?>profiles/commerce_kickstart/themes/commerce_kickstart_theme/images/sc/TagText3_Anti-Viral<?php iszh('_zh')?>.png"></div>
<div class="tag tagL" id="tagL4"><img src="<?php iszh('../'); ?>profiles/commerce_kickstart/themes/commerce_kickstart_theme/images/sc/TagText4_Antioxidant<?php iszh('_zh')?>.png"></div>
<div class="tag tagL" id="tagL5"><img src="<?php iszh('../'); ?>profiles/commerce_kickstart/themes/commerce_kickstart_theme/images/sc/TagText5_SuperCellConductor<?php iszh('_zh')?>.png" class="last"></div>

<div class="tag tagR" id="tagR1"><img src="<?php iszh('../'); ?>profiles/commerce_kickstart/themes/commerce_kickstart_theme/images/sc/TagText6_MoleculeStructure<?php iszh('_zh')?>.png"></div>
<div class="tag tagR" id="tagR2"><img src="<?php iszh('../'); ?>profiles/commerce_kickstart/themes/commerce_kickstart_theme/images/sc/TagText7_Sustainability<?php iszh('_zh')?>.png"></div>
<div class="tag tagR" id="tagR3"><img src="<?php iszh('../'); ?>profiles/commerce_kickstart/themes/commerce_kickstart_theme/images/sc/TagText8_Exercise<?php iszh('_zh')?>.png"></div>
<div class="tag tagR" id="tagR4"><img src="<?php iszh('../'); ?>profiles/commerce_kickstart/themes/commerce_kickstart_theme/images/sc/TagText9_Other<?php iszh('_zh')?>.png"></div>
<div class="tag tagR" id="tagR5"><img src="<?php iszh('../'); ?>profiles/commerce_kickstart/themes/commerce_kickstart_theme/images/sc/TagText10_MineralDeficiency<?php iszh('_zh')?>.png" class="last"></div>

<div class="scienceLayer scienceLayerL"><div class="scienceLayerInner scienceLayerInnerL">
</div></div>

<div class="scienceLayer scienceLayerR"><div class="scienceLayerInner scienceLayerInnerR">
</div></div>

</div>
<!--	!HTML	!-->





<script type="text/javascript" src="//code.jquery.com/jquery-git.js">;</script>
<script>
	function sc_iszh(e){
		if (!e) { e = true; }

		if(pathExist('zh') == true){
			return e;
		}else{
			return '';
		}
	}
	
function science(){


	function json_show(e){
		if(sc_iszh()){
			var jsonFile 	= "../js/json/scienceDetail_zh.json";
		}else{
			var jsonFile 	= "js/json/scienceDetail.json";
		}

		 $.getJSON(jsonFile, function(){
			$('.scienceLayerInner')							// Clear <div> then append Ajax load gif
				.html('<img src="' + sc_iszh('../') + 'includes/img/ajax-loader_s.gif" id="ingredients-ajaxLoad"">').end()
					.find('#ingredients-ajaxLoad').fadeIn(2000);	// FadeInAJAX.gif
		})
		.done(function( data ){
			$('.scienceLayerInner').html(
				'<h3 style="height:10px;">' + data.science[e].title.toUpperCase()  + '</h3>' + '<div>'+
				data.science[e].content + '</div>'
			)},function(){
//				$('.scienceLayerInner>h3').css("font-family","'EB Garamond', serif");
			}
		)
		.fail(function( jqxhr, textStatus, error) {	// Fail display in console.log
			var err = textStatus + ', ' + error;
			console.log( "Request Failed: " + err);
		});
	}
	function mirrorDirection(e){
		if(e == 'L'){
			return 'R';
		}else if (e == 'R'){
			return 'L'
		}else
		a('No direction found');
	}
	function sliderAarow_hover(){
		$('.sliderCloseAarow').hover(function(){
			a('aarow hovered');
		},function(){
			$(this).animate({'opacity':'0.8'});
		});
	}
	function tag_hover(){
		var hoverTitleSpeed = 400;
		$('.tag').hover(function(){
			$(this).css({'z-index':5,'background':'mediumseagreen'});	// Tag Ctrl

			var tagDirection = '';		// Get 'L' or 'R' from tag
			$(this).hasClass('tagL') ? tagDirection = 'L' : tagDirection = 'R';

			if(sliderIsShow() == false || mirrorDirection(tagDirection) == sliderIsShow()){			// Tag img Ctrn
				$(this).children('img').css('z-index',5).not('.last').animate({'top':'10px'},hoverTitleSpeed).animate({'top':'5px'},200);
			}
		},function(){
			$(this).css({'z-index':0,'background':'#66CC99'}).children('img').css('z-index',0);
			if(sliderIsShow() == false){
				$(this).children('img').not('.last').animate({'top':0},hoverTitleSpeed);
			}
		});
	}
	function sliderWidth(e){
		e == 'L' ? e = $('.scienceLayerL') : e = $('.scienceLayerR');
		var sliderWidth = e.css('width');		// Get div width
		var sliderWidthDigi = sliderWidth.replace('px','');		// Kill 'px'
			sliderWidthDigi = parseInt(sliderWidthDigi,10);		// Conver to int
		return sliderWidthDigi;
	}
	function sliderIsShow(e){
		if(sliderWidth('L') == 0 && sliderWidth('R') == 0){
			return false;
		}else if(sliderWidth('L') > 0){
			e = 'L';
		}else if(sliderWidth('R') > 0){
			e = 'R';
		}else{	// Debug
			e = a('Error of slideshow I/O detect');
		}
		return e;
	}
	function tag_click(){
		$('.tag').hover(function(){
			$(this).addClass('upMe');
		});

		$('.tagL, .tagR').click(function(){
			myIndex = $(this).index() - 1;	// Fit to [0] to start
			var tagSpeed1 = 500;

			var tagDirection = '';		// Get 'L' or 'R' from tag
			$(this).hasClass('tagL') ? tagDirection = 'L' : tagDirection = 'R';

			/*	Expand & min slider	*/
			var sliderStatus = ''
			var frameWidth					= '';
			var innerWidth					= '';
			var innerOpacity 				= '';
			if(sliderIsShow() == false){					// Go Expand Slider
				sliderStatus = 'on';
				frameWidth					= '460px';
				innerWidth					= '340px';
				innerOpacity				= 1;
				$('.tag'+tagDirection).not(this)				// Ctrl another tab
					.css('background-color','transparent') 			// Hide tab (Max speed)
					.children('img').fadeOut();
			}else{											// Go Hide Slider
				sliderStatus = 'off';
				frameWidth					= 0;
				innerWidth					= 0;
				innerOpacity				= 0;
				$('.tag'+tagDirection).not(this)			// Tag Ctrl
					.css('background-color','#66CC99')
//					.animate({backgroundColor:'#66CC99'},500)	// Release show tag (0.5sec effect)
					.children('img').fadeIn();
			}

			/*	L & R slider selection	*/
			var sliderFrameSelect = '';
			var sliderInnerSelect = '';

			var DNA_Action = '';
			var DNA_Opacity = '';
			isIE() ? DNA_Opacity = 0.1 : DNA_Opacity = 0.5;
			var frameAction = '';
			var innerAction = '';
			var sliderDirection = ''
			var DNA_man_margin = 300;

			if(tagDirection == 'L'){
				sliderFrameSelect = '.scienceLayerL'
				sliderInnerSelect = '.scienceLayerInnerL'
				if(sliderIsShow() == false){DNA_Action = {opacity:DNA_Opacity, marginLeft:DNA_man_margin};}
				frameAction = {left:frameWidth, opacity:1};
				innerAction = {width:innerWidth, opacity:innerOpacity};
				sliderDirection = 'L';
			}else{
				sliderFrameSelect = '.scienceLayerR' ;
				sliderInnerSelect = '.scienceLayerInnerR'
				if(sliderIsShow() == false){DNA_Action = {opacity:DNA_Opacity, marginRight:DNA_man_margin};}
				frameAction = {right:frameWidth, opacity:1};
				innerAction = {width:innerWidth, opacity:innerOpacity};
				sliderDirection = 'R';
			}

			/*	Animation action	*/
				$('#DNA_man').animate(DNA_Action,tagSpeed1);

			$(this)									// Tag
				.animate(frameAction,tagSpeed1);

			$(sliderFrameSelect)					// Slider div
				.animate({opacity:0.8, width:frameWidth},tagSpeed1);

			$(sliderInnerSelect).fadeIn().animate(innerAction,tagSpeed1);

			/*	Slider Opened(1/2) - Switch slider off */
			if(tagDirection == sliderIsShow()){		// Act: Close slider
				$('.scienceLayerInner').slideUp();	// Hide inner <div>
				$('.tag').children('img').show();	// Release tag text
				$('.sliderCloseAarow').fadeOut();	// Cancel slider on's close tag
				$('#DNA_man').animate({'margin':0,'opacity':1});	//  Release DNA man position
				if(myIndex == 4 || myIndex == 9 ){	// Fix: Bottom arrow img align middle of tag
					$('.tag:nth-child(' + (myIndex + 2) +') img').css('top','20px');
				}
			}else{
				if(sliderIsShow() == false){	// Act: Open slider
						/* Add close tag icon */
					$(this).children('img').hide().parent().append('<img src="'+sc_convertImgPath('path')+'SliderCloseAarow' +tagDirection + '.png" class="sliderCloseAarow">');
						/* Fix: Bottom arrow img align middle of tag */
					if(myIndex == 4 || myIndex == 9 ){
						$('.tag:nth-child('+(myIndex+2)+') img').css('top','40px');
					}
				}
			}

			/*	Slider Opened(2/2) - Opened slider != tag direction */
			 if(tagDirection != sliderIsShow() && sliderIsShow() != false){
				 $('.scienceLayerInner' + tagDirection).hide();	// Hide inner <div> to avoid long scroll

			 }

			/*	JSON	*/
			json_show(myIndex);

		});
	}
	function sc_convertImgPath(e){					// For raw develop, Link error offline only
		var drupalPath = sc_iszh('../') + 'profiles/commerce_kickstart/themes/commerce_kickstart_theme/images/sc/';
		var localPath = 'pic/';
		if(fileName() == 'indexWeb.php'){			// [e] ///
			$('img').each(function(){
				var imgPath = $(this).attr('src');
				$(this).attr('src',imgPath.replace(drupalPath,localPath));
			});
			e == 'path' ? e = localPath : e = e;	// TRUE for arrow use only
			return e;
		}
		if( e == 'path'){							// Path for Drupal
			e = drupalPath;
			return e;
		}
	}
	sc_convertImgPath();
		// sliderIsShow()
	tag_hover();
	tag_click();
		// Child: sliderWidth();

}// !science()

function tag_ctrl(){
	if($(window).width() > 600){
		$('.tag').show();
		$('#mobile_content').hide();
	}else{
		$('#mobile_content').show();
		$('.tag').hide();
	}
}
function mobile_display(){	
	/* $('#DNA_div').css('border','1px solid pink');	// debug
	$('#mobile_content').css('border','1px solid green');	// debug */
				
	if(sc_iszh()){
			var jsonFile 	= "../js/json/scienceDetail_zh.json";
		}else{
			var jsonFile 	= "js/json/scienceDetail.json";
		}

		 $.getJSON(jsonFile, function(){
			$('.scienceLayerInner')							// Clear <div> then append Ajax load gif
				.html('<img src="' + sc_iszh('../') + 'includes/img/ajax-loader_s.gif" id="ingredients-ajaxLoad"">').end()
					.find('#ingredients-ajaxLoad').fadeIn(2000);	// FadeInAJAX.gif
		})
		.done(function( data ){
			$('#mobile_content').html(function(){
				var str = '';
				
				for(var i =0; i < 10; i++){
					str += '<div><h3 style="margin-bottom:0;">' + data.science[i].title.toUpperCase()  + '</h3><p>' +
					data.science[i].content+'</p></div>';
				}
				return str;
			}
				
			)}
		)
		.fail(function( jqxhr, textStatus, error) {	// Fail display in console.log
			var err = textStatus + ', ' + error;
			console.log( "Request Failed: " + err);
		});

	
}
jQuery(document).ready(function ($) {
    science();	// Function master
	mobile_display();
	
	$(window).resize(function(){
		tag_ctrl();
	});

	
	tag_ctrl();




});

;</script>