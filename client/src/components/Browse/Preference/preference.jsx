import * as preferences from "../../../assets/preference/index.js";
import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import { QUERY_FOOD_BY_PREFERENCE } from "../../../utils/queries.js";
import GroceryItem from "../GroceryItem/grocery.jsx";

export default function Preference() {
  const [query, setQuery] = useState("");
  const { loading, data } = useQuery(QUERY_FOOD_BY_PREFERENCE, {
    variables: {
      vegan: preferences.vegan, // Pass your preferences as variables
      vegetarian: preferences.vegetarian,
      glutenFree: preferences.glutenFree,
      dairyFree: preferences.dairyFree,
      nutFree: preferences.nutFree,
    },
  });

  const preferenceData = [
    { name: "dairyFree", source: preferences.dairyFree },
    { name: "glutenFree", source: preferences.glutenFree },
    { name: "nutFree", source: preferences.nutFree },
    { name: "vegan", source: preferences.vegan },
    { name: "vegetarian", source: preferences.vegetarian },
  ];

  //   const filteredItems = useMemo(() => {
  //     // Handle case where data is not yet available or the query is not entered
  //     if (!data || !query) return [];
  //     return data.getFoodByPreference.filter((item) => {
  //       return item.name.toLowerCase().includes(query.toLowerCase());
  //     });
  //   }, [data, query]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="mx-2 my-12 grid grid-cols-5 gap-4 max-sm:grid-cols-2">
        <div className="col-span-full my-6 text-2xl text-black">
          <p>Browse by Preference</p>
        </div>
        {/* Rendering categories */}
        {preferenceData.map((preference, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            // onClick={() => handleQuery(category.name)}
          >
            <img
              src={preference.source}
              alt={preference.name}
              className="mb-2 h-44 w-32 cursor-pointer rounded-lg object-cover hover:border-4 hover:border-orange max-sm:h-28 max-sm:w-28"
            />
            <p className="text-gray-700">{preference.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
