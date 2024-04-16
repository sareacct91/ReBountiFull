import ImpactImage from "../../assets/images/Aboutus_impact.png"

export default function AboutUs() {
  return(
    <div className="bg-white">
    <h1 className="text-black text-4xl pt-10 ml-10">Our Impact</h1>
    <img src={ ImpactImage } alt= "Pie chart depicting allocation of food" />
  </div>)
}
