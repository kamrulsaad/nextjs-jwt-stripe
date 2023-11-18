"use client";

import Image from "next/image";
import { formatPrice } from "@/lib/format";
import { Product } from "@prisma/client";

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
        <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
          {name}
        </div>
        <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
          <div className="flex items-center gap-x-1 text-slate-500">
            <span>Chapters</span>
          </div>
        </div>
        <p className="font-medium">{formatPrice(price)}</p>
      </div>
    </div>
  );
};
