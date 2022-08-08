# unity-book-vuepress
[Unity 遊戲開發聖經](https://cyanliin.github.io/unity-book/)的 vuepress 編輯專案，內容都由此編輯再自動 deploy 到 [unity-book](https://github.com/cyanliin/unity-book)。

## 安裝
clone 此專案後，執行安裝所需 modules：
```
npm install
```

## 執行
```
npm run docs:dev
```
預覽觀看: localhost:8080/unity-book/ 

## 編輯目錄
目錄在 vuepress 的 config 檔中設定：
docs/.vuepress/config.js

## 發布
```
sh deploy.sh
```
執行完後會自動上傳到 https://cyanliin.github.io/unity-book/ ，約一分鐘後顯示新內容。

## 連結
* [Unity 遊戲開發聖經](https://cyanliin.github.io/unity-book/)