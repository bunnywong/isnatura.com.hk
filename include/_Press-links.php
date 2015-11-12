<style>
	#news{display:block; float:left; margin-top:60px; margin-left:70px; width:800px;}
	#news_title{float:left; display:block; width:200px;}
	#news_content{float:left; display:block; margin-top:-20px;}
	#news_content>div>img{cursor:pointer; display:block; }
	.pressBox{float:left; margin:20px; height:205px; width:150px; border:1px solid #eeeeee; cursor:pointer;}
	.imgHolder > img{height:auto; width:150px; border:0px solid pink;}
	.imgHolder{text-align:center; border:0px solid orange;}	

	.lightBoxLayer{
		background:black;
		display:none;
		height:100%;
		left:0;
		opacity:0.8;
		position:absolute;
		top:0;
		width:100%;
		z-index:100;}
	.lightBoxContent{
		background:white url("includes/img/icon_closeCross.png") no-repeat right top;
		border-radius:20px;
		cursor:pointer;
		display:none;
		height:80%;
		left:10%;
		opacity:1;
		padding:20px;
		position:absolute;
		top:50px;
		text-align:center;
		width:80%;
		z-index:101; }
	.lightBoxContent>img{margin:50px;}
	.tempClass{
		background:white url("includes/img/icon_closeCross.png") no-repeat right top;
		border-radius:20px;
		height:80%;
		left:10%;
		opacity:1;
		padding:20px;
		position:absolute;
		text-align:center;
		top:50px;
		width:80%;
		z-index:101; }
	}
</style>

<div id="news">
	<div id="news_title">
		<h2 style="font-family: 'EB Garamond', serif;">PRESS</h2>
	</div>
	<div id="news_content"></div>
</div>

<div class="LightBoxLayer" style="position:absolute; top:0; left:0; background:black; display:none;">
	<div class="lightBoxContent"></div>
</div>

<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.0.min.js?ver=3.5.1"></script>
<script src="//code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<script type="text/javascript" src="//www.bunnywong.com/js/bun2013.js"></script>
<script>
		/*	JSON	*/
function jsonShow(e, act){
		var jsonPath = 'js/json/news_detail.json';
		var target = '#news_content';
		$.getJSON(jsonPath,function(result){
			$(target)							// Clear <div> then append Ajax load gif
				.html('<img src="includes/img/ajax-loader_s.gif" id="ajaxLoad"">').end()
					.find('#ajaxLoad').fadeIn(2000);	// FadeInAJAX.gif
			})
		.done(function( data ){
			$(target).html(function(){ // (Fn.1/2)
				var str = '';
				var innerPhotoStr = ''
				var innerPhotoIndex = parseInt(e);
				var itemLength = data.news_detail.length;
				if(e =='showTable'){	/* Show Table */
					for(var i = 0; i < itemLength; i++){
						str += news_wrapper(i, data.news_detail[i].thumb,data.news_detail[i].thumbHover);
					}
					$('.imgHolder img').hover(function(){
						$(this).attr('onmouseover');
					});
				}else if(innerPhotoIndex){		/* Show LightBox, for 'parseInt(e) = TRUE' only */
					innerPhotoStr += imgWrapHTML(data.news_detail[innerPhotoIndex].content);
					insertContent2LightBox(data.news_detail[innerPhotoIndex].title, innerPhotoStr)
					 // Function only, no 'return'
				}
				return str;	// Return for turn off ajaxLoad.gif
			})// !html()
			},function(){		// (Fn.2/2) Refine lightBox
			$('.pressBox').hover(function(){	// Hover: redirect to child (r2c)
				$(this).children().trigger('hover');	// Todo: ///
				cl('Frame hover');
			});	
			/*	Completed content loaded, refine lightBox css */
				makeLightBox2(makeLightBox());		// Refine height & width of lightbox
			}
		)// !done()
	.fail(function( jqxhr, textStatus, error) {	// Fail display in console.log
		var err = textStatus + ', ' + error;
		cl( "Request Failed: " + err);
	});
}
// !JSON

function news_wrapper(i, thumb, thumbHover){
	var str = '';
	str += '<div class="pressBox">';
	str += '<div class="imgHolder"><img src="' + thumb + '" class="' + i + '" onmouseover="this.src=\''+thumbHover+'\'" onmouseout="this.src=\''+thumb+'\'"></div>';		
	// Ref: http://stackoverflow.com/questions/3946698/dynamically-change-onmouseover-or-onmouseout-to-call-a-different-function	///
	str += '</div>';
	return str;
}
function getImgSize(imgSrc){	// ///
    var newImg = new Image();
    newImg.src = $('.pressBox img').attr('src');
    var height = newImg.height;
    var width = newImg.width;
    p = $(newImg).ready(function(){
        return {width: newImg.width, height: newImg.height};
    });
    alert (p[0]['width']+" "+p[0]['height']);
}
function makeLightBox2(){
	var lightBox_height = $(document).height();
	var lightBoxContent_height = lightBox_height * 0.9;
	$('.LightBoxLayer').height(lightBox_height).width('100%');
	$('.lightBoxContent').height(lightBoxContent_height);
}
function makeLightBox(){
	$('.pressBox img').click(function(){
		$('.LightBoxLayer, .lightBoxContent').fadeIn(500);
		var thisJSONdetail = $(this).attr('class');
		jsonShow(thisJSONdetail);
		drupalFix('fb','hide');
		removeLightBox();	// Option for remove lightBox
	});
}

function imgWrapHTML(e){
	return '<img src="' + e + '	">';
}
function insertContent2LightBox(title, content){
	$('.lightBoxContent').empty().html('<h1>' + title + '</h1>' + content);
	 $('body').animate({ scrollTop: 0 }, 'slow');
}
function removeLightBox(){
	$('.lightBoxContent').one('click',function(){
		$('.LightBoxLayer').fadeOut(500);
		jsonShow('showTable');
		drupalFix('fb','show');
	});
}
function drupalFix(e,act){
	if(e == 'fb' ){
		var zIndex = '';
		act == 'hide' ? zIndex = '-200' : zIndex = '+200';
		$('#zone-user-wrapper').css('z-index', zIndex);
	}
}
function initial(){
	$('.LightBoxLayer').appendTo('body');	// Good for Drupal
}
jQuery(document).ready(function($) {
	initial();
	jsonShow('showTable');	
});
// Todo: (1)Hover to child, (2)Fit lightbox height

</script>