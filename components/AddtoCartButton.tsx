"use client";

import { Button } from "@/components/ui/button";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";

interface CartButtonProps {
  product: Product;
}

const AddToCart = ({ product }: CartButtonProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onClick = () => {
    dispatch(addToCart(product));
    router.push("/cart");
  };

  return (
    <Button onClick={onClick} className="w-full md:w-auto" size={"sm"}>
      Add to Cart
    </Button>
  );
};

export default AddToCart;
