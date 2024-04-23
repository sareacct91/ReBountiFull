export default function History(props) {
  // console.log("Props", props);

  const amountPaid = `$${props.cart.payment_amount / 100}`;
  const date = new Date(props.date).toLocaleDateString();

  return (
    <li className="mb-2 max-w-max rounded-xl border border-4 p-3">
      <p>Purchase Date: {date}</p>
      <p>Groceries Total: {props.cart.grandTotal.formatted}</p>
      <p>Amount Paid: {amountPaid}</p>
    </li>
  );
}
