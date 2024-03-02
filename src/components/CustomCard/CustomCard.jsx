import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Link, Button } from "@nextui-org/react";

const CustomCard = (props) => {
    const { name, title, mainImage, category, subCategory, productId } =
        props.item;

    return (
        <Card shadow="lg" isPressable className="bg-[#F3F8FF] w-full">
            <CardBody className="overflow-visible p-1">
                <Image
                    isBlurred
                    isZoomed
                    disableSkeleton
                    width="100%"
                    height={350}
                    shadow="lg"
                    radius="sm"
                    alt=""
                    className="w-full object-cover"
                    src={mainImage}
                />
            </CardBody>
            <CardFooter className="text-[11px] gap-2 justify-between text-[#000] flex flex-col w-full items-center my-2">
                <p className="text-xl">{subCategory}</p>
            </CardFooter>
            <CardFooter >
                <Button 
                    className="text-center mx-auto text-[#114232] bg-[#80BCBD]"
                    href={`/category/${subCategory}`}
                    as={Link}
                    color="primary"
                    variant="shadow"
                >
                    {props.title}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default CustomCard;
