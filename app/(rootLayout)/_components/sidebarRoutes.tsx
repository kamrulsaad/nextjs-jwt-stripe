import SideBarItem from "./sideBarItem";

const routes = [
  {
    label: "Dashboard",
    href: "/",
  },
  {
    label: "Browse",
    href: "/search",
  },
];

const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SideBarItem key={route.href} {...route} />
      ))}
    </div>
  );
};

export default SidebarRoutes;
