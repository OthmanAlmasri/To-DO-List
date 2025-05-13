import React, { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import ListItiem from "./components/ListItiem";

export default function App() {
  // كل ستيت منحدد وين يستخدم و ليش
  //الستيت هاد يستخدم في لست ايتم , يستخدم  مصفوفة لتخزين العناصر
  const [items, setItems] = useState(() => {
    const save = localStorage.getItem("items");
    return save ? JSON.parse(save) : [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // الستيت هاد يستخدم للفورم ,يستخدم لادارة الحقل
  const [description, setDescription] = useState("");

  // هذه الدالة لا تنفذ الى عند ضغط على الزر داخل الفورم
  function handleAddItem(item) {
    // تحديث الحالة باستخدام الوظيفة التصاعدية لتجنب مشاكل التزامن
    setItems((prevItems) => [...prevItems, item]);
    console.log(items);
  }

  //هذه لدالة لا تنفذ الى عند ضغط عند ضفط  الحقل  تشيك داخل المكون ايتم
  // دالة لتغيير حالة العنصر (محدد/غير محدد)
  function handleToggleItem(id) {
    // نحدث قائمة المهام بإنشاء نسخة جديدة منها
    setItems(
      items.map((item) => {
        // وقت تتنفذ دالة رح يعمل لوب على المهام , ال ادي يلي تمرر اذا ساوى ايدي مهمة من مهام رح يعمل نسخة و يغير حالة تحديد
        return item.id === id ? { ...item, selected: !item.selected } : item;
      })
    );
  }

  function handleDeleteItem(id) {
    // دالة فلتر بتنفذ فقط جزء الترو , شرط موجود يعني
    setItems(items.filter((item) => item.id !== id));
  }
  return (
    <main id="main">
      <div className="container">
        <div className="todo-list">
          <Title />
          <Form
            description={description}
            setDescription={setDescription}
            onAddItem={handleAddItem}
          />
          <ListItiem
            items={items}
            onToggleItem={handleToggleItem}
            onDeleteItem={handleDeleteItem}
          />
        </div>
      </div>
    </main>
  );
}
