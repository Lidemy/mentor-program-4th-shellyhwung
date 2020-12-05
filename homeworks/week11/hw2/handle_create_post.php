<?php 
session_start();
require_once('conn.php');
require_once('utils.php');

if (empty($_POST['title'])||empty($_POST['content'])){
	header('Location: create_post.php?errCode=1');
	exit();
}	



$username = $_SESSION['username'];
$content = $_POST['content'];
$title = $_POST['title'];

$sql = 'INSERT INTO shelly_posts_week11(username, title, content) VALUES(?, ?, ?)';
$stmt = $conn -> prepare($sql);
$stmt -> bind_param('sss', $username, $title, $content);
$result = $stmt->execute();
if (!$result){
	die($conn->error);
}
header('Location: admin.php');
?>


