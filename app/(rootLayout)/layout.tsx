import Sidebar from "./_components/sidebar";
import Navbar from "./_components/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] fixed inset-y-0 border-b shadow-sm w-full z-50">
        <Navbar />
      </div>
      <main className="pt-[90px] max-w-7xl mx-auto px-4 h-full">
        {children}
      </main>
    </div>
  );
};

export default HomeLayout;
