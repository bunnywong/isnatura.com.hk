<style>
#ingredients{margin-top:-50px;}
#ingredients hr{background:#bbbbbb;}

#svgdiv{margin:50px 0px 50px 0px; height:500px;}	/* Temp: Adjust for IE only ?	*/
#svgdiv svg{margin-left:100px; width:80%; height:auto;}
#ingredients-ajaxLoad{display:none; height:40px; float:right; width:40px;}	/*	Ajax gif	*/

.ingredientsContent{/* border:1px solid lightgray; */ border-radius:10px; margin-right:auto; 
	margin-left:auto;}
.ingredientsText{background:ghostwhite; border-radius:10px; left:640px; line-height:30px; margin-top:-50px; padding:20px; position:absolute; top:390px; width:190px; height:auto;}
.ingredientsText:first-letter{font-size:200%;}

.timeCtrl{display:none;}
#svgShowAll{background:lightgray; border-radius:10px; cursor:pointer; padding:10px; position:relative; float:right;right:-20; top:-40px;}													/*	[Show all] btn	*/
#svgShowAll:hover{background:gray;}				/*	Hover: [Show all] btn	*/
#showAllElementContent > span{margin-right:30px;}
.bbq{top:200px;}
#noSVGimg{width:700px; margin:70px 0 30px 110px; margin-top:40px;}
#mobi_SVGimg{margin:50px 10px 20px 10px; width:auto;}

#tblSVG{width:700px;}
#tblSVG thead td{background-color:ghostwhite; border:1px lightgray solid;}
#tblSVG tbody td{border:1px lightgray solid; width:auto;}
#tblSVG thead td{font-weight:bold; text-align:center; width:50px;}

#mobi_tblSVG{margin:0px auto 0px auto; width:95%;}
#mobi_tblSVG thead td{font-weight:bold;}
#mobi_tblSVG td{border:1px lightgray solid;}
#mobi_tblSVG td:first-child{width:33%;}
#mobi_tblSVG tbody td{font-weight:normal;}
#mobi_tblSVG tbody tr:last-child td:last-child{display:none;}

<?php 
	iszh('
		.ingredientsText, #svgShowAll, p{font-size:15px;}
		#tblSVG{font-size:13px;}
	'); 
?>
</style>
<!-- Do not change this jquery.js version !-->
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="<?php iszh('../'); ?>js/reg/jquery.svg.js"></script>
<script type="text/javascript" src="<?php iszh('../'); ?>js/reg/jquery.svganim.js"></script>
<script type="text/javascript">
/*	Function
-----	-----	-----	-----	-----	*/
/*	JSON	*/
function showElement(e, scrolltoCtrl){
	function i_iszh(e){
		if (!e) { e = true; }
		
		if(pathExist('zh') == true){		
			return e;
		}else{
			return '';
		}
	}	
	
	if(scrolltoCtrl == undefined){scrolltoCtrl = '';}	// IE don't scrollto btn.Results
	
	var container 	= $('.ingredientsText').text();
	if(pathExist('zh')){
		var jsonFile = "../js/json/ingredients_zh.json";
	}else{
		var jsonFile = 'js/json/ingredients.json';
	}
	
	$.getJSON(jsonFile, function(){	
		$('.ingredientsText')							// Clear <div> then append Ajax load gif
			.html('<img src="' + i_iszh('../') + 'includes/img/ajax-loader_s.gif" id="ingredients-ajaxLoad"">').end()
				.find('#ingredients-ajaxLoad').fadeIn(2000);	// FadeInAJAX.gif
	})
	.done(function( data ) {
		if( e != 'showAll' && e!= 'mobile'){	
			$('.ingredientsText').text(
				data.elements[e].calories	+ ' ' +
				data.elements[e].index	+ ' ' +
				data.elements[e].unit
			)
		}
/* Show all */		
		if( e == 'showAll'){
			$('#svgShowAll').hide();
			
			var elementQty = data.elements.length;	// Ans: 43	
			$('#showAllElementContent').html(function(){				
				if(i_iszh()){
					var thead_title = '項目';
					var thead_index = '參數';
					var thead_unit = '單位';
				}else{
					var thead_title = 'Element';
					var thead_index = 'Index';
					var thead_unit = 'Unit';
				}			
				
				/* Table */
					var str = '<hr>';
					var num = '';
					
					/* Table.thead */
					str += '<table id="tblSVG"><thead><tr>';
					str += '<td>' + thead_title + '</td>';
					str += '<td>' + thead_index + '</td>';
					str += '<td>' + thead_unit + ' </td>';
					str += '</tr></thead>';
					
					/* Table.Body */
				for(var i = 0; i < elementQty ; i++){		
				num = i+1;
					str += '<tr>';
					str += '<td class="elementName">' + num + '. '+ data.elements[i].calories	+ '</td>';
					str += '<td>' + data.elements[i].index	+ '</td>';
					str += '<td>' + data.elements[i].unit + '</td>';
					str += '</tr>';
				} 
					/* Table.Footer */					
					str += '</table>';
					
					return str;
				}			
			);
			$('.ingredientsText').text(container);
			
			if(scrolltoCtrl == ''){
				/* $('#svgShowAll').animate({top:'200px'},500); */
				$('html, body').animate({scrollTop:730},1000);
			}else{
				$('#svgShowAll').css('top','0px');
			}			
		}//! e = 'showAll'
/* Mobile */		
		else if(e =='mobile'){
			$('#svgShowAll').hide();
			
			var elementQty = data.elements.length;	// Ans: 43	
			$('#showAllElementContent').html(function(){
				var str = '<hr>';				
				var index = '';
				
				if(i_iszh()){
					var thead_title = '項目';
					var thead_index = '參數';
					var thead_unit = '單位';
				}else{
					var thead_title = 'Element';
					var thead_index = 'Index';
					var thead_unit = 'Unit';
				}							
					str += '<table id="mobi_tblSVG"><thead><tr>';
					str += '<td>' + thead_title + '</td><td>' + thead_index + '</td><td>' + thead_unit + ' </td>';
					str += '<tbody><tr>';
				for(var i = 0; i < elementQty ; i++){					
					str += '<tr>';
					str += '<td class="elementName">' + (i+1) + '. '+ data.elements[i].calories	+ '</td>';
					str += '<td>'+ data.elements[i].index	+ '</td>';
					str += '<td>' + data.elements[i].unit + '</td>';
					str += '</tr>';
				} 
					str += '<td style="width:10px;"></td>';					
					str += '</tr></tbody></table>';
					return str;
				}			
			);
			$('.ingredientsText').text(container);
			
			if(scrolltoCtrl == ''){
				/* $('#svgShowAll').animate({top:'200px'},500); */
				$('html, body').animate({scrollTop:730},1000);
			}else{
				$('#svgShowAll').css('top','200px');
			}
		}
	}
	
	)
	.fail(function( jqxhr, textStatus, error ) {	// Fail display in console.log
		var err = textStatus + ', ' + error;
		console.log( "Request Failed: " + err);
	});
}
/*	Check SVG support	*/
function SVGSupport() {
	return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
}
/*	ingredients | Main function	*/
function ingredients(){
	var animateSpeed = 200;	// Speed ctrl under function

	/*	All Poly Mouseover event */
	$('.poly').css('cursor','pointer').mouseover(function(){	// Add CSS pointer
		showElement($(this).index());	// append [0]~[37] element info info <div>
	});

	/*	Poly-up Ctrl | Mouse over*/
	$('.poly-up').mouseover(function(){
		/* Down poly ctrl */
		var upIndex = $(this).index('.poly-up');
		var downIndex = upIndex * 2;
		
		$('.poly-down').show().end()					// Initial  all to show()
			.find('.poly-down').eq(downIndex).hide();	// Hide mouse over's down poly only
		
		/* Up poly ctrl */
		$('.poly-up')				// Initial  all
		.animate({svgFill		: 'white',
				svgStrokeWidth	: 1,
				svgStroke		: '#BCBEC0',
				svgTransform	: 'rotate(0) translate(0)'}
		, animateSpeed);

		$(this).animate({			// Animation
				svgFill				: 'yellowgreen',
				svgStrokeWidth		: 0,
				svgTransform		: 'rotate(-0.2) translate(-5 -5)',
				svgStrokeDashArray	: '0,0,0,0'
		}, animateSpeed);
	});	
}// !ingredients()

function click2showElement(){
	$('#svgShowAll').click(function(){
		showElement('showAll');		
		$(this).hide();
		/* $(this).html('Total of Test Results<br><span class="elementIndex">( Total Calories | 10 | Cal/100g )</span>').fadeIn(2000).css(margin-top,'10px'); */
		
	});
}
/*	Panel
Ref: http://keith-wood.name/svgRef.html
------------------------------------------------	*/
function notSupportSVG(){	// Working ///
	var path = '';

	$('#svgdiv').hide();	// Hide the vector SVG element
	$('.ingredientsText').hide();
	$('#ingredients').prepend('<img src="http://www.isnatura.com.hk/includes/img/bee.png" id="noSVGimg">');
	$('#svgShowAll').text('Total of Test Results');
	showElement('showAll','noScrollto');
}

function mobile(){
		$('#svgdiv').hide();			// Hide the vector SVG element
		$('.ingredientsText').hide();
		$('#ingredients').prepend('<img src="http://www.isnatura.com.hk/includes/img/bee.png" id="mobi_SVGimg">').one();
		
		showElement('mobile','noScrollto');
		
		$('.ingredientsContent').css('padding','20px 0px 0px 0px');	
		$('#mobi_tblSVG td').css('width','auto');
}
/*	Panel
-----	-----	-----	-----	-----	*/
$(document).ready(function($) {
	var docWidth = $(window).width();

	if(docWidth > 850){	// Regular & IE browser	
		if(SVGSupport()){			// Temp ///
			ingredients();
		//			$('#svgdiv').html('');	// Temp ///

		}else{
			notSupportSVG();
		}
			click2showElement();
			$('.ingredientsContent').css('padding','20px 50px 0px 50px');	
	}else{				// Mobile
		mobile();
	}		
});
</script>

<div id="ingredients" class="page_content">
<?php include('svg.php'); ?>
	<div class="ingredientsText"><?php ec('Select polygon to show','點 選六角形顯示項目'); ?></div>
	<div class="ingredientsContent">
		<p><strong><?php ec('Fulvic Acid Nutrition Test Results','富里酸營養測試結果'); ?></strong></p>
		<div id="svgShowAll"><?php ec('Show All','顯示全部'); ?></div>
		<p><?php ec('By: Pacific Coast Analytical Services','太平洋海岸分析服務'); ?>
		<?php ec('<br>
		Certifications: FDA audited, A2LA registered, <br>
		CA Department of Health Services # 2667, <br>
		Los Angeles County Sanitation Districts #10255, <br>
		US EPA #CA01033</p>',		
		'認證：FDA審核，A2LA註冊，<br>
		 加利福尼亞州衛生服務部＃2667，<br>
		 洛杉磯衛生區＃10255<br>
		 美國EPA#CA01033
		'); ?>

		<p><?php ec('Miyamonte Fulvic – Acid 1 Little (960ml)','富裡酸  960毫升'); ?><br>
		<?php ec('100% Organic','100％有機'); ?>
		</p>
		<p id="showAllElementContent"></p>
	</div>
</div>
