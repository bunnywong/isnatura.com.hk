<style>
a{color:#666666; text-decoration:none;}
a:hover{color:#0066cc; text-decoration:underline;}
#documentation{font-size:13px; width:800px; height:auto;}
	/* Menu */
	#menu > a > div{width:235px; display:inline-block; text-align:center; height:80px; font-size:30px; color:white; padding:20px 10px 10px 10px; vertical-align:top; margin-bottom:20px; float:left;}
	#menu > a > div:hover{opacity:0.8;}
		#menu > a:first-child  > div{background:#810099; margin-left:10px; padding-top:35px; height:65px;}
		#menu > a:nth-child(2) > div{background:#73CC14;}
		#menu > a:last-child > div{background:#CC148D;}

	/* Content */
	#documentation > div{width:auto; margin:0 auto 0 auto;}
	.report{border:1px solid lightgray; height:390px; float:left; width:220px; margin:10px 10px 20px 10px; padding:20px 10px 10px 10px;}
	.report:hover{border:1px solid gray;}	
	.report_inner{text-align:center;}
	.description{text-align:left; padding:20px;}
	#documentation .report_inner > a > img{height:300px; width:100%;}
	
/* Debug */
#menu{display:none;}
</style>

<div id="documentation" class="page_content">
	<div id="menu">
		<a href="https://www.isnatura.com.hk/include/fb_tab1.html"><div>Product</div></a>
		<a href="https://www.isnatura.com.hk/include/fb_tab2.html"><div>Certification & documentation</div></a>
		<a href="https://www.isnatura.com.hk/include/fb_tab3.html"><div>Advertisement & activities</div></a>
	</div>
	
	<div>
<?php

	echo 'This is PHP';
?>
	</div>
</div>
