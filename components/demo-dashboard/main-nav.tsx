import Link from "next/link";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { EUserRoles } from "@/redux/types";
import { useAppSelector } from "@/redux/store";

type MenuItem = {
  name: string;
  text: string;
  role: EUserRoles[];
};

type Props = {
  setActive: Dispatch<SetStateAction<string>>;
  currentSection: string;
  menus: MenuItem[]; // Add menus as a prop
};

const CustomLink = ({
  text,
  selected,
  code,
  changeMenu,
  role,
}: {
  text: string;
  selected: boolean;
  code: string;
  changeMenu: (menu: string) => void;
  role: EUserRoles[];
}) => {
  const { userRole } = useAppSelector((state) => state.userRole);
  console.log(userRole);

  return userRole && role.includes(userRole) ? (
    <Link
      onClick={() => changeMenu(code)}
      href="#"
      className={`${
        !selected && "text-muted-foreground"
      } text-sm font-medium transition-colors hover:text-primary`}
    >
      {text}
    </Link>
  ) : (
    <></>
  );
};

export function MainNav({ setActive, currentSection, menus }: Props) {
  const changeMenu = (menu: string) => {
    setActive(menu);
  };

  return (
    <nav
      className={cn(
        "flex md:items-center space-x-4 lg:space-x-6 space-y-2 md:space-y-0 flex-wrap"
      )}
    >
      {menus.map((x, i) => (
        <CustomLink
          key={i}
          text={x.text}
          selected={x.name === currentSection}
          code={x.name}
          changeMenu={changeMenu}
          role={x.role}
        />
      ))}
    </nav>
  );
}
