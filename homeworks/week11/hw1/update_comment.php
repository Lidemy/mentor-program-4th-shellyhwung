<?php 
session_start();
require_once("conn.php");
require_once("utils.php");

$id = $_GET['id'];

$username = NULL;
$user = NULL;
if (!empty($_SESSION['username'])){
	$username = $_SESSION['username'];
	$user = getUserFromUsername($username);
}
$stmt = $conn ->prepare(
'select * from shelly_comments_week11 where id = ?'
);
$stmt ->bind_param('i', $id);
$result = $stmt->execute();

if (!$result){
	die('Error:'. $conn->error);//判斷 query 有沒有執行成功
	}
$result = $stmt->get_result(); // 有執行成功的話，就把結果拿回來
$row = $result->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>留言板</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="./style.css" />
  <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
 
</head>

<body>
	<header class="warning">
	<strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
	</header>
	<main class="board">
		<h1 class="board__title">編輯留言</h1>		
		<?php 
		if(!empty($_GET['errCode'])){
			$code = $_GET['errCode'];
			$msg = 'Error';
			if ($code === '1'){
				$msg = '資料不齊全';
			}
			echo '<h2 class="error">錯誤提示：'.$msg.'</h2>';
		}
		?>	
	  
		<form class= "board__new-comment-form" method="POST" action="handle_update_comment.php">
		<textarea name="content" rows="5"><?php echo $row['content']?></textarea>
		<input type= "hidden" name ="id" value = "<?php echo $row['id']?>"/>
		<input class="board__submit-btn" type="submit"/>
		</form>		
	  <div class="board_hr"></div>
	</main>
</body>
</html>


