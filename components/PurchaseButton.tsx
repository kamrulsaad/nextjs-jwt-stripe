"use client";

import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import axios from "axios";
import { useState } from "react";
import { toast } from "./ui/use-toast";

interface PurchaseProductProps {
  productId: string;
}

const PurchaseButton = ({ productId }: PurchaseProductProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const { quantity } = useAppSelector((state) => state.cart);

  const onClick = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(`/api/products/${productId}`, quantity);

      window.location.assign(response.data.url);
    } catch {
      toast({
        title: "Something went wrong",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button onClick={onClick} disabled={isLoading} className="w-full md:w-auto">
      Proceed to checkout
    </Button>
  );
};

export default PurchaseButton;
