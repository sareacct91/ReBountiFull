import Card from './cardComponent';
import RandomProducts from "../Browse/GroceryItem/randomgrocery";


const cardContent = [
  {
    h3: "Collecting Donations",
    img: "src/assets/images/give_money.png",
    alt: "Image of someone donating money",
    li1: "Food donations from grocery stores and restaurants are collected by ReBountiFull volunteers.",
    li2: "Monetary donations from generous contributors are collected to fund operations."
  },
  {
    h3: "Stocking the Food",
    img: "src/assets/images/give_food.png",
    alt: "Image of hands giving food",
    li1: "Surplus food collected is made available on the ReBountiFull site at discounted prices.",
    li2: "Individuals around The Bay can purchase quality food items directly from our site."
  },
  {
    h3: "Less Waste, Less Hunger",
    img: "src/assets/images/give_help.png",
    alt: "Image of many hands touching in a team-huddle",
    li1: "Less waste from grocery stores and restaurants.",
    li2: "Less hunger in The Bay!"
  }
]

export default function LandingPage() {
  return (
    <>
      <div className="m-auto flex min-w-full flex-row flex-wrap justify-center bg-white px-5 lg:flex-nowrap">
        {/* This is the How it works Div */}
        <div>
          <h2 className="pt-10 text-4xl text-black">How it works</h2>
          {cardContent.map((card, i) => {
           return <Card key={i} {...card} />
          })}
        </div>
        {/* This marks the beginning of the Heroes Div */}
        <div className="flex w-full flex-col sm:flex-row sm:justify-around lg:ms-6 lg:mt-20 lg:max-w-sm lg:flex-col">
          <div className="my-4 flex flex-col lg:items-center">
            <h2 className="my-2 text-4xl text-black">Our Heroes</h2>
            {/* Can we code the heroes dynamically? Would be cool to demo names changing live while demo'ing */}
            <div className="text-black">
              <ol>
                <li>Dani D. - $19</li>
                <li>Sarah C. - $33</li>
                <li>Stephen S. - $500</li>
                <li>Lucy K. - $70</li>
                <li>Sarun T. - $420.69</li>
              </ol>
            </div>
          </div>
          {/* This is the beginning of the Partners Div */}
          <div className="my-3 flex flex-col justify-center lg:items-center">
            <h2 className="mb-2 text-4xl text-black">Our Partners</h2>
            {/* Need to resize this */}
            <img
              src="src/assets/images/Partners.jpg"
              alt="collection of logos of our partners"
              className="h-64 w-64"
            />
          </div>
        </div>
      </div>
      <div className='m-auto'>
        <RandomProducts />
      </div>
    </>
  );
}
