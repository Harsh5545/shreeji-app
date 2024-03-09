import React, { useEffect } from "react";
import CustomCard from "../../CustomCard/CustomCard";
import SEO from "../../../SEO/SEO";
import staticData from "../../../../Data";
import CarouselComponent from "./HomeCarouselComponent";
import HomeService from "./HomeService";
import HomeCustomBox from "./HomeCustomBox";
import HomeProcess from "./HomeProcess";
import HomeBenefit from "./HomeBenefit";
import HomeAbout from "./HomeAbout";
import Logo from '../../../assets/logo.png';
import { firework, handleFirework } from "../../../lib/index";


function Home() {

    const pageTitle = "Welcome To Shreeji - Graphics";
    const pageDescription = "Discover a world of elegance and thoughtful gifting with our curated collection of exquisite gift boxes. Perfect for birthdays, weddings, and special moments. Explore now!";
    const pageImageURL = Logo;
    useEffect(() => {

        firework()
    }, [])


    return (
        <>
            <SEO
                title={pageTitle}
                description={pageDescription}
                image={pageImageURL}
            />
            <CarouselComponent />
            <div className=" text-center flex flex-col items-center gap-5 my-12">
                <h1 className="text-[#EF7F1B] text-3xl text-center w-[80%] md:w-[35%]">
                    Custom Printed Packaging and Boxes for Your Industry
                </h1>
                <p className="w-[90%] md:w-[50%]">
                    Shreeji Graphics is your online shop for custom packaging and
                    cardboard folding boxes for small and medium runs. We offer quick and
                    easy product design for professional packaging in the best quality at
                    fair prices. Shreeji Graphics provides the best custom packaging
                    solutions to help startups and established brands create the perfect
                    packaging for their products.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto  my-5 w-[90%]">
                {staticData.slice(0, 12).map((item) => {
                    return <CustomCard item={item} key={item.id} title="CHECK NOW" />;
                })}
            </div>
            <HomeService />
            <HomeCustomBox />
            <HomeProcess />
            <HomeBenefit />
            <HomeAbout />

        </>
    );
}

export default Home;
