import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/themeToggle";
import Logout from "./logout";

const NavbarRoutes = () => {
  return (
    <div className="flex items-center max-w-7xl gap-x-2 ml-auto">
      <ModeToggle />
      <Logout />
    </div>
  );
};

export default NavbarRoutes;
