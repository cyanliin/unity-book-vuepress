# 關卡重新開始
在上一章裡我們已經知道如何切換不同場景，如果想要在同一個關卡裡重新開始，我們可以簡單透過 LoadScene 指定再次開啟當前的場景，就可以達成重新開始的效果了。
```csharp
// 已經在 Level2 的情況下，再次開啟，就等於重新開始關卡。
SceneManager.LoadScene("Level2");
```

#### 更好的做法
考慮到場景名稱是有可能被修改的，而程式多了以後可能會忘記也同時修改。所以我們可以透過 SceneManager 的另一項功能 GetActiveScene()，來取得目前的場景。

這樣以後改名也不用修改程式了。
```csharp
Scene currScene = SceneManager.GetActiveScene(); // 取得當前場景
SceneManager.LoadScene(currScene.name); // 重新開啟場景
```
要寫成一行也可以：
```csharp
// 重新開啟當前場景
SceneManager.LoadScene(SceneManager.GetActiveScene().name);
```