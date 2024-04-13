import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeHero from "../../assets/background/home-hero.jpeg";

export default function Hero() {
    const [background, setBackground] = useState(null);
    const { pathname } = useLocation();
    console.log(pathname);
    useEffect(() => {
        if(pathname === "/")    {
        setBackground(`url(${HomeHero})`);
        } else {
        setBackground(null);
        }
    }, [pathname])



    return (
      <section
        className="-top-96 w-full"
        style={{
          backgroundImage: background,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="w-1/3 p-6">
          <h1>Hunger Relief Starts Here</h1>
          <p>
            We gather thousands of pounds of <span>perfectly good
            groceries</span>  from local sources within your community that would
            otherwise go to waste and we make it available to you at a rate you
            can afford
          </p>
          <div className="my-5">
            <button>
                Donation
            </button>
           
          </div>

        </div>
      </section>
    );
}