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
// $action: update,delete,create	
	function hasPermission($user, $action, $comment){
			if ($user === null) { return; }
			if ($user["role"]==="ADMIN"){
				return true;
			}
			
			if ($user["role"]==="NORMAL"){
				if ($action === 'create') return true;
				if($comment["username"]===$user["username"]){
					return true;
				}
				return false;
			}
			if ($user["role"] === "BANNED"){
				return $action !== 'create';
			}
	}
	
	function isAdmin($user){
		if ($user["role"]==="ADMIN"){
			return true;
		}
	}
?>


