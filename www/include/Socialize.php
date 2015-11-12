<style>
#news{float:left; vertical-align:top;}
#facebookFrame{border:none; margin-right:50px; overflow:hidden; vertical-align:top; min-height:600px; width:400px;}
#weiboFrame{height:590px; width:400px; vertical-align:top;}
</style>
<script>
function go_responsive(){
	var win_width 		= jQuery(window).width();
	var fb_width		= '';
	var margin_right	= 35;
	var soso_frame		= 400;

	win_width < (soso_frame + margin_right) ? fb_width = win_width - margin_right : fb_width = soso_frame;
	
	var padding_left	= '';
	var social_frame	= '';
	var side_tool_right= '';
	
	if(win_width > 740){	// Responsive gap: 740
	/* Desktop */
		padding_left	= '37px';
		social_frame	= 400;
	}else{
	/* Mobile */
		padding_left	= '0px';
		social_frame	= fb_width - 20;
		side_tool_right= '0px';
	}
		jQuery('#news').css('padding-left', padding_left);
		jQuery('#facebookFrame, #weiboFrame').width(social_frame);		
//		a('social_frame: '+social_frame);
}// !go_responsive()

function responsive(){
		jQuery(window).resize(function(){
			go_responsive();
		});
		
		go_responsive();
}// responsive()

/*
------------------------------	*/
	jQuery(document).ready(function(){
		responsive();
	});
</script>

<div id="news" class="page_content">
	<div id="news_title">
		
<iframe id="facebookFrame"
	src="//www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fisnatura&amp;width=400&amp;height=545&amp;colorscheme=light&amp;show_faces=true&amp;header=true&amp;stream=true&amp;show_border=true" scrolling="no" frameborder="0" allowTransparency="true">
</iframe>

<iframe id="weiboFrame" class="share_self"  frameborder="0" scrolling="yes" src="http://widget.weibo.com/weiboshow/index.php?language=zh_tw&width=0&height=550&fansRow=1&ptype=1&speed=0&skin=1&isTitle=1&noborder=1&isWeibo=1&isFans=1&uid=3701559291&verifier=6d6ce6f3&dpc=1">
</iframe>

		
<!-- Ref		
		https://developers.facebook.com/docs/plugins/like-box-for-pages/
!-->		
	</div>
</div>

<script> 
</script>