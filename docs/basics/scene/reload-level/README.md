# 關卡重新開始
在上一章裡我們已經知道如何切換不同場景，如果想要在同一個關卡裡重新開始，我們可以簡單透過 LoadScene 指定再次開啟當前的場景，就可以達成重新開始的效果了。
```csharp
// 城市最上方得載入場景管理類別
using UnityEngine.SceneManagement;
```
```csharp
// 已經在 Level2 的情況下，再次開啟，就等於重新開始關卡。
SceneManager.LoadScene("Level2");
```

#### 更好的做法
考慮到場景名稱是有可能被修改的，而程式也得一起改，否則會找不到場景。為了減少人為錯誤，我們可以透過 SceneManager 的另一項功能 GetActiveScene()，來取得目前的場景物件，再由場景物件取得名稱。

這樣以後改名也不用修改程式了。
```csharp
Scene currScene = SceneManager.GetActiveScene(); // 取得當前場景物件
SceneManager.LoadScene(currScene.name); // 重新開啟場景
```
要寫成一行也可以：
```csharp
// 重新開啟當前場景
SceneManager.LoadScene(SceneManager.GetActiveScene().name);
```