<script src="//code.jquery.com/jquery-1.9.1.js"></script>

<style>
#page_wrapper{font-size:80px; text-align:center;}
#page_wrapper input{text-align:center; background-color:#ffffee; width:250px; height:60px; color:#4197ee; font-size:50px;}
#exp_wrapper{font-size:20px; margin-top:-10px;}
#countdown{font-size:20px; color:lightseagreen;}

.btn_shop {
	width:250px; height:45px; font-size:40px; margin-top:10px; padding:10px;

	-moz-box-shadow:inset 0px 1px 0px 0px #cae3fc;
	-webkit-box-shadow:inset 0px 1px 0px 0px #cae3fc;
	box-shadow:inset 0px 1px 0px 0px #cae3fc;
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #79bbff), color-stop(1, #4197ee) );
	background:-moz-linear-gradient( center top, #79bbff 5%, #4197ee 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#79bbff', endColorstr='#4197ee');
	background-color:#79bbff;
	-webkit-border-top-left-radius:10px;
	-moz-border-radius-topleft:10px;
	border-top-left-radius:10px;
	-webkit-border-top-right-radius:10px;
	-moz-border-radius-topright:10px;
	border-top-right-radius:10px;
	-webkit-border-bottom-right-radius:10px;
	-moz-border-radius-bottomright:10px;
	border-bottom-right-radius:10px;
	-webkit-border-bottom-left-radius:10px;
	-moz-border-radius-bottomleft:10px;
	border-bottom-left-radius:10px;
	text-indent:0;
	border:1px solid #469df5;
	display:inline-block;
	color:#ffffff;
	font-family:Arial;
	font-weight:bold;
	font-style:normal;
	line-height:40px;
	text-decoration:none;
	text-align:center;
	text-shadow:1px 1px 0px #287ace;
}
.btn_shop:hover {
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #4197ee), color-stop(1, #79bbff) );
	background:-moz-linear-gradient( center top, #4197ee 5%, #79bbff 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#4197ee', endColorstr='#79bbff');
	background-color:#4197ee;
}.btn_shop:active {
	position:relative;
	top:1px;
}
</style>

<div id="page_wrapper">
	<div><img src="http://www.isnatura.com.hk/profiles/commerce_kickstart/themes/commerce_kickstart_theme/images/special15discount.png"></div>
	<div>15% off</div>
	<div>Coupon Code:</div>
	<div><input value="dingding" class="dingding" type="hidden">
	<img src="http://www.isnatura.com.hk/profiles/commerce_kickstart/themes/commerce_kickstart_theme/images/15pdiscount.jpg">
	</div>	
	<div id="exp_wrapper">Exp Date: <span id="exp"></span></div>
	<div id="countdown"></div>
	<div style="font-size:20px;">
		<a href="http://www.isnatura.com.hk/products" target="_blank">
			<span class="btn_shop">Shop Now</span>
		</a>
	</div>
	
</div>

<script>
$(document).ready(function(){
	function eng_month(month_array){
		var month = [	'Jan',	'Feb', 	'Mar', 	'Apr', 
						'May',	'Jun', 	'Jul', 	'Aug', 
						'Sept',	'Oct.',	'Nov', 	'Dec' ];
						
		return month[month_array];
	}// !eng_month()
	
	function zero_cover(digi){
		if ( digi < 10) {
			digi = '0' + digi;
		}
		return digi;
	}// !zero_cover()
	
	function date_unit(digi){
			var str = '';
			digi >1 ? str = ' days ' : str = ' days ';
			return str;
	}// date_unit()
	
	/* -----	-----	-----	-----	-----	*/	
	var end 	= new Date('05/15/2014 0:0 AM');
		/* Show EXP */
	document.getElementById('exp').innerHTML = end.getDate() + '-'+ eng_month(end.getMonth()) + '-' + end.getFullYear();
	
	var _second = 1000;
    var _minute = _second * 60;
    var _hour 	= _minute * 60;
    var _day 	= _hour * 24;
    var timer;
    
	function showRemaining() {	
        var now = new Date();
        var distance = end - now;
        
		if (distance < 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'Offer was over!';

            return;
        }// Exit
		
        var days	= Math.floor(distance / _day);
        var hours 	= zero_cover(Math.floor((distance % _day) / _hour));
        var minutes = zero_cover(Math.floor((distance % _hour) / _minute));
        var seconds = zero_cover(Math.floor((distance % _minute) / _second));

        document.getElementById('countdown').innerHTML = 'Remain: ';
        document.getElementById('countdown').innerHTML += days + date_unit(days);
        document.getElementById('countdown').innerHTML += hours + ':' + minutes + ':' + seconds;
    }// !showRemaining()

    timer = setInterval(showRemaining, 1000);	
/* -----	-----	-----	-----	-----	*/	
	var coupon_code = 'dingding';

	$('#page_wrapper input').change(function(){
		$(this).val(coupon_code).select();
	});
	
});
</script>

