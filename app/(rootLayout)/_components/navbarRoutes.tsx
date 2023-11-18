import { ModeToggle } from "@/components/ui/themeToggle";
import Logout from "./logout";
import { MobileIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const NavbarRoutes = () => {
  return (
    <div className="flex w-full items-center justify-between max-w-7xl gap-x-2 mx-auto">
      <Link href={"/"} className="text-2xl uppercase">
        <MobileIcon className="hidden md:inline-block w-6 h-6 mr-2" />
        Apple Store
      </Link>
      <div className="flex items-center max-w-7xl gap-x-2 ">
        <ModeToggle />
        <Logout />
      </div>
    </div>
  );
};

export default NavbarRoutes;
