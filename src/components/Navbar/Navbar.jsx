import React from "react";
import logo from "../../assets/logo.png";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
function Navbar() {
  const components = [
    {
      title: "Clothing & Apparels",
      href: "/docs/primitives/alert-dialog",
    },
    {
      title: "PERSONAL CARE & COSMETICS",
      href: "/docs/primitives/hover-card",
    },
    {
      title: "BEVERAGES",
      href: "/docs/primitives/progress",
    },
    {
      title: "FOOD & RESTAURANTS",
      href: "/docs/primitives/scroll-area",
    },
    {
      title: "COFFEE AND TEA",
      href: "/docs/primitives/tabs",
    },
    {
      title: "FESTIVE COLLECTION",
      href: "/docs/primitives/tooltip",
    },
    {
      title: "CONSUMER GOODS",
      href: "/docs/primitives/tooltip",
    },
    {
      title: "BAKERY AND COOKIES",
      href: "/docs/primitives/tooltip",
    },
    {
      title: "CHOCOLATES AND CONFECTIONERY",
      href: "/docs/primitives/tooltip",
    },
    {
      title: "ECOMMERCE",
      href: "/docs/primitives/tooltip",
    },
    {
      title: "GIFTING",
      href: "/docs/primitives/tooltip",
    },
    {
      title: "SAMPLE BOX SET",
      href: "/docs/primitives/tooltip",
    },
  ];
  return (
    <Card className="flex justify-center">
      <div className="flex justify-between items-center max-w-screen-xl w-full">
        <img src={logo} alt="" width="200" />
        <div className="flex items-center gap-8">
          <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Boxes</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div>BAGS</div>
          <div>FOOD PACKAGING</div>
          <div>RIGID BOXES</div>
          <div>CUSTOM LABELS</div>
          <div>ABOUT</div>
        </div>
        <div>CONTACT</div>
      </div>
    </Card>
  );
}

export default Navbar;

// ListItem.jsx

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
