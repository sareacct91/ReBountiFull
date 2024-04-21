import { useMutation } from "@apollo/client";
import {
  REMOVE_CART_ITEM,
  UPDATE_INVENTORY,
  UPDATE_CART_ITEM,
} from "../../utils/mutations";
import PropTypes from "prop-types";

export default function CartItem({ item }) {
  const [removeCartItem, { loading }] = useMutation(REMOVE_CART_ITEM);
  const [updateInventory] = useMutation(UPDATE_INVENTORY);
  const [updatedCartItem] = useMutation(UPDATE_CART_ITEM);

  async function clickedRemoveItem() {
    try {
      const { data: removeItem } = await removeCartItem({
        variables: {
          food: {
            _id: item.id,
          },
        },
      });
      console.log(removeItem)
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
      console.log(updateData)
    } catch (updateError) {
      console.error(updateError);
    }
  };


  const updatingCart = async (newQ) =>  {
    try {
      const { data: updatedCartData } = await updatedCartItem({
        variables: {
          food: {
            _id: item.id,
            quantity: newQ,
            inventory: item.metadata.inventory,
          },
        },
      });
      console.log(updatedCartData)
      await updateInventoryNum(item.id);
    } catch (err) {
      console.error(err);
    }
  }

  // limiting available quantity of food items
  const maxSelectable = Math.min(
    item.quantity + 5,
    item.quantity + item.metadata.inventory,
  );

  const handleChange = async (e) => {
    const q = parseInt(e.target.value);
    await updatingCart(q);
  };

  return (
    <>
      <div
        className={`${loading ? "opacity-50 " : ""}flex flex-col items-center justify-between border-b border-black p-5 lg:flex-row lg:rounded-xl lg:border`}
      >
        <img src={item.images[0]} alt={item.name} className="rounded-xl" />
        <div className="flex w-3/4 flex-col items-center sm:justify-center lg:w-1/2">
          <p>{item.name}</p>
          <div className="flex w-1/2 min-w-60 justify-between lg:w-full lg:min-w-40 lg:items-start">
            <span>quantity</span>
            <select
              className="rounded-lg border border-gray-700 bg-transparent p-2 font-normal text-black"
              value={item.quantity}
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
