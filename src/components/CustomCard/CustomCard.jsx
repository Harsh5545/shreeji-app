import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
const CustomCard = (props) => {
    const { name, title, mainImage, category, subCategory, productId } =
        props.item;

    return (
        <Card as={Link} shadow="lg" isPressable className="bg-[#F3F8FF] w-full" to={`/category/${subCategory}`} onClick={()=>window.scrollTo(0, 0)}>
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
            <CardFooter className="text-[10px] gap-2 justify-between text-[#000] flex flex-col w-full items-center my-1">
                <p className="text-xl">{subCategory}</p>
            </CardFooter>
        
                {/* <Button 
                    className="text-center mx-auto text-[#114232] bg-[#80BCBD]"
                    href={`/category/${subCategory}`}
                    as={Link}
                    color="primary"
                    
                >
                    {props.title}
                </Button> */}
           
        </Card>
    );
};

export default CustomCard;
