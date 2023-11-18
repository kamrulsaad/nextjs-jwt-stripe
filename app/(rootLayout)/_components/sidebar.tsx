import SidebarRoutes from "./sidebarRoutes";

const Sidebar = () => {
  return (
    <div className="h-full border-t border-white rounded-t-lg flex flex-col overflow-y-auto  shadow-sm">
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
