import Image from "next/image";

async function getData(productId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/products/${productId}`
  );
  const json = await res.json();
  return json.data;
}

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage = async ({ params: { productId } }: ProductPageProps) => {
  const data = await getData(productId);

  return (
    <div className="flex flex-col items-center ">
      <p className="text-emerald-500 font-medium text-2xl mb-4">
        Congratulations
      </p>
      <div className="relative w-full max-w-lg aspect-video rounded-md overflow-hidden">
        <Image src={data.imageUrl} fill alt={data?.name} objectFit="cover" />
      </div>
      <small className="mt-2">
        You&lsquo;ve successfully purchased <strong>{data?.name}</strong> for{" "}
        <strong>{data?.price}</strong>
      </small>
    </div>
  );
};

export default ProductPage;
