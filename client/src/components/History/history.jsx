export default function History(props) {
  console.log("Props", props);

  const amountPaid = `$${props.cart.payment_amount / 100}`;
  const date = new Date(props.date).toLocaleDateString();

  return (
    <li className="border border-4 max-w-max rounded-xl p-3 mb-2">
      <p>Purchase Date: {date}</p>
      <p>Groceries Total: {props.cart.grandTotal.formatted}</p>
      <p>Amount Paid: {amountPaid}</p>
    </li>
  );
}