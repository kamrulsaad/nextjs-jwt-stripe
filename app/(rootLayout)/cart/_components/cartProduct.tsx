"use client";

import PurchaseButton from "@/components/PurchaseButton";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { formatPrice } from "@/lib/format";
import { decrement, increment } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CartProduct = () => {
  const { product, quantity } = useAppSelector((state) => state.cart);
  const { id, price, imageUrl, name } = product;

  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!product.id) {
      toast({
        title: "Please add a product to your cart",
      });
      router.push("/");
    }
  }, [product.id, router]);

  return (
    <div className="group sm:flex flex-row-reverse justify-between items-stretch gap-4 hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
      <div className="relative sm:w-1/4 aspect-video rounded-md overflow-hidden">
        <Image src={imageUrl} alt={name} fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-between pt-2">
        <div className="text-lg md:text-base font-medium transition line-clamp-2">
          {name}
        </div>
        <div className="my-3">
          <p>Quantity:</p>
          <div className="flex my-2 items-center">
            <Button
              onClick={() => dispatch(decrement())}
              variant={"outline"}
              size={"sm"}
            >
              -
            </Button>
            <p className="mx-2">{quantity}</p>
            <Button
              onClick={() => dispatch(increment())}
              variant={"outline"}
              size={"sm"}
            >
              +
            </Button>
          </div>
          <p className="font-medium mb-2">
            Total: {formatPrice(price * quantity) || 0}
          </p>
          <PurchaseButton productId={id} />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
