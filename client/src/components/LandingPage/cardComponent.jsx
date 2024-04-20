export default function Card(props) {
return (
  <div className="my-3 min-h-40 rounded-xl bg-green-400 p-3">
    <h3 className="mb-1 text-2xl text-black">{props.h3}</h3>
    <div>
      <div className="float-left max-h-28 min-w-28">
        <img src={props.img} alt={props.alt} className="rounded-lg" />
      </div>
      <ol className="mt-1 text-black lg:text-lg">
        <li className="pb-2">{props.li1}</li>
        <li>{props.li2}</li>
      </ol>
    </div>
  </div>
);}