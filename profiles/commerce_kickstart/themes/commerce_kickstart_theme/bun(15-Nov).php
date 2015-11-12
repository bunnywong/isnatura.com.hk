<?php
function logoImg(){
	$path = 'profiles/commerce_kickstart/themes/commerce_kickstart_theme/images/logo_text.png';
	if($_SERVER["SERVER_NAME"] == 'localhost'){
		$pathRoot = 'http://localhost/f/';
	}else{
		$pathRoot = 'http://www.isnatura.com.hk/';
	}
	echo '<a href="'.$pathRoot.'"><img src="'.$pathRoot.$path.'" id="logo_img"></a>';
}

function iszh($e, $act = ''){			
		$path = $_SERVER['REQUEST_URI'];
		
		if(strrchr($path,"zh") == true){
			if($act == 're'){
				return $e;			// Result: 1 - Return: iszh('abc','re')
			}else{
				echo $e;			// Result: 2 - echo (default)
			}
		}else{
			return false;			// Result: 3 - false
		}
}

function ec($english, $chinese){
	$path = $_SERVER['REQUEST_URI'];
	
	if(strrchr($path,'zh') == true){
		echo $chinese;
	}else{
		echo $english;
	}
}

?>