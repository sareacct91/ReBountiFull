export default function Item(food) {
  return(
    <div className="bg-white">
      <div className="border-2 border-gray-500 rounded shadow-md">
        <img src={food.image} alt={food.name} />
      </div>
      <div className="flex flex-row">
        <h2 className="text-black pt-10 ml-10">{food.name}</h2>
        <p>Qty: {food.inventory}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}