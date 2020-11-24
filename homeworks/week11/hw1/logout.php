<?php 
	session_start();
	session_destroy();
	require_once('conn.php');
	header('Location: index.php');
?>


