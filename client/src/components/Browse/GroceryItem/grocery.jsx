import { Link } from "react-router-dom";
import { pluralize } from "../../../utils/helpers";

export default function GroceryItem(food) {
  const { image, name, price, inventory } = food;

  return (
    <div className="m-3">
      <div className=" grid w-fit place-items-center text-center">
        <img
          className="rounded border-4 border-gray-300 p-2"
          alt={name}
          src={image}
        />
        <div className="mt-2 grid w-fit place-items-center">
          <p className="font-bold text-black">{name}</p>
          <p className=" text-gray-600">
            {inventory}&nbsp;{pluralize("item", inventory)}&nbsp;in&nbsp;stock
          </p>
          <div className="flex flex-row justify-between max-w-fit items-center">
            <span className="text-lg font-bold text-green-600">${price}</span>
            <Link>
              <button className="w-20 p-2 text-sm ml-10 bg-orange text-white">Add Item</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
