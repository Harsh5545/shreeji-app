import React from "react";
import {
    Card,
    CardFooter,
    Image,
    Button,
    Divider
} from "@nextui-org/react";
import { Link } from "react-router-dom";
export default function NewCard({ name, title, image, categoryId, productId }) {
    return (
        <Card  as={Link}
            to={`/products/${categoryId}/${productId}`}
            isFooterBlurred
            radius="lg"
            className="border-none w-[310px] mx-auto  bg-indigo-800/10"
            isPressable
            isHoverable
            isBlurred
        >
            <Image
                isZoomed
                isBlurred
                alt="Woman listing to music"
                className="object-cover m-1 p-1 mx-auto "
                height={300}
                src={image}
                width={310}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 my-2 flex-col">
                <Button as={Link} to={`/products/${categoryId}/${productId}`} variant="light">
                    {name}
                </Button>
            </CardFooter>
        </Card>
    );
}
