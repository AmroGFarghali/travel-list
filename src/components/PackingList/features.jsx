import { useState } from "react";
import { useTravelStore } from "../../store";

export const useTravelListFeatures = () => {
  const { items, setItems } = useTravelStore();
  const [selectedSortMethod, setSelectedSortMethod] = useState("input");

  let sortedItems;
  const handleCheck = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleClear = () => {
    setItems([]);
  };
  const handleSort = (e) => {
    setSelectedSortMethod(e.target.value);
  };

  if (selectedSortMethod === "input") sortedItems = items;
  if (selectedSortMethod === "name")
    sortedItems = items
      .slice()
      .sort((a, b) => a.itemName.localeCompare(b.itemName));
  if (selectedSortMethod === "packed")
    sortedItems = items.slice().sort((a, b) => b.checked - a.checked);

  return {
    selectedSortMethod: [selectedSortMethod, setSelectedSortMethod],
    sortedItems,
    handleCheck,
    handleSort,
    handleClear,
    handleDelete,
  };
};
