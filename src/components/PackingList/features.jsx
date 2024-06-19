import { useTravelStore } from "../../store";

export const useTravelListFeatures = () => {
  const { items, setItems } = useTravelStore();

  const handleCheck = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
    // const packedItem = packedItems?.find((item) => item?.id === id);
    // const itemIPack = items.find((item) => item?.id === id);
    // packedItem
    //   ? setPackedItems((currItems) =>
    //       currItems.filter((currItem) => currItem !== packedItem)
    //     )
    //   : setPackedItems((currItems) => [...currItems, itemIPack]);
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
