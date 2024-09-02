"use client";

import { NavbarUserLinks } from "@/components/navbar/navbar-user-links";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MenuIcon } from "lucide-react";

export const NavbarHomeMobile = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="-mr-4">
            <MenuIcon />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col p-1">
            <NavigationMenuLink
              href="/about-us"
              className={buttonVariants({ variant: "link" })}
            >
              A propos
            </NavigationMenuLink>
            <NavigationMenuLink
              href="/business"
              className={buttonVariants({ variant: "link" })}
            >
              Business
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
