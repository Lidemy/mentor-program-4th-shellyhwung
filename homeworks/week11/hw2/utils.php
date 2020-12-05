<?php 
	require_once('conn.php');
	
	function getUserFromUsername($username) {
			global $conn;
			$sql = sprintf(
			"select * from shelly_users_week11 where username = '%s'",
			$username
			);
			$result = $conn->query($sql);
			$row = $result->fetch_assoc();
			return $row; // $row 包含了 username, id, nickname, role
		}
	
	function escape($str){
		return htmlspecialchars($str, ENT_QUOTES);
	}
?>


