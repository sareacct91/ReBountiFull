import { pluralize } from "../../../utils/helpers"

export default function GroceryItem(food) {
  const { image, name, price, inventory } = food;

  return (
    <div>
      <img alt={name} src={image} />
      <p>{name}</p>
      <p>
        {inventory} {pluralize("item", inventory)} in stock
      </p>
      <span>${price}</span>
    </div>
  );
}
