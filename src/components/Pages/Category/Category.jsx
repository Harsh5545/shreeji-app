// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import staticData from "../../../../Data";
// import CustomCard from "../../CustomCard/CustomCard";
// import NewCard from "../../NewCard/NewCard";
// import NewCardLoading from "../../NewCard/NewCardLoading";
// const Category = () => {
//   const [loading, setLoading] = useState(true);
//   const [category, setCategory] = useState(null);
//   const { categoryId } = useParams();
//   const [isLoaded, setIsLoaded] = React.useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setIsLoaded(true);
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       const foundCategory = staticData.find((category) => category.subCategory === categoryId);
//       setCategory(foundCategory);
//       setIsLoaded(false);
//       setLoading(false);
//     };
//     fetchData();
//   }, [categoryId]);

//   const LoadingCards = () => {
//     return Array.from({ length: 12 }).map((_, index) => (
//       <div key={index} className="">
//         <NewCardLoading />
//       </div>
//     ));
//   };

//   return (
//     <>
//       <div>
//         <h1 className="text-2xl text-center underline">
//           {category?.subCategory}
//         </h1>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto max-w-screen-xl my-5">
//         {loading ? (
//           <LoadingCards />
//         ) : (
//           category?.product.map((product, index) => (
//             <NewCard
//               key={index}
//               name={product.heading}
//               image={product.img}
//               categoryId={category?.subCategory}
//               productId={product.Productid}
//               title="Check Now"
//             />
//           ))
//         )}
//       </div>
//     </>
//   );
// };

// export default Category;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import staticData from "../../../../Data";
import NewCard from "../../NewCard/NewCard";
import NewCardLoading from "../../NewCard/NewCardLoading";
import { Spinner } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

const Category = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleItems, setVisibleItems] = useState(10);
  const [loadingMore, setLoadingMore] = useState(false);

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

  return (
    <>
      <div>
        <h1 className="text-2xl text-center underline">
          {category?.subCategory}
        </h1>
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
