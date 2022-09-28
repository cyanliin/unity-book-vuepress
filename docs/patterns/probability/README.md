# 機率

## 簡單機率
我們可以利用 Unity 提供的 Random.Range 來產生範圍內的隨機數，搭配判斷就可以產生機率的效果。

:::tip 產生隨機數
Random.Range(最小值, 最大值); <br/>
- 回傳值為 float。
- 範圍中包含最小，但不包含最大值。
:::

```csharp
float r = Random.Range(0, 100);
if (r <= 10) {
    // 只有 10% 的機率會執行這裡的內容
}
```

## 隨機抽出
在遊戲中很多情況下是很多選項中，隨機抽出一個。
```csharp
string[] items = new string[5] { "A", "B", "C", "D", "E" };

// 用 0 ~ 陣列長度產生亂數 r
int r = Random.Range(0, items.Length); 

// 印出 items 第 r 個物件
Debug.Log(items[r]); 
```
包成函數方便後續共用（使用List類型）：

```csharp
public T RandomGetOne<T>(List<T> list)
{
    int r = Random.Range(0, list.Count);
    return list[r];
}
```
使用方法
```csharp
List<string> items = new List<string>();
items.Add("A");
items.Add("B");
items.Add("C");
items.Add("D");
Debug.Log(RandomGetOne(items));
```