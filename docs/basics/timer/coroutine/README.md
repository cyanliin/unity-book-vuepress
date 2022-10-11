# 協程 StartCoroutine

傳統函式會一次從頭執行到尾。而 Coroutine (協程) 為可分段執行的函式，可在標記處中斷、下次再由中斷處繼續執行。(在 Update() 之後執行。)

![compare](./compare.png)

:::tip
Coroutine 是 Unity 中最靈活的計時方法，雖然較難懂一點，但活用 Coroutine 可以讓程式碼更簡潔。**建議優先使用**
:::

**時間控制寫法：（在 Coroutine 函式內才能使用）**
|寫法|說明|
|---|---|
|yield return new WaitForSeconds(2);|在該行暫停兩秒，之後再往後執行。|
|yield return null;|在該行暫停一個frame，下次 Update()之後再往後執行。|
|yield break;|在該行完全停止，不往後執行。|

## 範例：延遲 2 秒執行一次

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Coin : MonoBehaviour
{
    void Start()
    {
        // 開始執行 Coroutine
        StartCoroutine(DestroySelf());
    }

    void Update()
    {
        
    }

    // 宣告 Coroutine 要執行的內容
    IEnumerator DestroySelf()
    {
        // 先延遲兩秒，再執行後續的內容一次
        yield return new WaitForSeconds(2);
        gameObject.SetActive(false);
        Destroy(gameObject);
    }
}

```

:::tip Coroutine 函式的宣告
Coroutine 函式宣告時，回傳的類別一定要是 IEnumerator。
:::

[官方文件 MonoBehaviour.StartCoroutine](https://docs.unity3d.com/ScriptReference/MonoBehaviour.StartCoroutine.html)

## 範例：每 3 秒產生敵人（怪物箱）

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyBox : MonoBehaviour
{
    public GameObject enemyPrefab; // 敵人Prefab用於複製（拖曳指定）

    void Start()
    {
        // 開始持續產生敵人
        StartCoroutine(CreateEnemyContinually());
    }

    void Update()
    {
        
    }

    // 持續產生敵人(Coroutine)
    IEnumerator CreateEnemyContinually()
    {
        // 無窮迴圈
        while (true)
        {
            // 停止 2 秒
            yield return new WaitForSeconds(3);

            // 產生隨機位置＆旋轉
            float rx = Random.Range(-10f, 10f);
            float rz = Random.Range(-10f, 10f);
            float rr = Random.Range(0, 360f);
            Vector3 randPos = new Vector3(rx, 0, rz);
            Quaternion randRot = Quaternion.Euler(0, rr, 0);

            // 產生敵人
            Instantiate(enemyPrefab, randPos, randRot);
        }
    }
}
```


## 範例：每 4 秒消失一個指定tag物件

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CoinsController : MonoBehaviour
{
    void Start()
    {
        // 開始定時清除場上錢幣
        StartCoroutine(RemoveTagObject("Coin", 4));
    }

    void Update()
    {
        
    }

    // 開始定時清除指定tag物件 (Coroutine)
    IEnumerator RemoveTagObject(string tag, int sec)
    {
        // 無窮迴圈
        while (true)
        {
            // 停止指定秒數
            yield return new WaitForSeconds(sec);

            // 取得一個指定 tag 物件
            GameObject obj = GameObject.FindWithTag(tag);
            if (obj) 
            {
                // 刪除物件
                obj.SetActive(false);
                Destroy(obj);
            }
        }
    }
}
```