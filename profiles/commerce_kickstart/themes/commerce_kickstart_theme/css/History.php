<style>
#inidialText{text-align:center; font-size:20px;}
#historyChart{height:233px; width:920px; margin:30px 0 30px 0; position:relative;}	/*	Chart blank frame	*/
#historyChartImg{height:233px; width:920px; margin:0 0 30px 0; position:absolute; top:30px;}	/*	Chart img	*/
.historyDescription{border:1px solid lightgray; border-radius:10px; margin-top:50px; margin-right:auto;
	margin-left:auto; opacity:1; padding:50px; width:auto;}	/*	Hide Year description	*/
	.historyHide{display:none;}									/*	Initial: Hide Year description	*/
.historyShowAll{background:lightgray; border-radius:10px; top:380px; cursor:pointer; margin-top:-20px; padding:10px; left:770px; position:absolute; }													/*	[Show all] btn	*/
.historyShowAll:hover{background:gray;}				/*	Hover: [Show all] btn	*/
.historyPoint{cursor:pointer; opacity:0.8; position:absolute; width:22px; background-repeat:no-repeat;}	/*	BallBall */
.historyPoint img{opacity:0.8\9; width:22px\9; background-repeat:no-repeat\9	;}				/*	BallBall IE only	*/
#year1984{left:99px; top:177px;}	/*	@BallBall	position	*/
#year1985{left:124px; top:223px;}
#year1990{left:242px; top:153px;}
#year1992{left:285px; top:229px;}
#year1993{left:306px; top:143px;}
#year1996{left:375px; top:168px;}
#year1998{left:421px; top:144px;}
#year1999{left:442px; top:177px;}
#year2002{left:504px; top:209px;}
#year2003{left:530px; top:260px;}
#year2004_1{left:550px; top:130px;}
#year2004_2{left:550px; top:214px;}
#year2005{left:572px; top:222px;}
#year2006{left:596px; top:250px;}
#year2007{left:614px; top:209px;}
#year2011{left:708px; top:138px;}
#year2013{left:748px; top:186px;}

.timeCtrl{display:none;}
#fulvicAcid_map{margin-top:50px; width:100%;}
<?php iszh('p, span{font-size:15px;}#inidialText{letter-spacing:10px;}'); ?>
</style>

<?php
	function dotImg($e){ 
		$path = iszh('../','re') . 'includes/img/'.$e.'.png';
		$html = '<img src="'.$path.'">';
		return $html;	// Ans: <img src="pic.png">
	}// !dotImg()
	
	$year_id	= array('1984','1985','1990','1992','1993','1996','1998','1999','2002'
						,'2003','2004_1', '2004_2','2005','2006','2007','2011','2013'		
						);	
?>
	
<div id="page_history" class="page_content">
	<div id="historyChart">
	<img src="<?php iszh('../'); ?>includes/img/historyDotChart.png" id="historyChartImg">
	</div>
	<div id="historyPoint">
		<div class="historyPoint" id="year1984"><img src="<?php iszh('../'); ?>includes/img/hs_green.png"></div>
		<div class="historyPoint" id="year1985"><img src="<?php iszh('../'); ?>includes/img/hs_blue.png"></div>
		<div class="historyPoint" id="year1990"><img src="<?php iszh('../'); ?>includes/img/hs_green2.png"></div>
		<div class="historyPoint" id="year1992"><img src="<?php iszh('../'); ?>includes/img/hs_red3.png"></div>
		<div class="historyPoint" id="year1993"><img src="<?php iszh('../'); ?>includes/img/hs_puple.png"></div>
		<div class="historyPoint" id="year1996"><img src="<?php iszh('../'); ?>includes/img/hs_green2.png"></div>
		<div class="historyPoint" id="year1998"><img src="<?php iszh('../'); ?>includes/img/hs_blue.png"></div>
		<div class="historyPoint" id="year1999"><img src="<?php iszh('../'); ?>includes/img/hs_orange.png"></div>
		<div class="historyPoint" id="year2002"><img src="<?php iszh('../'); ?>includes/img/hs_green.png"></div>
		<div class="historyPoint" id="year2003"><img src="<?php iszh('../'); ?>includes/img/hs_puple.png"></div>
		<div class="historyPoint" id="year2004_1"><img src="<?php iszh('../'); ?>includes/img/hs_red3.png"></div>
		<div class="historyPoint" id="year2004_2"><img src="<?php iszh('../'); ?>includes/img/hs_green.png"></div>
		<div class="historyPoint" id="year2005"><img src="<?php iszh('../'); ?>includes/img/hs_red3.png"></div>
		<div class="historyPoint" id="year2006"><img src="<?php iszh('../'); ?>includes/img/hs_blue.png"></div>
		<div class="historyPoint" id="year2007"><img src="<?php iszh('../'); ?>includes/img/hs_green.png"></div>
		<div class="historyPoint" id="year2011"><img src="<?php iszh('../'); ?>includes/img/hs_orange.png"></div>
		<div class="historyPoint" id="year2013"><img src="<?php iszh('../'); ?>includes/img/hs_green2.png"></div>
	</div>

<div id="historyDescription">
	<div class="historyDescription">
		<div id="inidialText"><?php ec('Hover dots to see our history','點選圓點顯示內容'); ?></div>
	</div>
</div>

<div id="historyContent">
	<div class="year1984 historyHide">
		<h3>1984</h3>
		<p><?php ec('Dr. Dick Miyayama began his research towards hair growth and natural treatments.','Dr. Dick Miyayama 開始研究有關頭髮護理和頭髮生長的天然配方。'); ?></p>
	</div>
	<div class="year1985 historyHide">
		<h3>1985</h3>
		<p><?php ec('Through research and development of product prototypes, Dr. Miyama successful developed Mia Lotion, which induces hair growth.','經過研究後， Dr. Miyayama 研製出可以促進頭髮生長的護髮配方 ﹣ Mia Lotion.'); ?></p>
	</div>
	<div class="year1990 historyHide">
		<h3>1990</h3>
		<p><?php ec('Clinical test were conducted at National Autonomous University of Mexico and The Ministry of Health and Welfare Mexico.','Mia Lotion的臨床測試在墨西哥國立自治大學(National Autonomous University of Mexico)和墨西哥健康福利部 (The Ministry of Health and Welfare Mexico)舉行。'); ?> </p></div>
	<div class="year1992 historyHide">
		<h3>1992</h3>
		<p><?php ec('Began mass-producing the hair treatments.','護髮產品開始大量生產。'); ?></p>
	</div>
	<div class="year1993 historyHide">
		<h3>1993</h3>
		<p><?php ec('Hair growth clinical experiments were conducted with Dr. Ramon Maldonarudo.','Dr. Ramon Maldonarudo 參與護髮產品的臨床測試。'); ?></p>
	</div>
	<div class="year1996 historyHide">
		<h3>1996</h3>
		<p><?php ec('The hair products were released in the United States consumer market.','Dr. Miyayama 研發的頭髮護理產品開始在美國市場發售。'); ?></p>
	</div>
	<div class="year1998 historyHide">
	<h3>1998</h3>
	<p><?php ec('Over 400 users were monitored and showed evidence of increased hair growth.','超過400名用家在使用產品後，髮量有顯著增長，同時頭髮也增強。'); ?></p>
	</div>
	<div class="year1999 historyHide">
		<h3>1999</h3>
		<p><?php ec('Over 3,000 users were monitored in Japan and showed evidence of increased hair growth.','超過3,000名日本用家在使用產品後，髮量有顯著增長， 同時頭髮也增強。'); ?></p>
	</div>
	<div class="year2002 historyHide">
		<h3>2002</h3>
		<p><?php ec('Dr. Umezawa joins the team in the development of a fertilizer enzyme breakdown composter.','Dr. Umezawa 加入研究團隊，研究和發展分解酵混合物。'); ?></p>
	</div>
	<div class="year2003 historyHide">
		<h3>2003 June</h3>
		<p><?php ec('A successful sample of Miya Organic Fertilizer is produced using the trial composter.','利用試驗堆肥機成功生產出 Miya 有機酵混合物。'); ?></p>
	</div>
	<div class="year2004_1 historyHide">
		<h3>2004</h3>
		<p><?php ec('Dr. Umezawa conducted agricultural protocol study. The agricultural protocol study produced incredible results.  This led to the beginning of research and development phase to perfect the ratio of Humic Acid and Fulvic Acid. Miya Monte Mex’s Fertilizer was found to have a greater percentage of fulvic acid to existing fertilizers.','Dr. Umezawa 進行了農業實驗研究得出了一個令人驚訝的結果。這次實驗結果進一步開展了關於腐殖酸和富里酸的完美比例的研究。跟其他有機酵混合物相比 Miya Monte Mex’s 的有機酵混合物被發現出有更高水平的富里酸含量。'); ?></p>
	</div>
	<div class="year2004_2 historyHide">
		<h3>2004</h3>
		<p><?php ec('Following the success of the Miya Monte Mex Fertilizer, the team began to focus on the extraction of Fulvic Acid.<br><br>With Dr. Umezawa’s experience in fertilizers science and Dr. Miyayama’s expertise in animal feed technology, they two were able to successfully produce fulvic acid with 40-60% concentration.','隨着 Miya Monte Mex 有機酵混合物的研究成功，研究團隊開始著重於食用富里酸精華素的研究。憑著 Dr. Umezawa 和 Dr. Miyayama 專業背景和新的提煉技術，他們成功研製出純度達40﹣60%的富里酸。'); ?>
		</p>
	</div>
	<div class="year2005 historyHide">
		<h3>2005</h3>
		<p><?php ec('Research of the Miya Monte Mex Fulvic Acid Concentrated solution begins. At Antonio Narro University, Dr. Ruben successfully performs a prototype experiment of soil refinement using sunflower cultivation with Fulvic Acid.','有關Miya Monte Mex 富里酸精華濃縮液的研究展開。Dr. Ruben 成功在 Antonio Narro University 進行運用富里酸精華素種植太陽花的原型實驗，幫助提升土壤細化。'); ?>
		</p>
	</div>
	<div class="year2006 historyHide">
		<h3>2006</h3>
		<p><?php ec('Began mass-producing fulvic acid in both dry and liquid form.','粉狀和液態的富里酸開始大量生產。'); ?></p>
	</div>
	<div class="year2007 historyHide">
		<h3>2007</h3>
		<p><?php ec('Miya Monte Fulvic Acid products are released onto the consumer market in the United States and Japan.','食用Miya Monte 富里酸精華素打進美國和日本的市場。'); ?></p>
	</div>
	<div class="year2011 historyHide">
		<h3>2011</h3>
		<p><?php ec('Phylia De M., LLC began distributing hair growth products and Fulvic Acid in Europe, UK, Australia, New Zealand, and South America.','Phylia De M., LLC開始把護髮產品和富里酸在歐洲、英國、澳洲、新西蘭和南美洲進行銷售。'); ?></p>
	</div>
	<div class="year2013 historyHide">
		<h3>2013</h3>
		<p><?php ec('I.S. Natural (H.K.) Limited began distributing hair growth products and Avantari Fulvic Acid in Hong Kong and Greater China.','仙源（香港）有限公司開始在香港和內地售賣護髮產品和 AVANRARI 富里酸。'); ?></p>
	</div>
	</div>
</div>


<script>
/*	# History | QF(m1)
--------------------	*/
		jQuery('#historyPoint .historyPoint').mouseover(function(){		//	MouseOver
/* F(1) */	function ballCtrl(){	// Work w/ IE			
/* F(1.1) */	function timeCtrl(e){
					jQuery('.historyPoint' + ' ' + isIE('img')).animate({marginLeft:'0px', marginTop:'0px',width: '20px'}, 400 ).css('z-index','1').end() 					// Initial: Release all balls
						.find(idSharp + ' ' + isIE('img'))		// Animate to hover ball
						.animate({marginLeft:'-10px', marginTop:'-10px', width: '50px'}, 400 ).css('z-index','2');
				
				var timeLog = new Date().getTime();
				if(e==0){	// Initial: Append time into <span>
						jQuery('#historyPoint').append('<span class="timeCtrl">' + timeLog + '</span>');	
					}else{	// Update time into <span class="timeCtrl">
						jQuery('#historyPoint .timeCtrl').html(timeLog);
					}
				}

				if(jQuery('#historyPoint span').hasClass('timeCtrl') == false){	// Initial
					timeCtrl(0);
				}else{
					var lastTimeLog = jQuery('#historyPoint .timeCtrl').html();	// Avoid combo hover to disturb ball ball
					var now = new Date().getTime();
					var duration = (now - lastTimeLog) / 1000;	// Interval for 1sec
					if(duration > 1){
						timeCtrl();
					}											// Otherwise it do not action for update content
				}

			}
/* F(2) */	function appendYearContent(){
				jQuery('.historyDescription>div').fadeOut('slow').parent().html('').append( // Ease b4 content
					jQuery(thisClass).clone().fadeIn(1000).css('display','block') 			// Clone year unit 
					.append('<span class="historyShowAll"><?php ec('Show All','顯示全部') ?></span>')				// Append <Show All> btn
				);
			}
/* F(3) */	function historyShowall(){
				jQuery('.historyShowAll').click(function(){					// Click [Show all] to display all history
					jQuery(this).parent().parent().empty()					// Hide present content						
						.append(jQuery('#historyContent').children('div')	// Append all history content
						.slideDown(500).removeClass('historyHide')).wrap('<span class="showedAll"></span>').end()	

					.find(jQuery('#historyDescription h3')					// New <h3> & <p> format
						.css('line-height','10px').next('p').css({'margin-bottom':'30px','margin-top':'-10px'}));
				});
			}
/* F(4) */	function  contentCtrl(){
				if(jQuery('#historyDescription span').hasClass('showedAll') == false){
/* F(3) */			appendYearContent();		// Content update in <div>
				}else{							// Can do some animate when showed all				
				}
			}
/* Panel */	var idSharp = '#' + jQuery(this).attr('id');
			var thisClass = '.' + jQuery(this).attr('id');
			var thisID = jQuery(this).attr('id');
			
			ballCtrl();
			contentCtrl();
			historyShowall();
			
	});	// !History
</script>