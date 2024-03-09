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
import CelebrateButton from "../../CelebrateButton/CelebrateButton";
import { handleConfetti } from "../../../lib/index";
const Category = () => {
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [visibleItems, setVisibleItems] = useState(8);
    const [loadingMore, setLoadingMore] = useState(false);
    const buttonRef = useRef();
    const { categoryId } = useParams();
    console.log(categoryId);

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
        return Array.from({ length: 8 }).map((_, index) => (
            <div key={index}>
                <NewCardLoading />
            </div>
        ));
    };

    useEffect(() => {
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
                    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
                    setLoadingMore(false);
                }, 1000);
            }
        };
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
                        <Link to={"/"} replace>
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
                        // backgroundImage: "no-repeat",
                    }}
                >
                    <div className="flex items-center justify-start h-[60vh] md:w-[45%] text-center">
                        <h2 className="font-medium md:text-4xl text-5xl p-5">
                            {category?.heading}
                        </h2>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto max-w-screen-xl my-20">
                {loading ? (
                    <LoadingCards />
                ) : (
                    category?.product
                        .slice(0, visibleItems)
                        .map((product, index) => (
                            <NewCard
                                key={index}
                                name={product.heading}
                                image={product.img}
                                categoryId={category?.subCategory}
                                productId={product.Productid}

                            />
                        ))
                )}
                {loadingMore && category?.product.length > visibleItems && (
                    <div className="flex items-center justify-center my-4">
                        <Spinner color="success" size="lg" />
                    </div>
                )}
            </div>
            <CelebrateButton buttonRef={buttonRef} />
        </>
    );
};

export default Category;
