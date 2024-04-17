import ImpactImage from "../../assets/images/Aboutus_impact.png"

export default function AboutUs() {
  return(
    <div className="w-full bg-white">
    <h1 className="text-black text-4xl pt-10 ml-10">Our Impact</h1>
    <img className="w-full m-auto pb-10" src={ ImpactImage } alt= "Pie chart depicting allocation of food" />
  </div>)
}
