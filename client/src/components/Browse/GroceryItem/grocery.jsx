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
          <div className="flex max-w-fit flex-row items-center justify-between">
            <span className="text-lg font-bold text-green-600">${price}</span>
            <Link>
              <button className="bg-orange ml-10 w-20 p-2 text-sm text-white hover:border-gray-300 hover:bg-green-600 focus:border-black">
                Add Item
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
