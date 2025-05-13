export default function Form({ description, setDescription, onAddItem }) {
  // دالة لمعالجة إرسال النموذج عند النقر على زر اضافة
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) {
      return alert("You must add a value");d
    }
    // إنشاء عنصر جديد يحتوي على البيانات
    const newItem = {
      id: Date.now(),
      description,
      selected: false,
    };
    //   وتمرير العنصر الجديد إليها  onAddItem استدعاء الدالة
    onAddItem(newItem);
    // إعادة تعيين الحقل إلى فارغ بعد الإضافة
    setDescription("");
  }
  // إرجاع واجهة المستخدم لنموذج الإدخال عند استدعاء المكون
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        {/* حقل الإدخال الذي يستخدم لإضافة وصف المهمة */}
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter a task"
        />
        <button className="btn-add">Add</button>
      </div>
    </form>
  );
}
