import { useState } from "react";

export default function Test() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    // محاولة استخدام items مباشرة
    console.log("قبل التحديث:", items); // قد لا يُظهر العناصر الأحدث
    setItems([...items, newItem]);

    // محاولة عرض العناصر بعد التحديث فوراً
    console.log("بعد التحديث مباشرة:", items); // القيمة هنا قد لا تكون مُحدَّثة
  }

  function handleAddItemSafely(newItem) {
    // استخدام prevItems للحصول على القيمة المضمونة
    setItems((prevItems) => {
      console.log("قبل التحديث (باستخدام prevItems):", prevItems);
      return [...prevItems, newItem];
    });
  }

  return (
    <div>
      <button onClick={() => handleAddItem("Item " + (items.length + 1))}>
        أضف عنصرًا
      </button>
      <button onClick={() => handleAddItemSafely("Item " + (prev.length + 1))}>
        أضف عنصرًا بأمان
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
