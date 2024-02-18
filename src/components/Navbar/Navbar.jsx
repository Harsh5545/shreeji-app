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
import {Link} from "react-router-dom"
import logo from "../../assets/logo.png";
import { FaChevronDown } from "react-icons/fa";
import staticData from "../../../Data";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "BOXES",
    "BAGS",
    "FOOD PACKAGING",
    "RIGID BOXES",
    "CUSTOM LABELS",
    "ABOUT",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
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

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown className="">
          <NavbarItem >
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
          <Link color="foreground" href="#">
            BAGS
          </Link>
        </NavbarItem>
        <NavbarItem >
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
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Link href="#">CONTACT</Link>
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
  );
}
