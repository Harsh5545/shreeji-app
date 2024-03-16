import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import staticData from "../../../../Data";
import { Button } from "../../ui/button";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
const Product = () => {

    const { categoryId, productId } = useParams();


    const [foundProduct, setFoundProduct] = useState([]);
    console.log(foundProduct);
    const [img, setImg] = useState({});
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [boxtype, setBoxType] = useState("");
    const [material, setMaterial] = useState("");
    const [refine, setRefine] = useState("");
    const [finish, setFinish] = useState("");
    const [production, setProduction] = useState("");

    useEffect(() => {
        const foundCategory = staticData.find(
            (category) => category.subCategory === categoryId
        );

        const foundProduct = foundCategory?.product.find(
            (product) => product.Productid === parseInt(productId)
        );
        setFoundProduct(foundProduct);
        setImg({ actualImg: foundProduct.img, subImg: foundProduct.subimg });
    }, []);

    const capitalizeFirstLetter = (str) => {
        return str
            .split(" ")
            .map(
                (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ");
    };

    const handleShare = async () => {
        const message = `Hello Shreeji Graphics, 
        I have a requirement for the following product: ${foundProduct.heading}
        - Length: ${length}
        - Width: ${width}
        - Height: ${height}
        - Box Type: ${boxtype}
        - Material: ${material}
        - Refinement: ${refine}
        - Finish: ${finish}
        - Production: ${production}

        Thank you!`;

        const encodeMessage = (msg) => {
            return encodeURIComponent(msg)
                .replace(/[!'()*]/g, (c) => {
                    return '%' + c.charCodeAt(0).toString(16);
                });
        };
        const encodedMessage = encodeMessage(message);
        const phoneNumber = '917721841331';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    }

    return (
        <>
            <div className="my-3 ml-2  sticky">
                <Breadcrumbs className="p-2">
                    <BreadcrumbItem>
                        <Link to={"/"} replace>
                            Home
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to={`/category/${categoryId}`}>
                            {capitalizeFirstLetter(
                                categoryId ? categoryId : "Category"
                            )}
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        {capitalizeFirstLetter(
                            foundProduct.heading
                                ? foundProduct.heading
                                : "Category"
                        )}
                    </BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <div className="md:w-[75%] mx-auto  my-10">
                <h1 className="p-5  font-bold text-3xl">
                    {foundProduct.heading}
                </h1>
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="items-start h-[30rem] flex p-8 justify-start relative flex-col gap-3 mx-auto">
                        <img src={foundProduct.img} alt="shreeji Graphics Product" width='360' className="h-[17rem] md:h-[18rem] object-contain " />

                        {foundProduct.subimg != undefined ? (
                            <div className="w-[90%] flex overflow-hidden mx-auto items-start">
                                <img
                                    src={foundProduct.subimg}
                                    alt="shreeji Graphic images surat"
                                    onMouseEnter={() =>
                                        setFoundProduct((prevState) => ({
                                            ...prevState,
                                            img: prevState.subimg,
                                            subimg: foundProduct.img,
                                        }))
                                    }
                                    onMouseLeave={() =>
                                        setFoundProduct((prevState) => ({
                                            ...prevState,
                                            img: img.actualImg,
                                            subimg: img.subImg,
                                        }))
                                    }
                                    width='60'
                                    height='60'
                                    className="object-contain bottom-0 border-2 mx-auto shadow-md m-2 "
                                />
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="flex my-2 flex-col gap-5 w-[90%] mx-auto">
                        <div className="flex justify-between items-center">
                            <p className=" font-normal flex-1 md:md:text-lg text-md text-md">
                                Length (60-400mm)
                            </p>
                            <input
                                className="p-1 border flex-1 md:md:text-lg text-md text-md border-gray-300 rounded-sm hover:shadow-md border-spacing-1 outline-none"
                                type="text"
                                placeholder="Enter length"
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-between">
                            <p className=" font-normal flex-1 md:text-lg text-md">
                                Width (15-200mm)
                            </p>
                            <input
                                className="p-1 border flex-1 md:text-lg text-md border-gray-300 rounded-sm hover:shadow-md border-spacing-1 outline-none"
                                type="text"
                                placeholder="Enter Width"
                                value={width}
                                onChange={(e) => setWidth(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-between">
                            <p className=" font-normal flex-1 md:text-lg text-md">
                                Height (60-710mm)
                            </p>
                            <input
                                className="p-1 border flex-1 md:text-lg text-md border-gray-300 rounded-sm hover:shadow-md border-spacing-1 outline-none"
                                type="text"
                                placeholder="Enter Height"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-between">
                            <p className=" font-normal flex-1 md:text-lg text-md">
                                Box Types
                            </p>
                            <select value={boxtype} onChange={(e) => setBoxType(e.target.value)} className="p-1 flex-1 border md:md:text-lg text-md text-md border-gray-300 rounded-sm hover:shadow-md border-spacing-1 outline-none">
                                <option>Standard Packaging</option>
                                <option>Plain Box/Non Printed</option>
                                <option>Food Safe Packaging</option>
                                <option>Single Color Printing</option>
                            </select>
                        </div>
                        <div className="flex justify-between w-full">
                            <p className="flex-1 font-normal md:text-lg text-md">
                                Material
                            </p>
                            <select value={material} onChange={(e) => setMaterial(e.target.value)} className="p-1 flex-1 border md:text-lg text-md outline-none  border-gray-300 rounded-sm hover:shadow-md border-spacing-1 ">
                                <option>SBM/FBB 300 GSM</option>
                                <option>SBM/FBB 350 GSM</option>
                            </select>
                        </div>
                        <div className="flex justify-between">
                            <p className=" font-normal flex-1 md:text-lg text-md">
                                Refinement
                            </p>
                            <select value={refine} onChange={(e) => setRefine(e.target.value)} className="p-1 flex-1 border md:text-lg text-md outline-none  border-gray-300 rounded-sm hover:shadow-md border-spacing-1 ">
                                <option>None</option>
                                <option>Spot UV</option>
                                <option>Foil Stamping</option>
                            </select>
                        </div>
                        <div className="flex justify-between">
                            <p className="flex-1 font-normal md:text-lg text-md">
                                Finishes
                            </p>
                            <select value={finish} onChange={(e) => setFinish(e.target.value)} className=" p-1 flex-1 border md:text-lg text-md outline-none  border-gray-300 rounded-sm hover:shadow-md border-spacing-1 ">
                                <option>None</option>
                                <option>Gloss Lamination</option>
                                <option>Matt Lamination</option>
                                <option>Gloss Varnish</option>
                                <option>Matt Varnish</option>
                            </select>
                        </div>
                        <div className="flex justify-between">
                            <p className="flex-1 font-normal md:text-lg text-md">
                                Production
                            </p>
                            <select value={production} onChange={(e) => setProduction(e.target.value)} className="flex-1 p-1  border md:text-lg text-md outline-none  border-gray-300 rounded-sm hover:shadow-md border-spacing-1 ">
                                <option>Standard (8/10 Days)</option>
                                <option>standard (3/4 Days)</option>
                            </select>
                        </div>
                        <Button onClick={(e) => handleShare()}> Get Quote </Button>
                    </div>
                </div>
                <div className="grid md:my-20 my-10 md:grid-cols-2 grid-cols-1">
                    <div className="flex  justify-between gap-3 mx-auto">
                        <img
                            src={foundProduct.headerimg}
                            alt="shreeji Graphic images surat"
                            width={400}
                        />
                    </div>
                    <div className="p-5 bg-gray-200">
                        <h1 className="md:text-3xl  text-md text-orange-400 mb-5 font-semibold">
                            How to design a Packaging Box:
                        </h1>
                        <ol className="md:md:text-lg text-md text-md">
                            <li className="mb-2">
                                1. How to Order Plain Boxes.
                            </li>
                            <li className="mb-2">
                                2. How to Design Your Personalized Packaging via
                                Our Free Design Software.
                            </li>
                            <li className="mb-2">
                                3. How to Download Packaging Box Keyline.
                            </li>
                            <li className="mb-2">
                                4. How to Design Your Download Box Keyline
                                Packaging via using Adobe Illustrator.
                            </li>
                            <li className="mb-2">
                                5. How to Design Your Download Box Keyline
                                Packaging via using CorelDraw.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
