import { useMutation } from "@apollo/client";
import { useLocation } from "react-router-dom";
import { SAVE_ORDER } from "../src/utils/mutations";
import { useEffect } from "react";
import Auth from "../src/utils/auth";

export default function Success() {

  let location = useLocation();
  const [saveOrderHistory] = useMutation(SAVE_ORDER);

  console.log(location);

  useEffect(() => {
    (async function() {
      const i = location.search.indexOf("=") + 1;

      if (Auth.loggedIn()) {
        await saveOrderHistory({
          variables: { stripeId: location.search.substring(i)}
        })
      }

      console.log('before timeout')
      setTimeout(() =>{
        console.log('in timeout')
        window.location.replace('/');
      }, 5000);
    })();  

  }, [location, saveOrderHistory])

  return (
    <div className="flex h-screen w-full flex-col items-center justify-evenly bg-white">
      <div className="mt-28 rounded-lg border-2 border-gray-500 px-16 py-20"> 
        <h1 className=" pb-10 text-center text-black">Thank you for supporting</h1>
      </div>

      <div className="my-10 flex max-w-xl flex-col rounded-lg border-8 border-double border-blue-500 bg-blue-300/40 p-5 font-semibold text-black">
        <p className="">
          ReBountiFull helpled my family when we didn't know where our next meal
          was coming from. It made a world of difference for my growing
          children.
          <br />- Mary, a single mom from San Jose
        </p>
      </div>
    </div>
  );
}
