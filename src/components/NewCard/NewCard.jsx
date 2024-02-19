import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function NewCard({ name, title, image, categoryId, productId }) {
  return (
    <Card isFooterBlurred radius="lg" className="border-none w-[310px] mx-auto  bg-indigo-800/10" isPressable isHoverable isBlurred>
      <Image
        isZoomed
        isBlurred
        alt="Woman listing to music"
        className="object-cover m-1 p-1 mx-auto "
        height={300}
        src={image}
        width={310}
        
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 my-2">
        <p className="text-tiny text-black/80 roboto-medium">{name}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="success"
          radius="lg"
          size="sm"
        >
          <Link to={`/products/${categoryId}/${productId}`} className="text-black" color="success">
            {title}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
