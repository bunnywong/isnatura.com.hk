<?php
	if($_SERVER["SERVER_NAME"] == 'localhost'){
		$con = new mysqli('localhost','root','bunny','jinhai');
	}else{
		$con = new mysqli('localhost','jinhai','Y*8uR$aS','jinhai');
	}
	$con->query("SET NAMES utf8");
	
	if (mysqli_connect_errno($con)){
		return "Failed to connect to connect database. Please try again later or connect us." . mysqli_connect_error();
	}else {	
		return $con;
	}
?>