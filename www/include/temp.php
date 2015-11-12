

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="js/reg/jquery.svg.js"></script>
<script type="text/javascript" src="js/reg/jquery.svganim.js"></script>
<script type="text/javascript" src="//www.bunnywong.com/js/bun2013.js"></script>
<script type="text/javascript">
function getScript(){
	var path = ['http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js',
				'js/reg/jquery.svg.js',
				'js/reg/jquery.svganim.js'];

	$.each( path, function( key, value ) {
		$.getScript(value, function(data, textStatus, jqxhr) {
/*		   console.log(data); 			//data returned
		   console.log(textStatus); 	//success
		   console.log(jqxhr.status); 	//200
*/		});
	});
}
//	getScript();

/*	Function
-----	-----	-----	-----	-----	*/
/*	JSON	*/
function showElement(e, scrolltoCtrl){
	if(scrolltoCtrl == undefined){scrolltoCtrl = '';}
	
	var container = $('.ingredientsText').text();

	$.getJSON("js/json/elements.json",function(){
	
		$('.ingredientsText')							// Clear <div> then append Ajax load gif
			.html('<img src="includes/img/ajax-loader_s.gif" id="ingredients-ajaxLoad"">').end()
				.find('#ingredients-ajaxLoad').fadeIn(2000);	// FadeInAJAX.gif
	})
	.done(function( data ) {
		if( e != 'showAll'){	
			$('.ingredientsText').text(
				data.elements[e].calories	+ ' ' +
				data.elements[e].index	+ ' ' +
				data.elements[e].unit
			)
		}
		if( e == 'showAll'){
			var elementQty = data.elements.length;	// Ans: 38			
			$('#showAllElementContent').html(function(){
				var tr = '';
				var str = '<hr>';
					str += '<table id="tblSVG" style="width:700px;"><tr>';
				for(var i = 0; i < elementQty; i++){
					if( i % 2 == 0 && i!= 0){
						tr1 = '</tr><tr>';
					}else{
						tr1 = '';
					}
					
					str += tr1;
					str += '<td  style="10px">'+ data.elements[i].calories	+ ' ' +
							data.elements[i].index	+ ' ' +
							data.elements[i].unit + '</td>'
					} 
					str += '</tr></table>';
					return str;
				}			
			);
			$('.ingredientsText').text(container);
			$('#svgShowAll').animate({top:'200px'},500);
		if(scrolltoCtrl == ''){
			$('html, body').animate({scrollTop:730},1000);
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
	
}
polyClick(200);
function polyClick(animateSpeed){
	$('.poly-up').click(function(){	
/* 		$('.ingredientsText')		// Content div movement
			.animate({marginTop:'-5px'},300).end()
			.find('.ingredientsText').animate({marginTop:0},
		300); */
	});
}


function click2showElement(){
	$('#svgShowAll').click(function(){
		showElement('showAll');
		$(this).text('Total of Test Results').fadeIn(2000).css(margin-top,'10px');
	});
}
/*	Panel
Ref: http://keith-wood.name/svgRef.html
------------------------------------------------	*/
function notSupportSVG(){	// Working ///
	$('#svgdiv').hide();	// Hide the vector SVG element
	$('.ingredientsText').css('display','none');
	$('#ingredients').prepend('<img src="includes/img/bee.png" id="noSVGimg">');
	$('#svgShowAll').text('Total of Test Results');
	showElement('showAll','noScrollto');
}
/*	Panel
-----	-----	-----	-----	-----	*/
$(document).ready(function() {
	if(SVGSupport()){			// Temp ///
		ingredients();
		polyClick();			// Not yet setup
	//			$('#svgdiv').html('');	// Temp ///

	}else{
		notSupportSVG();
	}
		click2showElement();
});
</script>

<div id="ingredients" class="page_content">
<?php
		include('svg.php');
?>
	<div class="ingredientsText">Select polygon to show</div>
	<div class="ingredientsContent">
		<p><strong>Fulvic Acid Nutrition Test Results</strong></p>
		<span id="svgShowAll">Show All</span>
		<p>By: Pacific Coast Analytical Services<br>
		Certifications: FDA audited, A2LA registered, <br>
		CA Department of Health Services # 2667, <br>
		Los Angeles County Sanitation Districts #10255, <br>
		US EPA #CA01033<br></p>

		<p>Fulvic – Acid 1 Little (960ml)<br>
		100% Organic  
		</p>
		<p id="showAllElementContent"></p>
	</div>
</div>
