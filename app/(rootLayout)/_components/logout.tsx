"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import useLogOut from "@/hooks/useLogout";
import { useRouter } from "next/navigation";

const Logout = () => {
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
    <Button
      onClick={onClick}
      className="hidden md:flex"
      size={"lg"}
      variant={"destructive"}
    >
      Log Out
    </Button>
  );
};

export default Logout;
