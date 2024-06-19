import { useTravelStore } from "../../store";

export default function Stats() {
  const { items } = useTravelStore();

  const packedItems = items.filter((item) => item.checked !== false).length;

  return (
    <div className="stats">
      {" "}
      <p>
        You have {items.length} on your list, and you already packed{" "}
        {packedItems} ( {(packedItems / items.length) * 100 || 0}
        %)
      </p>
    </div>
  );
}
