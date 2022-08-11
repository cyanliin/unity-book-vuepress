# 控制球體
這裡我們要開始寫程式了！在之前我們所使用的各種元件(Component)都可以想像是 Unity 官方預先寫好的腳本元件，現在我們可以透過自己新增自訂的腳本，來實作客製化的功能。

## 新增 Script 元件(腳本)
### 方法一：從物件新增
如同添加 RigidBody 的方式，選取物件後，在 Inspect 面板中點選 Add Component，並選擇最後一項 New script。輸入即將新增的檔名 Ball，按下 Create and Add，Unity 就會幫你在 Assets 資料夾中新增 Ball.cs 檔，並且賦予到當前物件裡。

### 方法二：先新增腳本檔，再拖曳至物件
你也可以在 Assets 面板中，按右鍵 Create / C# Script 命名為 Ball.cs，並選取 Ball 物件、拖曳腳本進 Inspect 面板之中。

### 編輯腳本程式碼
只需要連點程式檔案兩下，Unity 便會自動開啟預設的程式編輯軟體。
:::tip 程式編輯軟體
請參考 [程式編輯軟體設定](../../code-editor/)，獲得更多說明。
:::

## Ball.cs
請將 Ball.cs 開啟，你會看到 Unity 已經幫你自動產生了一些內容。Start(), Update() 的裡面就是將來放置放程式的地方。

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Ball : MonoBehaviour
{
    // 這邊宣告屬性（變數）

    void Start()
    {
        // 這裡的程式只會在開始時執行一次
        // （通常是做些初始化的設定）
    }

    void Update()
    {
        // 這裡的程式會每秒執行 30 次
        // （主要的遊戲邏輯大多擺這邊）
    }
}
```

:::tip MonoBehaviour 類別
請特別注意 Ball 類別是繼承自 MonoBehaviour 類別：
```csharp
using UnityEngine;

public class Ball : MonoBehaviour
{
```
MonoBehaviour 是 UnityEngine 裡最重要的類別，所有 Unity 腳本(Script) ，提供大量常用的方法。

常用的 Start(), Update(), GetComponent<>() 都是源自於 MonoBehavior。
:::

請將 Ball.cs 改寫為下列內容：

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Ball : MonoBehaviour
{
    public float speed = 500.0f; // 速度
    private Rigidbody rb; // 用來存放剛體元件的變數

    void Start()
    {
        // 取得自身的剛體元件
        rb = GetComponent<Rigidbody>();
    }

    void Update()
    {
        // 取得方向鍵輸入
        float v = Input.GetAxis("Vertical");
        float h = Input.GetAxis("Horizontal");

        // 合成為方向向量、推動剛體
        Vector3 push = new Vector3(h, 0, v) * speed;
        rb.AddForce(push * Time.deltaTime);
    }
}
```


## 執行遊戲
存檔後回到 Unity，並按下執行，此時就可以使用方向鍵來控制球體了！

![game](./game.gif)

:::tip 為何剛體元件要在 Start 裡取得？
如果把取得剛體元件放在 Update 裡面，則每 1/30 秒都會取得一次 (Unity 預設一秒會執行30次 Update) ，雖然執起來不會有問題，但這樣十分浪費運算資源。因此，把取得剛體元件的程式放在 Start 裡更合適，因為它只會在遊戲啟動時執行一次，Update 就可以直接使用。
:::

:::tip 一個物件上，可以有多個 Script 嗎？
可以的，Unity 的物件身上可以擁有多個 Script 元件。與其把所有功能都寫在一個龐大的 Script 裡，不如依功能拆分成獨立的 Script，讓後續更方便共用與維護。
:::
