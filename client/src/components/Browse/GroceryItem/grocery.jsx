// import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../../utils/helpers";
import { ADD_CART_ITEM } from "../../../utils/mutations";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
// import { QUERY_FOOD } from "../../../utils/queries";
import Auth from "../../../utils/auth";

export default function GroceryItem(food) {
  const { image, name, price, inventory } = food;
  const [addCartItem, { error }] = useMutation(ADD_CART_ITEM);

  const handleButtonSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addCartItem({
        variables: {
          food: {
            _id: food._id,
            name: food.name,
            price: parseFloat(food.price),
            image: food.image,
            quantity: 1,
          },
        },
      });
      console.log(data);
      const updatedFood = { ...food };
      updatedFood.inventory -= 1;
      console.log(`added ${data} to your cart!`);
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
