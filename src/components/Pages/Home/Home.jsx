import React from "react";
import CustomCard from "../../CustomCard/CustomCard";
import MainComponent from "../../custom/mainComponent";

function Home() {
  return (
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
    
  );
}

export default Home;
