## 交作業流程
### 請用文字一步步敘述應該如何交作業。

步驟：
 
* 先連上GitHuba classroom [網址](https://classroom.github.com/a/SbDvk2VA)
* 接受網址內的邀請之後，線上系統會自行複製一份課綱到每個人的各自帳號中
* 在自己帳號內的 Git Repository 中，把網站內的課綱 clone 一份到自己的電腦中
  * 指令： `git clone +網站上提供的連結` 
* 下載完成之後，可以先用 `git status` 檢查當下的狀態
* 接著用` git branch`開一個新的分支，分支名稱可以自行命名 (如：hw1)，所有的作業內容都先寫在分支上，等作業完成之後，再 merge 回 master 上。
* 操作步驟如下
 * **`git init`** 可以用於開始啟動版本控制
 * **`ls -al`** 可以看到隱藏檔 (.git)
 * **`git status`** 確認檔案當下的狀態
 * **`git add`** 決定是否加入版本控制
 * **`git rm --cached <file>`** 這個指令將已加入版本控制的檔案再移回到沒有被版本控制區(Untracked files)
    * 補充說明：
    * (1) **staged** 或是**Changes to be committed** : 代表有被加入版本控制，但是還沒有正式建立新的控制版本
    * (2) **Untracked files** 還沒有被加入版本控制的檔案
    * **`git add . `** 把所有檔案加入版本控制
* 文件內容改完之後，要正式建立一個新的版本，有兩種方法
    * (1)　鍵入 **`git commit`** ，螢幕會切換到vim 的視窗，可以直接在該視窗鍵入commit的命名檔案名稱，
    * (2)　或是跳出vim視窗，回到原本介面，接著再以 `git commit -m “”` 雙引號之間打入想要命名的版本名稱
    * **`git log`** 用這個指令，可以看到存在幾個commit，並且顯示各個版本的紀錄
    * **`git log –oneline`** 用這個指令，可以看到檔名比較精簡的commit
    * **`git diff`** 可以看看 commit 之前，這次的文件改了什麼


- **`git checkout 接上commit的版本號`** 就可以回到先前的任一個版本


- **`git checkout master`** 回到最新的版本
- **`git branch -v`** 可以知道現在有幾個 branch
- **`git branch`** 接想要的名稱：就可以新增一個想要的branch
- **`git branch -d`** 接想要刪除的 branch 的名稱：就可以 branch 刪掉
- **`git merge 想要合併進來的 branch 名稱`**：這樣就可以把內容改變過的branch (如：新分支) 合併入所在的 branch (如主線 master )上
- 合併完成後，可用 git branch -v 檢查現在位在哪一條branch 上面、接著使用 git log 檢查版本 (commit) 是否有更新到最新狀態，確認沒問題之後，用  git branch -d 刪除掉不需要的 branch
- **`git push origin master'** 把電腦中的檔案與網路上同步


