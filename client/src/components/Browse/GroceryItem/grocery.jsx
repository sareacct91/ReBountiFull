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
  const [addCartItem, { error }] = useMutation(ADD_CART_ITEM);
  const [updateInventory, { error: updateError }] =
    useMutation(UPDATE_INVENTORY);

  const handleButtonSubmit = async () => {
    console.log(grocery);
    try {
      const { data } = await addCartItem({
        variables: {
          food: {
            _id: grocery._id,
            name: grocery.name,
            price: parseFloat(grocery.price),
            image: grocery.image,
            quantity: 1,
          },
        },
      });
      console.log(data.addCartItem);
      console.log("grocery_id", grocery._id);
      const newId = _id;
      setFoodId(newId);
      console.log("deconstructed id: ",_id, newId);
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
          inventory: inventory - 1,
        },
      });
      console.log("updateData: ",updateData);
      setFoodId("");
    } catch (err) {
      console.error(err);
    }
  };

  // Convert cents to dollars and format to 2 decimal places
  const formatPrice = (priceInCents) => {
    return (priceInCents / 100).toFixed(2);
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
          <div className="flex max-w-fit flex-row items-center justify-between">
            <span className="text-lg font-bold text-green-600">
              ${formatPrice(price)}
            </span>
            <Link>
              <button
                type="button"
                className="ml-10 w-20 bg-orange p-2 text-sm text-white hover:border-gray-300 hover:bg-green-600 focus:border-black"
                onClick={handleButtonSubmit}
              >
                Add Item
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
