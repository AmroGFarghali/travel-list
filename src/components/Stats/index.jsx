import { useTravelStore } from "../../store";

export default function Stats() {
  const { items } = useTravelStore();

  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );

  const packedItems = items.filter((item) => item.checked !== false).length;
  const packedPercentage = (packedItems / items.length) * 100 || 0;

  if (packedPercentage === 100)
    return (
      <p className="stats">
        <em>You have packed everything in your list!</em>
      </p>
    );
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
