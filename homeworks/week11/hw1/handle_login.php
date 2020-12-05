<?php 
session_start();
require_once('conn.php');
require_once('utils.php');

if (
	empty($_POST['username'])||
	empty($_POST['password'])
	){
	header('Location: login.php?errCode=1');
	die();
}	

$username = $_POST['username'];
$password = $_POST['password'];


$sql = 'select * from shelly_users_week11 where username = ?';
$stmt= $conn->prepare($sql); 
$stmt -> bind_param('s', $username); 
$result = $stmt -> execute();//執行成功失敗是一回事  
	if (!$result){
		die($conn->error); 
	}
$result = $stmt->get_result();//執行成功之後，如果要把結果取出，需要再加上這行程式碼
 
if ($result->num_rows === 0){
	header('Location: login.php?errCode=2');
	exit();
}
$row = $result ->fetch_assoc();
if (password_verify($password, $row['password'])){
	//登入成功
	/*
	1.產生 session id (token)
	2. 把 username 寫入檔案
	3. set-cookie: session-id
	4. $password 是使用者輸入的 password，$row['password'] 是資料庫儲存的
	*/
	$_SESSION['username'] = $username;
	header('Location: index.php');
}else{
	header('Location: login.php?errCode=2');
}
?>


