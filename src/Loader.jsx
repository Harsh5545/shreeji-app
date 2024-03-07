import React from "react";
import ReactDOM from "react-dom";
import UseAnimations from "react-useanimations";
import loading2 from "react-useanimations/lib/loading2";


const Loader = () => {
  return (
    <div className="mx-auto">
      <UseAnimations animation={loading2} size={56} />
    
     
    </div>
  );
};


export default Loader;