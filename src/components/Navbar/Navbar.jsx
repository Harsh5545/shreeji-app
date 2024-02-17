import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
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
          <img src={logo} alt="shreeji logo" width="120" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
            className="w-[1000px]"
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
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Link href="#">CONTACT</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {/* {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))} */}
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
            className="w-full"
            itemClasses={{
              base: "gap-4 grid grid-cols-2",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              // startContent={icons.scale}
            >
              Autoscaling
            </DropdownItem>
            {/* <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              // startContent={icons.activity}
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              // startContent={icons.flash}
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              // startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              // startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>  */}
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
