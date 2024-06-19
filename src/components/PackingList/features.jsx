import { useTravelStore } from "../../store";

export const useTravelListFeatures = () => {
  const { items, setItems } = useTravelStore();

  const handleCheck = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };
  const handleDelete = (id) => {
    setItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  const handleClear = () => {
    setItems([]);
  };

  return {
    handleCheck,
    handleClear,
    handleDelete,
  };
};
