"use client";

import { toast } from "@/components/ui/use-toast";
import useLogOut from "@/hooks/useLogout";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const SideBarItem = () => {
  const logout = useLogOut();
  const router = useRouter();

  const onClick = async () => {
    const result = await logout();
    if (result.status) {
      toast({
        title: "Logged out successfully",
      });
      router.push("/login");
    }
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-sm font-[500] pl-6 transition-all "
      )}
    >
      <div className="py-4">Log Out</div>
    </button>
  );
};

export default SideBarItem;
