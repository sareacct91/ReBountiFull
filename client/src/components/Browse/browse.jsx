// import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import { QUERY_ALL_FOOD } from "../../utils/queries";
import GroceryItem from "./GroceryItem/grocery.jsx";
import Category from "./Category/category.jsx";
import Preference from "./Preference/preference.jsx";

export default function Browse() {
  const { loading, data } = useQuery(QUERY_ALL_FOOD);
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    // Handle case where data is not yet available and the query is not entered
    if (!data) return [];
    if (!query) return [];
    return data.getAllFood.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
  }, [data, query]);

  console.log("filteredItems: ", filteredItems);
  filteredItems.map((i) => console.log(i.name));

  // when loading, return loading message and the random items
  if (loading)
    return (
      <>
        <p>Loading...</p>
      </>
    );
  
    // if there is no item matching, render the message : "No Itmes found"
  if (query && filteredItems.length === 0) {
    return (
      <div className="bg-white p-10">
        <div className="mx-2 grid w-full">
          <p className="text-4xl text-black">Browse products</p>
          <input
            className="mt-6 h-10 w-full rounded-2xl border border-zinc-800 bg-white p-5 text-black"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search products..."
            type="search"
          />
        </div>
        <div className="bg-white p-10">
          <div className="mx-2 grid w-full">
            <p className="text-4xl text-black">No items found</p>
          </div>
          <Category />
          <Preference />
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white p-10">
      <div className="mx-2 grid w-full">
        <p className="text-4xl text-black">Browse products</p>
        <input
          className="mt-6 h-10 w-full rounded-2xl border border-zinc-800 bg-white p-5 text-black"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search products..."
          type="search"
        />
      </div>
      <div className="grow-1 flex flex-row flex-wrap text-black">
        {filteredItems.map((food) => (
          <GroceryItem key={food._id} {...food} />
        ))}
      </div>
      <Category />
      <Preference />
    </div>
  );
}
