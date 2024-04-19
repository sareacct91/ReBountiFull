import { useMutation } from "@apollo/client"
import { REMOVE_CART_ITEM } from "../../utils/mutations"
import PropTypes from "prop-types";

export default function CartItem({item}) {
  const [removeCartItem, {loading}] = useMutation(REMOVE_CART_ITEM);

  async function clickedRemoveItem() {
    try {
      console.log(item.id)
      await removeCartItem({ 
        variables: { 
          food: {
            _id: item.id
          }
        }
      }); 

    } catch (err) {
      console.error(err); 
    }
  }

  return (
    <>
      <div className={`${ loading ? "opacity-50 " : ""}flex flex-col items-center justify-between border-b border-black p-5 lg:flex-row lg:rounded-xl lg:border`}>
        <img src={item.images[0]} alt={item.name} className="rounded-xl" />
        <div className="flex w-3/4 flex-col items-center sm:justify-center lg:w-1/2">
          <p>{item.name}</p>
          <p className="min-w-60 lg:min-w-40 flex w-1/2 justify-between lg:w-full lg:items-start">
            <span>quantity</span>
            {item.quantity}
          </p>
          <p className="min-w-60 lg:min-w-40 flex w-1/2 justify-between lg:w-full lg:items-start">
            <span>each</span>
            {item.unitTotal.formatted}
          </p>
          <p className="min-w-60 lg:min-w-40 flex w-1/2 justify-between lg:w-full lg:items-start">
            <span>total</span>
            {item.lineTotal.formatted}
          </p>
          <button 
            className="self-end text-blue-400 underline" 
            onClick={clickedRemoveItem}>
            remove
          </button> 
        </div>
      </div>
    </>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    unitTotal: PropTypes.shape({
      formatted: PropTypes.string.isRequired,
      amount: PropTypes.number
    }).isRequired,
    lineTotal: PropTypes.shape({
      formatted: PropTypes.string.isRequired,
      amount: PropTypes.number
    }).isRequired
  }).isRequired
};



// export default function CartItem({item}) {
//   return (
//     <>
//       <div className="m-2 grid-cols-4">
//         <div className="flex flex-row justify-between">
//           <img src={item.images[0]} alt={item.name} className="rounded-xl" />
//           <div className="flex w-1/2 flex-col items-center justify-center">
//             <p className="ml-20 ">{item.name}</p>
//             <p className="ml-20 flex w-full items-start justify-evenly"><span className="">quantity</span>{item.quantity}</p>
//             <p className="ml-20 flex w-full items-start justify-evenly"><span>each</span>{item.unitTotal.formatted}</p>
//             <p className="ml-20 flex w-full items-start justify-evenly"><span>total</span>{item.lineTotal.formatted}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
