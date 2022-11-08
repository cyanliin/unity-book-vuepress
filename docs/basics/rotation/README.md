# 旋轉物件

在 Unity 中的 rotation（旋轉）並不同於 position 使用 Vector3 個別設定三軸向數值，而是使用 Quaternion（四元數）來定義旋轉角度。

### [Euler Angles（尤拉角）](https://zh.wikipedia.org/zh-tw/%E6%AC%A7%E6%8B%89%E8%A7%92) 
是以 x, y, z 三個軸向個別旋轉，組成一個空間中的旋轉方向。此較容易理解，但有個致命的 [Gimbal Lock](https://www.youtube.com/watch?v=zc8b2Jo7mno) 問題。

### [Quaternion（四元數）- Unity使用](https://zh.wikipedia.org/zh-tw/%E5%9B%9B%E5%85%83%E6%95%B0%E4%B8%8E%E7%A9%BA%E9%97%B4%E6%97%8B%E8%BD%AC)
是較為複雜的數學算法，但運算上較為快速簡潔，且不會遇到 [Gimbal Lock](https://www.youtube.com/watch?v=zc8b2Jo7mno
) 的問題，所以大部分的 3D 遊戲引擎都是用它來表示空間中的旋轉量。

但為了要讓一般人方便使用，Unity 也提供了許多方便的 Euler 和 Quaternion 互轉轉換的方法。

## 常用旋轉方法
```csharp

// 設定為 Y 軸固定轉向 45 度
transform.rotation = Quaternion.Euler(0, 45f, 0);

// 取得三軸角度（Vector3)
Vector3 r = transform.rotation.eulerAngles;

// 將 Y 軸"再"旋轉 45 度
transform.Rotate(0, 45f, 0);

// 自動轉向某目標物件（以＋Ｚ當作前方）
transform.LookAt(<<目標物件>>);
```

## 範例：持續旋轉
```csharp
public class Spin : MonoBehaviour
{
    void Update()
    {
        transform.Rotate(0, 0.2f, 0);
    }
}

```