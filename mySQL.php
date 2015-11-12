<?php
	if($_SERVER["SERVER_NAME"] == 'localhost'){
		$con = new mysqli('localhost','root','bunny','drupal_f');
	}else{
		$con = new mysqli('localhost','isnatura_bunny','sUT?#nx;9=[S','isnatura_drupal');
	}
	$con->query("SET NAMES utf8");
	
	if (mysqli_connect_errno($con)){
		return "Failed to connect to connect database. Please try again later or connect us." . mysqli_connect_error();
	}else {		
		return $con;
	}
?>