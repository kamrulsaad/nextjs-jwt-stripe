"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";

interface PurchaseProductProps {
  productId: string;
}

const PurchaseButton = ({ productId }: PurchaseProductProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(`/api/products/${productId}`);

      window.location.assign(response.data.url);
    } catch {
      console.log("Something went wrong");
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
