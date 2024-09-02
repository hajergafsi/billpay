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
import { useAppSelector } from "@/redux/store";
import { EUserRoles } from "@/redux/types";
import { MenuIcon } from "lucide-react";

export const NavbarMobile = () => {
  const { userRole } = useAppSelector((state) => state.userRole);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="-mr-4">
            <MenuIcon />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col p-1">
            {userRole === EUserRoles.ADMIN && (
              <>
                <NavigationMenuLink
                  href="/dashboard/privacy-policy"
                  className={buttonVariants({ variant: "link" })}
                >
                  Privacy Policy
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/dashboard/locations"
                  className={buttonVariants({ variant: "link" })}
                >
                  Locations
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/dashboard/business"
                  className={buttonVariants({ variant: "link" })}
                >
                  Business
                </NavigationMenuLink>
              </>
            )}
            <div className="flex flex-col mb-0.5">
              <NavbarUserLinks />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
