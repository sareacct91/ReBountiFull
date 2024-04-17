import { useQuery } from "@apollo/client";
import { QUERY_ALL_FOOD } from "../../utils/queries";
import  GroceryItem  from "./GroceryItem/grocery.jsx";
import { selectRandomItems } from "../../utils/helpers.js";



export default function Browse() {
    const { loading, data } = useQuery(QUERY_ALL_FOOD);

    if (loading) return <p>Loading...</p>
    
    const { getAllFood } = data;
    console.log("data: ",data);
    const randomFoodItems = selectRandomItems(getAllFood);
    return (
      <div className="bg-white p-10">
        <div className="mx-2">
          <p className=" text-4xl text-black">Browse products</p>
          <input
            className="h-10 w-full rounded-2xl border border-zinc-800 bg-white p-5"
            placeholder="search products..."
          ></input>
        </div>
        <div className="grid items-center justify-center bg-white">
          <div className="grid w-fit place-items-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {Object.values(randomFoodItems).map((food) => (
              <GroceryItem key={food._id} {...food} />
            ))}
          </div>
        </div>
      </div>
    );

}
