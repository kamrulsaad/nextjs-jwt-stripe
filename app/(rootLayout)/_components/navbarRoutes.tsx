import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/themeToggle";

const NavbarRoutes = () => {
  return (
    <div className="flex items-center max-w-7xl gap-x-2 ml-auto">
      <ModeToggle />
      <Button size={"lg"} variant={"destructive"}>
        Log Out
      </Button>
    </div>
  );
};

export default NavbarRoutes;
