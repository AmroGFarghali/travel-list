import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [items, setItems] = useState([]);
  const [packedItems, setPackedItems] = useState([]);
  return (
    <>
      <Logo />
      <Form setItems={setItems} />
      <PackingList
        setPackedItems={setPackedItems}
        items={items}
        setItems={setItems}
        packedItems={packedItems}
      />
      <Stats items={items} packedItems={packedItems} />
    </>
  );
}

const Logo = () => {
  return (
    <>
      <h1>🌴Far away 💼</h1>
    </>
  );
};
const Form = ({ setItems }) => {
  const [selectedOption, setSelectedOption] = useState(1);
  const [itemName, setItemName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      size: selectedOption,
      itemName: itemName,
      id: uuidv4(),
      checked: false,
    };
    setItemName("");
    setItems((items) => [...items, newItem]);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? </h3>
      <select onChange={(e) => setSelectedOption(e.target.value)} name="items">
        {Array.from({ length: 30 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        onChange={(e) => {
          setItemName(e.target.value);
        }}
        name="itemName"
        type="text"
        placeholder="Item..."
        value={itemName}
      ></input>

      <button disabled={itemName.length === 0} type="submit">
        Add
      </button>
    </form>
  );
};
const PackingList = ({ packedItems, items, setItems, setPackedItems }) => {
  const handleCheck = (id) => {
    setItems((currItems) =>
      currItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
    const packedItem = packedItems?.find((item) => item?.id === id);
    const itemIPack = items.find((item) => item?.id === id);
    packedItem
      ? setPackedItems((currItems) =>
          currItems.filter((currItem) => currItem !== packedItem)
        )
      : setPackedItems((currItems) => [...currItems, itemIPack]);
  };
  const handleDelete = (id) => {
    setItems((currItems) => currItems.filter((item) => item.id !== id));
  };
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
          <button>Clear list</button>
        </div>
      </div>
    </>
  );
};
const Stats = ({ items, packedItems }) => {
  return (
    <div className="stats">
      {" "}
      <p>
        You have {items.length} on your list, and you already packed{" "}
        {packedItems.length} ( {(packedItems.length / items.length) * 100}%)
      </p>
    </div>
  );
};
