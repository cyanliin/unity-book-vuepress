# 使用 Tag 取得物件


## 取得單一Tag物件 FindWithTag()
FindWithTag() 是個 GameObject 的靜態方法，它會返回一個在場景上擁有指定 Tag 的並且啟用物件 GameObject。

:::tip 注意
當場上有很多個相同 Tag 的物件時，Unity 會照系統內定的順序回傳第一個物件。此順序非 Hierachy 視窗中的排序，使用者並無法確切預知哪個物件是第一個。
:::

```csharp
GameObject obj = GameObject.FindWithTag("Enemy");
```
[官方文件 GameObject.FindWithTag](https://docs.unity3d.com/ScriptReference/GameObject.FindWithTag.html)


## 取得所有Tag的物件 FindGameObjectsWithTag()
FindGameObjectsWithTag() 是個 GameObject 的靜態方法，它會返回在場景上所有擁有指定 Tag 的並且啟用物件 GameObject 陣列。

```csharp
// 取得所有場上 tag 為 Enemy 的物件
GameObject[] enemys = GameObject.FindGameObjectsWithTag("Enemy");

// 取得數量
int enemyCount = enemys.Length;
```
:::tip
由於回傳的是陣列 GameObject[] 所以通常會搭配 foreach 來走訪裡面的每一個物件。
```csharp
GameObject[] enemys = GameObject.FindGameObjectsWithTag("Enemy");
foreach (GameObject enemy in enemys)
{
    // enemy......
}
```
:::

[官方文件 GameObject.FindGameObjectsWithTag](https://docs.unity3d.com/ScriptReference/GameObject.FindGameObjectsWithTag.html)


## 範例：取得最接近的敵人
```csharp
GameObject FindClosestEnemy()
{
    // 比大小紀錄用變數
    GameObject closestEnemy = null;
    float minDistance = Mathf.Infinity;

    // 取得所有 tag 為 Enemy 的物件
    GameObject[] enemys = GameObject.FindGameObjectsWithTag("Enemy");
    
    // 逐一計算距離，比大小，記錄下最小的
    foreach (GameObject enemy in enemys)
    {
        // 計算座標差異、得出距離
        Vector3 diff = enemy.transform.position - position;
        float distance = diff.sqrMagnitude;

        // 和前一次紀錄的最短距離比大小，如果有比較小，則更換紀錄
        if (distance < distance)
        {
            minDistance = distance;
            closestEnemy = enemy;
        }
    }

    // 回傳最後的紀錄
    return closestEnemy;
}
```