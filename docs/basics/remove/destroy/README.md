# 刪除物件 Destroy

### Destroy()
當物件從此不用時，可以使用 Destroy() 來刪除物件。


|參數|說明|
|---|---|
|第一個參數 obj|要刪除的物件的 GameObject|
|第二個參數 t（選填）|延遲的秒數|

Destroy 是 Unity 中的最基礎物件類別 Object 的靜態方法 (Static Method)，物件的腳本類別 MonoBehavior 也是繼承自 Object 所以通常都可以隨時呼叫。

```csharp
// 將自己刪除
Destroy(gameObject);

// 停2.5秒後，再將自己刪除
Destroy(gameObject, 2.5f);

// 刪掉別的物件
Destroy(someBox.gameObject);
```
[官方文件 Object.Destroy](https://docs.unity3d.com/ScriptReference/Object.Destroy.html)

## 先停用，再刪除

:::danger （重要）物件實際被刪除的時間
當執行完 Destroy() 之後，物件會在當前的 Update() "執行完之後"才會實際執行刪除，所以會存在程式上的**延遲**。

因此，如果你在 Destroy() 之後，直接執行 Find()、FindWithTag()、FindGameObjectsWithTag() 等方法，在同一個 Update() 的執行階段裡還是會找到該刪除的物件。直到下一個 Update();
:::

為了避免上述問題延遲，通常在 Destroy() 之前，先[停用該物件](../active/) SetActive(false) 比較保險，因為 Find()、FindWithTag()、FindGameObjectsWithTag() 會屏蔽掉停用的物件。


```csharp
// 保險的刪除物件（先停用，再刪除）
gameObject.SetActive(false);
Destroy(gameObject);
```

:::warning 為何不用 DestroyImmediate() ?
DestroyImmediate() 可以立即刪除物件，而沒有上方延遲的問題，但此方法 Unity 官方明確表示**強烈不建議在遊戲中使用**。DestroyImmediate() 並不是開發給遊戲中使用，而是提供開發插件編輯器的功能，所以應避免在遊戲中使用而導致不可預期的問題發生。在遊戲的腳本裡請使用 Destroy()。
:::

[官方文件 Object.DestroyImmediate](https://docs.unity3d.com/ScriptReference/Object.DestroyImmediate.html)