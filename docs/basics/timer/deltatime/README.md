# 使用 Time.deltaTime 計時

由於 [Time.deltaTime](../../deltatime/deltatime/) 為每個 Update 的秒差，所以我們可以通過不停加總 Time.deltaTime 取得目前經過的時間，用此特性可以做一個簡易的計時器。


## 每3秒觸發一次
```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    private float passedTime = 0; // 用來累加時間的變數
    private float timerInterval = 3; // 設定觸發間隔

    void Start()
    {
        
    }

    void Update()
    {
        // 每次都累加經過的時間
        passedTime += Time.deltaTime;

        // 當經過時間已經超過觸發間隔
        if (passedTime >= timerInterval)
        {
            // 執行要觸發的內容.....


            // 把經過時間歸零（為了讓之後還會反覆觸發）
            passedTime = 0;
        }
    }
}

```

## 停1秒後只觸發一次
很多情況裡，是某些動作得延遲幾秒再執行。

例如：敵人死亡後要播放1秒動畫後，才掉落物品。

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Emeny : MonoBehaviour
{

    private bool isDead = false; // 是否死亡
    private float deadDelay = 1.5; // 設定延遲計時秒數
    private float deadDelayTimer = 0; // 用來累加時間的變數

    void Start()
    {
        
    }

    void Update()
    {
        // 活著的時候
        if (!isDead)
        {
            // ......
        }

        // 當設為死亡時
        if (isDead)
        {
            // 開始計時，當超過 1.5 秒後
            deadDelayTimer += Time.deltaTime;
            if (deadDelayTimer >= deadDelay)
            {
                // 刪除物件
                gameObject.SetActive(false);
                Destory(gameObject);

                // 觸發其他需要在1秒延遲後執行的行為 (例如：產生掉落物、結算在場怪物數量)
                // ......
            }
        }
    }

    private void OnTriggerEnter(Collider other)
    {
        // 當碰到子彈就設為死亡
        if (other.tag == "Bullet")
        {
            // 觸發要立即執行的行為 (例如：播放死亡動畫、添加死亡效果）
            // ......

            // 設為死亡
            isDead = true;
        }
    }
}

```