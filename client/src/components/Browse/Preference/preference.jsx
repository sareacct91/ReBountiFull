import * as preferences from "../../../assets/preference/index.js";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { QUERY_FOOD_BY_PREFERENCE } from "../../../utils/queries.js";
import GroceryItem from "../GroceryItem/grocery.jsx";

const preferenceData = [
  {
    name: "dairyFree",
    source: preferences.dairyFree,
    value: { dairyFree: true },
  },
  {
    name: "glutenFree",
    source: preferences.glutenFree,
    value: { glutenFree: true },
  },
  { name: "nutFree", source: preferences.nutFree, value: { nutFree: true } },
  { name: "vegan", source: preferences.vegan, value: { vegan: true } },
  {
    name: "vegetarian",
    source: preferences.vegetarian,
    value: { vegetarian: true },
  },
];

export default function Preference() {
  const [selectedPreferenceName, setSelectedPreferenceName] = useState("");

  // default value is false for every preference field
  const [selectedPreference, setSelectedPreference] = useState({
    vegan: false,
    vegetarian: false,
    glutenFree: false,
    dairyFree: false,
    nutFree: false,
  });

  const { loading, data } = useQuery(QUERY_FOOD_BY_PREFERENCE, {
    variables: selectedPreference,
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleQuery = (preferenceName) => {
    const preference = preferenceData.find((p) => p.name === preferenceName);
    setSelectedPreference(preference.value);
    setSelectedPreferenceName(preferenceName);
  };

  // Filter out items that match the selected preferences
  const filteredItems = data.getFoodByPreference;

  return (
    <div>
      <div className="mx-2 my-12 grid grid-cols-5 gap-4 max-sm:grid-cols-2">
        <div className="col-span-full my-6 text-2xl text-black">
          <p>Browse by Preference</p>
        </div>
        {/* Rendering preference */}
        {preferenceData.map((preference, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            onClick={() => handleQuery(preference.name)}
          >
            <img
              src={preference.source}
              alt={preference.name}
              className="mb-2 h-48 w-44 cursor-pointer rounded-lg object-cover hover:border-4 hover:border-orange max-sm:h-28 max-sm:w-28"
            />
            <p className="text-gray-700">{preference.name}</p>
          </div>
        ))}

        <div className="col-span-full my-6">
          {/* Render the preference name */}
          <p className="text-2xl text-black">{selectedPreferenceName}</p>
        </div>

        <div className="col-span-full mb-10 grid place-items-center border-b-2 border-black pb-20">
          <div className="col-span-full grid w-fit flex-row flex-wrap place-items-center text-black sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {/* Render grocery items based on the category*/}
            {filteredItems.map((food) => (
              <GroceryItem key={food._id} {...food} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
