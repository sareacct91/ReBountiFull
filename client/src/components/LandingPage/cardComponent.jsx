export default function Card(props) {
return (
<div className="bg-green-400 rounded-xl my-3 p-3 min-h-40">
  <h3 className="text-black text-2xl mb-1">{props.h3}</h3>
  <div>
    <div className="min-w-28 float-left max-h-28">
      <img src={props.img} alt={props.alt} />
    </div>
    <ol className="text-black mt-1 lg:text-lg">
      <li className="pb-2">{props.li1}</li>
      <li>{props.li2}</li>
    </ol>
  </div>
</div>
)}