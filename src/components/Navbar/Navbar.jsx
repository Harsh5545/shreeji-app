import React, { useState } from "react";
import "./Navbar.css";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    NavbarMenuToggle,
    NavbarMenu,
    // NavbarMenuItem,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import staticData from "../../../Data";
// import { MdCall } from "react-icons/md";
import CustomModel from "../Modal/Model";
import { useDisclosure } from "@nextui-org/react";

import { GiClothes } from "react-icons/gi";
import { FaFantasyFlightGames } from "react-icons/fa6"
import { MdEmojiFoodBeverage } from "react-icons/md";;
import { AiFillSkin } from "react-icons/ai";
import { GiChocolateBar } from "react-icons/gi";
import { MdBakeryDining } from "react-icons/md";
import { BiSolidCoffeeTogo } from "react-icons/bi";
import { FaGift } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { MdFestival } from "react-icons/md";
import { BiSolidShoppingBags } from "react-icons/bi";
import { GiBookCover } from "react-icons/gi";
import { GiPirateCoat } from "react-icons/gi";
import { GiLabCoat } from "react-icons/gi";
import { GiTheaterCurtains } from "react-icons/gi";
import { GrRestroomWomen } from "react-icons/gr";
import { FaBox } from "react-icons/fa6";

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isMapDataVisible, setIsMapDataVisible] = useState(false);
    const menuItems = [
        "BOXES",
        "BAGS",
        "FOOD PACKAGING",
        "RIGID BOXES",
        "CUSTOM LABELS",
        "ABOUT",
    ];
    
    function handleNav() {
        setIsMenuOpen(false);
    }
    const toggleMapDataVisibility = () => {
        setIsMapDataVisible(!isMapDataVisible);
    };
    const navigate = useNavigate()
    const iconList = [
        { id: 1, icons: <GiClothes /> },
        { id: 2, icons: <FaFantasyFlightGames /> },
        { id: 3, icons: <AiFillSkin /> },
        { id: 4, icons: <MdBakeryDining /> },
        { id: 5, icons: <MdEmojiFoodBeverage /> },
        { id: 6, icons: <GiChocolateBar /> },
        { id: 7, icons: <IoFastFoodSharp /> },
        { id: 8, icons: <HiMiniShoppingCart /> },
        { id: 9, icons: <BiSolidCoffeeTogo /> },
        { id: 10, icons: <FaGift /> },
        { id: 11, icons: <MdFestival /> },
        { id: 12, icons: <FaBoxOpen /> },
        { id: 13, icons: <BiSolidShoppingBags /> },
        { id: 14, icons: <GiBookCover /> },
        { id: 15, icons: <GiLabCoat /> },
        { id: 16, icons: <GiPirateCoat /> },
        { id: 17, icons: <GiTheaterCurtains /> },
        { id: 18, icons: <GrRestroomWomen /> },
        { id: 19, icons: <FaBox /> },
        { id: 20, icons: <FaBoxOpen /> },
        { id: 21, icons: <FaBoxOpen /> },
      ]

    return (
        <>
            <CustomModel
                isOpen={isOpen}
                onOpen={onOpen}
                onOpenChange={onOpenChange}
            />

            <Navbar
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                isBordered
                maxWidth="full"
                height="5rem"
            >
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <Link to="/">
                            <img src={logo} alt="shreeji logo" width="200" />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent
                    className="hidden sm:flex gap-6"
                    justify="center"
                >
                    <Dropdown className="">
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                    endContent={<FaChevronDown />}
                                    radius="sm"
                                    variant="light"
                                >
                                    BOXES
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            aria-label=""
                            className=""
                            itemClasses={{
                                base: "gap-4",
                            }}
                        >
                       
                            {staticData.slice(0, 12).map((item,i) => {
                                console.log(i)
                                return (
                                    <DropdownItem key={item.id}>
                                        <Link
                                            to={`/category/${item.subCategory}`}
                                            className="flex gap-2 items-center"
                                        >
                                            {iconList[i].icons}
                                            {item.subCategory}
                                        </Link>
                                    </DropdownItem>
                                );
                            })}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className="">
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                    endContent={<FaChevronDown />}
                                    radius="sm"
                                    variant="light"
                                >
                                    BAGS
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            aria-label=""
                            className=""
                            itemClasses={{
                                base: "gap-4",
                            }}
                        >
                            {staticData.slice(12).map((item,i) => {
                                return (
                                    <DropdownItem key={item.id}>
                                        <Link
                                            to={`/category/${item.subCategory}`}
                                            className="flex gap-2 items-center"
                                        >
                                            {iconList[i]?.icons}
                                            {item.subCategory}
                                        </Link>
                                    </DropdownItem>
                                );
                            })}
                        </DropdownMenu>
                    </Dropdown>
                    <NavbarItem>
                        <Link
                            to={`/category/Food Packaging`}
                            aria-current="page"
                        >
                            FOOD PACKAGING
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link to={`/category/Rigid Boxes`} color="foreground">
                            RIGID BOXES
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link to={`/category/Custom Labels`} color="foreground" >
                            CUSTOM LABELS
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link to={`/aboutus`} color="foreground">
                            ABOUT
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="flex">
                        <Button
                            className="bg-[#FF6C22] text-[#fff]"
                            onClick={onOpen}
                        >
                            CONTACT
                        </Button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu className="space-y-2">
                    <NavbarItem>
                        <button className="button flex flex-col items-start gap-1" tabIndex="0">
                            <div className="flex justify-start gap-1 items-center">
                                BOXES
                                <p className="rotate-0">
                                    <FaChevronRight />
                                </p>
                            </div>
                            <div className="mapData gap-3 hidden pt-3">
                                {staticData.slice(0, 12).map((item,i) => {
                                    return (
                                        <p
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            navigate(`/category/${item.subCategory}`)
                                            setIsMenuOpen(false);
                                        }}
                                        key={item.id}
                                        className="flex gap-2 items-center"
                                    >
                                        {iconList[i].icons}
                                        {item.subCategory}
                                    </p>
                                    );
                                })}
                            </div>
                        </button>
                    </NavbarItem>
                    <NavbarItem>
                        <button className="button flex flex-col items-start gap-1" tabIndex="0">
                            <div className="flex justify-start gap-1 items-center">
                                BAGS
                                <p className="rotate-0">
                                    <FaChevronRight />
                                </p>
                            </div>
                            <div className="mapData gap-3 hidden pt-3">
                                {staticData.slice(12).map((item,i) => {
                                    return (
                                        <p
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            navigate(`/category/${item.subCategory}`)
                                            setIsMenuOpen(false);
                                        }}
                                        key={item.id}
                                        className="flex gap-2 items-center"
                                    >
                                        {iconList[i]?.icons}
                                        {item.subCategory}
                                    </p>
                                    );
                                })}
                            </div>
                        </button>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            to={`/category/Food Packaging`}
                            aria-current="page"
                            onClick={()=>setIsMenuOpen(false)}
                        >
                            FOOD PACKAGING
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" to={`/category/Rigid Boxes`} onClick={()=>setIsMenuOpen(false)}>
                            RIGID BOXES
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" to={`/category/Custom Labels`} onClick={()=>setIsMenuOpen(false)}>
                            CUSTOM LABELS
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link to="/aboutus" color="foreground" onClick={()=>setIsMenuOpen(false)}>
                            ABOUT
                        </Link>
                    </NavbarItem>
                </NavbarMenu>
            </Navbar>
        </>
    );
}
