import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import staticData from "../../../../Data";
import NewCard from "../../NewCard/NewCard";
import NewCardLoading from "../../NewCard/NewCardLoading";
import { Spinner } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import SEO from "../../../SEO/SEO";
import { handleConfetti } from "../../../lib/index";

const Category = () => {
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [visibleItems, setVisibleItems] = useState(10);
    const [loadingMore, setLoadingMore] = useState(false);
    const buttonRef = useRef();
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setIsLoaded(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const foundCategory = staticData.find(
                (category) => category.subCategory === categoryId
            );
            setCategory(foundCategory);
            setIsLoaded(false);
            setLoading(false);
        };
        fetchData();
        if (categoryId === "FESTIVE COLLECTION") {
            handleConfetti();
        }
    }, [categoryId]);
    

    const LoadingCards = () => {
        return Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex-auto max-w-xs mx-2 my-2">
                <NewCardLoading />
            </div>
        ));
    };



    const handleScroll = () => {
        const scrollY =
            window.scrollY ||
            window.pageYOffset ||
            document.documentElement.scrollTop;
        const windowHeight =
            window.innerHeight || document.documentElement.clientHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollY + windowHeight >= documentHeight - 500 && !loadingMore) {
            setLoadingMore(true);
            setTimeout(() => {
                setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
                setLoadingMore(false);
            }, 1000);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const backgroundImageUrl = category?.HeaderImage
        ? category?.HeaderImage
        : "";
    const capitalizeFirstLetter = (str) => {
        return str
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
    };

    const pageTitle = "Welcome To Shreeji - Categories";
    const pageDescription = "Discover a world of elegance and thoughtful gifting with our curated collection of exquisite gift boxes. Perfect for birthdays, weddings, and special moments. Explore now!";


    return (
        <>
            <SEO
                title={pageTitle}
                description={pageDescription}
                image={category?.HeaderImage}
            />
            <div className="my-2 ml-2">
                <Breadcrumbs>
                    <BreadcrumbItem>
                        <Link to={"/"}>
                            Home
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to={`/category/${category?.subCategory}`}>
                            {capitalizeFirstLetter(
                                category?.subCategory ? category?.subCategory : "Category"
                            )}
                        </Link>
                    </BreadcrumbItem>
                </Breadcrumbs>
            </div>
            <div>
                <div
                    style={{
                        backgroundImage: `url(${backgroundImageUrl})`,
                        backgroundSize: "cover",
                        minHeight: "60vh",
                        backgroundImage: "no-repeat",
                    }}
                >
                    <div className="flex items-center justify-start h-[60vh] md:w-[45%] text-center">
                        <h1 className="font-medium md:text-4xl text-xl p-5">
                            {category?.heading}
                        </h1>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex justify-center items-center flex-col md:m-20 m-10">
                        <h3 className="p-1 text-[#EF7F1B] md:w-[75%] w-[90%] text-center font-medium md:text-4xl text-xl  md:mb-10 mb-5">
                            {category?.discriptionHeading}
                        </h3>
                        <p className=" md:w-[60%] w-[80%] text-center p-1 font-normal  md:text-md text-sm">
                            {category?.discription}
                        </p>
                    </div>
                </div>
            </div>


            <div className="flex flex-wrap justify-center my-20">
                {
                    loading ? (

                        <LoadingCards />

                    )
                        :
                        (
                            category?.product
                                .slice(0, visibleItems)
                                .map((product, index) => (
                                    <div key={index} className="flex-auto max-w-xs mx-2 my-2">
                                        <NewCard
                                            name={product.heading}
                                            image={product.img}
                                            categoryId={category?.subCategory}
                                            productId={product.Productid}
                                        />
                                    </div>
                                ))
                        )
                }
            </div>

            {loadingMore && category?.product.length > visibleItems && (
                <div className="flex items-center justify-center my-4">
                    <Spinner color="success" size="lg" />
                </div>
            )}
        </>
    );
};

export default Category;
