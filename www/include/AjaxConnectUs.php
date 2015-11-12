<?php
function this_contact_ec($english, $chinese){	
	if($_GET['lang'] == true){
		echo $chinese;
	}else{
		echo $english;
	}
}
/*
----------	*/
	date_default_timezone_set('PRC');
	$create_date =  date("Y-m-d H:i:s");
	$ip = $_SERVER['REMOTE_ADDR'];
	
	$civility = $_GET['civility'];
	$name = $_GET['name'];
	$email = $_GET['email'];
	$tel = $_GET['tel'];
	$subject = $_GET['subject'];
	$message = $_GET['message'];
	
	$conStr = include("../mySQL.php");
	$sql = "INSERT INTO  `aa_connect_us` 
			(`civility` ,`name`, `email`, `tel`, `subject`, `message`, `create_date`, `ip`)
				VALUES 
			('$civility', '$name', '$email', '$tel', '$subject', '$message', '$create_date', '$ip');
		"; 
		
	if ($conStr->query($sql) === TRUE) {
		echo	this_contact_ec('Form has been submitted, thanks!','訊息已送出，謝謝。');;
	}else{
		echo	"Connection error, Please try again later";
	}
	
	mysqli_close($con);		
?>