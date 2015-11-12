<!-- Add jQuery library -->
<script type="text/javascript" src="http://www.isnatura.com.hk/js/lightbox_facybox/lib/jquery-1.10.1.min.js"></script>

<!-- Add mousewheel plugin (this is optional) -->
<script type="text/javascript" src="http://www.isnatura.com.hk/js/lightbox_facybox/lib/jquery.mousewheel-3.0.6.pack.js"></script>

<!-- Add fancyBox main JS and CSS files -->
<script type="text/javascript" src="http://www.isnatura.com.hk/js/lightbox_facybox/source/jquery.fancybox.js?v=2.1.5"></script>
<link rel="stylesheet" type="text/css" href="http://www.isnatura.com.hk/js/lightbox_facybox/source/jquery.fancybox.css?v=2.1.5" media="screen" />

<!-- Add Button helper (this is optional) -->
<link rel="stylesheet" type="text/css" href="http://www.isnatura.com.hk/js/lightbox_facybox/source/helpers/jquery.fancybox-buttons.css?v=1.0.5" />
<script type="text/javascript" src="http://www.isnatura.com.hk/js/lightbox_facybox/source/helpers/jquery.fancybox-buttons.js?v=1.0.5"></script>

<!-- Add Thumbnail helper (this is optional) -->
<link rel="stylesheet" type="text/css" href="http://www.isnatura.com.hk/js/lightbox_facybox/source/helpers/jquery.fancybox-thumbs.css?v=1.0.7" />
<script type="text/javascript" src="http://www.isnatura.com.hk/js/lightbox_facybox/source/helpers/jquery.fancybox-thumbs.js?v=1.0.7"></script>

<!-- Add Media helper (this is optional) -->
<script type="text/javascript" src="http://www.isnatura.com.hk/js/lightbox_facybox/source/helpers/jquery.fancybox-media.js?v=1.0.6"></script>

<script type="text/javascript">
	$(document).ready(function() {
		$('.fancybox').fancybox();
	});
</script>
<style type="text/css">
	#page_press{text-align:center;}
	
	.fancybox img{width:200px; margin:30px; border:1px solid lightgray; padding:5px; position:relative;
		-webkit-box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.2);
		-moz-box-shadow:    4px 4px 5px 0px rgba(50, 50, 50, 0.2);
		box-shadow:         4px 4px 5px 0px rgba(50, 50, 50, 0.2);
	}
	.fancybox img:hover{bottom:2px;}
</style>
	
<div id="page_press" class="page_content">
<?php
	$str 		= '';
	$path_head	= 'http://www.isnatura.com.hk/upload/';
	$report	 	= array(  
						array(	"2013.12.19 媒體報導《BQ Weekly 時尚 · Fashion》", 
								"2013-12-19_media-report_s.jpg",
								"2013-12-19_media-report.jpg"
						),
						array(	"2013.12.21 媒體報導《精品生活 購物指南》", 
								"2013-12-21_media-report_s.jpg",
								"2013-12-21_media-report.jpg"
						),
						array(	"1/2014 媒體報導《Cosmopolitan 時尚》", 
								"2014-Jan_media-report_s.jpg",
								"2014-Jan_media-report.jpg"
						),
						array(	"1/2014 媒體報導《 Heren 新現代》", 
								"2014-Jan_media-report_moden_s.jpg",
								"2014-Jan_media-report_moden.jpg"
						),
						array(	"2014.1.8 媒體報導《 Entertainment Weekly 南方娛樂》", 
								"2014-1-8_media-report_s.jpg",
								"2014-1-8_media-report.jpg"
						),
						array(	"2014.1.15 媒體報導《 ORANGE 橘子：2014 年 1 - 2 月刊》", 
								"2014-1-15_media-report_s.jpg",
								"2014-1-15_media-report.jpg"
						),
						array(	"2014.1.20 媒體報導《Elle》", 
								"2014-1-20_media-report_s.jpg",
								"2014-1-20_media-report.jpg"
						),
						array(	"2/2014 媒體報導《瑞麗服裝美容》", 
								"2014-2_media-report_s.jpg",
								"2014-2_media-report.jpg"
						),
						array(	"2/2014 媒體報導《瑞麗時尚先鋒》", 
								"2014-2_media-report_2_s.jpg",
								"2014-2_media-report_2.jpg"
						),
						array(	"2/2014 媒體報導《悅己 SELF》", 
								"2014-2_media-report_3_s.jpg",
								"2014-2_media-report_3.jpg"
						),
						array(	"2/2014 媒體報導《Cosmopolitan Bride 時尚新娘》", 
								"2014-2_media-report_4_s.jpg",
								"2014-2_media-report_4.jpg"
						),
						array(	"2/2014 媒體報導《女友家園》", 
								"2014-2_media-report_5_s.jpg",
								"2014-2_media-report_5.jpg"
						),
						array(	"2014.2.21 媒體報導《精品生活-購物指南》", 
								"2014-21_media-report_s.jpg",
								"2014-21_media-report.jpg"
						),
						array(	"2014.2.22 媒體報導《The China Press 橋報》", 
								"2014-2-22_media-report_s.jpg",
								"2014-2-22_media-report.jpg"
						),
						array(	"2014.3.14 媒體報導《蘋果日報》", 
								"2014-3-14_media-report_s.jpg",
								"2014-3-14_media-report.jpg"
						)
				  );	
	
	for ($i = sizeof($report)-1; $i > 0; $i--) {	
		$str 	.= '<a class="fancybox" href="' . $path_head . $report[$i][2] .'" data-fancybox-group="gallery"';
		$str	.= 'title="'. $report[$i][0].'">';
		$str 	.= '<img src="' . $path_head . $report[$i][1] .'">';
		$str 	.= '</a>';
	}
	echo $str;
	

?>

</div>