import { useQuery } from "@apollo/client";
import { QUERY_ALL_FOOD } from "../../utils/queries";


export default function Browse() {
    const { loading, data } = useQuery(QUERY_ALL_FOOD);

    if (loading) return <p>Loading...</p>
    
    const { getAllFood } = data;
    console.log("data :",data);

    return (
      <div>
        {getAllFood.map((food) => (
          <div key={food._id}>
            <p>Name: {food.name}</p>
            <p>Price: {food.price}</p>
            <img src={food.image} alt={food.name}></img>
          </div>
        ))}
      </div>
    );

}
