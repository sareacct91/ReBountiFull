import { useMutation, useQuery } from "@apollo/client";
import { QUERY_CART } from "../../utils/queries";
import ShoppingBagImg from "../../assets/images/shopping_bag.png";
import CartItem from "./cartItem";
import { useState } from "react";

export default function Cart() {
  const { loading, error, data } = useQuery(QUERY_CART);
  const [rangeValue, setRangeValue] = useState(0);

  if (loading) return <p>Loading...</p>;
  if (error) {
    alert(error);
  }

  const { getCart } = data;
  // console.log(getCart);
  console.log(rangeValue)


  return (
    <>
      <div className="grid w-full place-items-center bg-white text-black">
        <h1 className="flex flex-row">
          My Cart
          <img src={ShoppingBagImg} alt="Shopping bag icon" />
        </h1>
        <div className="w-5/6 rounded-xl border border-black lg:w-1/2 lg:p-10">
          <div className="flex w-full flex-col gap-2">
            {getCart.items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="m-auto w-1/2 p-5 lg:w-3/4">
            <p className="flex w-full justify-between">
              <span className="underline">item(s) total:</span>
              {getCart.totalItems} items
            </p>
            <p className="flex w-full justify-between">
              <span className="underline">Grand Total:</span>
              {getCart.grandTotal.formatted}
            </p>
            <p className="flex w-full justify-between">
              <span className="underline">What you pay:</span>
              ${(rangeValue / 100).toFixed(2)}
            </p>
            <input className="w-full " 
              type="range" 
              min="0"
              max={getCart.grandTotal.amount}
              onChange={e => setRangeValue(e.target.value)} 
              defaultValue={getCart.grandTotal.amount}
              value={rangeValue}
            />
          </div>
         <div className="flex w-full justify-center lg:justify-end">
            <button className="bg-blue-600 text-white">check out</button>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="grid w-full place-items-center bg-white text-black">
        <h1 className="flex flex-row">
          My Cart
          <img src={ShoppingBagImg} alt="Shopping bag icon" />
        </h1>
        <div className="grid h-5/6 w-1/2 place-items-center rounded-xl border border-black p-10">
          <div className="flex w-full flex-col gap-2">
            {getCart.items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="w-full p-5">
            <p className="flex w-full justify-evenly">
              <span className="underline">item(s) total:</span>
              {getCart.totalItems} items
            </p>
            <p className="flex w-full justify-evenly">
              <span className="underline">Grand Total:</span>
              {getCart.grandTotal.formatted}
            </p>
          </div>
         <div className="flex w-full justify-end">
            <button>check out</button>
          </div>
        </div>
      </div>
    </>
  );
}
