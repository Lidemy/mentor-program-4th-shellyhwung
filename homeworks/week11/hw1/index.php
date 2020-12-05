<?php 
session_start();
require_once("conn.php");
require_once("utils.php");

$username = NULL;
$user = NULL;
if (!empty($_SESSION['username'])){
	$username = $_SESSION['username'];
	$user = getUserFromUsername($username);
}

$page = 1;
if (!empty($_GET['page'])){ 
	$page = intval($_GET['page']);
}
$items_per_page = 8;
$offset = ($page - 1) * $items_per_page;

$stmt = $conn ->prepare(
	"select C.id as id, C.content as content, C.created_at as created_at, U.nickname as nickname, U.username as username from shelly_comments_week11 as C " . 
	"left join shelly_users_week11 as U on C.username = U.username " . 
	"where C.is_deleted IS NULL ".// mySQL 的特殊語法，一定要用 is NULL, 不能用 =NULL
	"order by C.id desc ".
	"limit ? offset ? "
);
$stmt->bind_param('ii', $items_per_page, $offset);
$result = $stmt->execute();

if (!$result){
	die('Error:'. $conn->error);//判斷 query 有沒有執行成功
	}
$result = $stmt->get_result(); // 有執行成功的話，就把結果拿回來
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
	
	<div>
		<?php if(!$username) {?>
			<a class="board__btn" href="register.php">註冊</a>
			<a class="board__btn" href="login.php">登入</a>
		<?php } else {?>
			<a class="board__btn" href="logout.php">登出</a>
			<span class ="board__btn update-nickname"> 編輯暱稱</span>
		    <?php if ($user && $user['role']==='ADMIN') {?>
				<a class="board__btn" href="admin.php">管理後台</a>
			<?php }?>
			<form class= "hide board__nickname-form board__new-comment-form" method = "POST" action= "update_user.php">
				<div class="board__nickname">
					<span>新的暱稱:</span>
					<input type="text" name="nickname"/>
				</div>
				<input class="board__submit-btn" type= "submit"/>
			</form>
			<h3>你好！<?php echo escape($user['nickname']);?></h3> 
		<?php } ?>
	</div>
	
		<h1 class="board__title">Comments</h1>		
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
		<form class= "board__new-comment-form" method="POST" action="handle_add_comment.php">
			<textarea name="content" rows="5"></textarea>
			<?php if ($username && !hasPermission($user, 'create', NULL)){?>
			  <h3><?php echo escape($user['nickname']);?>已被停權</h3>
			<?php } else if ($username){ ?>
				<input class="board__submit-btn" type="submit"/>
			<?php } else {?>
				<h3>請先完成登入，再發布留言</h3>
			<?php } ?>	
		</form>
	  	 
		<div class="board__hr"></div>
		<section>
			<?php
				while($row = $result->fetch_assoc()){
			?>
				<div class= "card">
					<div class="card__avatar">
					</div>
					<div class="card__body">
						<div class= "card__info">
							<span class="card__author">
								<?php echo escape($row['nickname']);?>
								(@<?php echo escape($row['username']);?>)
							</span>
							<span class="card__time"><?php echo escape($row['created_at']);?></span>
							
							<?php if (hasPermission($user, 'update', $row)){?>
								<a class = "card_btn" href= 'update_comment.php?id=<?php echo $row["id"]?>'>編輯</a>
								<a class = "card_btn" href= 'delete_comment.php?id=<?php echo $row["id"]?>'>刪除</a>
							<?php }?>
						</div>
						<p class="card__content">
						<?php echo escape($row['content']);?>
						<!--在顯示頁面時跳脫特殊字元，但是資料庫中還是要保持原本使用者輸入的狀態，這樣當其他應用程式要使用時才不會出錯-->
						</p>
					</div>
				</div>
			<?php }?>
		</section>
		<div class="board__hr"></div>
		<?php
			$stmt = $conn ->prepare(
				"select count(id) as count from shelly_comments_week11 where is_deleted IS NULL " 
			);
			$result = $stmt->execute();
			$result = $stmt->get_result();
			$row = $result->fetch_assoc();
			$count = $row['count']; 
			$total_page = ceil($count / $items_per_page);
		?>
		<div class= "page-info">
			<span>總共有 <?php echo $count?> 筆留言，頁數： </span>
			<span> <?php echo $page?> / <?php echo $total_page ?></span>
		</div>
		<div class= "paginator">
			<?php if ($page !=1) { ?>  
				<a href="index.php?page=1">首頁</a>
				<a href="index.php?page=<?php echo $page - 1?>">上一頁</a>
			<?php } ?>
			<?php if ($page != $total_page) { ?>
				<a href="index.php?page=<?php echo $page + 1?>">下一頁</a>
				<a href="index.php?page=<?php echo $total_page?>">最後一頁</a>
			<?php } ?>
		</div>
	</main>

  
<script>
	var btn = document.querySelector('.update-nickname')
	btn.addEventListener('click', ()=>{
		var form = document.querySelector('.board__nickname-form')
		form.classList.toggle('hide')
	})
</script>  
</body>
</html>


