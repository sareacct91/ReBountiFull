import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_CART } from "../../utils/queries";
import ShoppingBagImg from "../../assets/images/shopping_bag.png";

export default function Cart() {
  const { userId } = useParams();
  const { loading, error, data } = useQuery(QUERY_CART);

  if (loading) return <p>Loading...</p>;

  const { getCart } = data;
  console.log(getCart);

  const testList = getCart.items.map((e) => (
    <div key={e.id} className="m-2 grid-cols-4">
      <div className="flex flex-row justify-between">
        <img src={e.images[0]} alt={e.name} className="rounded-xl" />
        <div className="flex flex-col items-center justify-center w-1/2">
          <p className="ml-20 ">{e.name}</p>
          <p className="ml-20 w-full flex items-start justify-evenly"><span className="">quantity</span>{e.quantity}</p>
          <p className="ml-20 w-full flex items-start justify-evenly"><span>each</span>{e.unitTotal.formatted}</p>
          <p className="ml-20 w-full flex items-start justify-evenly"><span>total</span>{e.lineTotal.formatted}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="grid w-full place-items-center">
        <h1 className="flex flex-row">
          My Cart
          <img src={ShoppingBagImg} alt="Shopping bag icon" />
        </h1>
        <div className="grid h-5/6 w-1/2 place-items-center rounded-xl border border-black p-10">
          <div className="w-full ">{testList}</div>
          <div className="w-full">
            <p className="w-full flex justify-evenly">
              <span>item(s) total:</span>
              {getCart.totalItems} items
            </p>
            <p className="w-full flex justify-evenly">
              <span>Grand Total:</span>
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
