jQuery(document).ready(function ($) {
	if(isRoot() == true){
/* Fn.
----------------------------------------	*/		
		function slider(img_no){
			if(isLH('localhost')){var f = 'f'}else{var f = '';}
			if(pathExist('zh') == false){
				var title 	= 0;
				var detail = 1;
				var zh='zh/';
			}else{
				var title 	= 2;
				var detail = 3;			
				var zh='';
			}
			
			var content	= [
							['A Natural Miracle','At I.S. Natura, we believe the Earth contains a perfect balance of all the nutrients your body needs.  I.S. Natura decodes Mother Nature’s most powerful secrets and extracts the finest and purest natural essences. All major ingredients are of USA-Arizona Desert and Mexico origin.',
							'自然界的奇蹟','仙源相信地球對於人體所需的營養物質存有一個完美的平衡。仙源解構大自然的奧秘並提取最好及最純淨的天然植物精華。所有主要成分均來自美國亞麗桑娜州和墨西哥沙漠'],
			
							['<span id=\"sliderTitle\">Avantari</span>Preserve & Nourish','AVANTARI, a collection inspired by the natural detoxification, is formulated with Fulvic Acid, Aloe Essences and Organic plants essential oil. AVANTARI offers a range of products: <p style=\"margin:10px 0 0 0;\"><a href=\"products\"><span class=\"seeMore\">See More…</span></a>','<span id=\"sliderTitle\">愛維</span>保護和滋養','愛維（源於天然排毒）由富里酸﹑蘆薈精華和有機的植物精油精製而成。愛維提供一系列的產品<p style=\"margin:10px 0 0 0;\"><a href=\"zh/products\"><span class=\"seeMore\">更多詳情</span></a>'],
							
							['Fulvic Acid Essence','– nature’s miracle detox – is scientifically proven by international organizations as one of the most powerful natural antioxidants and free radical scavengers known.<ol id=\"sliderOL\"><li>Neutralize and detoxify harmful toxins, pollutants, and heavy metals.</li><li>Resist Radiation</li><li>Nature’s Antioxidant</li><li>Optimize Metabolism</li><li>Enhance Nutrient Absorption </li></ol><a href=\"Science\"><span class=\"seeMore\">See More…</span>',
							'富里酸精華','大自然排毒的奇蹟- 一國際組織以科學角度證實這是其中一個最有效的天然抗氧化劑和自由基清除劑<ol id=\"sliderOL\"><li>中和排解毒素，污染物和重金屬</li><li>抗輻射</li><li>自然的抗氧化劑</li><li>優化代謝</li><li>增強營養吸收</li></ol><a href=\"zh/Science\"><span class=\"seeMore\">更多詳情</span>']
							];
							

			var slider_img	= $('.views-field-field-image img');	
			var docHeight	= $(document).height();
			var docWidth	= $(document).width();	// Bun.mobile = 450px
			
			if(docWidth > 700){			
				var css	= [	{"left":"auto","right":"50px","top":"auto","bottom":"50px"},
							{"left":"auto","right":"50px","top":"50px","bottom":"auto"},
							{"left":"50px","right":"auto","top":"auto","bottom":"50px"}
							];				
				
			}else{
				var css = [	{"left":"30px","right":"auto","top":"50px","bottom":"auto"},
							{"left":"30px","right":"auto","top":"50px","bottom":"auto"},
							{"left":"30px","right":"auto","top":"50px","bottom":"auto"},
							{"left":"30px","right":"auto","top":"50px","bottom":"auto"},
							];
				$('#slider_content').width(docWidth - 150);
			}
						
						
			if(docHeight < 430) css = [{"top":"50px"},{"top":"50px"},{"top":"50px"}];
			var img = [	['slide0',
							content[0][title],
							content[0][detail],
							'http://www.isnatura.com.hk/sites/default/files/styles/hp_slideshow/public/field/image/slideshow/slider1_0.jpg',
							css[0]],
													
						['slide1',
							content[1][title],
							content[1][detail],							
							'http://www.isnatura.com.hk/sites/default/files/styles/hp_slideshow/public/field/image/slideshow/Slider_2.jpg',
							css[1]],
						['slide2',
							content[2][title],
							content[2][detail],	
							'http://www.isnatura.com.hk/sites/default/files/styles/hp_slideshow/public/field/image/slideshow/slider3.jpg',
							css[2]],
					];
			
			$('body').css('background-image','url(' + img[img_no][3] + ')');
			$('#slider_content').removeClass('slider0 slider1 slider2').addClass(img[img_no][0]).html('<h2>'+img[img_no][1]+'</h2><div>'+img[img_no][2]+'</div>').css(img[img_no][4]);
		}// !slider(img_no)
		
/* OOP
----------------------------------------	*/		
/* slider.autoplay	*/		
		slider.autoplay = function(interval_time){
			setInterval(function(){
							window.slider_counter++;
							var slide_no = window.slider_counter % 3;
							slider(slide_no);
						}, interval_time);	// This is interval
		}// !slider.autoplay(interval_time)
		
/* slider.initial	*/
		slider.initial = function(){
			window.slider_counter = 0;	// Initial global var
			var docHeight	= $(document).height();
			var docWidth	=  $(document).width();
			var content		= ['A Natural Miracle','At I.S. Natura, we believe the Earth contains a perfect balance of all the nutrients your body needs.  I.S. Natura decodes Mother Nature’s most powerful secrets and extracts the finest and purest natural essences. All major ingredients are of USA-Arizona Desert and Mexico origin.',
							'自然界的奇蹟','仙源相信地球對於人體所需的營養物質存有一個完美的平衡。仙源解構大自然的奧秘並提取最好及最純淨的天然植物精華。所有主要成分均來自美國亞麗桑娜州和墨西哥沙漠'];
							
			if(pathExist('zh') == false){
				var title 	= 0;
				var detail = 1;
			}else{			
				var title 	= 2;
				var detail = 3;
			}
			
			$('#section-footer, #section-content').hide();	
			$('body').addClass('slider slider_initial')
				.append('<div id="slider_content" class="sliderContent"><h2>' + content[title] + '</h2><div>' + content[detail] + '</div><div>').css('background-color','black');			
				$('#slider_content').css({"left":"auto","right":"50px","top":"auto","bottom":"50px"});
			
			/* Mobile device */
			if(docWidth < 700){
				$('body').css({"left":"30px","right":"auto","top":"50px","bottom":"auto"});
				$('#slider_content').width(docWidth - 150).css({"bottom":"auto","top":"50px","left":"30px"});
			} 							
		}// !slider.initial()
		
/* slider.click	*/
		slider.click = function (){
			$(document).click(function(){
				window.slider_counter++;
				var slide_no = window.slider_counter % 3;		
				slider(slide_no);		
			});	
		}// !slider.click
		
/* Panel
----------------------------------------	*/		
		slider.initial();
		if(pathExist('zh')) $('#slider_content, #sliderTitle').css({'font-family':'微軟正黑體','font-size':'15px'});
		slider.click();
		
	if(isLH() == false)	slider.autoplay(8000);	// e = interval time [debug]
	}
});// !Document.Ready

// Todo: IE