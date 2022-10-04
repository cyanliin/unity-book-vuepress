# 程式風格 Code Style
程式碼編寫的形式很多種，為專案制定一套嚴謹的風格是很必要的，否則每個人都隨意創作的話，程式就會越來越凌亂。

## PascalCase 與 camelCase

|| PascalCase | camelCase |
|:---:|:---:|:---:|
| 中文 | 匈牙利命名法 | 駝峰式命名法 |
| 說明 | 單字首字大寫。 | 第一個單字首字小寫，其餘首字大寫。|
| 範例 | MyFirstLove| myFirstLove |

## 類別、屬性、方法
**正確：**
```csharp
// 類別名稱使用 PascalCase 
public class MyPlayer 
{
    // 屬性名稱都使用 camelCase
    int hp = 100;
    string name = "Peter";
    float maxSpeed = 20;
    float minSpeed = 5;

    // 方法名稱都使用 PascalCase
    void HealSelf()
    {

    }
}
```
**錯誤：**
```csharp
public class ball 
{
    int Hp = 100;
    string _name = "Peter";

    void healSelf()
    {

    }
}
```

## 大括號
開始大括號要換行。

**正確：**
```csharp
// 正確
if (score > 60)
{

}
```

**錯誤：**
```csharp
// 錯誤
if (score > 60) {

}
```

## IF
if 的後方要接一個空白

**正確：**
```csharp
// 正確
if (score > 60)
{

}
```

**錯誤：**
```csharp
// 錯誤
if(score > 60) {

}
```

## For
For 的後方要接一個空白，並且分號後也有一個空格
**正確：**
```csharp
// 正確
for (int i = 0; i < 10; i++) 
{

}
```
**錯誤：**
```csharp
// 錯誤
for(int i = 0;i < 10;i++) 
{

}
```