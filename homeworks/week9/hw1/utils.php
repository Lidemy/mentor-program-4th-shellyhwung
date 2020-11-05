<?php 
require_once('conn.php');

function generateToken(){
	$s = '';
	for($i=1; $i<=16; $i+=1){
		$s .=chr(rand(65,90));
	}
	return $s;
}

function getUserFromUsername($username) {
		global $conn;
		$sql = sprintf(
		"select * from shelly_users_week9 where username = '%s'",
		$username
		);
		$result = $conn->query($sql);
		$row = $result->fetch_assoc();
		return $row; // $row 包含了 username, id, nickname
	}
?>


