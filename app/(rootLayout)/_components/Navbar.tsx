import MobileSidebar from "./mobileSidebar";
import NavbarRoutes from "./navbarRoutes";

const Navbar = () => {
  return (
    <div className="p-4 max-w-7xl bg-background mx-auto h-full flex items-center ">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
