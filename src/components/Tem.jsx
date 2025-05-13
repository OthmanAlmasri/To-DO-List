import { Check } from "lucide-react";
export default function Tem({
  id,
  description,
  selected,
  onToggleItem,
  onDeleteItem,
}) {
  return (
    <li className="List-Item">
      <div>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            onClick={() => {
              onToggleItem(id);
            }}
          />
          {selected ? (
            <Check color="#fff" />
          ) : (
            <span className="checkmark"></span>
          )}
        </label>
        {/*   اذا صار لمتمغير سلكتيد ترو ( ايمت بصير ترو بس يضغط اكتمال المهمة )بضيف كلاس اسمه سليكتيد سdescription رح ياخذ كلاس نيم دائم هو  */}

        <span className={`description ${selected && "selected"}`}>
          {description}
        </span>
      </div>
      <button className="btn-close" onClick={() => onDeleteItem(id)}>
        &times;
      </button>
    </li>
  );
}
