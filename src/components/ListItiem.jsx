import Tem from "./Tem";

export default function ListItiem({ items, onToggleItem, onDeleteItem }) {
  return (
    // إنشاء قائمة غير مرتبة تحتوي على (li)
    <ul className="List-items">
      {/* "items"  لتكرار العناصر في المصفوفة    "map" استخدام الميثود */}

      {items.map((item) => {
        //   للحصول على خصائصه  من كل عنصر   "item"  تفكيك الكائن
        const { id, description, selected } = item;
        return (
          // لعرض كل عنصر مع تمرير الخصائص  Item  استخدام مكون
          <Tem
            key={id}
            id={id}
            description={description}
            selected={selected}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
          />
        );
      })}
    </ul>
  );
}
