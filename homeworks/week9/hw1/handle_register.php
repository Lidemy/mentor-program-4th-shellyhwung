<?php 
require_once('conn.php');
if (
	empty($_POST['nickname'])|| 
	empty($_POST['username'])||
	empty($_POST['password'])
	){
	header('Location: register.php?errCode=1');
	die();
}	
$nickname = $_POST['nickname'];
$username = $_POST['username'];
$password = $_POST['password'];

$sql = sprintf(
'insert into shelly_users_week9(nickname, username, password) values("%s", "%s", "%s")',
$nickname,
$username,
$password
);
$result = $conn->query($sql);

if (!$result){
	$code = $conn->errno;
	if ($code ===1062){
		header('Location: register.php?errCode=2');
	}
	die($conn->error); 
}
header('Location: index.php');
/*
//用字串比對的方式，因為錯誤訊息可能會改變，字串改變就會失效。error code 是不會變的
if (!$result){
	if (strpos($conn->error,"Duplicate entry")!==false){
		header('Location: register.php?errCode=2');
	}
	die($conn->error); // error 錯誤有很多種，不一定是帳號重複，有可能是其他問題
}
header('Location: index.php');
*/

?>


