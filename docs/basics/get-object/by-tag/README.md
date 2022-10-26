# 用 Tag 取得其中一個物件
## FindWithTag()
FindWithTag() 是個 GameObject 的靜態方法，它會返回一個在場景上擁有指定 Tag 的並且啟用物件 GameObject。

:::tip 注意
當場上有很多個相同 Tag 的物件時，Unity 會照系統內定的順序回傳第一個物件。此順序非 Hierachy 視窗中的排序，使用者並無法確切預知哪個物件是第一個。
:::

```csharp
GameObject obj = GameObject.FindWithTag("Enemy");
```
[官方文件 GameObject.FindWithTag](https://docs.unity3d.com/ScriptReference/GameObject.FindWithTag.html)
