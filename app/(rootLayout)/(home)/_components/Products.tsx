"use client";

import { ProductCard } from "@/components/productCard";
import { Product } from "@prisma/client";

interface Products {
  data: Product[];
}

const Products = ({ data }: Products) => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {data.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
