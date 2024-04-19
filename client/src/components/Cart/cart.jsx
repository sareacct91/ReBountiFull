import RangeSliderTest from "./test/test";
// import "./test.css"

import "./RangeSlider/inputSlider.css"
import RangeSlider from "./RangeSlider";
import ShoppingBagImg from "../../assets/images/shopping_bag.png";
import CartItem from "./cartItem";

import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_CART } from "../../utils/queries";

export default function Cart() {
  const [sliderValue, setSliderValue] = useState(0);
  const { loading, error, data } = useQuery(QUERY_CART, {
    onCompleted: (data) => setSliderValue(data.getCart.grandTotal.amount)
  });

  useEffect(() => {
    if (data) {
      setSliderValue(data.getCart.grandTotal.amount)
    }
  }, [data])

  if (loading || error) {
    console.log(error);
    return (
      <div className="grid w-full place-items-center bg-white text-black">
        <h1 className="flex flex-row">
          My Cart
          <img src={ShoppingBagImg} alt="Shopping bag icon" />
        </h1>
        <h2 className="text-4xl">
          {loading ? "loading..." : "Error loading cart"}
        </h2>
      </div>
    );
  }

  const { getCart } = data;
  console.log(getCart);

  return (
    <>
      <div className="grid h-full min-h-[calc(100vh-192px-40px)] w-full  auto-rows-min place-items-center bg-white text-black">
        <h1 className="flex h-min flex-row">
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
              <span className="underline">What you pay:</span>$
              {(sliderValue / 100).toFixed(2)}
            </p>
            <RangeSlider value={sliderValue} setValue={setSliderValue} MAX={getCart.grandTotal.amount} />
            {/* <RangeSliderTest /> */}
          </div>
          <div className="flex w-full justify-center lg:justify-end">
            <button className="bg-blue-600 text-white">check out</button>
          </div>
        </div>
      </div>
    </>
  );
}
