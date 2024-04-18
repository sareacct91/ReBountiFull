import * as categories from "../../../assets/category/index.js";
import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import { QUERY_FOOD_BY_CATEGORY } from "../../../utils/queries.js";
import GroceryItem from "../GroceryItem/grocery.jsx";

export default function Category() {
  const [query, setQuery] = useState("");
  const { loading, data } = useQuery(QUERY_FOOD_BY_CATEGORY, {
    variables: { category: query },
  });

  const categoryData = [
    { name: "vegetable", source: categories.vegetable },
    { name: "seafood", source: categories.seafood },
    { name: "nut", source: categories.nuts },
    { name: "misc", source: categories.misc },
    { name: "meat", source: categories.meat },
    { name: "grain", source: categories.grain },
    { name: "fruit", source: categories.fruits },
    { name: "dairy", source: categories.dairy },
  ];

  const featuredItems = useMemo(() => {
    // Handle case where data is not yet available and the query is not entered
    if (!data || !query) return [];
    console.log(data);
    console.log("data.getFoodByCategory: ", data.getFoodByCategory);
    return data.getFoodByCategory;
  }, [data, query]);

  const handleQuery = (categoryName) => {
    setQuery(categoryName);
    console.log("query :", categoryName);
  };
  const categoryName = query;

  return (
    <>
      <div className="mx-2 my-12 grid grid-cols-5 gap-4 max-sm:grid-cols-2">
        <div className="col-span-full text-2xl my-6 text-black">
          <p>Browse by Category</p>
        </div>
        {/* Rendering categories */}
        {categoryData.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            onClick={() => handleQuery(category.name)}
          >
            <img
              src={category.source}
              alt={category.name}
              className="mb-2 h-32 w-32 cursor-pointer rounded-full object-cover hover:border-4 hover:border-green-600 max-sm:h-28 max-sm:w-28"
            />
            <p className="text-gray-700">{category.name}</p>
          </div>
        ))}

        <div className="col-span-full my-6">
          {/* Render the category name */}
          <p className="text-2xl text-black">{categoryName}</p>
        </div>
        <div className="grid col-span-full place-items-center border-b-2 border-black mb-10 pb-20">
          <div className="col-span-full grid w-fit flex-row flex-wrap place-items-center text-black sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {/* Render grocery items based on the category*/}
            {featuredItems.map((food) => (
              <GroceryItem key={food._id} {...food} />
            ))}
          </div>
        </div>
        {loading && <p>Loading...</p>}
      </div>
    </>
  );
}
