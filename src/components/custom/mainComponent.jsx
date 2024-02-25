// MainComponent.js
import React, { useState, useEffect } from "react";
import staticData from "../../../Data";
import ItemComponent from "./ItemsComponent";

const MainComponent = () => {
  const [visibleItems, setVisibleItems] = useState(6);
  const [loading, setLoading] = useState(false);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setLoading(true);
      setTimeout(() => {
        setVisibleItems((prev) => prev + 6);
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const visibleItemsData = staticData.slice(0, visibleItems);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 content-start">
      <div className="w-full">
        {visibleItemsData.map((item) => (
          <ItemComponent key={item.id} data={item} />
        ))}
        {loading && (
          <div className="h-screen bg-white">
            <div className="flex justify-center items-center h-full">
             
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainComponent;
