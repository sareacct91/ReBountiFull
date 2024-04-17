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
      <div className="grid items-center justify-center bg-white">
        <div className="grid w-fit place-items-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {Object.values(randomFoodItems).map((food) => (
            <GroceryItem key={food._id} {...food} />
          ))}
        </div>
      </div>
    );

}
