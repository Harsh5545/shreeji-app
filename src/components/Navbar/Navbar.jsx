import React from "react";
import logo from "../../assets/logo.png";
import { Card } from "../ui/card";

function Navbar() {
  return (
    <Card className="flex justify-center">
      <div className="flex justify-between items-center max-w-screen-xl w-full">
        <img src={logo} alt="" width="200" />
        <div className="flex items-center gap-8">
          <div>BOXES </div>
          <div>BAGS</div>
          <div>FOOD PACKAGING</div>
          <div>RIGID BOXES</div>
          <div>CUSTOM LABELS</div>
          <div>ABOUT</div>
        </div>
        <div>CONTACT</div>
      </div>
    </Card>
  );
}

export default Navbar;

