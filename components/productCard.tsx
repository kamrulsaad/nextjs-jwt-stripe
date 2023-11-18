"use client";

import Image from "next/image";
import { formatPrice } from "@/lib/format";
import { Product } from "@prisma/client";
import PurchaseButton from "./PurchaseButton";

interface CourseCardProps {
  product: Product;
}

export const ProductCard = async ({ product }: CourseCardProps) => {
  const { id, price, imageUrl, name } = product;

  return (
    <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
      <div className="relative w-full aspect-video rounded-md overflow-hidden">
        <Image src={imageUrl} alt={name} fill className="object-cover" />
      </div>
      <div className="flex flex-col pt-2">
        <div className="text-lg md:text-base font-medium transition line-clamp-2">
          {name}
        </div>
        <div className="my-3 flex justify-between items-center gap-x-2 text-sm">
          <p className="font-medium">{formatPrice(price)}</p>
          <div className="flex items-center gap-x-1 ">
            <PurchaseButton  productId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};
