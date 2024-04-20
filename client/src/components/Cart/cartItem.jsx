import { useMutation } from "@apollo/client";
import { REMOVE_CART_ITEM, UPDATE_INVENTORY } from "../../utils/mutations";
import PropTypes from "prop-types";
import { useState } from "react";

export default function CartItem({ item }) {
  const [itemQuantity, setItemQuantity] = useState(item.quantity);
  const [removeCartItem, { loading }] = useMutation(REMOVE_CART_ITEM);
  const [updateInventory, { error: updateError }] =
    useMutation(UPDATE_INVENTORY);

  async function clickedRemoveItem() {
    try {
      const { data: removeItem } = await removeCartItem({
        variables: {
          food: {
            _id: item.id,
          },
        },
      });
      console.log(
        "cart after removing the item: ",
        removeItem,
        "removed food item: ",
        item,
        "removed food item's metadata: ",
        item.metadata.inventory,
      );
      console.log(item.id, "matadata is the inventory: ", removeItem);
      await updateInventoryNum(item.id);
    } catch (err) {
      console.error(err);
    }
  }
  const updateInventoryNum = async (foodId) => {
    try {
      const { data: updateData } = await updateInventory({
        variables: {
          inventoryId: foodId,
          inventory: item.metadata.inventory + item.quantity,
        },
      });
      console.log("updateData: ", updateData);
    } catch (updateError) {
      console.error(updateError);
    }
  };

  const handleChange = (e) => {
    const q = parseInt(e.target.value);
    setItemQuantity(q);
  };

  // limiting available quantity of food items
  const maxSelectable = Math.min(
    item.metadata.inventory + item.quantity - item.quantity,
    item.quantity + 5,
  );

  return (
    <>
      <div className="flex flex-col items-center justify-between border-b border-black p-5 lg:flex-row lg:rounded-xl lg:border">
        <img src={item.images[0]} alt={item.name} className="rounded-xl" />
        <div className="flex w-3/4 flex-col items-center sm:justify-center lg:w-1/2">
          <p>{item.name}</p>
          <div className="flex w-1/2 min-w-60 justify-between lg:w-full lg:min-w-40 lg:items-start">
            <span>quantity</span>
            <select
              className="rounded-lg border border-gray-700 bg-transparent p-2 font-normal text-black"
              value={itemQuantity}
              onChange={handleChange}
            >
              {[...Array(Math.max(1, maxSelectable))].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <p className="flex w-1/2 min-w-60 justify-between lg:w-full lg:min-w-40 lg:items-start">
            <span>each</span>
            {item.unitTotal.formatted}
          </p>
          <p className="flex w-1/2 min-w-60 justify-between lg:w-full lg:min-w-40 lg:items-start">
            <span>total</span>
            {item.lineTotal.formatted}
          </p>
          <button
            className="self-end text-blue-400 underline"
            disabled={loading}
            onClick={clickedRemoveItem}
          >
            remove
          </button>
        </div>
      </div>
    </>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    unitTotal: PropTypes.shape({
      formatted: PropTypes.string.isRequired,
      amount: PropTypes.number,
    }).isRequired,
    lineTotal: PropTypes.shape({
      formatted: PropTypes.string.isRequired,
      amount: PropTypes.number,
    }).isRequired,
  }).isRequired,
};
