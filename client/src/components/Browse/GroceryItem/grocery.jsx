// import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../../utils/helpers";
import { ADD_CART_ITEM, UPDATE_INVENTORY } from "../../../utils/mutations";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import Auth from "../../../utils/auth";

export default function GroceryItem(grocery) {
  const { _id, image, name, price, inventory } = grocery;
  const [foodId, setFoodId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [addCartItem, { error }] = useMutation(ADD_CART_ITEM);
  const [updateInventory] =
    useMutation(UPDATE_INVENTORY);

  const handleButtonSubmit = async () => {
    console.log(grocery.inventory);
    try {
      const { data } = await addCartItem({
        variables: {
          food: {
            _id: grocery._id,
            name: grocery.name,
            price: parseFloat(grocery.price),
            image: grocery.image,
            quantity: quantity,
            inventory: grocery.inventory - quantity
          },
        },
      });
      
      console.log("addcartitem please work please",data.addCartItem);
      console.log("total added items in the user's cart: ", data.addCartItem.items.length);
      
      console.log("grocery_id", grocery._id);
      const newId = _id;
      setFoodId(newId);
      console.log("deconstructed id: ", _id, newId);
      console.log("food id for the second time!!", foodId);
      await updateInventoryNum(newId);
    } catch (err) {
      console.error(err);
    }
  };

  const updateInventoryNum = async (newId) => {
    try {
      const { data: updateData } = await updateInventory({
        variables: {
          inventoryId: newId,
          inventory: inventory - quantity,
        },
      });
      console.log("updateData: ", updateData);
      setFoodId("");
    } catch (err) {
      console.error(err);
    }
  };

  // Convert cents to dollars and format to 2 decimal places
  const formatPrice = (priceInCents) => {
    return (priceInCents / 100).toFixed(2);
  };

  // function to handle the quantity selector 
  const handleChange = (e) => {
    const q = parseInt(e.target.value);
    if ( q >= 0)  {
      setQuantity(q)
    } else {
      setQuantity(0)
    }
  };

  if (error) {
    return <p>Something went wrong...</p>;
  }

  return (
    <div className="m-3">
      <div className=" grid w-fit place-items-center text-center">
        <img
          className="rounded border-4 border-gray-300 p-2"
          alt={name}
          src={image}
        />
        <div className="mt-2 grid w-fit place-items-center">
          <p className="font-bold text-black">{name}</p>
          <p className=" text-gray-600">
            {inventory}&nbsp;{pluralize("item", inventory)}&nbsp;in&nbsp;stock
          </p>
          <div className="flex max-w-fit flex-col items-center justify-between">
            <span className="text-lg font-bold text-green-600">
              ${formatPrice(price)}
            </span>
            {inventory > 0 && quantity >= 0? (
              <Link to={Auth.loggedIn() ? "" : "/login"}>
                <div className="flex flex-row">
                  <select
                    className="rounded-lg border border-gray-700 bg-transparent font-normal text-black p-2"
                    onChange={handleChange}
                    value={quantity}
                  >
                    {/* limiting the max number of quantity that users can add at a time*/}
                    {[...Array(Math.min(inventory, 10))].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    className="ml-1 w-20 bg-orange p-2 text-sm text-white hover:border-gray-300 hover:bg-green-600 focus:border-black"
                    onClick={handleButtonSubmit}
                  >
                    Add Item
                  </button>
                </div>
              </Link>
            ) : (
              <button
                type="button"
                className="cursor-not-allowed bg-orange p-2 text-sm text-white opacity-50"
                disabled
              >
                Out of Stock
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
