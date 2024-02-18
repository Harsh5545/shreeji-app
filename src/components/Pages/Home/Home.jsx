import React from "react";
import CustomCard from "../../CustomCard/CustomCard";
import SEO from "../../../SEO/SEO";
import staticData from "../../../../Data";
import { Link } from "react-router-dom";
import CarouselComponent from "./HomeCarouselComponent";
import HomeService from "./HomeService";

function Home() {
  const pageTitle = "Welcome To Shreeji - Graphics";
  const pageDescription =
    "Discover a world of elegance and thoughtful gifting with our curated collection of exquisite gift boxes. Perfect for birthdays, weddings, and special moments. Explore now!";
  const pageURL = window.location.href;
  const pageImageURL =
    "https://turtleboxes.com/media/catalog/category/Chocolates_Confectionery.jpg";
  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        url={pageURL}
        image={pageImageURL}
      />
      <CarouselComponent />
      <div className=" text-center flex flex-col items-center gap-5 my-12">

      <h1 className="text-green-300 text-3xl text-center w-[80%] md:w-[35%]">Custom Printed Packaging and Boxes for Your Industry</h1>
      <p className="w-[90%] md:w-[50%]">
      Shreeji Graphics is your online shop for custom packaging and cardboard folding boxes for small and medium runs. We offer quick and easy product design for professional packaging in the best quality at fair prices. Shreeji Graphics provides the best custom packaging solutions to help startups and established brands create the perfect packaging for their products.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto max-w-screen-xl my-5">
        {staticData.slice(0, 12).map((item) => {
          return <CustomCard item={item} key={item.id} />;
        })}
      </div>
      <HomeService/>
    </>
  );
}

export default Home;
