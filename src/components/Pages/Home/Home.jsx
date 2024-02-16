import React from "react";
import CustomCard from "../../CustomCard/CustomCard";
import SEO from "../../../SEO/SEO";

function Home() {
  const pageTitle = "Welcome To Shreeji - Graphics";
  const pageDescription = "Discover a world of elegance and thoughtful gifting with our curated collection of exquisite gift boxes. Perfect for birthdays, weddings, and special moments. Explore now!";
  const pageURL = window.location.href;
  const pageImageURL = "https://turtleboxes.com/media/catalog/category/Chocolates_Confectionery.jpg";
  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        url={pageURL}
        image={pageImageURL}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto max-w-screen-xl my-5">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </>
  );
}

export default Home;
