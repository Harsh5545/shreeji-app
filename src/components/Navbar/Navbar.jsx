import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaChevronDown } from "react-icons/fa";
import staticData from "../../../Data";
import { MdCall } from "react-icons/md";
import CustomModel from "../Modal/Model";
import { useDisclosure } from "@nextui-org/react";
export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const menuItems = [
    "BOXES",
    "BAGS",
    "FOOD PACKAGING",
    "RIGID BOXES",
    "CUSTOM LABELS",
    "ABOUT",
  ];

  return (
    <>
      <CustomModel
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />

      <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link to="/">
              <img src={logo} alt="shreeji logo" width="120" />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-6" justify="center">
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
              aria-label="ACME features"
              className=""
              itemClasses={{
                base: "gap-4",
              }}
            >
              {staticData.map((item) => {
                return (
                  <DropdownItem
                    key={item.id}
                    // startContent={icons.scale}    for icons
                  >
                    <Link to={`/category/${item.subCategory}`}>
                      {item.subCategory}
                    </Link>
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <Link to={`/category/bags`} color="foreground" >
              BAGS
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to={`/category/Food Packaging`} aria-current="page">
              FOOD PACKAGING
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to={`/category/Rigid Boxes`} color="foreground" >
              RIGID BOXES
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to={`/category/Custom Labels`} color="foreground" >
              CUSTOM LABELS
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" >
              ABOUT
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="flex">
            <Button onClick={onOpen}>CONTACT</Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          <Dropdown>
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
              aria-label="ACME features"
              className=""
              itemClasses={{
                base: "gap-4",
              }}
            >
              {staticData.map((item) => {
                return (
                  <DropdownItem
                    key={item.id}
                    // startContent={icons.scale}    for icons
                  >
                    {item.subCategory}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <Link color="foreground" href="#">
              BAGS
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              FOOD PACKAGING
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              RIGID BOXES
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              CUSTOM LABELS
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              ABOUT
            </Link>
          </NavbarItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
