import { useQuery } from "@apollo/client";
import { QUERY_ALL_FOOD } from "../../utils/queries";
import  GroceryItem  from "./GroceryItem/grocery.jsx";


export default function Browse() {
    const { loading, data } = useQuery(QUERY_ALL_FOOD);

    if (loading) return <p>Loading...</p>
    
    const { getAllFood } = data;
    console.log("data :",data);

    return (
      <div>
        {getAllFood.map((food) => (
          <GroceryItem 
          key={food._id}
          {...food}
          />
        ))}
      </div>
    );

}
