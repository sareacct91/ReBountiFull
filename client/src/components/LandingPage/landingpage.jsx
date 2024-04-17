export default function LandingPage() {
  return (
    <>
      {/* This is the How it works Div */}
      <div className="bg-white min-w-full flex flex-row flex-wrap m-auto px-8 justify-center">
        <div>
          <h2 className="text-black text-4xl pt-10">How it works</h2>
          <div>
            <h3 className="text-black text-2xl pt-5">Collecting Donations</h3>
            <img src="" alt="FreePik icon1" />
            <ol className="text-black">
              {/* How do I make bullet points black?  */}
              <li>Food donations from grocery stores and restaurants are collected by ReBountiFull volunteers</li>
              <li>Monetary donations from generous contributors are collected to fund operations</li>
            </ol>
          </div>
          <div>
            <h3 className="text-black text-2xl pt-5">Stocking the Food</h3>
            <img src="" alt="FreePik icon2" />
            <ol className="text-black">
              {/* How do I make bullet points black?  */}
              <li>Surplus food collected is made available on the ReBountiFull site at discounted prices</li>
              <li>Individuals around The Bay can purchase quality food items directly from our site</li>
            </ol>
          </div>
          <div>
            <h3 className="text-black text-2xl pt-5">Less Waste, Less Hunger</h3>
            <img src="" alt="FreePik icon3" />
            <ol className="text-black">
              {/* How do I make bullet points black?  */}
              <li>Less waste from grocery stores and restaurants</li>
              <li>Less hunger in The Bay</li>
            </ol>
          </div>
        </div>
        {/* This marks the beginning of the Heroes Div */}
        <div className="flex flex-col lg:flex-row">
          <div>
            <h2 className="text-black text-4xl pt-10 ml-10">Our Heroes</h2>
            {/* Can we code the heroes dynamically? Would be cool to demo names changing live while demo'ing */}
            <div className="text-black">
              <ol>
                <li>
                  Sarun S. - $100
                </li>
                <li>
                  Dani D. - $19
                </li>
                <li>
                  Sarah C. - $33
                </li>
                <li>
                  Stephen S. - $500
                </li>
                <li>
                  Lucy K. - $70
                </li>
              </ol>
            </div>
          </div>
          {/* This is the beginning of the Partners Div */}
          <div className="pb-3">
            <h2 className="text-black text-4xl pt-10 ml-10">Our Partners</h2>
            {/* Need to resize this */}
            <img src="src/assets/images/Partners.jpg" alt="collection of logos of our partners" className="h-64" />
          </div>
        </div>
      </div>
    </>
  )
}