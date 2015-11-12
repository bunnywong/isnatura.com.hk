<style>
/* Ref: http://www.jankoatwarpspeed.com/two-simple-ways-to-create-text-embossing-effect/ */
.LRwrap{float:left;}
#about-us_title{margin-left:30px; text-shadow:#fff 0px 1px 0, #000 0 -1px 0;  -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); text-align:center;}
#about-us_title > div{font-weight:bold; color:#808080; }
#about-us_title > div:first-child{font-size:30px;}
#about-us_title > div strong{border-bottom:1px gray solid;}
#about-us_title > div:last-child{font-size:1.5em;}

#page_about-us p, #page_about-us h3, #page_about-us li{font-family: "EB Garamond", serif;}
#page_about-us_headText{font-size:24px; line-height:20px;}
#page_about-us h3{font-size:25px;}
#page_about-us p, #page_about-us li{font-size:18px;}
#page_about-us p{text-align:justify;}

.LRwrap .woo_sticker:nth-child(+2){-webkit-transform: rotate(1deg); -moz-transform: rotate(1deg);}
  #page_about-us > p{margin-left:40px;}
  #page_about-us > div.woo_sticker:nth-child(3){margin-top:-40px;}
.woo_sticker{  background: #f6eeca;
  background: -webkit-gradient(linear, left top, left bottom, from(#f6eeca), to(#faf5e0));
  background: -webkit-linear-gradient(135deg, transparent #ffc, #faf5e0);	/* ORG: (#f6eeca, #faf5e0) */
  background: -moz-linear-gradient(center top, #f6eeca 0%, #faf5e0 100%);
  background: -moz-gradient(center top, #f6eeca 0%, #faf5e0 100%);


  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#f6eeca,endColorstr=#faf5e0);
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#f6eeca, endColorstr=#faf5e0)";
  padding: 1em 1.618em 2.65em 1.618em;
  border-top: 1.618em solid #f2e8b5;
  border-bottom: 1px solid #fcf7f2;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.6);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  -o-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  -webkit-transform: rotate(-1deg);
  -moz-transform: rotate(-1deg);
  font-family: 'Schoolbell', cursive;
  margin: 1.618em;
  font-size: 1.142em;
  color: #554444;
  max-width: 340px;
  min-width: 250px;
}
<?php
	iszh('#about-us_title > div:first-child{font-size:40px;}');
?>
</style>

<div id="page_about-us" class="page_content">
	<div class="LRwrap">
		<div id="about-us_title">
			<div><strong><?php ec('Nature’s Miracles','大自然的奇蹟'); ?></strong></div>
			<div><?php ec('Science, Health, Beauty','科學 健康 美容'); ?></div>
		</div>
	<div class="woo_sticker">
		<h3><?php ec('About us','公司簡介'); ?></h3>
		<p><?php ec('Essential by Nature','I.S. Natura Limited<br>仙源（深圳）貿易有限公司'); ?><br>
		<?php ec('I.S. Natura was created with a simple ambition – uncover nature’s miracles and champion human wisdom. With our team of brilliant scientists and expert stylists, we uncover and patent nature’s secret ingredients.  We promote all Natural and Organic philosophy.','<br>基本性質<br>
		I.S. Natura的專家團隊一直致力研究並發掘出大自然的奧秘和奇蹟，找出天然而且對人體有益的物質 。 我們承諾會把大自然的原料，用最純淨和最天然的方式帶給您。我們提倡並嚮往天然和有機的食品和藥物概念。'); ?></p>

	</div>
		<div class="woo_sticker">
			<h3><?php ec('Our Philosophy','我們的理念'); ?></h3>
			<ul>
			<?php ec('
				<li>We believe Cradle-to-cradle.</li>
				<li>We believe that nature has all the necessary nutrients and herbs.</li>
				<li>We believe treasures are hidden in the soil.</li>
				<li>We believe human should never intake chemicals and manmade compounds.</li>
				<li>We believe a product should keep its promises.</li>
				<li>We only provide you the best of the best. </li>',

				'<li>相信從自然界中發掘所有人類所需的營養。</li>
				<li>相信循環再利用的理念。</li>
				<li>相信寶藏都是埋在泥土中的。</li>
				<li>相信人類不應該使用含有化學成份的營養補充品。</li>
				<li>相信產品要重視它的承諾。</li>
				<li>只會為您提供最純淨最天然的產品。</li>
				'); ?>

			</ul>
			<p style="text-aligh:center;"><?php ec('…Because health and beauty are priceless…','… 因為健康和美麗是無價的…'); ?></p>
		</div>
	</div>
	<div class="LRwrap">
		<div class="woo_sticker">
		<h3><?php ec('Products','產品'); ?></h3>
			<?php
				ec('<p>AVANTARI is a brand that approaches personal health and personal care from a Natural &amp; Organic point of view. AVANTARI products are of USA-Arizona Desert and Mexico origin. We collect all the natural plants and enriched soils to extract the natural, healthy and authentic active substances and ingredients.</p><p>By combining research and nature, we use the best that nature has to offer to develop products with healthy and beauty focus. Our Plant Essence Supplements, Skin Care Products, Bath and Body Products, and Hair Beauty Products formulated with scientifically-proven ingredients</p>',

				'<p>AVANTARI – 以天然和有機結合的健康產品品牌 AVANTARI 的所有產品都是從美國亞麗桑娜州和墨西哥沙漠直接進口的。我們從野生和有機植物及肥沃的土壤中萃取當中的物質作提煉，為您製作出最天然及健康的產品。</p><p>我們利用大自然天然的寶庫，重點開發出健康和美容產品。無論是植物精華素、沐浴及身體產品，還是護髮用品的用料成分都是經過科學鑒定證明。</p>');
			?>
		</div>

		<div class="woo_sticker">
				<h3><?php ec('Ingredients','成分'); ?></h3>
				<p><?php ec('AVANTARI’s profound powers of remedy are derived from highly active ingredients like Fulvic Acids and protective antioxidant extracts.','AVANTARI 系列產品神奇的再生和恢復能力是來自於 I.S. Natura 團隊從大自然裏提煉的高濃度富里酸和多種保護性抗氧化提取物 。'); ?></p>

				<p><?php ec('Fulvic Acid is the Key ingredients in all AVANTARI products. Fulvic acid is rapidly being recognized as one of the key elements in many outstanding health and scientific breakthroughs of the 21st century.','富里酸（Fulvic Acid）是一種稀有的天然物質， 它被許多科學界的權威稱為21世紀中的重大發現。我們保證 AVANTARI 富里酸為 100% 有機原料驗證和生產的。'); ?></p>
		</div>
	</div>
</div>