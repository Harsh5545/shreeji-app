import React from "react";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const CustomCard = () => {
  return (
    <div className="">
      <Card className="text-center">
        <CardContent className="">
          <img
            className="p-1 rounded-md hover:zoom-in-50"
            src="https://turtleboxes.com/media/catalog/category/Chocolates_Confectionery.jpg"
            alt="img"
          />
        </CardContent>
        <CardDescription>
          <h5 className="my-1 roboto-regular">Boxes Name</h5>
        </CardDescription>
        <CardFooter>
          <Link to="/products/:productId" className="p-2 rounded-md m-1 align-middle mx-auto roboto-medium border-2 border-[] bg-green-400 hover:bg-green-500 transition-all ease-in-out">
          <Button
            variant="outline"
            size="lg"
            className=""
          >
            Check Now
          </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CustomCard;
