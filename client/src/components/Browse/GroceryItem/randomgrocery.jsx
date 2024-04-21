import { useQuery } from "@apollo/client";
// import { useState, useEffect } from "react";
import { QUERY_ALL_FOOD } from "../../../utils/queries.js";
import GroceryItem from "../GroceryItem/grocery.jsx";
import { selectRandomItems } from "../../../utils/helpers.js";

export default function RandomProducts() {
  const { loading, data } = useQuery(QUERY_ALL_FOOD);

  if (loading) return <p>Loading...</p>;
  const { getAllFood } = data;
  const randomFoodItems = selectRandomItems(getAllFood);

  return (
    <div className="flex flex-col  bg-white px-5">
      <p className="col-span-full mt-0 py-10 text-4xl text-black m-auto">
        Featured Selection
      </p>
      <div className="grid items-center justify-center bg-white pb-32">
        <div className="grid w-fit place-items-center  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {Object.values(randomFoodItems).map((food) => (
            <GroceryItem key={food._id} {...food} />
          ))}
        </div>
      </div>
    </div>
  );
}
