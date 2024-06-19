import { useTravelFormFeatures } from "./features";
export default function Form() {
  const {
    handleSubmit,
    selectedOption: [selectedOption, setSelectedOption],
    itemName: [itemName, setItemName],
  } = useTravelFormFeatures();

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? </h3>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(Number(e.target.value))}
        name="items"
      >
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
}
