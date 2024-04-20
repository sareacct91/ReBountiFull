import { useLazyQuery } from "@apollo/client";
import { CART_CHECKOUT } from "../../../utils/queries";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";


export default function CheckoutButton({ cartData, payment_amount }) {
  const [getCheckout, { data, loading, error }] = useLazyQuery(CART_CHECKOUT);

  useEffect(() => {
    if (data) {
      window.location.href = data.cartCheckout.session;             
    } 
  }, [data]);

  if (error) console.error(error);

  async function onCheckout(e) {
    console.log('clicked checkout button');
    try {

      // clean up cart data to match the schema
      const cart = structuredClone(cartData); 
      delete cart.__typename; 
      delete cart.grandTotal.__typename;
      for (let i = 0; i < cart.items.length; i++) {
        delete cart.items[i].__typename;
        delete cart.items[i].lineTotal.__typename;
        delete cart.items[i].unitTotal.__typename;
      }

      await getCheckout({
        variables: {
          order: {
            cart,
            payment_amount 
          },
        },
      });

      console.log(data)

    } catch (err) {
      console.error(err); 
    }
  }

  return (
    <>
      <button className="bg-blue-600 text-white" 
        onClick={onCheckout}
      >
        check out
      </button>
    </>
  )
}
