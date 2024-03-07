import React from "react";
import ReactDOM from "react-dom";
import UseAnimations from "react-useanimations";
import loading2 from "react-useanimations/lib/loading2";


const Loader = () => {
  return (
    <div className="mx-auto " style={{ background: "transparent" }}>
      <UseAnimations animation={loading2} size={76} />
    
     
    </div>
  );
};


export default Loader;