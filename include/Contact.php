<style>
#contactUsResult{background-color:lavender; width:210px; padding:20px; border-radius:10px; margin-bottom:20px; display:none;}
select, input[type="text"], textarea{height:30px; width:250px; }
input[type="text"]{height:30px;}
input[type="submit"]{height:40px; width:100px; float:right;}
textarea{height:100px;}
.contactRow{padding-bottom:20px;}
.contactRow > div:first-child{font-weight:500;}
.require{color:red;}
#frm_contactUs > div:first-child, #info{float:left;}
#frm_contactUs > div:first-child{width:400px; padding:0 0 30px 50px;}
#info{margin-left:50px; border:1px solid lightgray; width:auto; min-width:250px; margin:0; padding:20px 50px 20px 50px;}

#submit_div{width:250px;}
.warnMsg{color:orange;}
<?php iszh('div{font-size:15px;}'); ?>
</style>

<div id="contactUs" class="page_content">

		 <!-- Never refresh because of AJax-->
		<form id="frm_contactUs" action="">
			<div>
			<div id="contactUsResult"></div>
				<input type="hidden" name="lang" value="<?php iszh('1'); ?>">
				<input type="hidden" name="act" value="insert2DB">
				<div class="contactRow">
					<div><?php ec('Civility','稱呼'); ?></div>
					<div>
						<select name="civility">
							<option value="mr"><?php ec('Mr','先生'); ?></option>
							<option value="mrs"><?php ec('Mrs','女士'); ?></option>
							<option value="miss"><?php ec('Miss','小姐'); ?></option>
						</select>
					</div>
				</div>
				<div class="contactRow">
					<div><?php ec('Name','稱謂'); ?> <span class="require">*</span></div>
					<input type="text" name="name" class="validCheck">
					<div class="warnMsg"></div>
				</div>
				<div class="contactRow">
					<div><?php ec('Email','電郵地址'); ?> <span class="require">*</span></div>
					<input type="text" name="email" class="validCheck" id="email">
					<div class="warnMsg"></div>
				</div>
				<div class="contactRow">
					<div><?php ec('Contact Number','聯絡電話'); ?></div>
					<input type="text" name="tel">
				</div>
				<div class="contactRow">
					<div><?php ec('Message Subject','主旨'); ?> <span class="require">*</span></div>
					<input type="text" name="subject" class="validCheck">
					<div class="warnMsg"></div>
				</div>
				<div class="contactRow">
					<div><?php ec('Message Details','訊息內容'); ?> <span class="require">*</span></div>
					<textarea name="message" class="validCheck"></textarea>
					<div class="warnMsg"></div>
				</div>
				<div class="contactRow">
					<div><span class="require">*</span> <?php ec('Required','必須填寫'); ?></div>
					<div id="submit_div"><input type="submit" value="<?php ec('Submit','送出'); ?>" id="contactSubmit"></div>
				</div>
			</div>

			<div id="info">
				<div class="contactRow">
					<div><strong><?php ec('Contact','電話'); ?></strong></div>
					<div id="tel">中國大陸 (86) 02038851666 <br>香港 (852) 3515 9868</div>
				</div>

				<div class="contactRow"  style="margin-top:20px;">
					<div style="vertical-align:top;"><strong><?php ec('Address','地址'); ?></strong></div>
					<div id="address"><?php ec('Flat 1 & 2, 5/F., Hewlett Centre, 54 Hoi Yuen Road,<br>Kwun Tong, Kowloon, Hong Kong','廣州市天河區林和西路167號威尼國際寫字樓2706室郵編510610 <br> 香港觀塘開源道 52–54 號豐利中心 501–502 室'); ?></div>
				</div>
			</div>
		</form>

	</div>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="//bunnywong.com/js/bun2013.js"></script>
<script>
	function is_valid(e){
		var err				= 0;
		var dataInsert 		= '';
		var ErrMsg_noBlank 	= '';

		pathExist('zh') == true ? ErrMsg_noBlank = '請填寫此欄' : ErrMsg_noBlank = 'Please fill in the blank';

		/* Blank valid */
		$('.validCheck').each(function(e){	// Lock input.value to work, TTL: 4 loops, e = 0~3
			var myVal = $(this).val();
			if(myVal == '' || myVal == null){
				$(this).next('.warnMsg').text(ErrMsg_noBlank);
				if(e<3 && isIE() <= 8){
					$(this).next().next('.warnMsg').text(ErrMsg_noBlank);	// IE hack
				}
				err++;
				err == 1 ? $(this).focus(): true;	// Focus to 1st error field only
			}else{
				$(this).next('.warnMsg').text('');
				if(e < 3 && isIE() <= 8){
					$(this).next().next('.warnMsg').text('ok');	// IE hack
				}
			}
			return myVal;									// Keep value in box
		});

		/* Email vaild */
		var email = $('#email').val();
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var ErrMsg_email = '';

		pathExist('zh') == true ? ErrMsg_email = '電郵格式錯誤' : ErrMsg_email = 'Email address not valid';

		if (!filter.test(email) && email != '') {
			$('#email').next('.warnMsg').text(ErrMsg_email);

			if(isIE() <= 8){
				$('#email').next().next('.warnMsg').text(ErrMsg_email);	// IE hack
			}

			err++;
			var emailFocusCheck = $("[name^='name']").next('.warnMsg').text();
			emailFocusCheck == '' ? $('#email').focus() : true;	// Focus when no error b4 email's field
		}
		err == 0 ? dataInsert = true : dataInsert = false ;		// True | *False : For enable Ajax data insert
		return dataInsert;
	} // !is_valid()

	function formSubmit(){
		var zhPath = '';
		pathExist('zh') == true ? zhPath = '../' : zhPath = '';

		$('#frm_contactUs').submit(function(){
			if(is_valid() == true){
				$.ajax({
					type: "GET",
					url: zhPath + "include/AjaxConnectUs.php",
					/* data: dataString */
					data: $(this).serialize(),
					cache: false,
					success: function (html) {
						$("#contactUsResult").html(html).slideDown(1500);	// Show success result
						$('html,body').animate({scrollTop:0});
						$('#frm_contactUs input, #frm_contactUs textarea, #frm_contactUs select').attr('disabled','disabled');	// Disable elements under this form
						$('.warnMsg').fadeOut();
					}
				});

			}
			return false;	// Never refresh because work as AJax
		});
	}// !formSubmit()

	function responsive(){
		$(window).resize(function(){
			go_responsive();
		});
			go_responsive();
	}// !responsive();

	function go_responsive(){
		win_width = $(window).width();

		if( win_width < 350 ){	// Mobile
			$('#frm_contactUs > div:first-child').css('padding','0 0 30px 0px');
			$('#info').css('padding','20px 10px 20px 10px');
		}else{					// Desktop
			$('#frm_contactUs > div:first-child').css('padding','0 0 30px 50px');
			$('#info').css('padding','20px 50px 20px 50px');
		}
	}// !go_responsive()

/*	Panel
--------------------	*/
jQuery(document).ready(function(){
	$("[name^='name']").focus();				// Focus on the field
	formSubmit();
	responsive();
});// Todo: Chinese layout bug (overlay w/ footer)

</script>