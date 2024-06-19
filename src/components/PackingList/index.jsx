import { useTravelStore } from "../../store";
import { useTravelListFeatures } from "./features";

export default function PackingList() {
  const { items, setItems } = useTravelStore();
  const { handleCheck, handleClear, handleDelete } = useTravelListFeatures();
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input
                onChange={() => {
                  handleCheck(item.id);
                }}
                type="checkbox"
              ></input>
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
          <select defaultValue="input">
            <option value="input">Sort by input order</option>
            <option value="name">Sort by name</option>
          </select>
          <button onClick={handleClear}>Clear list</button>
        </div>
      </div>
    </>
  );
}
