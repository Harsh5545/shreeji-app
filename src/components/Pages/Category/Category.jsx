import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import staticData from "../../../../Data";
import NewCard from "../../NewCard/NewCard";
import NewCardLoading from "../../NewCard/NewCardLoading";
import { Spinner } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
const Category = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleItems, setVisibleItems] = useState(10);
  const [loadingMore, setLoadingMore] = useState(false);

  const { categoryId } = useParams();
  console.log(categoryId)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setIsLoaded(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const foundCategory = staticData.find(
        (category) => category.subCategory === categoryId || category.category === categoryId
      );
      setCategory(foundCategory);
      console.log(category);
      setIsLoaded(false);
      setLoading(false);
    };
    fetchData();
  }, [categoryId]);

  const LoadingCards = () => {
    return Array.from({ length: 12 }).map((_, index) => (
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

      if (scrollY + windowHeight >= documentHeight - 200 && !loadingMore) {
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
  // const backgroundImageUrl = "url('/Main-Images/image_1.jpg')";
  const backgroundImageUrl = `url(${category?.mainImage})`;
  const capitalizeFirstLetter = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <>
      <div className="my-2 ml-2">
        <Breadcrumbs>
          <BreadcrumbItem>
            <Link to={"/"} replace>
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to={`/category/${category?.subCategory}`}>
              {capitalizeFirstLetter(category?.subCategory ? category?.subCategory : "Category" )}
            </Link>
          </BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <div>
        <div
          style={{
            background: backgroundImageUrl,
            backgroundSize: "contain",
            minHeight: "60vh",
            backgroundImage: "no-repeat",
          }}
        >
          <div className="flex justify-start items-center h-[60vh] w-[45%] mx-auto text-center">
            <h2 className="p-5 font-medium md:text-4xl text-5xl">
              {category?.heading}
            </h2>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-center items-center flex-col md:m-20 m-10">
            <h3 className="p-1 md:w-[75%] w-[90%] text-center font-medium md:text-4xl text-xl  md:mb-10 mb-5">
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
                title="Check Now"
              />
            ))
        )}
        {loadingMore && (
          <div className="flex items-center justify-center my-4">
            <Spinner color="success" size="lg" />
          </div>
        )}
      </div>
    </>
  );
};

export default Category;
