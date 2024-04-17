import { pluralize } from "../../../utils/helpers";

export default function GroceryItem(food) {
  const { image, name, price, inventory } = food;

  return (
    <div className="m-3">
      <div className=" grid w-fit place-items-center text-center">
        <img className="rounded" alt={name} src={image} />
        <div className="mt-2 grid w-fit place-items-center">
          <p className="font-medium">{name}</p>
          <p className=" text-gray-600">
            {inventory}&nbsp;{pluralize("item", inventory)}&nbsp;in&nbsp;stock
          </p>
          <span className="text-lg font-bold text-green-600">${price}</span>
        </div>
      </div>
    </div>
  );
}
