import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTravelStore } from "../../store";
export const useTravelFormFeatures = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  const [itemName, setItemName] = useState("");

  const { items, setItems } = useTravelStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      size: selectedOption,
      itemName: itemName,
      id: uuidv4(),
      checked: false,
    };
    setItemName("");
    setItems([...items, newItem]);
  };

  return {
    handleSubmit,
    selectedOption: [selectedOption, setSelectedOption],
    itemName: [itemName, setItemName],
  };
};
