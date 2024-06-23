import { useTravelStore } from "../../store";
import { useTravelListFeatures } from "./features";

export default function PackingList() {
  const { items, setItems } = useTravelStore();

  const {
    selectedSortMethod: [selectedSortMethod, setSelectedSortMethod],
    sortedItems,
    handleSort,
    handleCheck,
    handleClear,
    handleDelete,
  } = useTravelListFeatures();

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <li key={item.id}>
              <input
                onChange={() => {
                  handleCheck(item.id);
                }}
                type="checkbox"
                checked={item.checked}
              />
              <p
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                }}
              >
                {item.size} {item.itemName}
              </p>
              <button onClick={() => handleDelete(item.id)}>❌</button>
            </li>
          ))}
        </ul>
        <div className="actions">
          <select value={selectedSortMethod} onChange={handleSort}>
            <option value="input">Sort by input order</option>
            <option value="name">Sort by name</option>
            <option value="packed">Sort by packed order</option>
          </select>
          <button onClick={handleClear}>Clear list</button>
        </div>
      </div>
    </>
  );
}
